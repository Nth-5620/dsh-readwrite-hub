/**
 * dsh-readwrite-hub — host half.
 *
 * VS Code-style workspace file explorer for the DeepSeek Harness Web GUI.
 * Registers a self-contained JSON API under `/readwrite-hub-api` so the
 * client half never depends on the directory-picker seam composition (which
 * may serve the `native` backend and expose no browse primitives).
 *
 * The GUI binds to loopback by default (`dsh web`), so this API is only
 * reachable from the operator's own browser. All paths must be fully
 * qualified; listings are capped at 1000 rows, reads at 256 KiB (8 MiB hard
 * cap), writes at 8 MiB.
 */

import { cp, mkdir, open, opendir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";
import { homedir } from "node:os";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { installSettingsSection, settingsNamespace } from "@deepseek-ai/dsh-settings";
import z from "@deepseek-ai/schemastery";

const name = "readwrite-hub";
const inject = ["webServer"];

const MAX_ENTRIES = 1000;
const DEFAULT_READ_BYTES = 256 * 1024;
const MAX_READ_BYTES = 8 * 1024 * 1024;
const MAX_WRITE_BYTES = 8 * 1024 * 1024;
const MAX_BODY_BYTES = 64 * 1024;

/** Business failure with a stable wire code. */
class ExplorerError extends Error {
	constructor(code, message) {
		super(message);
		this.code = code;
		this.name = "ExplorerError";
	}
}

const errorText = (error) => error instanceof Error ? error.message : String(error);

const execFileAsync = promisify(execFile);

/** Fully qualified absolute path (drive-qualified on Windows, POSIX-absolute elsewhere). */
function fullyQualified(path) {
	if (typeof path !== "string" || path === "") return false;
	if (!isAbsolute(path)) return false;
	if (process.platform === "win32" && !/^[A-Za-z]:[\\/]/.test(path) && !/^[\\/]{2}[^\\/]+[\\/]+[^\\/]+/.test(path)) return false;
	return true;
}

/** Single path segment, not blank, not `.`/`..`, no separators. */
function validSegment(name) {
	return typeof name === "string" && name.trim() !== "" && name !== "." && name !== ".." && !/[/\\]/.test(name);
}

function requireQualified(path) {
	if (!fullyQualified(path)) throw new ExplorerError("path-invalid", `"${path}" is not a fully qualified path`);
	return resolve(path);
}

function requireSegment(name) {
	if (!validSegment(name)) throw new ExplorerError("name-invalid", `"${name}" is not a single path segment`);
	return name.trim();
}

/** Ancestor chain from the filesystem root to `target` inclusive. */
function ancestryCrumbs(target) {
	const crumbs = [];
	let current = target;
	for (;;) {
		const parent = dirname(current);
		crumbs.unshift({
			name: parent === current ? current : basename(current),
			path: current,
			hidden: false
		});
		if (parent === current) return crumbs;
		current = parent;
	}
}

/** One listing level: directories always, files/symlink-files when `includeFiles`. */
async function listDirectory(path, includeFiles) {
	const home = homedir();
	const target = requireQualified(path ?? home);
	const entries = [];
	let truncated = false;
	let directory;
	try {
		directory = await opendir(target);
	} catch (error) {
		throw new ExplorerError("directory-unreadable", `cannot list ${target}: ${errorText(error)}`);
	}
	try {
		for (;;) {
			const dirent = await directory.read();
			if (dirent === null) break;
			if (entries.length >= MAX_ENTRIES) {
				truncated = true;
				break;
			}
			const full = join(target, dirent.name);
			const hidden = dirent.name.startsWith(".");
			if (dirent.isDirectory()) {
				entries.push({ name: dirent.name, path: full, hidden, isDirectory: true });
				continue;
			}
			if (dirent.isSymbolicLink()) {
				let kind = null;
				try {
					const info = await stat(full);
					kind = info.isDirectory() ? "dir" : info.isFile() ? "file" : null;
				} catch {
					kind = null;
				}
				if (kind === "dir") entries.push({ name: dirent.name, path: full, hidden, isDirectory: true });
				else if (kind === "file" && includeFiles) {
					try {
						const info = await stat(full);
						entries.push({ name: dirent.name, path: full, hidden, isDirectory: false, size: info.size });
					} catch {
						entries.push({ name: dirent.name, path: full, hidden, isDirectory: false });
					}
				}
				continue;
			}
			if (includeFiles) {
				try {
					const info = await stat(full);
					entries.push({ name: dirent.name, path: full, hidden, isDirectory: false, size: info.size });
				} catch {
					entries.push({ name: dirent.name, path: full, hidden, isDirectory: false });
				}
			}
		}
	} finally {
		await directory.close().catch(() => {});
	}
	entries.sort((left, right) => left.name.localeCompare(right.name));
	return { path: target, home, crumbs: ancestryCrumbs(target), entries, truncated };
}

/**
 * Decode a byte buffer to text with best-effort encoding detection.
 * - Explicit BOMs win: UTF-8 BOM, UTF-16 LE/BE BOM.
 * - Otherwise try strict UTF-8; if it fails, fall back to GBK/GB18030
 *   (common for Chinese TXT novels) — matching what Notepad does.
 * iconv-lite is resolved from the dsh dependency tree (no bundled copy here).
 * Returns { text, encoding }.
 */
let iconv = null;
let iconvRequire = null;
async function decodeText(buffer) {
	const head = buffer.subarray(0, 3);
	if (buffer.length >= 3 && head[0] === 0xef && head[1] === 0xbb && head[2] === 0xbf) {
		return { text: buffer.subarray(3).toString("utf8"), encoding: "utf-8" };
	}
	if (buffer.length >= 2 && buffer[0] === 0xff && buffer[1] === 0xfe) {
		return { text: buffer.subarray(2).toString("utf16le"), encoding: "utf-16le" };
	}
	if (buffer.length >= 2 && buffer[0] === 0xfe && buffer[1] === 0xff) {
		return { text: buffer.subarray(2).toString("utf16be").split("").reverse().join(""), encoding: "utf-16be" };
	}
	// Strict UTF-8 check: TextDecoder throws on invalid sequences.
	try {
		new TextDecoder("utf-8", { fatal: true }).decode(buffer);
		return { text: buffer.toString("utf8"), encoding: "utf-8" };
	} catch {
		// ESM: lazily create a require bound to this module's location so
		// iconv-lite (resolved from the dsh dependency tree) can be loaded.
		if (iconv === null) {
			try {
				if (iconvRequire === null) {
					const { createRequire } = await import("node:module");
					iconvRequire = createRequire(import.meta.url);
				}
				iconv = iconvRequire("iconv-lite");
			} catch {
				iconv = null;
			}
		}
		if (iconv !== null) {
			for (const enc of ["gb18030", "gbk", "big5"]) {
				try {
					return { text: iconv.decode(buffer, enc), encoding: enc };
				} catch { /* try next */ }
			}
		}
		return { text: buffer.toString("utf8"), encoding: "utf-8" };
	}
}

/** Head text of a text file for preview/edit, capped at `maxBytes`. */
async function readFileHead(path, maxBytesOption) {
	const target = requireQualified(path);
	const maxBytes = typeof maxBytesOption === "number" && Number.isFinite(maxBytesOption) && maxBytesOption > 0
		? Math.min(Math.floor(maxBytesOption), MAX_READ_BYTES)
		: DEFAULT_READ_BYTES;
	let handle;
	try {
		const info = await stat(target);
		if (!info.isFile()) throw new ExplorerError("file-unreadable", `${target} is not a regular file`);
		handle = await open(target, "r");
		const buffer = Buffer.alloc(Math.min(info.size, maxBytes) + 1);
		const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
		const truncated = info.size > maxBytes || bytesRead > maxBytes;
		const payload = buffer.subarray(0, Math.min(bytesRead, maxBytes));
		const { text, encoding } = await decodeText(payload);
		return {
			path: target,
			size: info.size,
			truncated,
			text,
			encoding
		};
	} catch (error) {
		if (error instanceof ExplorerError) throw error;
		throw new ExplorerError("file-unreadable", `cannot read ${target}: ${errorText(error)}`);
	} finally {
		if (handle !== void 0) await handle.close().catch(() => {});
	}
}

/** Overwrite one text file with the edited content (UTF-8, 8 MiB cap). */
async function writeText(path, text) {
	const target = requireQualified(path);
	if (typeof text !== "string") throw new ExplorerError("payload-invalid", "write requires a text payload");
	const buffer = Buffer.from(text, "utf8");
	if (buffer.length > MAX_WRITE_BYTES) throw new ExplorerError("file-too-large", `content exceeds the ${MAX_WRITE_BYTES} byte cap`);
	try {
		await writeFile(target, buffer);
	} catch (error) {
		throw new ExplorerError("file-write-failed", `cannot write ${target}: ${errorText(error)}`);
	}
	return { path: target, size: buffer.length };
}

/** Rename one entry inside its directory (full name, extension included). */
async function renameEntry(path, name) {
	const target = requireQualified(path);
	const segment = requireSegment(name);
	const destination = join(dirname(target), segment);
	try {
		await rename(target, destination);
	} catch (error) {
		throw new ExplorerError("rename-failed", `cannot rename ${target}: ${errorText(error)}`);
	}
	return { path: destination, name: segment };
}

/** Create one child directory. */
async function mkdirAt(path, name) {
	const parent = requireQualified(path);
	const segment = requireSegment(name);
	const target = join(parent, segment);
	try {
		await mkdir(target);
	} catch (error) {
		if (typeof error === "object" && error !== null && error.code === "EEXIST") throw new ExplorerError("directory-exists", `${target} already exists`);
		throw new ExplorerError("directory-create-failed", `cannot create ${target}: ${errorText(error)}`);
	}
	return target;
}

/** Create one empty file (exclusive create). */
async function createFileAt(path, name) {
	const parent = requireQualified(path);
	const segment = requireSegment(name);
	const target = join(parent, segment);
	let handle;
	try {
		handle = await open(target, "wx");
	} catch (error) {
		if (typeof error === "object" && error !== null && error.code === "EEXIST") throw new ExplorerError("file-exists", `${target} already exists`);
		throw new ExplorerError("file-create-failed", `cannot create ${target}: ${errorText(error)}`);
	} finally {
		if (handle !== void 0) await handle.close().catch(() => {});
	}
	return target;
}

/** Delete one entry (file or directory, recursive). */
async function deleteEntry(path) {
	const target = requireQualified(path);
	try {
		await rm(target, { recursive: true, force: false });
	} catch (error) {
		throw new ExplorerError("delete-failed", `cannot delete ${target}: ${errorText(error)}`);
	}
	return { path: target };
}

/** Copy one entry (file or directory, recursive) to an explicit destination. */
async function copyEntry(src, dest) {
	const source = requireQualified(src);
	const destination = requireQualified(dest);
	if (source === destination) throw new ExplorerError("copy-invalid", "source and destination are the same");
	try {
		await cp(source, destination, { recursive: true, force: false, errorOnExist: true });
	} catch (error) {
		if (typeof error === "object" && error !== null && error.code === "ERR_FS_CP_EEXIST") throw new ExplorerError("target-exists", `${destination} already exists`);
		throw new ExplorerError("copy-failed", `cannot copy ${source}: ${errorText(error)}`);
	}
	return { path: destination };
}

/** Move one or more entries into a destination directory (same filesystem rename). */
async function moveEntries(paths, destDir) {
	if (!Array.isArray(paths) || paths.length === 0) throw new ExplorerError("move-invalid", "move requires a non-empty paths array");
	const destinationDir = requireQualified(destDir);
	const results = [];
	for (const raw of paths) {
		const source = requireQualified(raw);
		if (source === destinationDir) throw new ExplorerError("move-invalid", "cannot move an entry into itself");
		const target = join(destinationDir, basename(source));
		if (target === source) continue;
		try {
			await rename(source, target);
		} catch (error) {
			if (typeof error === "object" && error !== null && error.code === "EEXIST") throw new ExplorerError("target-exists", `${target} already exists`);
			throw new ExplorerError("move-failed", `cannot move ${source}: ${errorText(error)}`);
		}
		results.push({ from: source, to: target });
	}
	return { moved: results };
}

/** Open a path in the Windows File Explorer (WSL guest: translate to the
* \\wsl.localhost UNC form via wslpath and launch through cmd start so the
* explorer process never holds the Node child alive). Directories open
* in place; files open with their parent folder with the file selected. */
async function revealInExplorer(path) {
	const target = requireQualified(path);
	let winPath;
	try {
		const { stdout } = await execFileAsync("wslpath", ["-w", target]);
		winPath = stdout.trim();
	} catch (error) {
		throw new ExplorerError("reveal-failed", `cannot convert ${target}: ${errorText(error)}`);
	}
	if (winPath === "") throw new ExplorerError("reveal-failed", `cannot resolve a Windows path for ${target}`);
	let isDirectory = false;
	try {
		isDirectory = (await stat(target)).isDirectory();
	} catch { /* missing target: still reveal its parent via the path form */ }
	// explorer.exe opens UNC paths directly and forwards the request to the
	// already-running Explorer instance, exiting with a nonzero code even on
	// success — so spawn detached and never treat its exit status as failure.
	const targetArg = isDirectory ? winPath : `/select,"${winPath}"`;
	const child = spawn("explorer.exe", [targetArg], { detached: true, stdio: "ignore" });
	child.unref();
	return { opened: true, path: target, windowsPath: winPath };
}

function json(res, status, value) {
	const body = JSON.stringify(value);
	res.writeHead(status, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store",
		"content-length": Buffer.byteLength(body)
	});
	res.end(body);
}

