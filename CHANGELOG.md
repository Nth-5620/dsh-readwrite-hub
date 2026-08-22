# Changelog

本仓库是 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)
（MIT）的魔改分支。`lib/` 为运行版（无需构建），新增小说阅读模式、书架等能力。

## 0.3.0（当前）

### 新增

- **书架**：右侧侧栏顶栏新增「书架」图标按钮，点击在书架与文件树间切换（开=书架，关=文件树）。
  用阅读模式读过的文本会自动成为书架上的「书」（依据其产生的进度书签）。
- **书呈现与排序**：以文件名作为书名，显示最近一次阅读时间与所在章节；置顶的书排在最前，
  其余按最近阅读时间从近到远排序。
- **搜索书名**：书架顶部搜索框可按书名（或路径）实时过滤。
- **打开书**：从书架点击一本书，自动以阅读模式打开并跳转到该书的进度书签位置（续读）。
- **收藏置顶**：每本书的星标按钮可置顶/取消置顶。
- **移除书**：每本书的删除按钮，弹窗确认后提供两种选择——仅移出书架（保留进度书签）或
  全部移除（连同进度书签，不影响文件本身）。
- **失效检测**：书架中文件被移动/删除后标记为「无法打开」；此时点击会再弹窗询问是否
  从书架移除（保留进度书签）。

### 优化

- **书架入口 UI**：改用顶栏图标按钮（harness 同款 outline 图标），替换原先与文件树并排的
  Tab 切换条，不再挤出额外一行、不挤占编辑区垂直空间；按钮在书架态高亮。
- **顶栏按钮紧凑化**：顶栏「保存」「用系统应用打开」按钮改为 24px 紧凑按钮（原为标准
  大按钮几乎占满 40px 顶栏），与顶栏其他图标按钮对齐并留出上下空隙。

### 修复

- **阅读进度续读**：修复 ReadingView 恢复逻辑错误读取 `state.paragraph`（实为
  `state.progress.paragraph`），导致重新打开文件不跳到上次进度的问题。
- **进度覆盖**：修复打开文件时在恢复进度之前就把当前位置（第 1 页）写盘覆盖历史进度的问题；
  现在恢复完成前不保存，用户翻页/滚动后方才保存新位置。

## 0.2.0

### 阅读模式（新增，上游没有）

- **按字分页**：CJK 字宽校准 + 字符切片，段落可跨页、页面始终填满；仅新章节另起一页。
- **进度自动记忆**：翻页即写盘（`~/.dsh/readwrite-hub/state.json`），重开文件自动续读；
  页面卸载/关闭时立即落盘，不丢失进度。
- **进度书签置顶**：书签面板中进度书签永远置顶，显示记录时间（`2026-08-21 15:33` 格式）。
- **「返回原进度」胶囊**：跳页/进度条点击/搜索后出现，一键回到原位置；连续 3 次自然翻页后自动确认新位置。
- **书签系统**：一键添加/删除当前页书签；书签面板点击跳转。
- **章节目录**：自动解析并列出章节（`第X章`/`序章`/`番外`/`Chapter N`/纯数字/`## 标题` 等），点击直达。
- **跳页输入框**：底部输入页码回车直达。
- **进度条点击**：点击任意位置跳转，并触发「返回原进度」胶囊。
- **阅读排版与码字共用**：字体/字号/行距/边距/纸张背景实时生效。

### 码字模式增强

- **横线格重写**：改为 `repeating-linear-gradient` 单层绘制（`background-attachment: local`），
  线条随文字原生滚动，长文本零卡顿；线条半透明、对比度弱于文字。
- **滚动条样式**：编辑器/阅读区自定义浅色滚动条，与背景区分。
- 衬线/楷体/无衬线/等宽字体、字号、行距、边距、纸张背景（默认/米色/浅绿/蓝色）、自动软换行、自动保存。

### 文件管理（继承上游）

- 固定右侧侧边栏、单工作区文件树、「添加到对话」输入框 @ 引用（DSH 原版风格）、右键菜单（含在资源管理器中打开）、
  大文件只读保护、对话内文件链接插件内打开。

### 修复

- 修复阅读进度保存后无法恢复（`restoredRef` 在分页就绪前被置位导致跳过的竞态）。
- 修复「返回原进度」胶囊遮挡底栏按钮（改为文字区底部居中）。
- 修复跳页输入框无法输入（按键处理器误拦截输入框事件）。
- 修复目录/书签菜单只能点击按钮关闭（改为点击外部任意处关闭）。
- 修复横线格滚动错位/缺线（旧方案逐行 div + transform 同步不稳）。
- **修复搜索框被左侧对话窗口遮挡**：搜索面板改为 portal 渲染到 `document.body`
  + `position:fixed` 高层级定位（不再受面板 stacking context 限制、不越界溢出），
  并支持点击外部关闭。
