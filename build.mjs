/**
 * dsh-readwrite-hub build: this package ships lib/ as the runtime bundle
 * (no compile step). `npm run build` only runs the syntax gate over the two
 * shipped artifacts, mirroring the CI check.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

let failed = false;
for (const file of ["lib/index.js", "lib/client.js"]) {
	const source = join(root, file);
	const check = spawnSync(process.execPath, ["--check", source], { stdio: "inherit" });
	if (check.status !== 0) {
		failed = true;
		console.error(`syntax check failed: ${source}`);
	}
}
if (failed) process.exit(1);
console.log("dsh-readwrite-hub build OK");