async function readBody(req) {
	const chunks = [];
	let size = 0;
	for await (const chunk of req) {
		size += chunk.length;
		if (size > MAX_BODY_BYTES) throw new ExplorerError("payload-too-large", "request body exceeds 64 KiB");
		chunks.push(chunk);
	}
	return Buffer.concat(chunks).toString("utf8");
}

// ---- reading state store -------------------------------------------
// Persists per-file reading progress and bookmarks as one JSON document in
// $HOME/.dsh/readwrite-hub/state.json. Writes are atomic (temp file + rename)
// and there is no cache, so the file is the single source of truth.
const STATE_DIR = join(homedir(), ".dsh", "readwrite-hub");
const STATE_FILE = join(STATE_DIR, "state.json");

async function readStateDoc() {
	try {
		const raw = await readFile(STATE_FILE, "utf8");
		const doc = JSON.parse(raw);
		if (typeof doc === "object" && doc !== null && typeof doc.files === "object" && doc.files !== null) return doc;
		return { files: {} };
	} catch (error) {
		if (typeof error === "object" && error !== null && (error.code === "ENOENT" || error instanceof SyntaxError)) return { files: {} };
		throw new ExplorerError("state-read-failed", `cannot read state: ${errorText(error)}`);
	}
}

async function writeStateDoc(doc) {
	try {
		await mkdir(STATE_DIR, { recursive: true });
		const tmp = `${STATE_FILE}.${process.pid}.tmp`;
		await writeFile(tmp, JSON.stringify(doc), "utf8");
		await rename(tmp, STATE_FILE);
	} catch (error) {
		throw new ExplorerError("state-write-failed", `cannot write state: ${errorText(error)}`);
	}
}

