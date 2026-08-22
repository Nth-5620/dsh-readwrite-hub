# dsh-readwrite-hub（读写字间）

一个面向 DeepSeek Harness 的**读写字间**插件，提供「文件管理 + 码字 + 小说阅读」一体的工作区。

在编辑器工具栏点「码字」进入写作模式，点「阅读」进入书籍模式，同一个文件两种形态，排版偏好共享。

[English](#english)

---

## 功能一览

### 小说阅读模式

- **按字分页**：CJK 字宽校准 + 字符切片，段落可跨页、页面始终填满（实测每页底部仅留一行安全余量），只在新章节另起一页。
- **进度自动记忆**：翻页即写盘（`~/.dsh/readwrite-hub/state.json`），关闭应用 / 切换文件 / 重开 Harness 都不丢进度；重新打开自动续读。
- **左右翻页 / 滚动翻页进度共享**：两种方式共用同一份进度书签，切换翻页方式后自动重定位。
- **进度书签置顶**：书签面板中进度书签永远排在最前，显示记录时间（如 `2026-08-21 15:33`）。
- **「返回原进度」胶囊**：跳页 / 点进度条 / 搜索后出现，一键回到原位置；连续 3 次自然翻页后自动确认新位置。
- **章节目录**：自动解析「第一章」「序章」「番外」「Chapter N」「纯数字行」「## 标题」等十余种章节格式，点击直达。
- **书签系统**：一键添加 / 删除当前页书签，点击跳转；底部输入页码回车直达。
- **进度条**：点击任意位置跳转，即时反馈；键盘翻页 / 滚动（PageUp / PageDown / ↑ / ↓ / Home / End / 空格）。
- **流畅滚动**：滚动模式下段落启用 `content-visibility: auto`，视口外段落跳过 layout/paint，长文档拖动宽度、上下滚动流畅。

### 书架

- 读过并产生进度书签的文本自动登架；顶栏图标一键在「书架 ↔ 文件树」间切换。
- 按最近阅读时间排序，可置顶、可搜索、可移除；点一本书自动以阅读模式打开并续读。
- 文件被移动 / 删除后标记「无法打开」，可一键从书架移除。

### 码字模式

- 字体：衬线（宋体）/ 楷体 / 无衬线（黑体）/ 等宽，字号 A- / A+；行距、左右边距可调。
- 背景：默认 / 米色 / 浅绿 / 蓝色（深浅色主题各有适配）。
- **自动软换行**：超宽长行自动换行（含无空格长串 `overflow-wrap: anywhere`），横向无滚动条。
- **自动保存**：停止输入 3 秒自动落盘；**横线格**：单层 CSS 渐变绘制，随文字原生滚动、零卡顿。
- 「格式化段落」：一键去除行首缩进、段落间自动空行。

### 文件管理

- **固定右侧侧边栏**：底部「工作区文件」按钮打开可拖宽度的常驻侧栏（替代弹窗双栏面板），左侧文件树 + 右侧编辑器，拉出 / 收回带平滑动画。
- **单工作区文件树**：只显示当前会话所属工作区，切换会话时文件树自动跟随。
- **「添加到对话」→ 输入框 @ 引用**：通过 DSH 框架原生 `slash/input-insert-reference` 机制插入 @ 文件引用，发送时还原为完整绝对路径。
- **对话内文件链接 → 插件内打开**：AI 消息中的产物文件 / 文件提及 / 工具调用行参数点击后在插件编辑器内打开，相对路径按工作区根解析。
- **右键菜单增强**：在资源管理器中打开（Windows + WSL）、复制完整 / 相对路径、复制 / 粘贴条目、删除（带确认）、添加到对话。

## 安装

```bash
# GitHub 安装（推荐）
dsh plugin --profile web add github:Nth-5620/dsh-readwrite-hub
```

安装后**重启 `dsh web`**，并**硬刷新浏览器**（Ctrl+Shift+R）。侧边栏底部出现「工作区文件」按钮即加载成功。

> 开发版：将本仓库 `lib/` 放入 `~/.dsh/profiles/web/node_modules/dsh-readwrite-hub/` 并注册 bundle 即可，无需构建。

## 使用

1. 在侧边栏文件面板打开文本文件（.txt / .md）。
2. 点「码字」进入写作模式，或点「阅读」进入书籍模式。
3. 阅读模式下：进度条点击跳转、键盘翻页、输入框跳页、「目录」直达章节、「书签」查看 / 跳转 / 删除；进度自动按文件保存。
4. 顶栏「书架」图标按钮：开=书架，关=文件树。书架里点书自动续读；星标置顶、垃圾桶移除（弹窗二选一）；顶部搜索框按书名过滤。

## 安全声明

### 信任边界

- 本插件**完全在本地运行**，不发起任何出站网络连接，不上传任何文件内容。
- 文件读写全部通过插件自建的本地 HTTP API（`/readwrite-hub-api/*`）完成，仅由 DSH 进程内的宿主插件提供。

### 访问范围

- **暴露面 = DSH Web GUI 的绑定地址**：`dsh web` 默认仅绑定回环 127.0.0.1，插件 API 只有本机浏览器可访问。
- ⚠️ 若自行将 `dsh web` 绑定到非回环地址，插件 API 将无独立鉴权地与 DSH 一起暴露；**切勿将带本插件的 DSH 直接暴露到公网**。

### 路径与操作防护

| 防护 | 实现 |
| --- | --- |
| 路径校验 | 所有操作要求绝对路径，拒绝相对路径与空路径 |
| 名称校验 | 新建 / 重命名仅接受单一路径段，拒绝空名、`.`/`..` 与含 `/\` 的名称 |
| 目录列举 | 单层封顶 1000 条目 |
| 文件读取 | 默认 256 KiB、硬顶 8 MiB；只读文件头 |
| 文件写入 | 8 MiB 上限；请求体 64 KiB 上限 |
| 资源释放 | 所有文件句柄 `try/finally` 关闭；无缓存、无后台任务 |

### 数据与隐私

- 不收集、不记录、不传输任何文件内容或操作日志；前端对文件内容做 HTML 转义后渲染，无法注入脚本。

## 架构

- **宿主面**（`lib/index.js`）：Cordis 插件，注册 `/readwrite-hub-api/*` REST 接口（list/read/write/rename/mkdir/newfile/copy/move/delete/reveal/state/shelf/shelf-remove/shelf-pin），`state` 原子读写 `~/.dsh/readwrite-hub/state.json`（含书架 `shelf` 字段）；提供 rc.8 设置槽。
- **客户端面**（`lib/client.js`）：`__ModuleLoader__` 单文件浏览器 bundle，注册侧边栏入口与设置面板；阅读模式为 `ReadingView` 组件（字符级分页 = CJK 字宽校准 + 字符切片，页面与渲染严格一致），书架为 `ShelfView` 组件。

## 兼容性与版本

- DeepSeek Harness `0.1.0-rc.8+`，Node.js 20+。
- 纯前端无原生依赖；Windows / WSL / macOS 均可运行（「在资源管理器中打开」依赖 WSL 环境）。

## Roadmap

- [x] 码字模式（字体 / 字号 / 行距 / 边距 / 背景 / 横线格 / 自动保存）
- [x] 阅读模式（按字分页 / 进度记忆 / 书签 / 目录 / 跳页 / 滚动模式）
- [x] 进度书签置顶 + 「返回原进度」胶囊 + 滚动 / 翻页进度共享
- [x] 书架系统（多书管理、最近阅读列表、置顶、搜索、移除、失效检测）
- [ ] 老板键（一键隐藏窗口 / 快速切换界面）
- [ ] PDF / EPUB 阅读支持
- [ ] 阅读统计（时长、字数）

---

## 致谢与许可

本插件的**基础文件树、编辑器与「@ 文件引用」联动**来自并集成了
[`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)（MIT License），
在此**尊重并感谢原作者的贡献**。

本插件在继承上述基础能力之外，**自行新增**了码字模式（字体 / 字号 / 行距 / 边距 / 纸张背景 /
自动软换行 / 横线格 / 自动保存 / 段落格式化）、小说阅读模式（按字分页 / 进度记忆 / 书签 / 目录 /
滚动与翻页进度共享）、书架，以及重新设计的固定右侧侧边栏与单工作区文件树。

本插件以 **MIT** 协议发布（见 `LICENSE`），同时保留上游版权声明并额外标注本插件版权。

---

## English

A **read-write studio** plugin for the DeepSeek Harness Web GUI: file management, writing mode,
and a novel-reading mode, all in one workspace. Click **Write** for the drafting view or
**Read** to turn the same file into a book layout; typography preferences are shared.

**Feature highlights**:
- **Reading mode**: character-accurate pagination, auto-saved progress (per file, on page turn
  and shutdown), shared **scroll / paged progress** that relocates on flip-mode switch, a pinned
  progress bookmark, a "Return to progress" chip, chapter TOC, bookmarks, page-jump input,
  instantly-responsive progress bar, keyboard paging/scrolling, and smooth scrolling via
  `content-visibility: auto`.
- **Bookshelf**: read texts are auto-shelved; top-bar icon toggles shelf ↔ file tree; sortable by
  recent read, pinnable, searchable, removable; click a book to resume reading.
- **Writing mode**: fonts, size, line spacing, margins, paper backgrounds, auto soft-wrap,
  auto-save, ruled lines, paragraph formatting.
- **File management**: fixed right sidebar with a resizable, single-workspace file tree,
  "@ file reference" insertion via the framework's `slash/input-insert-reference`, in-editor
  opening of chat file links, richer context menus.

**Install**: `dsh plugin --profile web add github:Nth-5620/dsh-readwrite-hub`

> `lib/` ships as the runtime bundle — no build step required.

## Attribution & License

The **foundational file tree, editor, and "@ file reference" integration** of this plugin come
from [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer) (MIT License).
We respect and thank the original author for their contribution.

On top of those inherited foundations, this plugin **adds** the writing mode (fonts, size, line
spacing, margins, paper backgrounds, auto soft-wrap, ruled lines, auto-save, paragraph formatting),
the novel-reading mode (character-accurate pagination, progress memory, bookmarks, TOC, shared
scroll/paged progress), the bookshelf, as well as a redesigned fixed right sidebar and a
single-workspace file tree.

This plugin is released under the **MIT** License (see `LICENSE`), retaining the upstream
copyright notice and additionally attributing this plugin.

See the Chinese sections above for deployment, security, and limits.
