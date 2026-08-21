# dsh-readwrite-hub（读写字间）

> ⚠️ **本仓库是基于上游开源插件的二次开发分支**：在 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)（MIT License）
> 基础上，把「文件管理 + 码字」扩展为「**文件管理 + 码字 + 小说阅读**」一体插件。
> 上游作者不参与本分支维护，本分支的问题请在本仓库 Issues 反馈。
> 我们在此**明确承认并致谢上游项目**（详见「致谢与许可」）。

[English](#english)

---

# 〇、与上游 dsh-workspace-explorer 的差异（魔改清单）

本分支继承上游 0.1.0 原版的全部文件管理能力，并做了以下修改与增强（`lib/` 为运行版，无需构建）：

## 0.1 最大差异：新增小说阅读模式（上游没有）

这是本插件与上游最核心的区别。在编辑器工具栏点「阅读」，同一个文件立刻变成书籍排版：

- **按字分页**：CJK 字宽校准 + 字符切片，段落可跨页、页面始终填满（实测每页底部仅留一行安全余量），
  不再像上游那样整段换页留下大片空白；**只有新章节另起一页**。
- **进度自动记忆**：翻页即写盘（`~/.dsh/readwrite-hub/state.json`），关闭应用 / 切换文件 / 重开 Harness
  都不丢进度；重新打开自动续读到上次位置。
- **进度书签置顶**：书签面板里进度书签永远排在最前，显示记录时间（如 `2026-08-21 15:33`）。
- **「返回原进度」胶囊**：跳页 / 点进度条 / 搜索后出现，一键回到原位置；连续 3 次自然翻页后自动确认新位置。
- **章节目录**：自动解析「第一章」「序章」「番外」「Chapter N」「纯数字行」「## 标题」等十余种章节格式，点击直达。
- **书签系统**：一键添加 / 删除当前页书签，点击跳转。
- **跳页输入框**：底部输入页码回车直达；底部进度条点击任意位置跳转。
- **键盘翻页**：PageUp / PageDown / ↑ / ↓ / Home / End / 空格。

## 0.2 界面形态：固定右侧侧边栏（替代弹窗面板）

上游是"点击按钮弹出双栏面板"，本分支改为**固定右侧侧边栏**：侧边栏底部「工作区文件」按钮打开可拖宽度的常驻侧栏，
左侧文件树 + 右侧编辑器，拉出 / 收回带平滑动画（0.2s `var(--ds-ease-in-out)`，与 harness 左侧面板一致）。

## 0.3 单工作区文件树

上游列出所有已注册工作区（历史工作区越积越多）；本分支改为**只显示当前会话所属工作区**，
切换会话时文件树自动跟随。

## 0.4 「添加到对话」→ 输入框内胶囊

右键文件 / 文件夹 →「添加到对话」：通过 DSH 框架原生 `slash/input-insert-reference` 机制，
在输入框内渲染只显示**文件名**的胶囊，发送时自动还原为**完整绝对路径**。

## 0.5 对话内文件链接 → 插件内打开

AI 消息中的产物文件 / 文件提及 / 工具调用行参数（read、edit 等）点击后不再调起系统应用（Windows 记事本），
改为在插件编辑器内直接打开；相对路径按工作区根解析。

## 0.6 码字模式（写作模式）

- 字体：衬线（宋体）/ 楷体 / 无衬线（黑体）/ 等宽，字号 A- / A+
- 行距、左右边距可调；背景：默认 / 米色 / 浅绿 / 蓝色（深浅色主题各有适配）
- **自动软换行**：超宽长行自动换行（含无空格长串 `overflow-wrap: anywhere`），横向无滚动条
- **自动保存**：停止输入 3 秒自动落盘
- **横线格**：单层 CSS 渐变绘制（`repeating-linear-gradient` + `background-attachment: local`），
  线条随文字原生滚动、零卡顿、不丢线，对比度弱于文字（比上游的逐 div 方案性能更好、长文本更流畅）
- 「格式化段落」：一键去除行首缩进、段落间自动空行

## 0.7 右键菜单增强

「在资源管理器中打开」（Windows + WSL）、复制完整 / 相对路径、复制 / 粘贴条目、删除（带确认）、添加到对话。

## 0.8 源码与构建

- `lib/` 为**运行版**（插件实际加载的代码），`build.mjs` 仅做语法校验，**不会**用上游源码覆盖运行版。
- 全量重命名 CSS 类 / API 前缀 / 模块 id（`we_`→`rh_`、`/workspace-files-api`→`/readwrite-hub-api`），
  与上游插件**可共存加载互不干扰**。

---

# 一、亮点

- **写作与阅读一体**：同一个文件，点「码字」进稿纸模式，点「阅读」进书籍模式，排版偏好完全共享。
- **符合网络小说阅读习惯**：按字分页不留白、进度自动记忆、进度书签置顶、返回原进度胶囊、百万字 TXT 流畅翻页。
- **可编辑的排版偏好**：字体 / 字号 / 行距 / 边距 / 纸张背景，码字阅读通用。
- **文件管理**：VS Code 风格双栏面板，新建 / 重命名 / 复制 / 粘贴 / 删除 / 右键菜单，大文件只读保护。

# 二、安装

```bash
# GitHub 安装（推荐）
dsh plugin --profile web add github:Nth-5620/dsh-readwrite-hub
```

安装后**重启 `dsh web`**，并**硬刷新浏览器**（Ctrl+Shift+R）。侧边栏底部出现「工作区文件」按钮即加载成功。

> 开发版：将本仓库 `lib/` 放入 `~/.dsh/profiles/web/node_modules/dsh-readwrite-hub/` 并注册 bundle 即可，无需构建。

# 三、使用

1. 在侧边栏文件面板打开文本文件（.txt / .md）。
2. 点「码字」进入写作模式，或点「阅读」进入书籍模式。
3. 阅读模式下：进度条点击跳转、键盘翻页、输入框跳页、「目录」直达章节、「书签」查看 / 跳转 / 删除；
   进度自动按文件保存到 `~/.dsh/readwrite-hub/state.json`。

# 四、安全声明

## 4.1 信任边界

- 本插件**完全在本地运行**，不发起任何出站网络连接，不上传任何文件内容。
- 文件读写全部通过插件自建的本地 HTTP API（`/readwrite-hub-api/*`）完成，仅由 DSH 进程内的宿主插件提供。

## 4.2 访问范围

- **暴露面 = DSH Web GUI 的绑定地址**：`dsh web` 默认仅绑定回环 127.0.0.1，插件 API 只有本机浏览器可访问。
- ⚠️ 若自行将 `dsh web` 绑定到非回环地址，插件 API 将无独立鉴权地与 DSH 一起暴露；**切勿将带本插件的 DSH 直接暴露到公网**。

## 4.3 路径与操作防护

| 防护 | 实现 |
| --- | --- |
| 路径校验 | 所有操作要求绝对路径，拒绝相对路径与空路径 |
| 名称校验 | 新建 / 重命名仅接受单一路径段，拒绝空名、`.`/`..` 与含 `/\` 的名称 |
| 目录列举 | 单层封顶 1000 条目 |
| 文件读取 | 默认 256 KiB、硬顶 8 MiB；只读文件头 |
| 文件写入 | 8 MiB 上限；请求体 64 KiB 上限 |
| 资源释放 | 所有文件句柄 `try/finally` 关闭；无缓存、无后台任务 |

## 4.4 数据与隐私

- 不收集、不记录、不传输任何文件内容或操作日志。
- 前端对文件内容做 HTML 转义后渲染，无法注入脚本。

# 五、架构

- **宿主面**（`lib/index.js`）：Cordis 插件，注册 `/readwrite-hub-api/*` REST 接口
  （list/read/write/rename/mkdir/newfile/copy/move/delete/reveal/state），
  `state` 原子读写 `~/.dsh/readwrite-hub/state.json`；提供 rc.8 设置槽。
- **客户端面**（`lib/client.js`）：`__ModuleLoader__` 单文件浏览器 bundle，
  注册侧边栏入口与设置面板；阅读模式为 `ReadingView` 组件
  （字符级分页 = CJK 字宽校准 + 字符切片，页面与渲染严格一致）。

# 六、Roadmap

- [x] 码字模式（字体 / 字号 / 行距 / 边距 / 背景 / 横线格 / 自动保存）
- [x] 阅读模式（按字分页 / 进度记忆 / 书签 / 目录 / 跳页）
- [x] 进度书签置顶 + 「返回原进度」胶囊
- [ ] 书架系统（多书管理、最近阅读列表）
- [ ] 老板键（一键隐藏窗口 / 快速切换界面）
- [ ] PDF / EPUB 阅读支持
- [ ] 阅读统计（时长、字数）

# 七、兼容性

- DeepSeek Harness `0.1.0-rc.8+`，Node.js 20+。
- 纯前端无原生依赖；Windows / WSL / macOS 均可运行（「在资源管理器中打开」依赖 WSL 环境）。

# 致谢与许可

- **上游项目**：[`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)（MIT）
  —— 本插件的文件管理、编辑器、码字模式等基础能力继承自该项目。
- 本插件基于上游二次开发并新增阅读模式；以 **MIT** 协议发布（`LICENSE`），保留上游版权声明。

---

## English

A **novel-writing & reading workspace plugin** for the DeepSeek Harness Web GUI,
forked from [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer) (MIT).

**Upstream attribution**: this repository is a personal fork of the MIT-licensed
open-source plugin `3911ee/dsh-workspace-explorer`. The upstream author does not
maintain this fork. All file-management, editor, and writing-mode foundations
are inherited from the upstream project.

**The biggest difference from upstream — a reading mode** (upstream has none):
- **Character-accurate pagination**: paragraphs split across pages; pages are
  always filled to the last line; only a new chapter starts a fresh page.
- **Auto-saved reading progress**: persisted per file to `~/.dsh/readwrite-hub/state.json`
  on every page turn and on shutdown; reopening resumes where you left off.
- **Pinned progress bookmark**: always at the top of the bookmark menu, labelled
  with the recording time.
- **"Return to progress" chip**: appears after page-jump / progress-bar click /
  search; gone after 3 natural page turns.
- **Chapter TOC**: parses `第一章`, `序章`, `Chapter N`, `## heading`, and more.
- **Bookmarks**, **page-jump input**, **clickable progress bar**, keyboard paging.

**Other differences from upstream**:
- **Fixed right sidebar** instead of the popup two-pane panel.
- **Single-workspace file tree** (only the current session's workspace).
- **"Add to conversation" renders an in-composer chip** (full path restored on send).
- **File links in chat open in the plugin editor** instead of the system app.
- **Writing mode**: serif/kai/sans/mono fonts, size, line spacing, margins, paper
  backgrounds, **auto soft-wrap**, **auto-save**, ruled lines (single-layer CSS
  gradient, scrolls with the text, zero jank — faster than the upstream div-per-line
  approach for long documents), paragraph formatting.
- **"Reveal in Explorer"** context-menu action (Windows + WSL only).
- Richer context menus (copy path, copy/paste, delete, add to chat).

**Version note**: tested against DeepSeek Harness **0.1.0-rc.8**.

**Install**: `dsh plugin --profile web add github:Nth-5620/dsh-readwrite-hub`

> `lib/` ships as the runtime bundle — no build step required. The package fully
> renames upstream CSS classes / API prefixes / module ids (`we_`→`rh_`,
> `/workspace-files-api`→`/readwrite-hub-api`), so it can coexist with the
> upstream plugin without interference.

See the Chinese sections above for deployment, security, and limits.