async function getFileState(path) {
	const target = requireQualified(path);
	const doc = await readStateDoc();
	return doc.files[target] ?? { progress: null, bookmarks: [] };
}

async function setFileState(path, progress, bookmarks) {
	const target = requireQualified(path);
	const doc = await readStateDoc();
	const existing = doc.files[target] ?? { progress: null, bookmarks: [] };
	const next = {
		progress: progress !== void 0 && progress !== null ? progress : existing.progress,
		bookmarks: Array.isArray(bookmarks) ? bookmarks : existing.bookmarks
	};
	doc.files[target] = next;
	await writeStateDoc(doc);
	return next;
}

/** The plugin's API route handler (registered under the `/readwrite-hub-api` prefix). */
async function handle(req, res) {
	const url = new URL(req.url ?? "/", "http://x");
	const pathname = url.pathname;
	try {
		if (req.method === "GET" && pathname === "/readwrite-hub-api/list") {
			return json(res, 200, await listDirectory(url.searchParams.get("path"), url.searchParams.get("includeFiles") === "1"));
		}
		if (req.method === "GET" && pathname === "/readwrite-hub-api/read") {
			const maxBytes = Number(url.searchParams.get("maxBytes"));
			return json(res, 200, await readFileHead(url.searchParams.get("path"), Number.isFinite(maxBytes) && maxBytes > 0 ? maxBytes : void 0));
		}
		if (req.method === "POST" && pathname.startsWith("/readwrite-hub-api/")) {
			const payload = JSON.parse(await readBody(req));
			if (pathname.endsWith("/write")) return json(res, 200, await writeText(payload.path, payload.text));
			if (pathname.endsWith("/rename")) return json(res, 200, await renameEntry(payload.path, payload.name));
			if (pathname.endsWith("/mkdir")) return json(res, 200, { path: await mkdirAt(payload.path, payload.name) });
			if (pathname.endsWith("/newfile")) return json(res, 200, { path: await createFileAt(payload.path, payload.name) });
			if (pathname.endsWith("/delete")) return json(res, 200, await deleteEntry(payload.path));
			if (pathname.endsWith("/copy")) return json(res, 200, await copyEntry(payload.src, payload.dest));
			if (pathname.endsWith("/move")) return json(res, 200, await moveEntries(payload.paths, payload.destDir));
			if (pathname.endsWith("/reveal")) return json(res, 200, await revealInExplorer(payload.path));
			if (pathname.endsWith("/state")) return json(res, 200, await setFileState(payload.path, payload.progress, payload.bookmarks));
		}
		if (req.method === "GET" && pathname === "/readwrite-hub-api/state") {
			return json(res, 200, await getFileState(url.searchParams.get("path")));
		}
		json(res, 404, { code: "not-found", message: "unknown explorer endpoint" });
	} catch (error) {
		if (error instanceof SyntaxError) return json(res, 400, { code: "bad-json", message: errorText(error) });
		if (error instanceof ExplorerError) return json(res, 400, { code: error.code, message: error.message });
		json(res, 500, { code: "internal", message: errorText(error) });
	}
}

