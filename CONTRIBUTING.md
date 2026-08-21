# dsh-readwrite-hub 更新维护规范

> 本文件面向以后要**更新 / 维护**本插件的人（主要是作者本人）。
> 它记录从改代码 → 验证 → 提交 → 发布上线的完整流程与约定。
> 安装 / 使用 / 安全说明请看 [README.md](./README.md)。

---

## 1. 仓库定位

- **性质**: 基于上游 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)（MIT）
  的二次开发分支，新增「**小说阅读模式**」，保留全部文件管理 + 码字能力。
- **公开仓库**: `github.com/Nth-5620/dsh-readwrite-hub`（public）
- **运行时代码**: `lib/`（即运行版，**无需构建**，改完即可被 dsh 按需下发）
- **`src/`**: 上游原版快照，**不要改**。本仓库没有 `src/`（见 CHANGELOG），`lib/` 直接是源码。

---

## 2. 目录结构（哪些能改、哪些别动）

| 路径 | 说明 | 能否改 |
|------|------|--------|
| `lib/client.js` | 客户端 bundle（侧边栏、文件树、编辑器、码字/阅读模式） | ✅ 主要改动点 |
| `lib/index.js` | 宿主端 cordis 插件（注册 `/readwrite-hub-api/*`、设置槽） | ✅ 次要改动点 |
| `CHANGELOG.md` | 版本变更记录，**每次功能/修复/兼容性变化都要记** | ✅ 必须更新 |
| `README.md` | 功能、安装、安全、架构说明 | ⚠️ 仅在功能大改时同步 |
| `package.json` | 包定义（name/version/exports/dsh.inject/bundle） | ⚠️ 谨慎 |
| `cordis.patch.yml` | 插件挂载 patch | ⚠️ 谨慎 |
| `.github/workflows/ci.yml` | CI（只做 `lib/` 语法校验，**绝不跑 build**——它是魔改分支） | ⚠️ 谨慎 |
| `build.mjs` | 防呆保护：检测到 `lib/` 是魔改版时会拒绝运行，防用 `src/` 覆盖 | ❌ 一般不改 |

> ⚠️ **绝对不要**直接运行 `node build.mjs`（未设 `FORCE_BUILD=1`）：它会把魔改版 `lib/`
> 覆盖回上游原版。本仓库以 `lib/` 为准，无需构建。

---

## 3. 更新流程（每次改动都走这套）

### 3.1 改代码
- 主体在 `lib/client.js`（前端交互）或 `lib/index.js`（宿主 API）。
- 遵循周围代码风格：React hooks、`__ModuleLoader__` 单文件 bundle、CSS 类一律 `rh_` 前缀。

### 3.2 校验语法
```bash
node --check lib/client.js && node --check lib/index.js
```
退出码 0 才算通过。

### 3.3 浏览器实测（必须有）
插件是 dsh 的前端 bundle，光看语法不够，要在真实浏览器里验证：
1. 确认 dsh web 在跑：`wsl -d Debian` 后 `ss -tlnp | grep 3080`。
2. 浏览器打开 `http://127.0.0.1:3080`，**硬刷新 `Ctrl+Shift+R`**（dsh 按 `?rev=` 缓存下发新 bundle）。
3. 进侧边栏「工作区文件」，打开一本书，验证涉及的功能（阅读/码字/书签/目录/进度等）。
4. 改动的功能要**双向**验证（例如翻页方式来回切、跨文件、重启后进度恢复）。

### 3.4 更新 CHANGELOG
在 `CHANGELOG.md` 对应的小节（`### 修复` / `### 新增` / `### 适配验证`）加一条，说明改了什么、为什么。

### 3.5 提交（git）
- 身份必须是 `Nth-5620 <nth-5620@users.noreply.github.com>`（仓库级已配好，提交前可确认）：
  ```bash
  git config user.name Nth-5620
  git config user.email nth-5620@users.noreply.github.com
  ```
- 只提交**有关源码/文档**，不要提交 `lib/*.bak*` 工作备份（`.gitignore` 已排除，但如果 `git status` 出现未跟踪的 `.bak` 别 `git add -A`）。
- 规范提交信息：
  - 修复：`fix: <简述>`
  - 功能：`feat: <简述>`
  - 文档：`docs: <简述>`
  - 示例：`fix: 左右翻页与滚动翻页共享进度书签，切换翻页方式后自动重定位`

### 3.6 推送（Windows 中转）
WSL 内 `github.com` DNS 不通（解析为 127.0.0.1），**必须经 Windows 中转**（`D:\Git\cmd\git.exe`）：
```bash
# ① WSL 内打包
cd ~/.dsh/profiles/web/node_modules/dsh-readwrite-hub
git bundle create /home/zzwc/rwh.bundle main
cp /home/zzwc/rwh.bundle "/mnt/c/Users/23696/Desktop/Source_Material/WSL/rwh.bundle"

# ② Windows 批处理（一次跑完 clone + push）
# 读 token（不写入 git 配置）、clone bundle、设 remote、push 到 origin main
# token 来源见「配置记录 / README.md」的【GitHub 私有仓库推送】节
```
> **token 安全**：PAT 只能作为**一次性 URL 认证**（`https://x-access-token:<TOKEN>@github.com/...`），
> **绝不写入 git config / 仓库任何文件**；用完即删，别留在 Desktop。token 失效后不会自动销毁，
> 若泄密需去 GitHub Settings → Developer settings → PATs 吊销。

---

## 4. 发布 / 打标签（CI 自动发布 npm）

`.github/workflows/ci.yml` 监听 `v*` 标签自动 `npm publish`：
- 推标签前确认 `package.json` 的 `version` 已 bump。
- 只推送需要发布的版本标签：`git tag vX.Y.Z && ... push --tags`
- CI `build` job 只做 `node --check lib/`，**绝不执行 build.mjs**（魔改分支保护）。

---

## 5. 身份与署名

- 所有 commit 的 author/committer 都应该是 `Nth-5620 <nth-5620@users.noreply.github.com>`，
  这样 GitHub 会正确归属到 `Nth-5620` 账号，contribution graph 能看到。
- 之前出现过用 `zzwc` 身份提交的情况（WSL 用户名同名的一个 2017 年旧号），
  已通过 `git filter-branch` + force-push 纠正为 `Nth-5620`。**新提交务必先确认 `git config user.email`**。

---

## 6. 测试注意（避免污染用户数据）

`readwrite-hub` 会把进度写在 `~/.dsh/readwrite-hub/state.json`：
- 实测时点「添加书签」、切翻页模式、跳页都会写盘，**可能污染真实阅读进度**。
- 改完测试后，若不需要这些临时改动，手动恢复 `state.json`（或删除测试产生的书签），
  别把测试产物当成真实进度提交/保留。

---

## 7. 兼容性验证

- 每次 dsh 大版本升级（如 `0.1.0-rc.x` → `0.1.1-rc.x`）都要实测插件，并在
  `CHANGELOG.md` 的「适配验证」小节记录：dsh 版本、插件注入点是否仍解析、
  `dsh-client-ui-primitives` 等虚拟模块是否变化、web UI / 文件树 / 码字 / 阅读是否正常。
- 参考既往记录：rc.8 → rc.1（`dsh-client-ui-primitives` 从独立 npm 包改为前端内置虚拟模块，
  但插件 `require("@deepseek-ai/dsh-client-ui-primitives")` 仍能解析，已实测通过）。