- **浮层样式统一为 DSH 本体规范**：右键菜单/排版菜单/目录/书签/搜索框/Toast/胶囊
  全部改用 `var(--dsw-shadow-lv3)` 阴影、`var(--dsw-specific-menu)` 背景、
  `var(--dsw-alias-border-inverted)` 边框、12px 圆角，与 DeepSeek Harness 原生弹层视觉一致。
- **修复进度书签干扰手动书签**：进度书签（自动生成、永远置顶、不可删除）不再参与
  「添加书签/删除书签」按钮的判定——按钮只根据用户自定义书签触发和响应；
  手动书签删除后立即持久化。
- **修复进入阅读模式不跳转到保存进度**：恢复逻辑原先读 `state.paragraph`，但 `state` 实为
  `{ progress, bookmarks }`，阅读位置在 `state.progress.paragraph`，导致恢复永远不生效、进入
  阅读模式停在首页。改为读 `state.progress.paragraph`，进入阅读模式即自动跳到保存的进度页；
  因该跳转是恢复而非离开当前位置，同时清掉「返回原进度」胶囊并标记为自然翻页（进度保存保持生效）。
- **修复左右翻页与滚动翻页的进度书签不共享**：`ReadingView` 组件在切换翻页方式（paged ↔ scroll）时
  不会重新挂载（React `key` 为文件路径），而进度恢复标记 `restoredRef` 一旦置位即永久生效，导致
  第二种翻页方式下不再定位到保存的进度段落。改为在 `flipMode` 变化时重置 `restoredRef`，使切模式后
  重新按段落索引（`paragraph`，两种模式通用的绝对定位键）定位；同时给滚动模式渲染的章节标题行补上
  `data-para-index`，使书签/进度定位到章节标题那一行也能命中。用户书签跳转本就以 `paragraph` 为键，
  现与进度书签统一，两种翻页方式下均能精确定位。
- **新增更新维护规范**：新增 [`CONTRIBUTING.md`](./CONTRIBUTING.md)，记录从改 `lib/` → `node --check`
  校验 → 浏览器实测 → 更新 CHANGELOG → git 提交（身份 `Nth-5620`）→ Windows 中转推送的全流程约定，
  含「不要运行 build.mjs（魔改分支保护）」「token 只用一次性 URL 认证、用完即删」「测试勿污染
  state.json」等注意项。

### 适配验证

- 实测环境：DeepSeek Harness **0.1.0-rc.8**（自 rc.7 升级验证：插件注入点、`dsh-client-runtime` /
  `dsh-client-locale` / `dsh-client-ui-sidebar` 均随 rc.8 正常加载，web UI、文件树、码字模式
  自动保存功能正常；`dsh-client-ui-slots` 不再作为独立包安装，但 boot 仍能按 inject 声明解析）。
- 适配验证：DeepSeek Harness **0.1.1-rc.1**（`latest` 标签，已实际升级并用浏览器实测）。rc.1 将
  `dsh-client-ui-primitives` 从独立 npm 包改为 web 前端内置虚拟模块（模块表
  `"@deepseek-ai/dsh-client-ui-primitives"` 映射到内联 `Kd`，导出 `Button`/`Tooltip`/`Icon*` 等），
  插件运行时的 `require("@deepseek-ai/dsh-client-ui-primitives")` 仍能解析。
  **实测结果**：`dsh web` 以 rc.1 正常启动，`/readwrite-hub-api/list` 返回 200，cordis 配置注入
  `readwrite-hub` 插件；浏览器端侧边栏「工作区文件」面板、文件树、码字/阅读模式工具栏、阅读分页
  （`1/4250`）、进度条、目录/书签按钮全部渲染正常，无任何加载错误；`dsh-client-runtime`/`dsh-client-locale`/
  `dsh-client-ui-sidebar`/`dsh-client-ui-settings`/`dsh-settings` 均在 rc.1 正常加载，`dsh-client-ui-slots`
  仍按 inject 声明解析为虚拟模块。
- 适配验证：DeepSeek Harness **0.1.1-rc.2**（`latest` 标签，已实际升级并用浏览器实测）。rc.2 延续
  rc.1 的格局——`dsh-client-ui-primitives`/`dsh-client-ui-slots` 仍由 web 前端内置虚拟模块提供，
  插件依赖的 `dsh-client-runtime`/`dsh-client-locale`/`dsh-client-ui-sidebar`/`dsh-client-ui-settings`/
  `dsh-settings` 均在 rc.2 有发布版本且正常解析。**实测结果**：`dsh web` 以 rc.2 正常启动，
  `/readwrite-hub-api/list` 返回 200，cordis 配置注入 `readwrite-hub` 插件；浏览器端侧边栏「工作区文件」
  面板、文件树、阅读模式、跨翻页方式进度书签（分页 `左右翻页` ↔ 滚动翻页，进度保持在同一段落附近）
  全部正常，无任何加载错误。

---

## 0.1.0（上游原版）

上游 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer) 的原始发布，
功能与界面见 `src/` 快照及上游仓库。