/**
 * Durable user-settings namespace for this plugin (rc.8 settings surface).
 * The browser half renders a card under `settings.plugin.item` keyed by this
 * namespace; the Host half registers the schema below.
 */
const RWH_SETTINGS_NS = settingsNamespace("readwrite-hub");

/** Composition defaults; the settings layer may override any field. */
const DEFAULT_RWH_SETTINGS = {
	writing: {
		fontFamily: "serif",
		fontSize: 16,
		lineSpacing: 1.8,
		background: "default",
		autoSave: true,
		autoSaveDelayMs: 3000
	},
	tree: {
		showHidden: false
	}
};

const WritingSettings = z.object({
	fontFamily: z.string(),
	fontSize: z.number().step(1).min(12).max(28),
	lineSpacing: z.number().step(0.1).min(1.2).max(2.6),
	background: z.string(),
	autoSave: z.boolean(),
	autoSaveDelayMs: z.number().step(100).min(500).max(15000)
});
const TreeSettings = z.object({
	showHidden: z.boolean()
});
const RWH_SettingsSchema = z.object({
	writing: WritingSettings,
	tree: TreeSettings
});

/** Current resolved settings; kept in sync by installSettingsSection. */
let currentSettings = DEFAULT_RWH_SETTINGS;

async function apply(ctx) {
	ctx.effect(() => installSettingsSection(ctx, RWH_SETTINGS_NS, RWH_SettingsSchema, DEFAULT_RWH_SETTINGS, {
		setSource: (source) => {
			currentSettings = source();
		},
		onChange: () => { /* runtime reads currentSettings lazily */ }
	}), "readwrite-hub: settings section");
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/readwrite-hub-api",
		handler: handle
	}), "readwrite-hub: api routes");
}

export { apply, inject, name };
export { RWH_SETTINGS_NS, currentSettings };
