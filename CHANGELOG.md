# Changelog

本仓库是 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer)
（MIT）的魔改分支。`lib/` 为运行版（无需构建），新增小说阅读模式等能力。

## 0.2.0（当前）

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

---

## 0.1.0（上游原版）

上游 [`3911ee/dsh-workspace-explorer`](https://github.com/3911ee/dsh-workspace-explorer) 的原始发布，
功能与界面见 `src/` 快照及上游仓库。
