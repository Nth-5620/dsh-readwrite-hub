window.__ModuleLoader__.load({
	id: "dsh-readwrite-hub",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
	let react_dom = require("react-dom");

		/** Tiny clsx substitute (string/boolean args only). */
		function clsx(...args) {
			return args.filter((value) => typeof value === "string" && value !== "").join(" ");
		}

		// ---- styles -----------------------------------------------------
		const cssText = ".rh_footerButton{cursor:pointer;width:28px;height:28px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}.rh_footerButton:hover{background:var(--dsw-alias-interactive-bg-hover)}.rh_sidebarPanel{position:fixed;top:0;right:0;bottom:0;z-index:1000;box-sizing:border-box;display:flex;flex-direction:column;background:var(--dsw-alias-bg-layer-2);border-left:1px solid var(--dsw-alias-border-l1);box-shadow:rgba(0,0,0,.02) -4px 0 12px 0,rgba(0,0,0,.04) -2px 0 8px 0;min-width:260px;transform:translateX(100%);pointer-events:none;transition:transform .2s var(--ds-ease-in-out),opacity .2s var(--ds-ease-in-out);opacity:0}.rh_sidebarPanelOpen{transform:translateX(0);pointer-events:auto;opacity:1}.rh_sidebarHandle{position:absolute;left:0;top:0;bottom:0;width:5px;cursor:col-resize;z-index:2}.rh_sidebarHandle:hover{background:var(--dsw-alias-border-l2)}.rh_sidebarHeader{box-sizing:border-box;display:flex;align-items:center;gap:8px;height:40px;padding:0 10px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}.rh_sidebarTitle{font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rh_sidebarActions{display:flex;align-items:center;gap:6px;flex:none}.rh_sidebarClose{cursor:pointer;width:26px;height:26px;border:none;border-radius:6px;background:0 0;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;font-size:16px;line-height:1}.rh_sidebarClose:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_ctxMenu{position:fixed;z-index:2000;box-sizing:border-box;min-width:170px;padding:4px;background:var(--dsw-specific-menu);border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;box-shadow:var(--dsw-shadow-lv3)}.rh_ctxItem{cursor:pointer;box-sizing:border-box;width:100%;height:28px;display:flex;align-items:center;gap:8px;padding:0 10px;border:none;border-radius:6px;background:0 0;color:var(--dsw-alias-label-primary);font-size:12px;text-align:left}.rh_ctxItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.rh_ctxItem[data-danger='true']{color:var(--dsw-alias-state-error-primary)}.rh_ctxItem[data-danger='true']:hover{background:var(--dsw-alias-interactive-bg-danger-hover,var(--dsw-alias-interactive-bg-hover))}.rh_ctxSep{height:1px;margin:4px 6px;background:var(--dsw-alias-border-l1)}.rh_sidebarToast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:3000;padding:6px 14px;background:var(--dsw-specific-menu);border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;color:var(--dsw-alias-label-primary);font-size:12px;box-shadow:var(--dsw-shadow-lv3)}.rh_panel{box-sizing:border-box;display:flex;gap:12px;flex:1;min-height:0;overflow:hidden;padding-left:16px}.rh_panelTree{box-sizing:border-box;width:300px;min-width:180px;max-width:480px;flex:none;overflow:auto;padding-left:8px;border-left:1px solid var(--dsw-alias-interactive-bg-hover)}.rh_treeHandle{position:relative;flex:none;width:5px;cursor:col-resize;background:transparent;margin:0 2px;border-radius:3px}.rh_treeHandle:hover,.rh_treeHandle:active{background:var(--dsw-alias-border-l2)}.rh_panelEditor{box-sizing:border-box;flex:1;min-width:0;display:flex;flex-direction:column}.rh_panelEmpty{color:var(--dsw-alias-label-tertiary);font-size:13px;flex:1;justify-content:center;align-items:center;display:flex}.rh_rootHeader{box-sizing:border-box;cursor:pointer;width:100%;height:28px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:8px;align-items:center;gap:6px;padding:0 8px;display:flex;font-size:13px;text-align:left}.rh_rootHeader:hover{background:var(--dsw-alias-interactive-bg-hover)}.rh_rootName{text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;overflow:hidden}.rh_filesHeaderRow{align-items:center;gap:2px;display:flex}.rh_filesToggle{width:auto;flex:1;min-width:0}.rh_filesHeaderAction{cursor:pointer;width:22px;height:22px;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:6px;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}.rh_filesHeaderAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_filesChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .15s var(--ds-ease-in-out)}.rh_filesChevronOpen{transform:rotate(90deg)}.rh_filesList{box-sizing:border-box;border-left:1px solid var(--dsw-alias-interactive-bg-hover);margin:2px 0 4px 16px;padding-left:6px}.rh_fileRow,.rh_dirRow{cursor:pointer;box-sizing:border-box;width:100%;height:24px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:6px;align-items:center;gap:6px;padding:0 6px;display:flex;font-size:12px;text-align:left;overflow:hidden}.rh_fileRow:hover,.rh_dirRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.rh_fileRowActive{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);font-weight:600}.rh_fileRowSelected{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_dirRowDropTarget{background:color-mix(in srgb,var(--dsw-alias-state-business-primary,#2f81f7) 12%,transparent);box-shadow:inset 0 0 0 1px var(--dsw-alias-state-business-primary,#2f81f7)}.rh_panelDropRoot{box-shadow:inset 0 0 0 1px var(--dsw-alias-state-business-primary,#2f81f7)}.rh_fileRow span,.rh_dirRow span{text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1;overflow:hidden}.rh_fileSize{color:var(--dsw-alias-label-tertiary);font-size:11px;flex:none}.rh_filesEmpty,.rh_filesLoading{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px;padding:2px 6px}.rh_filesError{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px;padding:2px 6px}.rh_createRow{align-items:center;gap:6px;margin:0 0 4px 14px;padding:0 2px 0 8px;display:flex}.rh_inlineInput{box-sizing:border-box;min-width:0;height:22px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover);border:1px solid var(--dsw-alias-interactive-bg-hover);border-radius:6px;flex:1;padding:0 6px;font-size:12px;line-height:20px;outline:0}.rh_inlineInput:focus{border-color:var(--dsw-alias-label-tertiary)}.rh_rowWrap{align-items:center;gap:2px;display:flex}.rh_rowWrap .rh_fileRow,.rh_rowWrap .rh_dirRow{width:auto;flex:1;min-width:0}.rh_rowWrap:hover .rh_fileRow,.rh_rowWrap:hover .rh_dirRow{background:var(--dsw-alias-interactive-bg-hover)}.rh_rowAction{cursor:pointer;width:18px;height:18px;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:4px;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex;opacity:0}.rh_rowWrap:hover .rh_rowAction{opacity:1}.rh_rowAction:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_fileGlyph{width:14px;height:14px;flex:none;display:inline-flex}.rh_editorResize{box-sizing:border-box;flex:1;min-width:0;min-height:200px;flex-direction:column;gap:8px;display:flex;resize:both;overflow:hidden}.rh_editorPath{text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-tertiary);margin-bottom:0;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11px;line-height:16px;overflow:hidden}.rh_editorScroll{box-sizing:border-box;flex:1;min-height:0;max-height:none;background:var(--dsw-alias-interactive-bg-hover);border-radius:8px;display:flex;overflow:hidden}.rh_editorGutter{position:static;box-sizing:border-box;min-width:42px;color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-interactive-bg-hover);flex:none;overflow:hidden;padding:12px 8px 12px 14px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;text-align:right;white-space:pre;user-select:none}.rh_editorTextarea{box-sizing:border-box;min-width:0;height:100%;color:var(--dsw-alias-label-primary);background:0 0;border:none;flex:1;padding:12px 16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;white-space:pre;tab-size:4;resize:none;outline:0;overflow:auto}.rh_editorOverlay{box-sizing:border-box;position:relative;min-width:0;min-height:0;flex:1;display:flex}.rh_editorBackdrop{box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none;margin:0;padding:12px 16px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:12px;line-height:1.6;white-space:pre;tab-size:4;color:var(--dsw-alias-label-primary);z-index:0}.rh_editorBackdrop .hl{white-space:pre;min-height:1.6em}.rh_editorTextareaOn{position:relative;z-index:1;color:transparent;background:0 0;caret-color:var(--dsw-alias-label-primary)}.rh_editorTextareaOn::selection{background:rgba(86,156,214,.35)}.rh_editorStatus{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px}.rh_sidebarTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:999;cursor:pointer;width:34px;height:44px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-right:none;border-radius:8px 0 0 8px;box-shadow:-4px 0 12px rgba(0,0,0,.14);display:inline-flex;align-items:center;justify-content:center}.rh_sidebarTab:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_editorToolbar{box-sizing:border-box;display:flex;align-items:center;gap:6px;flex:none;padding:0 2px 2px}.rh_editorToolBtn{cursor:pointer;height:24px;padding:0 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:0 0;color:var(--dsw-alias-label-secondary);font-size:12px;display:inline-flex;align-items:center;gap:4px;white-space:nowrap}.rh_editorToolBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_editorToolBtn:disabled{opacity:.4;cursor:default}.rh_editorToolBtnActive{border-color:var(--dsw-alias-label-tertiary);color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}.rh_editorToolSize{color:var(--dsw-alias-label-tertiary);font-size:12px;min-width:26px;text-align:center;font-variant-numeric:tabular-nums}.rh_editorFontSelect{cursor:pointer;height:24px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:12px;padding:0 4px;outline:0}.rh_sidebarBody{box-sizing:border-box;flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}.rh_capsuleBar{position:fixed;z-index:3500;display:flex;flex-wrap:wrap;gap:6px;max-width:min(70vw,700px);max-height:54px;overflow:auto;pointer-events:none}.rh_capsule{pointer-events:auto;display:inline-flex;align-items:center;gap:6px;max-width:340px;padding:2px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;background:var(--dsw-specific-menu);box-shadow:var(--dsw-shadow-lv2);font-size:12px;color:var(--dsw-alias-label-primary);white-space:nowrap}.rh_capsuleText{overflow:hidden;text-overflow:ellipsis;font-family:ui-monospace,SFMono-Regular,Consolas,monospace}.rh_capsuleClose{cursor:pointer;border:none;background:0 0;color:var(--dsw-alias-label-secondary);font-size:14px;line-height:1;padding:0 2px;flex:none}.rh_capsuleClose:hover{color:var(--dsw-alias-label-primary)}.rh_layoutMenu{position:absolute;top:calc(100% + 4px);left:0;z-index:1200;box-sizing:border-box;min-width:200px;background:var(--dsw-specific-menu);border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;padding:8px;box-shadow:var(--dsw-shadow-lv3);display:flex;flex-direction:column;gap:8px}.rh_layoutRow{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--dsw-alias-label-secondary);white-space:nowrap}.rh_layoutRow .rh_editorToolBtn{height:22px;padding:0 7px}.rh_layoutRow .rh_editorToolSize{min-width:26px}.rh_readingRoot{box-sizing:border-box;flex:1;min-height:0;display:flex;flex-direction:column;gap:6px}.rh_readingBody{box-sizing:border-box;flex:1;min-height:0;overflow:auto;border-radius:8px;padding:12px 16px}.rh_readingPara{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;text-align:justify;text-indent:2em}.rh_readingBar{box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:6px 2px;flex:none}.rh_readingTrack{position:relative;flex:1;min-width:60px;height:6px;border-radius:3px;background:var(--dsw-alias-interactive-bg-hover);cursor:pointer}.rh_readingFill{position:absolute;top:0;left:0;height:100%;border-radius:3px;background:var(--dsw-alias-state-business-primary,#2f81f7)}.rh_readingPop{position:fixed;z-index:4000;box-sizing:border-box;min-width:220px;max-width:min(60vw,420px);max-height:60vh;overflow:auto;background:var(--dsw-specific-menu);border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;padding:6px;box-shadow:var(--dsw-shadow-lv3)}.rh_readingPopList{display:flex;flex-direction:column;gap:2px}.rh_readingPopItem{cursor:pointer;box-sizing:border-box;width:100%;padding:5px 8px;border:none;border-radius:6px;background:0 0;color:var(--dsw-alias-label-primary);font-size:12px;text-align:left;display:flex;align-items:center;gap:8px}.rh_readingPopItem:hover{background:var(--dsw-alias-interactive-bg-hover)}.rh_readingPopItemActive{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_readingPopTitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rh_readingPopDel{flex:none;width:20px;height:20px;border:none;border-radius:6px;background:0 0;color:var(--dsw-alias-label-tertiary);display:inline-flex;align-items:center;justify-content:center;padding:0;cursor:pointer;transition:color .15s ease,background-color .15s ease}.rh_readingPopDel:hover{color:var(--dsw-alias-state-error-primary);background:var(--dsw-alias-interactive-bg-hover)}.rh_readingPopEmpty{color:var(--dsw-alias-label-tertiary);font-size:12px;padding:6px 8px}.rh_readingHeading{color:var(--dsw-alias-label-secondary);font-size:12px;padding:4px 8px;font-weight:600}.rh_readingJumpInput{box-sizing:border-box;width:56px;height:24px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:12px;padding:0 6px;outline:0;text-align:center}.rh_readingSearch{position:relative;display:inline-flex;align-items:center}.rh_readingSearchBox{position:fixed;z-index:9999;box-sizing:border-box;display:flex;align-items:center;flex-wrap:wrap;gap:6px;padding:6px;background:var(--dsw-specific-menu);border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;box-shadow:var(--dsw-shadow-lv3)}.rh_readingSearchInput{box-sizing:border-box;width:160px;height:24px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:12px;padding:0 8px;outline:0}.rh_readingSearchCount{color:var(--dsw-alias-label-tertiary);font-size:11px;min-width:38px;text-align:center;font-variant-numeric:tabular-nums}.rh_readingSearchBtn{cursor:pointer;width:22px;height:22px;border:none;border-radius:5px;background:0 0;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;font-size:12px}.rh_readingSearchBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.rh_readingMark{background:rgba(255,213,79,.35);border-radius:2px;padding:0 1px}.rh_readingMarkActive{background:rgba(255,145,0,.55)}.rh_returnChip{animation:rhChipIn .18s ease forwards}@keyframes rhChipIn{from{opacity:0;transform:translate(-50%,6px)}to{opacity:1;transform:translate(-50%,0)}}.rh_editorTextarea::-webkit-scrollbar,.rh_readingBody::-webkit-scrollbar{width:10px;height:10px}.rh_editorTextarea::-webkit-scrollbar-thumb,.rh_readingBody::-webkit-scrollbar-thumb{background:var(--dsw-alias-border-l2);border-radius:5px;border:2px solid transparent;background-clip:content-box}.rh_editorTextarea::-webkit-scrollbar-thumb:hover,.rh_readingBody::-webkit-scrollbar-thumb:hover{background:var(--dsw-alias-label-tertiary);border:2px solid transparent;background-clip:content-box}.rh_editorTextarea::-webkit-scrollbar-track,.rh_readingBody::-webkit-scrollbar-track{background:transparent}.rh_editorTextarea{scrollbar-width:thin;scrollbar-color:var(--dsw-alias-border-l2) transparent}.rh_readingBody{scrollbar-width:thin;scrollbar-color:var(--dsw-alias-border-l2) transparent}";
		const styleTagId = "dsh-readwrite-hub/styles";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(styleTagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-readwrite-hub";
			tag.dataset.pluginCss = styleTagId;
			tag.textContent = cssText;
			document.head.appendChild(tag);
		}
		const css = {
			"footerButton": "rh_footerButton",
			"sidebarPanel": "rh_sidebarPanel",
			"sidebarPanelOpen": "rh_sidebarPanelOpen",
			"sidebarHandle": "rh_sidebarHandle",
			"sidebarHeader": "rh_sidebarHeader",
			"sidebarTitle": "rh_sidebarTitle",
			"sidebarActions": "rh_sidebarActions",
			"sidebarClose": "rh_sidebarClose",
			"ctxMenu": "rh_ctxMenu",
			"ctxItem": "rh_ctxItem",
			"ctxSep": "rh_ctxSep",
			"panel": "rh_panel",
			"panelTree": "rh_panelTree",
			"panelEditor": "rh_panelEditor",
			"panelEmpty": "rh_panelEmpty",
			"rootHeader": "rh_rootHeader",
			"rootName": "rh_rootName",
			"filesHeaderRow": "rh_filesHeaderRow",
			"filesToggle": "rh_filesToggle",
			"filesHeaderAction": "rh_filesHeaderAction",
			"filesChevron": "rh_filesChevron",
			"filesChevronOpen": "rh_filesChevronOpen",
			"filesList": "rh_filesList",
			"fileRow": "rh_fileRow",
			"fileRowActive": "rh_fileRowActive",
			"fileRowSelected": "rh_fileRowSelected",
			"dirRowDropTarget": "rh_dirRowDropTarget",
			"panelDropRoot": "rh_panelDropRoot",
			"dirRow": "rh_dirRow",
			"rowWrap": "rh_rowWrap",
			"rowAction": "rh_rowAction",
			"fileSize": "rh_fileSize",
			"fileGlyph": "rh_fileGlyph",
			"filesEmpty": "rh_filesEmpty",
			"filesError": "rh_filesError",
			"filesLoading": "rh_filesLoading",
			"createRow": "rh_createRow",
			"inlineInput": "rh_inlineInput",
			"editorResize": "rh_editorResize",
			"editorPath": "rh_editorPath",
			"editorScroll": "rh_editorScroll",
			"editorGutter": "rh_editorGutter",
			"editorTextarea": "rh_editorTextarea",
			"editorTextareaOn": "rh_editorTextareaOn",
			"editorOverlay": "rh_editorOverlay",
			"editorBackdrop": "rh_editorBackdrop",
			"editorStatus": "rh_editorStatus",
			"sidebarTab": "rh_sidebarTab",
			"editorToolbar": "rh_editorToolbar",
			"editorToolBtn": "rh_editorToolBtn",
			"editorToolBtnActive": "rh_editorToolBtnActive",
			"editorToolSize": "rh_editorToolSize",
			"editorFontSelect": "rh_editorFontSelect",
			"sidebarBody": "rh_sidebarBody",
			"capsuleBar": "rh_capsuleBar",
			"capsule": "rh_capsule",
			"capsuleText": "rh_capsuleText",
			"capsuleClose": "rh_capsuleClose",
			"layoutMenu": "rh_layoutMenu",
			"layoutRow": "rh_layoutRow",
			"treeHandle": "rh_treeHandle",
			"readingRoot": "rh_readingRoot",
			"readingBody": "rh_readingBody",
			"readingPara": "rh_readingPara",
			"readingBar": "rh_readingBar",
			"readingTrack": "rh_readingTrack",
			"readingFill": "rh_readingFill",
			"readingPop": "rh_readingPop",
			"readingPopList": "rh_readingPopList",
			"readingPopItem": "rh_readingPopItem",
			"readingPopItemActive": "rh_readingPopItemActive",
			"readingPopTitle": "rh_readingPopTitle",
			"readingPopDel": "rh_readingPopDel",
			"readingPopEmpty": "rh_readingPopEmpty",
			"readingHeading": "rh_readingHeading",
			"readingJumpInput": "rh_readingJumpInput",
			"readingSearch": "rh_readingSearch",
			"readingSearchBox": "rh_readingSearchBox",
			"readingSearchInput": "rh_readingSearchInput",
			"readingSearchCount": "rh_readingSearchCount",
			"readingSearchBtn": "rh_readingSearchBtn",
			"readingMark": "rh_readingMark",
			"readingMarkActive": "rh_readingMarkActive"
		};

		// ---- dictionaries ---------------------------------------------
		const NS = "readwrite-hub";
		const zh = {
			"action.title": "工作区文件",
			"panel.title": "工作区文件",
			"panel.empty": "在左侧选择文件进行查看或编辑",
			"files.newFile": "新建文件",
			"files.newFolder": "新建文件夹",
			"files.fileName": "文件名",
			"files.folderName": "文件夹名称",
			"files.rename.aria": "重命名 {name}",
			"files.loading": "正在加载文件…",
			"files.error": "无法读取目录",
			"files.empty": "此目录为空",
			"files.truncated": "文件过多，仅显示开头部分",
			"files.preview.title": "文件预览",
			"files.save": "保存",
			"files.saving": "正在保存…",
			"files.dirty": "● 未保存",
			"files.tooLargeToEdit": "文件过大，窗口内仅可预览",
			"files.chars": " 字",
			"files.openExternal": "用系统应用打开",
			"ctx.newFileHere": "在此新建文件",
			"ctx.newFolderHere": "在此新建文件夹",
			"ctx.copyPath": "复制完整路径",
			"ctx.copyRelPath": "复制相对路径",
			"ctx.addToChat": "添加到对话",
			"ctx.addedToChat": "已添加到对话",
			"ctx.reveal": "在资源管理器中打开",
			"ctx.copied": "已复制",
			"writing.mode": "码字",
			"writing.format": "格式化段落",
			"writing.formatHint": "去除行首缩进，段落之间自动空行",
			"writing.fontSerif": "衬线（宋体）",
			"writing.fontKai": "楷体",
			"writing.fontSans": "无衬线（黑体）",
			"writing.fontMono": "等宽",
			"writing.rule": "横线格",
			"writing.bg": "背景",
			"writing.bgDefault": "默认",
			"writing.bgBeige": "米色",
			"writing.bgGreen": "浅绿",
			"writing.bgBlue": "蓝色",
			"writing.layout": "排版",
			"writing.font": "字体",
			"writing.fontSize": "字号",
			"writing.spacing": "行距",
			"writing.margin": "边距",
			"reading.mode": "阅读",
			"reading.toc": "目录",
			"reading.bookmarks": "书签",
			"reading.addBookmark": "添加书签",
			"reading.removeBookmark": "删除书签",
			"reading.noBookmarks": "暂无书签",
			"reading.noChapters": "未识别到章节",
			"reading.prevPage": "上一页",
			"reading.nextPage": "下一页",
			"reading.pageJump": "跳页",
			"reading.pageJumpHint": "输入页码后回车跳转",
			"reading.pageOf": "第 {page} / {pages} 页",
			"reading.progress": "进度 {pct}%",
			"reading.progressMark": "进度",
			"reading.resumed": "已续读到上次位置",
			"reading.chapters": "章节目录",
			"reading.flipMode": "翻页方式",
			"reading.flipPaged": "左右翻页",
			"reading.flipScroll": "滚动翻页",
			"reading.search": "搜索",
			"reading.searchHint": "在正文中搜索",
			"reading.searchPrev": "上一个",
			"reading.searchNext": "下一个",
			"reading.replace": "替换",
			"reading.replaceAll": "全部替换",
			"reading.replaceHint": "替换为",
			"reading.returnProgress": "返回原进度",
						"multisel.count": "{count} 项已选中",
			"multisel.move": "移动到…",
			"multisel.moveHere": "移动到此处",
			"multisel.moved": "已移动 {count} 项",
			"multisel.dropHint": "拖到文件夹移动",
			"multisel.clear": "清除选择",
			"move.failed": "移动失败",
			"move.intoSelf": "不能把文件夹移入自身",
"ctx.delete": "删除",
			"ctx.copy": "复制",
			"ctx.paste": "粘贴",
			"ctx.pasted": "已粘贴",
			"ctx.deleted": "已删除",
			"ctx.deleteConfirm": "确定删除 {name} 吗？此操作不可撤销。",
			"settings.title": "工作区文件设置",
			"settings.desc": "码字模式与文件树的持久化偏好。修改即时生效。",
			"settings.writing": "码字模式",
			"settings.writingFontFamily": "默认字体",
			"settings.writingFontSize": "默认字号",
			"settings.writingLineSpacing": "默认行距",
			"settings.writingBackground": "默认背景",
			"settings.writingAutoSave": "自动保存",
			"settings.writingAutoSaveHint": "码字模式下停止输入后自动落盘",
			"settings.autoSaveDelayMs": "自动保存延迟（毫秒）",
			"settings.treeShowHidden": "显示隐藏文件",
			"settings.treeShowHiddenHint": "文件树中显示以点开头的条目",
			"settings.overridden": "已覆盖默认值",
			"settings.reset": "重置",
			"settings.save": "保存设置",
			"settings.saved": "已保存",
			"settings.resetAll": "恢复默认",
			"settings.writable": "可写",
			"settings.readonly": "只读（当前连接不支持写入）",
			"close": "关闭"
		};
		const en = {
			"action.title": "Workspace files",
			"panel.title": "Workspace files",
			"panel.empty": "Pick a file on the left to view or edit",
			"files.newFile": "New file",
			"files.newFolder": "New folder",
			"files.fileName": "File name",
			"files.folderName": "Folder name",
			"files.rename.aria": "Rename {name}",
			"files.loading": "Loading files…",
			"files.error": "Cannot read directory",
			"files.empty": "This directory is empty",
			"files.truncated": "Too many entries; only the beginning is shown",
			"files.preview.title": "File preview",
			"files.save": "Save",
			"files.saving": "Saving…",
			"files.dirty": "● Unsaved",
			"files.tooLargeToEdit": "Large file: preview only",
			"files.chars": " chars",
			"files.openExternal": "Open with system app",
			"ctx.newFileHere": "New file here",
			"ctx.newFolderHere": "New folder here",
			"ctx.copyPath": "Copy full path",
			"ctx.copyRelPath": "Copy relative path",
			"ctx.addToChat": "Add to conversation",
			"ctx.addedToChat": "Added to conversation",
			"ctx.reveal": "Show in Explorer",
			"ctx.copied": "Copied",
			"writing.mode": "Write",
			"writing.format": "Format",
			"writing.formatHint": "Trim indents and ensure a blank line between paragraphs",
			"writing.fontSerif": "Serif",
			"writing.fontKai": "Kai",
			"writing.fontSans": "Sans",
			"writing.fontMono": "Mono",
			"writing.rule": "Rule lines",
			"writing.bg": "BG",
			"writing.bgDefault": "Default",
			"writing.bgBeige": "Beige",
			"writing.bgGreen": "Green",
			"writing.bgBlue": "Blue",
			"writing.layout": "Layout",
			"writing.font": "Font",
			"writing.fontSize": "Size",
			"writing.spacing": "Spacing",
			"writing.margin": "Margin",
			"reading.mode": "Read",
			"reading.toc": "TOC",
			"reading.bookmarks": "Bookmarks",
			"reading.addBookmark": "Add bookmark",
			"reading.removeBookmark": "Remove bookmark",
			"reading.noBookmarks": "No bookmarks",
			"reading.noChapters": "No chapters detected",
			"reading.prevPage": "Prev page",
			"reading.nextPage": "Next page",
			"reading.pageJump": "Jump to page",
			"reading.pageJumpHint": "Enter a page number and press Enter",
			"reading.pageOf": "Page {page} / {pages}",
			"reading.progress": "Progress {pct}%",
			"reading.progressMark": "Progress",
			"reading.resumed": "Resumed to last position",
			"reading.chapters": "Chapters",
			"reading.flipMode": "Paging",
			"reading.flipPaged": "Page flip",
			"reading.flipScroll": "Scroll",
			"reading.search": "Search",
			"reading.searchHint": "Search in text",
			"reading.searchPrev": "Prev",
			"reading.searchNext": "Next",
			"reading.replace": "Replace",
			"reading.replaceAll": "Replace all",
			"reading.replaceHint": "Replace with",
			"reading.returnProgress": "Back to progress",
						"multisel.count": "{count} items selected",
			"multisel.move": "Move to…",
			"multisel.moveHere": "Move here",
			"multisel.moved": "Moved {count} items",
			"multisel.dropHint": "Drag onto a folder to move",
			"multisel.clear": "Clear selection",
			"move.failed": "Move failed",
			"move.intoSelf": "Cannot move a folder into itself",
"ctx.delete": "Delete",
			"ctx.copy": "Copy",
			"ctx.paste": "Paste",
			"ctx.pasted": "Pasted",
			"ctx.deleted": "Deleted",
			"ctx.deleteConfirm": "Delete {name}? This cannot be undone.",
			"settings.title": "Workspace Explorer settings",
			"settings.desc": "Persistent preferences for writing mode and the file tree. Changes apply immediately.",
			"settings.writing": "Writing mode",
			"settings.writingFontFamily": "Default font",
			"settings.writingFontSize": "Default size",
			"settings.writingLineSpacing": "Default line spacing",
			"settings.writingBackground": "Default background",
			"settings.writingAutoSave": "Auto-save",
			"settings.writingAutoSaveHint": "Auto-save after a pause in writing mode",
			"settings.autoSaveDelayMs": "Auto-save delay (ms)",
			"settings.treeShowHidden": "Show hidden files",
			"settings.treeShowHiddenHint": "Show dot-prefixed entries in the file tree",
			"settings.overridden": "Overrides the default",
			"settings.reset": "Reset",
			"settings.save": "Save settings",
			"settings.saved": "Saved",
			"settings.resetAll": "Restore defaults",
			"settings.writable": "Writable",
			"settings.readonly": "Read-only (this connection cannot write)",
			"close": "Close"
		};

		// ---- host API --------------------------------------------------
		async function apiCall(path, init) {
			const response = await fetch(path, init);
			let data = null;
			try {
				data = await response.json();
			} catch {
				data = null;
			}
			if (!response.ok) throw new Error(data !== null && typeof data.message === "string" ? data.message : `HTTP ${response.status}`);
			return data;
		}
		function apiList(path, signal, options) {
			const query = new URLSearchParams();
			if (path !== void 0) query.set("path", path);
			query.set("includeFiles", options?.includeFiles === true ? "1" : "0");
			return apiCall(`/readwrite-hub-api/list?${query.toString()}`, { signal });
		}
		function apiRead(path, options) {
			const query = new URLSearchParams({ path });
			if (options?.maxBytes !== void 0) query.set("maxBytes", String(options.maxBytes));
			return apiCall(`/readwrite-hub-api/read?${query.toString()}`);
		}
		function apiPost(path, payload) {
			return apiCall(path, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload)
			});
		}
		const apiWrite = (path, text) => apiPost("/readwrite-hub-api/write", { path, text });
		const apiRename = (path, name) => apiPost("/readwrite-hub-api/rename", { path, name });
		const apiMkdir = (path, name) => apiPost("/readwrite-hub-api/mkdir", { path, name });
		const apiNewFile = (path, name) => apiPost("/readwrite-hub-api/newfile", { path, name });
		const apiDelete = (path) => apiPost("/readwrite-hub-api/delete", { path });
		const apiCopy = (src, dest) => apiPost("/readwrite-hub-api/copy", { src, dest });
		const apiMove = (paths, destDir) => apiPost("/readwrite-hub-api/move", { paths, destDir });
		const apiReveal = (path) => apiPost("/readwrite-hub-api/reveal", { path });
		const apiStateGet = (path) => apiCall(`/readwrite-hub-api/state?path=${encodeURIComponent(path)}`);
		const apiStateSet = (path, patch) => apiPost("/readwrite-hub-api/state", { path, ...patch });
			function findComposerTextarea() {
				if (typeof document === "undefined") return null;
				const stack = [document];
				let found = null;
				while (stack.length > 0 && found === null) {
					const root = stack.pop();
					const nodes = root.querySelectorAll ? root.querySelectorAll("textarea") : [];
					for (const el of nodes) {
						if (found === null && (el.getAttribute("data-phase") !== null || /input/.test(el.className || "") || (el.placeholder || "").length > 0)) found = el;
					}
					if (found === null && root.querySelectorAll) {
						root.querySelectorAll("*").forEach((el) => {
							if (el.shadowRoot) stack.push(el.shadowRoot);
						});
					}
				}
				return found;
			}
			function composerInsert(text) {
				const el = findComposerTextarea();
				if (el === null) return false;
				const start = typeof el.selectionStart === "number" ? el.selectionStart : el.value.length;
				const end = typeof el.selectionEnd === "number" ? el.selectionEnd : el.value.length;
				const prefix = el.value.slice(0, start);
				const suffix = el.value.slice(end);
				const piece = (start > 0 && !/\s$/.test(prefix) ? " " : "") + text + (suffix.length > 0 && !/^\s/.test(suffix) ? " " : "");
				const next = prefix + piece + suffix;
				const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value")?.set;
				if (setter) setter.call(el, next);
				else el.value = next;
				el.dispatchEvent(new Event("input", { bubbles: true }));
				el.focus();
				const pos = prefix.length + piece.length;
				try { el.setSelectionRange(pos, pos); } catch { /* ignore */ }
				return true;
			}
			function copyToClipboardText(text) {
				if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
					navigator.clipboard.writeText(text).catch(() => {});
					return true;
				}
				return false;
			}
			function relPathOf(rootPath, fullPath) {
				const a = String(rootPath || "").replace(/\/+$/, "");
				const b = String(fullPath || "");
				if (b.startsWith(a + "/")) return b.slice(a.length + 1);
				return b;
			}
			const WRITING_FONTS = {
				mono: "ui-monospace,SFMono-Regular,Consolas,monospace",
				serif: "Georgia,'Times New Roman','Noto Serif SC','Songti SC',serif",
				kai: "'Kaiti SC','KaiTi','STKaiti','Noto Serif SC',serif",
				sans: "'Noto Sans SC','Microsoft YaHei','PingFang SC',sans-serif"
			};
			function formatMd(text) {
				const lines = String(text).replace(/\r\n/g, "\n").split("\n");
				const out = [];
				let prevText = false;
				let inCode = false;
				for (const raw of lines) {
					const line = raw.replace(/^[ \t]+/, "");
					const t = line.trim();
					if (/^(```|~~~)/.test(t)) {
						inCode = !inCode;
						out.push(line);
						prevText = false;
						continue;
					}
					if (inCode) {
						out.push(raw);
						prevText = false;
						continue;
					}
					if (t === "") {
						if (out.length > 0 && out[out.length - 1] !== "") out.push("");
						prevText = false;
						continue;
					}
					const isMarkdown = /^(#{1,6}\s|[-*+]\s|\d+[.)]\s|>\s|<[a-zA-Z]|!\[)/.test(t);
					if (isMarkdown) {
						out.push(line);
						prevText = false;
						continue;
					}
					if (prevText) out.push("");
					out.push(line);
					prevText = true;
				}
				while (out.length > 0 && out[out.length - 1] === "") out.pop();
				return out.join("\n");
			}
			function isDarkMode() {
				try {
					const root = document.documentElement;
					const scheme = (root.getAttribute("style") || "").match(/color-scheme\s*:\s*([a-z]+)/i);
					if (scheme) return scheme[1].toLowerCase() === "dark";
					const cs = getComputedStyle(root);
					const raw = cs.getPropertyValue("--dsw-alias-bg-base").trim();
					if (raw) {
						const hex = raw.match(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/);
						if (hex) {
							const r = parseInt(hex[1], 16), g = parseInt(hex[2], 16), b = parseInt(hex[3], 16);
							return (r + g + b) / 3 < 128;
						}
						const m = raw.match(/\d+/g);
						if (m && m.length >= 3) return (Number(m[0]) + Number(m[1]) + Number(m[2])) / 3 < 128;
					}
				} catch { /* ignore */ }
				return false;
			}
			function writingBgColor(choice, dark) {
				if (choice === "beige") return dark ? "#6D604A" : "#f6f0e0";
				if (choice === "green") return dark ? "#447273" : "#e9f3e9";
				if (choice === "blue") return dark ? "#082F49" : "#e8f0fa";
				return "transparent";
			}
			function countTextChars(text) {
				if (typeof text !== "string" || text === "") return 0;
				const m = text.match(/[\p{L}]/gu);
				return m === null ? 0 : m.length;
			}

		// ---- syntax highlighting (VS Code Dark+) ----------------------
		function hlSpan(color, text) {
			return `<span style="color:${color}">${text}</span>`;
		}
		function hlEscape(text) {
			return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
		}
		const HL_COMMENT = "#6A9955";
		const HL_STRING = "#CE9178";
		const HL_NUMBER = "#B5CEA8";
		const HL_KEYWORD = "#C586C0";
		const HL_KEYWORD2 = "#569CD6";
		const HL_FUNCTION = "#DCDCAA";
		const HL_TYPE = "#4EC9B0";
		const HL_PROP = "#9CDCFE";
		const HL_DECORATOR = "#4EC9B0";
		const HL_TAG = "#569CD6";
		const HL_ATTR = "#9CDCFE";
		const HL_ENTITY = "#4EC9B0";
		const HL_LANGUAGES = {
			python: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /"""/g, color: HL_STRING, blockClose: '"""' },
				{ re: /'''/g, color: HL_STRING, blockClose: "'''" },
				{ re: /(?:[rbfu]{0,2})(?:"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g, color: HL_STRING },
				{ re: /@[A-Za-z_]\w*/g, color: HL_DECORATOR },
				{ re: /\b(def|class)\s+([A-Za-z_]\w*)/g, kind: "named", kwColor: HL_KEYWORD },
				{ re: /\b(?:if|elif|else|for|while|return|import|from|as|with|try|except|finally|raise|lambda|pass|break|continue|global|nonlocal|assert|yield|await|async|del|not|and|or|in|is|None|True|False)\b/g, color: HL_KEYWORD },
				{ re: /\b(?:self|cls)\b/g, color: HL_PROP },
				{ re: /\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?j?\b/g, color: HL_NUMBER }
			] },
			javascript: { rules: [
				{ re: /\/\/[^\n]*/g, color: HL_COMMENT },
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /`(?:[^`\\\n]|\\.)*`/g, color: HL_STRING },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(function|class)\s+([A-Za-z_$][\w$]*)/g, kind: "named", kwColor: HL_KEYWORD2 },
				{ re: /\b(?:const|let|var|return|if|else|for|while|do|switch|case|default|break|continue|new|extends|import|export|from|try|catch|finally|throw|typeof|instanceof|in|of|async|await|yield|delete|void|this|super|null|undefined|true|false)\b/g, color: HL_KEYWORD2 },
				{ re: /\b[A-Za-z_$][\w$]*(?=\()/g, color: HL_FUNCTION },
				{ re: /\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g, color: HL_NUMBER }
			] },
			json: { rules: [
				{ re: /"(?:[^"\\\n]|\\.)*"(?=\s*:)/g, color: HL_PROP },
				{ re: /"(?:[^"\\\n]|\\.)*"/g, color: HL_STRING },
				{ re: /\b(?:true|false|null)\b/g, color: HL_KEYWORD2 },
				{ re: /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/g, color: HL_NUMBER }
			] },
			html: { rules: [
				{ re: /<!--/g, color: HL_COMMENT, blockClose: "-->" },
				{ re: /<\/?[A-Za-z][\w:-]*(?:\s+[^<>]*?)?\/?>/g, kind: "htmltag" },
				{ re: /&[a-zA-Z#0-9]+;/g, color: HL_ENTITY }
			] },
			css: { rules: [
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /--?[A-Za-z_][\w-]*(?=\s*:)/g, color: HL_PROP },
				{ re: /@[\w-]+/g, color: HL_KEYWORD },
				{ re: /#[0-9a-fA-F]{3,8}\b/g, color: HL_NUMBER },
				{ re: /\b\d+(?:\.\d+)?(?:px|em|rem|vh|vw|vmin|vmax|%|s|ms|deg|fr|ch|ex|pt|cm|mm)?\b/g, color: HL_NUMBER }
			] },
			markdown: { rules: [
				{ re: /^#{1,6}\s+[^\n]*/g, color: HL_KEYWORD2 },
				{ re: /^>\s?[^\n]*/g, color: HL_COMMENT },
				{ re: /`[^`\n]+`/g, color: HL_STRING },
				{ re: /\*\*[^*\n]+\*\*/g, color: HL_KEYWORD2 },
				{ re: /\[[^\]\n]*\]\([^)\n]*\)/g, color: HL_ENTITY }
			] },
			sql: { rules: [
				{ re: /--[^\n]*/g, color: HL_COMMENT },
				{ re: /\/\*/g, color: HL_COMMENT, blockClose: "*/" },
				{ re: /'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(?:SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|FULL|ON|AS|AND|OR|NOT|NULL|IS|IN|LIKE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|DISTINCT|COUNT|SUM|AVG|MIN|MAX|UNION|CASE|WHEN|THEN|ELSE|END|PRIMARY|KEY|FOREIGN|REFERENCES)\b/gi, color: HL_KEYWORD2 },
				{ re: /\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] },
			shell: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\$\{[^}\n]*\}|\$[A-Za-z_][\w]*/g, color: HL_PROP },
				{ re: /\b(?:if|then|else|elif|fi|for|while|do|done|case|esac|in|function|return|exit|echo|local|export|source|cd)\b/g, color: HL_KEYWORD2 },
				{ re: /\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] },
			yaml: { rules: [
				{ re: /#[^\n]*/g, color: HL_COMMENT },
				{ re: /^\s*[A-Za-z_][\w.-]*(?=\s*:)/g, color: HL_PROP },
				{ re: /^\s*\[[^\]]*\]\s*$/g, color: HL_KEYWORD2 },
				{ re: /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, color: HL_STRING },
				{ re: /\b(?:true|false|null|yes|no|on|off)\b/g, color: HL_KEYWORD2 },
				{ re: /-?\b\d+(?:\.\d+)?\b/g, color: HL_NUMBER }
			] }
		};
		const HL_LANG_BY_EXT = {
			py: "python",
			js: "javascript",
			mjs: "javascript",
			cjs: "javascript",
			jsx: "javascript",
			ts: "javascript",
			tsx: "javascript",
			json: "json",
			html: "html",
			htm: "html",
			xml: "html",
			css: "css",
			scss: "css",
			less: "css",
			md: "markdown",
			markdown: "markdown",
			sql: "sql",
			sh: "shell",
			bash: "shell",
			zsh: "shell",
			yml: "yaml",
			yaml: "yaml",
			toml: "yaml",
			ini: "yaml"
		};
		function hlLanguageOf(name) {
			const dot = name.lastIndexOf(".");
			if (dot <= 0) return null;
			return HL_LANG_BY_EXT[name.slice(dot + 1).toLowerCase()] ?? null;
		}
		function hlHtmlTag(text) {
			let out = "";
			let pos = 0;
			const re = /(<\/?)([A-Za-z][\w:-]*)|([\w:-]+)(?=\s*=)|("[^"]*"|'[^']*')/g;
			let m;
			while ((m = re.exec(text)) !== null) {
				if (m.index > pos) out += hlEscape(text.slice(pos, m.index));
				if (m[1] !== void 0) out += hlEscape(m[1]) + hlSpan(HL_TAG, hlEscape(m[2]));
				else if (m[3] !== void 0) out += hlSpan(HL_ATTR, hlEscape(m[3]));
				else out += hlSpan(HL_STRING, hlEscape(m[4]));
				pos = m.index + m[0].length;
			}
			out += hlEscape(text.slice(pos));
			return out;
		}
		function hlRender(rule, m) {
			if (rule.kind === "named") {
				const nameColor = m[1] === "class" ? HL_TYPE : HL_FUNCTION;
				return hlSpan(rule.kwColor, hlEscape(m[1])) + hlEscape(m[0].slice(m[1].length, m[0].length - m[2].length)) + hlSpan(nameColor, hlEscape(m[2]));
			}
			if (rule.kind === "htmltag") return hlHtmlTag(m[0]);
			return hlSpan(rule.color, hlEscape(m[0]));
		}
		function hlLine(line, lang, state) {
			let out = "";
			let pos = 0;
			let block = state.block;
			if (block !== null) {
				const at = line.indexOf(block.close, pos);
				if (at === -1) return [out + hlSpan(block.color, hlEscape(line)), state];
				out += hlSpan(block.color, hlEscape(line.slice(0, at + block.close.length)));
				pos = at + block.close.length;
				block = null;
			}
			while (pos < line.length) {
				let best = null;
				for (const rule of lang.rules) {
					rule.re.lastIndex = pos;
					const m = rule.re.exec(line);
					if (m === null || m.index < pos) continue;
					if (best === null || m.index < best.m.index || m.index === best.m.index && m[0].length > best.m[0].length) best = { rule, m };
				}
				if (best === null) break;
				if (best.m.index > pos) out += hlEscape(line.slice(pos, best.m.index));
				if (best.rule.blockClose !== void 0) {
					out += hlSpan(best.rule.color, hlEscape(best.m[0]));
					pos = best.m.index + best.m[0].length;
					const at = line.indexOf(best.rule.blockClose, pos);
					if (at === -1) {
						out += hlSpan(best.rule.color, hlEscape(line.slice(pos)));
						return [out, { block: { close: best.rule.blockClose, color: best.rule.color } }];
					}
					out += hlSpan(best.rule.color, hlEscape(line.slice(pos, at + best.rule.blockClose.length)));
					pos = at + best.rule.blockClose.length;
					continue;
				}
				out += hlRender(best.rule, best.m);
				pos = best.m.index + best.m[0].length;
				if (best.m[0].length === 0) pos++;
			}
			out += hlEscape(line.slice(pos));
			return [out, { block }];
		}
		function highlightCode(code, lang) {
			if (lang === null || lang === void 0) return null;
			const lines = code.split("\n");
			const parts = [];
			let state = { block: null };
			for (const line of lines) {
				const [html, next] = hlLine(line, lang, state);
				state = next;
				parts.push(`<div class="hl">${html}</div>`);
			}
			return parts.join("");
		}
		const HL_MAX_BYTES = 200 * 1024;

		// ---- file glyphs ----------------------------------------------
		const FILE_GLYPHS = {
			py: ["code", "#3572A5"],
			js: ["code", "#F1E05A"],
			mjs: ["code", "#F1E05A"],
			cjs: ["code", "#F1E05A"],
			jsx: ["code", "#61DAFB"],
			ts: ["code", "#3178C6"],
			tsx: ["code", "#3178C6"],
			vue: ["code", "#42B883"],
			go: ["code", "#00ADD8"],
			rs: ["code", "#DEA584"],
			c: ["code", "#555"],
			h: ["code", "#555"],
			cpp: ["code", "#F34B7D"],
			cc: ["code", "#F34B7D"],
			cxx: ["code", "#F34B7D"],
			java: ["code", "#B07219"],
			php: ["code", "#4F5D95"],
			rb: ["code", "#701516"],
			swift: ["code", "#F05138"],
			kt: ["code", "#A97BFF"],
			html: ["code", "#E34C26"],
			htm: ["code", "#E34C26"],
			xml: ["code", "#F1662A"],
			json: ["braces", "#CBCB41"],
			yml: ["gear", "#CB171E"],
			yaml: ["gear", "#CB171E"],
			toml: ["gear", "#9C4221"],
			ini: ["gear", "#6D8086"],
			env: ["gear", "#F0DB4F"],
			md: ["doc", "#519ABA"],
			markdown: ["doc", "#519ABA"],
			txt: ["doc", "#6D8086"],
			csv: ["doc", "#237346"],
			pdf: ["doc", "#D93025"],
			css: ["hash", "#563D7C"],
			scss: ["hash", "#CD6799"],
			less: ["hash", "#1D365D"],
			sh: ["terminal", "#89E051"],
			bash: ["terminal", "#89E051"],
			zsh: ["terminal", "#89E051"],
			ps1: ["terminal", "#012456"],
			bat: ["terminal", "#C1C12B"],
			cmd: ["terminal", "#C1C12B"],
			sql: ["db", "#E38C00"],
			png: ["image", "#A074C4"],
			jpg: ["image", "#A074C4"],
			jpeg: ["image", "#A074C4"],
			gif: ["image", "#A074C4"],
			webp: ["image", "#A074C4"],
			bmp: ["image", "#A074C4"],
			ico: ["image", "#A074C4"],
			svg: ["image", "#A074C4"],
			zip: ["archive", "#8B8B00"],
			"7z": ["archive", "#8B8B00"],
			rar: ["archive", "#8B8B00"],
			tar: ["archive", "#8B8B00"],
			gz: ["archive", "#8B8B00"],
			exe: ["binary", "#7F7F7F"],
			dll: ["binary", "#7F7F7F"],
			lock: ["lock", "#6D8086"]
		};
		const FILE_GLYPH_PATHS = {
			code: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("polyline", { points: "16 18 22 12 16 6" }), react_jsx_runtime.jsx("polyline", { points: "8 6 2 12 8 18" })] })],
			braces: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }), react_jsx_runtime.jsx("path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" })] })],
			doc: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), react_jsx_runtime.jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), react_jsx_runtime.jsx("path", { d: "M10 9H8" }), react_jsx_runtime.jsx("path", { d: "M16 13H8" }), react_jsx_runtime.jsx("path", { d: "M16 17H8" })] })],
			gear: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }), react_jsx_runtime.jsx("circle", { cx: 12, cy: 12, r: 3 })] })],
			hash: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("line", { x1: 4, y1: 9, x2: 20, y2: 9 }), react_jsx_runtime.jsx("line", { x1: 4, y1: 15, x2: 20, y2: 15 }), react_jsx_runtime.jsx("line", { x1: 10, y1: 3, x2: 8, y2: 21 }), react_jsx_runtime.jsx("line", { x1: 16, y1: 3, x2: 14, y2: 21 })] })],
			terminal: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("polyline", { points: "4 17 10 11 4 5" }), react_jsx_runtime.jsx("line", { x1: 12, y1: 19, x2: 20, y2: 19 })] })],
			db: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }), react_jsx_runtime.jsx("path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }), react_jsx_runtime.jsx("path", { d: "M3 12A9 3 0 0 0 21 12" })] })],
			image: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2 }), react_jsx_runtime.jsx("circle", { cx: 9, cy: 9, r: 2 }), react_jsx_runtime.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] })],
			archive: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("path", { d: "M10 12v-1" }), react_jsx_runtime.jsx("path", { d: "M10 18v-2" }), react_jsx_runtime.jsx("path", { d: "M10 7V6" }), react_jsx_runtime.jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }), react_jsx_runtime.jsx("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }), react_jsx_runtime.jsx("circle", { cx: 10, cy: 20, r: 2 })] })],
			binary: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 14, y: 14, width: 4, height: 6, rx: 1 }), react_jsx_runtime.jsx("rect", { x: 6, y: 4, width: 4, height: 6, rx: 1 }), react_jsx_runtime.jsx("path", { d: "M6 20h4" }), react_jsx_runtime.jsx("path", { d: "M14 10h4" }), react_jsx_runtime.jsx("path", { d: "M6 14h2v6" }), react_jsx_runtime.jsx("path", { d: "M14 4h2v6" })] })],
			lock: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("rect", { x: 3, y: 11, width: 18, height: 11, rx: 2 }), react_jsx_runtime.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] })],
			branch: [react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [react_jsx_runtime.jsx("line", { x1: 6, y1: 3, x2: 6, y2: 15 }), react_jsx_runtime.jsx("circle", { cx: 18, cy: 6, r: 3 }), react_jsx_runtime.jsx("circle", { cx: 6, cy: 18, r: 3 }), react_jsx_runtime.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })] })]
		};
		function fileGlyph(name) {
			const lower = name.toLowerCase();
			if (lower === "dockerfile" || lower === "makefile") return { kind: "gear", color: "#384D54" };
			if (lower === ".gitignore" || lower === ".gitattributes") return { kind: "branch", color: "#F05133" };
			const dot = lower.lastIndexOf(".");
			if (dot > 0) {
				const glyph = FILE_GLYPHS[lower.slice(dot + 1)];
				if (glyph !== void 0) return { kind: glyph[0], color: glyph[1] };
			}
			return { kind: "doc", color: "#6D8086" };
		}
		function FileGlyph({ name }) {
			const glyph = fileGlyph(name);
			return react_jsx_runtime.jsx("svg", {
				className: css.fileGlyph,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: glyph.color,
				strokeWidth: 1.6,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				children: FILE_GLYPH_PATHS[glyph.kind] ?? FILE_GLYPH_PATHS.doc
			});
		}

		// ---- shared helpers -------------------------------------------
		function formatBytes(size) {
			if (size < 1024) return `${size} B`;
			if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
			return `${(size / (1024 * 1024)).toFixed(1)} MB`;
		}
		function errorMessage(reason) {
			return reason instanceof Error ? reason.message : String(reason);
		}

		// ---- reading helpers ------------------------------------------
		/** Normalize a line into a bare chapter number when it looks like a
		 *  heading (第X章 / Chapter N / 序章 / pure number line / `001、title` /
		 *  `书名(第一章)`). Returns the raw number+label (e.g. "001", "第12章")
		 *  or null. Leading markdown `#` prefixes are stripped first. */
		const CN_NUMERALS = "零〇一二三四五六七八九十百千两";
		const CHAPTER_UNITS = "章回节篇集卷部";
		function normalizeChapterLine(line) {
			let t = String(line).trim();
			// strip markdown heading prefix (`## 第一章 ...`)
			t = t.replace(/^#{1,6}\s*/, "");
			if (t === "") return null;
			const titleOf = (raw) => (raw ?? "").trim();
			// `第X章/回/节/卷/篇/集/部` where X is Arabic or Chinese numerals
			let m = t.match(new RegExp(`^(第[0-9一二三四五六七八九十百千零〇两]+[${CHAPTER_UNITS}])(?:\\s*[:：、\\-.· ]+\\s*(.*))?$`));
			if (m !== null) return { label: m[1], title: titleOf(m[2]), kind: "cn" };
			// `书名(第一章)` / `书名（第一章）` / `(第一章)` — chapter marker
			// wrapped in parentheses (full/half width), with optional title after
			m = t.match(new RegExp(`^(.{0,20}?)[(（](第[0-9一二三四五六七八九十百千零〇两]+[${CHAPTER_UNITS}])[)）](?:\\s*[:：、\\-.· ]*\\s*(.*))?$`));
			if (m !== null) return { label: m[2], title: titleOf(m[3]), kind: "cn" };
			// `书名 第一章 ...` — book title prefix separated by space/colon
			m = t.match(new RegExp(`^(.{1,20}?)[\\s:：、-]+(第[0-9一二三四五六七八九十百千零〇两]+[${CHAPTER_UNITS}])(?:\\s*[:：、\\-.· ]*\\s*(.*))?$`));
			if (m !== null && !/^第/.test(m[1])) return { label: m[2], title: titleOf(m[3]), kind: "cn" };
			// `Chapter/Section/Part N` (case-insensitive)
			m = t.match(/^(?:(chapter|section|part)\s+([0-9一二三四五六七八九十百千零〇两]+))(?:\s*[:：\-—.\s]\s*(.*))?$/i);
			if (m !== null) return { label: `${m[1]} ${m[2]}`, title: titleOf(m[3]), kind: "en" };
			// 序章/楔子/引子/尾声/终章/番外/后记/前言/外传
			m = t.match(/^(序章|楔子|引子|尾声|终章|番外(?:篇|章|集)?|后记|前言|外传(?:篇|章)?)(?:\s*[:：、\-.· ]+\s*(.*))?$/);
			if (m !== null) return { label: m[1], title: titleOf(m[2]), kind: "cn" };
			// pure number line `001` or `001、标题` / `001. 标题`
			m = t.match(/^(\d{1,4})(?:\s*[、.．]\s*(.*))?$/);
			if (m !== null) return { label: m[1], title: titleOf(m[2]), kind: "num" };
			return null;
		}

		/** Split text into paragraphs and detect chapter headings.
		 *  Paragraph boundary: a blank line, or a line starting with a full-width
		 *  space (U+3000 — the standard Chinese-novel paragraph indent), which
		 *  lets both blank-line-separated files and no-blank-line files parse
		 *  correctly. A chapter heading is a short, standalone, non-indented
		 *  line at the start of a paragraph that normalizes to a chapter.
		 *  Returns { paragraphs, chapters } where chapters entries are
		 *  { paraIndex, number, title, raw } for jumping. */
		function parseChapters(text) {
			const raw = String(text ?? "").replace(/\r\n/g, "\n");
			const lines = raw.split("\n");
			const paragraphs = [];
			let current = [];
			const flush = () => {
				const content = current.map((line) => line.trim()).join("\n").trim();
				if (content !== "") paragraphs.push(content);
				current = [];
			};
			const chapters = [];
			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];
				const trimmed = line.trim();
				if (trimmed === "") { flush(); continue; }
				const isIndented = line.startsWith("\u3000") || line.startsWith(" ") || line.startsWith("\t");
				// Start a new paragraph at a full-width-space indent
				if (isIndented && current.length > 0) flush();
				// A heading: short, standalone, not indented, at a paragraph start.
				// Parenthesized markers (`书名(第一章)`) are allowed to be indented
				// like body text — some novels format chapter tags that way.
				const isMdHeading = /^#{1,6}\s/.test(trimmed);
				const hasParenMarker = /[(（]第[0-9一二三四五六七八九十百千零〇两]+[章回节篇集卷部][)）]/.test(trimmed);
				const headingCandidate = (!isIndented || hasParenMarker) && (trimmed.length <= 60 || isMdHeading || hasParenMarker) && current.length === 0;
				if (headingCandidate) {
					const hit = normalizeChapterLine(line);
					if (hit !== null) {
						chapters.push({ paraIndex: paragraphs.length, number: hit.label, title: hit.title, raw: trimmed.replace(/^#{1,6}\s*/, "") });
						current.push(line);
						continue;
					}
				}
				current.push(line);
			}
			flush();
			// Give chapters without titles a display fallback
			for (const ch of chapters) {
				if (ch.title === "") ch.title = ch.raw;
			}
			return { paragraphs, chapters };
		}

		/**
		 * Paginate paragraphs by line so body paragraphs can split across
		 * pages (like a printed book): a page is filled as full as possible,
		 * and only a chapter heading forces a fresh page.
		 * Each page is an array of slices:
		 *   { paraIndex, startLine, lineCount, showHeading }
		 * A slice renders `lineCount` lines of `paragraphs[paraIndex]` starting
		 * at line `startLine`; `showHeading` renders the chapter title above it.
		 */
		function paginateByLines(paraLines, headHeights, lineH, pageHeight, chapterStarts) {
			const pages = [];
			let current = [];
			let used = 0;
			const flush = () => {
				if (current.length > 0) {
					pages.push(current);
					current = [];
					used = 0;
				}
			};
			const fitLines = () => Math.max(0, Math.floor((pageHeight - used) / lineH));
			for (let i = 0; i < paraLines.length; i++) {
				const lines = Math.max(1, paraLines[i] | 0);
				const headH = headHeights[i] | 0;
				if (chapterStarts !== void 0 && chapterStarts.has(i) && current.length > 0) {
					// new chapter always begins on a fresh page
					flush();
				}
				// Heading needs room on the page (only the first slice of a
				// paragraph shows the heading).
				if (current.length === 0) {
					// fresh page: heading + as many lines as fit
					let fit = Math.floor((pageHeight - headH) / lineH);
					if (fit <= 0) {
						if (headH > 0) {
							current.push({ paraIndex: i, startLine: 0, lineCount: 0, showHeading: true });
							used = headH;
						}
						flush();
						fit = Math.max(0, Math.floor(pageHeight / lineH));
					}
					const show = Math.min(lines, fit);
					if (show > 0) {
						current.push({ paraIndex: i, startLine: 0, lineCount: show, showHeading: headH > 0 });
						used = headH + show * lineH;
					}
					let remaining = lines - show;
					while (remaining > 0) {
						flush();
						const show2 = Math.min(remaining, Math.max(1, Math.floor(pageHeight / lineH)));
						current.push({ paraIndex: i, startLine: lines - remaining, lineCount: show2, showHeading: false });
						used = show2 * lineH;
						remaining -= show2;
					}
					continue;
				}
				// Page already has content: fill as many lines as fit, then spill.
				const fit = fitLines();
				if (fit <= 0) {
					// Page cannot hold another line (extremely short viewport or
					// a huge line-height): force at least one line onto a fresh
					// page so the loop always makes progress.
					flush();
					const forced = Math.min(lines, Math.max(1, Math.floor(pageHeight / lineH)));
					current.push({ paraIndex: i, startLine: 0, lineCount: forced, showHeading: headH > 0 });
					used = forced * lineH;
					let remaining = lines - forced;
					while (remaining > 0) {
						flush();
						const show2 = Math.min(remaining, Math.max(1, Math.floor(pageHeight / lineH)));
						current.push({ paraIndex: i, startLine: lines - remaining, lineCount: show2, showHeading: false });
						used = show2 * lineH;
						remaining -= show2;
					}
					continue;
				}
				const show = Math.min(lines, fit);
				current.push({ paraIndex: i, startLine: 0, lineCount: show, showHeading: headH > 0 });
				used += show * lineH;
				let remaining = lines - show;
				while (remaining > 0) {
					flush();
					const show2 = Math.min(remaining, Math.max(1, Math.floor(pageHeight / lineH)));
					current.push({ paraIndex: i, startLine: lines - remaining, lineCount: show2, showHeading: false });
					used = show2 * lineH;
					remaining -= show2;
				}
			}
			flush();
			return pages;
		}

		// ---- reading view ---------------------------------------------
		/** Bookmark record: { id, path, paragraph, page, chapterTitle, preview, createdAt } */
		function formatBookmarkTime(ts) {
			if (!(typeof ts === "number" && Number.isFinite(ts))) return "";
			const d = new Date(ts);
			const p = (n) => String(n).padStart(2, "0");
			return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
		}
		function ReadingView({ text, t, fontFamily, fontSize, lineSpacing, bg, margin, state, onState, flipMode, searchQuery, searchActive, searchMatchesRef, path }) {
			const bodyRef = react.useRef(null);
			const measureRef = react.useRef(null);
			const onStateRef = react.useRef(onState);
			onStateRef.current = onState;
			const [dark, setDark] = react.useState(isDarkMode());
			const [scrollPct, setScrollPct] = react.useState(0);
			const scrollTopRef = react.useRef(0);
			react.useEffect(() => {
				const root = document.documentElement;
				if (typeof MutationObserver === "undefined") return;
				const observer = new MutationObserver(() => setDark(isDarkMode()));
				observer.observe(root, { attributes: true, attributeFilter: ["style", "class", "data-theme", "data-mode"] });
				return () => observer.disconnect();
			}, []);
			const parsed = react.useMemo(() => parseChapters(text), [text]);
			const paragraphs = parsed.paragraphs;
			const chapters = parsed.chapters;
			const [measured, setMeasured] = react.useState({ paraLines: [], paraCharSlices: [], headHeights: [], lineH: 1 });
			// One layout snapshot drives both viewport height and content width,
			// so pagination never sees a torn intermediate state while the panel
			// is being resized (which caused the total-page-count flicker).
			const [layout, setLayout] = react.useState({ h: 0, w: 0 });
			const layoutRef = react.useRef({ h: 0, w: 0 });
			react.useEffect(() => {
				const el = bodyRef.current;
				if (el === null) return;
				const update = () => {
					// The body is box-sizing:border-box with `12px <margin>` padding;
					// clientHeight/Width already include that padding, so the inner
					// content area is clientHeight-24 tall and clientWidth-2*margin wide.
					const next = {
						h: Math.max(1, el.clientHeight - 24),
						w: Math.max(1, el.clientWidth - 2 * margin)
					};
					layoutRef.current = next;
					setLayout(next);
				};
				update();
				let ro = null;
				if (typeof ResizeObserver !== "undefined") {
					ro = new ResizeObserver(update);
					ro.observe(el);
				}
				return () => { if (ro !== null) ro.disconnect(); };
			}, [margin]);
			const contentW = layout.w;
			const viewportH = layout.h;
			// Estimate each paragraph's line count with minimal DOM work.
			// Building 19k paragraph nodes and forcing layout for each one is
			// the dominant cost of opening a multi-MB novel, so instead we
			// measure a small calibration sample (first N paragraphs) to learn
			// the average character width, then derive line counts arithmetically
			// — accurate for CJK (every glyph ≈ 1em) and close for Latin text.
			react.useEffect(() => {
				const measure = measureRef.current;
				if (measure === null || contentW <= 0) return;
				measure.style.boxSizing = "border-box";
				measure.style.fontFamily = WRITING_FONTS[fontFamily] || WRITING_FONTS.serif;
				measure.style.fontSize = fontSize + "px";
				measure.style.lineHeight = String(lineSpacing);
				measure.style.width = (contentW + 2 * margin) + "px";
				measure.style.padding = "12px " + margin + "px";
				measure.textContent = "";
				const lineH = Math.max(1, Math.round(fontSize * lineSpacing));
				// 1) Pure-CJK calibration: every CJK glyph is exactly 1em wide,
				//    so characters-per-line = content width / font size. This is
				//    exact for Chinese prose (punctuation aside) and avoids any
				//    per-paragraph DOM layout.
				const probe = document.createElement("p");
				probe.style.margin = "0";
				probe.style.whiteSpace = "nowrap";
				probe.style.position = "absolute";
				probe.style.visibility = "hidden";
				probe.style.fontFamily = WRITING_FONTS[fontFamily] || WRITING_FONTS.serif;
				probe.style.fontSize = fontSize + "px";
				probe.textContent = "字".repeat(80);
				measure.appendChild(probe);
				const cjkW = probe.offsetWidth / 80;
				measure.removeChild(probe);
					// Inner content width excludes the body padding + first-line indent.
					const innerW = Math.max(1, contentW - 2 * fontSize);
					const charsPerLine = Math.max(1, Math.floor(innerW / Math.max(0.5, cjkW)));
					// 2) Split every paragraph into fixed-width character lines and
					//    derive line counts from those slices. Rendering uses the
					//    same slices, so pagination and display can never drift —
					//    a page is always filled exactly to the last line.
					const paraLines = [];
					const paraCharSlices = [];
					const headHeights = [];
					let chIdx = 0;
					for (let i = 0; i < paragraphs.length; i++) {
						// advance chapter pointer (chapters are sorted by paraIndex)
						while (chIdx < chapters.length - 1 && chapters[chIdx + 1].paraIndex <= i) chIdx++;
						const ch = chapters[chIdx].paraIndex === i ? chapters[chIdx] : void 0;
						const isChapterLine = ch !== void 0 && ch.raw === paragraphs[i].trim();
						// heading block: 12px font, 4px vertical padding each side,
						// roughly 1.6 line-height → ~27px incl. its own line box.
						headHeights.push(ch !== void 0 ? Math.round(12 * 1.6 + 8) : 0);
						if (isChapterLine) {
							paraLines.push(1);
							paraCharSlices.push([String(paragraphs[i] ?? "").trim()]);
						} else {
							// Count only visible characters; newlines inside a
							// paragraph occupy no width (they just break lines).
							const text = String(paragraphs[i] ?? "").replace(/\n/g, "");
							const chars = Math.max(1, text.length);
							const slices = [];
							for (let off = 0; off < chars; off += charsPerLine) {
								slices.push(text.slice(off, off + charsPerLine));
							}
							paraLines.push(Math.max(1, slices.length));
							paraCharSlices.push(slices);
						}
					}
					setMeasured({ paraLines, paraCharSlices, headHeights, lineH });
				}, [paragraphs, chapters, fontFamily, fontSize, lineSpacing, contentW, margin]);
			// keep measured paragraph count in sync with the content (avoids
			// stale layout when the file changes)
			const chapterStarts = react.useMemo(() => new Set(chapters.map((c) => c.paraIndex)), [chapters]);
			const pagesRef = react.useRef([]);
			const pages = react.useMemo(() => {
				if (measured.paraLines.length !== paragraphs.length || viewportH <= 0) return pagesRef.current;
				const lineH = measured.lineH;
				const safety = Math.round(fontSize * lineSpacing);
				const next = paginateByLines(measured.paraLines, measured.headHeights, lineH, Math.max(1, viewportH - safety), chapterStarts);
				pagesRef.current = next;
				return next;
			}, [paragraphs, measured, viewportH, chapterStarts, fontSize, lineSpacing]);
			const [pageIndex, setPageIndex] = react.useState(0);
			const pageCount = pages.length;
			// ---- invisible progress bookmark ----------------------------
			// A single auto-updated marker tracks the real reading position.
			// It is refreshed only by natural paging (prev/next/wheel/space/
			// progress-bar). Programmatic jumps (search, page-jump, TOC,
			// explicit bookmarks) do NOT move it — they record the position
			// they left, so the "返回原进度" chip can restore it.
			const naturalFlipRef = react.useRef(false);
			const returnTargetRef = react.useRef(null);
			const returnFlipsRef = react.useRef(0);
			const [returnChip, setReturnChip] = react.useState(null);
			// A natural flip commits to the new spot: after three of them (or
			// three viewport-heights of scrolling, handled in onScroll) the
			// "返回原进度" chip is dropped and the new position becomes the
			// reference point.
			const markNaturalFlip = () => {
				naturalFlipRef.current = true;
				if (returnTargetRef.current !== null) {
					returnFlipsRef.current += 1;
					if (returnFlipsRef.current >= 3) {
						returnTargetRef.current = null;
						setReturnChip(null);
					}
				}
			};
			const navigatedAway = (fromParagraph) => {
				naturalFlipRef.current = false;
				if (fromParagraph !== null && Number.isFinite(fromParagraph)) {
					returnTargetRef.current = fromParagraph;
					returnFlipsRef.current = 0;
					setReturnChip({ paragraph: fromParagraph });
				}
			};
			// When the panel is resized the page count changes; keep the current
			// position valid (clamp) and try to preserve the reading paragraph.
			react.useEffect(() => {
				if (pageCount === 0) return;
				setPageIndex((v) => {
					if (v >= pageCount) return pageCount - 1;
					return v;
				});
			}, [pageCount]);
			// Re-arm progress restoration whenever the flip mode changes. The
			// reader is not remounted on mode switch (key is the file path), so
			// restoredRef would otherwise stay true from the first mode and the
			// other mode would never seek back to the saved paragraph. The saved
			// position is keyed by paragraph (an absolute index, valid in both
			// paged and scroll modes), so resetting lets the restore effect below
			// relocate it in whichever mode is now active.
			react.useEffect(() => {
				restoredRef.current = false;
			}, [flipMode]);
			// restore saved progress once layout settles. Note: `state` arrives
			// asynchronously (apiStateGet) and `pages` is only ready after the
			// paragraph measurement effect runs — so the restore must wait until
			// BOTH are available, otherwise the reader would always start at
			// page 1 (the first effect run sees empty pages and gives up).
			const restoredRef = react.useRef(false);
			react.useEffect(() => {
				if (state === null || typeof state !== "object") return;
				// `state` is the readingState object { progress, bookmarks }; the
				// reading position lives on state.progress.paragraph.
				const savedParagraph = state.progress != null && typeof state.progress === "object" ? state.progress.paragraph : null;
				if (!(typeof savedParagraph === "number" && Number.isFinite(savedParagraph))) return;
				if (restoredRef.current) return;
				if (flipMode === "scroll") {
					const el = bodyRef.current;
					if (el !== null) {
						const target = el.querySelector(`[data-para-index="${savedParagraph}"]`);
						if (target !== null) {
							el.scrollTop = target.offsetTop - el.offsetTop - 12;
							restoredRef.current = true;
						}
					}
					return;
				}
				if (pages.length === 0) return; // not laid out yet; wait for next run
				const idx = pages.findIndex((page) => page.some((s) => s.paraIndex === savedParagraph));
				if (idx >= 0) {
					// Auto-jump to the saved progress page on entry. This is a
					// restore, not a navigation away from a reading position, so
					// clear any lingering "return to progress" chip and mark the
					// jump as a natural position (so progress savings keep working).
					returnTargetRef.current = null;
					setReturnChip(null);
					naturalFlipRef.current = true;
					setPageIndex(idx);
					restoredRef.current = true;
				}
			}, [pageCount, pages, state, flipMode]);
			const saveProgress = react.useRef(null);
			// Write the current position straight to disk (via the host API)
			// after a short debounce. Doing this inside ReadingView — instead of
			// the parent's readingMode-gated effect — means progress survives
			// mode switches, panel closes, and app shutdown as long as the
			// component was alive long enough for one save.
			const persistProgress = (progressPatch, bookmarkList) => {
				const bookmarks = Array.isArray(bookmarkList) ? bookmarkList : (Array.isArray(state?.bookmarks) ? state.bookmarks : []);
				apiStateSet(path, { progress: progressPatch ?? null, bookmarks }).catch(() => {});
			};
			react.useEffect(() => {
				if (saveProgress.current !== null) window.clearTimeout(saveProgress.current);
				if (flipMode === "scroll") {
					if (scrollPct === 0) return;
					if (!naturalFlipRef.current) return;
					const paragraph = currentParagraph();
					if (paragraph === null) return;
					const now = Date.now();
					const progress = { paragraph, page: -1, totalPages: -1, scrollPct, chapterIndex: chapters.findIndex((c) => c.paraIndex > paragraph) - 1, chapterTitle: chapters.find((c) => c.paraIndex <= paragraph)?.title ?? "", updatedAt: now };
					const existingMarks = Array.isArray(state?.bookmarks) ? state.bookmarks : [];
					const updatedMarks = [...existingMarks.filter((b) => b.kind !== "progress"), { id: "bm-progress", kind: "progress", path: "", paragraph, page: -1, chapterTitle: progress.chapterTitle, preview: "", time: now, createdAt: now }];
					saveProgress.current = window.setTimeout(() => {
						onStateRef.current({ progress, bookmarks: updatedMarks });
						persistProgress(progress, updatedMarks);
					}, 500);
					return () => { if (saveProgress.current !== null) window.clearTimeout(saveProgress.current); };
				}
				if (pageCount === 0) return;
				if (!naturalFlipRef.current) return;
				const currentPage = pages[pageIndex] ?? [];
				const paragraph = currentPage.length > 0 ? currentPage[0].paraIndex : 0;
				let chapterIndex = -1;
				let chapterTitle = "";
				for (let i = chapters.length - 1; i >= 0; i--) {
					if (chapters[i].paraIndex <= paragraph) { chapterIndex = i; chapterTitle = chapters[i].title; break; }
				}
				const progress = { paragraph, page: pageIndex, totalPages: pageCount, chapterIndex, chapterTitle, updatedAt: Date.now() };
				// Update the visible progress bookmark (kind: "progress") with
				// the new position and timestamp, alongside the silent progress.
				const now = Date.now();
				const existingMarks = Array.isArray(state?.bookmarks) ? state.bookmarks : [];
				const marksWithoutProgress = existingMarks.filter((b) => b.kind !== "progress");
				const updatedMarks = [...marksWithoutProgress, { id: "bm-progress", kind: "progress", path: "", paragraph, page: flipMode === "scroll" ? -1 : pageIndex, chapterTitle, preview: "", time: now, createdAt: now }];
				saveProgress.current = window.setTimeout(() => {
					onStateRef.current({ progress, bookmarks: updatedMarks });
					persistProgress(progress, updatedMarks);
				}, 500);
				return () => { if (saveProgress.current !== null) window.clearTimeout(saveProgress.current); };
			}, [pageIndex, pageCount, pages, paragraphs, chapters, flipMode, scrollPct]);
			const jumpToParagraph = (paraIndex) => {
				const from = currentParagraph();
				if (flipMode === "scroll") {
					const el = bodyRef.current;
					if (el === null) return;
					navigatedAway(from);
					const target = el.querySelector(`[data-para-index="${paraIndex}"]`);
					if (target !== null) {
						el.scrollTop = target.offsetTop - el.offsetTop - 12;
					}
					return;
				}
				navigatedAway(from);
				const idx = pages.findIndex((page) => page.some((s) => s.paraIndex === paraIndex));
				if (idx >= 0) setPageIndex(idx);
			};
			const currentParagraph = () => {
				if (flipMode === "scroll") {
					const el = bodyRef.current;
					if (el === null) return null;
					// find the paragraph at the top of the viewport: use the
					// paragraphs' DOM order and the scroll position
					const paras = el.querySelectorAll("p");
					for (const p of paras) {
						const r = p.getBoundingClientRect();
						if (r.bottom > el.getBoundingClientRect().top + 8) {
							const idx = Number(p.dataset.paraIndex);
							return Number.isFinite(idx) ? idx : null;
						}
					}
					return null;
				}
				const p = pages[pageIndex] ?? [];
				return p.length > 0 ? p[0].paraIndex : null;
			};
			// ---- immediate progress flush ---------------------------------
			// The debounced saves above can be lost when the app (or the tab)
			// closes before the timer fires, so flush the current position
			// synchronously on unload/hide and write it straight to disk.
			const latestReadingStateRef = react.useRef(state);
			latestReadingStateRef.current = state;
			const flushProgressRef = react.useRef(null);
			flushProgressRef.current = () => {
				if (typeof path !== "string" || path === "") return;
				const paragraph = currentParagraph();
				if (paragraph === null) return;
				let chapterIndex = -1;
				let chapterTitle = "";
				for (let i = chapters.length - 1; i >= 0; i--) {
					if (chapters[i].paraIndex <= paragraph) { chapterIndex = i; chapterTitle = chapters[i].title; break; }
				}
				const progress = flipMode === "scroll"
					? { paragraph, page: -1, totalPages: -1, scrollPct, chapterIndex, chapterTitle, updatedAt: Date.now() }
					: { paragraph, page: pageIndex, totalPages: pageCount, chapterIndex, chapterTitle, updatedAt: Date.now() };
				const bookmarks = Array.isArray(latestReadingStateRef.current?.bookmarks) ? latestReadingStateRef.current.bookmarks : [];
				apiStateSet(path, { progress, bookmarks }).catch(() => {});
			};
			react.useEffect(() => {
				const onHide = () => { if (typeof flushProgressRef.current === "function") flushProgressRef.current(); };
				const onVisibility = () => { if (document.visibilityState === "hidden") onHide(); };
				window.addEventListener("pagehide", onHide);
				window.addEventListener("beforeunload", onHide);
				document.addEventListener("visibilitychange", onVisibility);
				return () => {
					window.removeEventListener("pagehide", onHide);
					window.removeEventListener("beforeunload", onHide);
					document.removeEventListener("visibilitychange", onVisibility);
					// Component unmounts (mode switch, file close, panel close):
					// flush the current position immediately so the debounced
					// timer being cleared here cannot drop the last page.
					onHide();
				};
			}, []);
			react.useEffect(() => {
				const el = bodyRef.current;
				if (el === null) return;
				const onKey = (event) => {
					// Typing into the page-jump input (or any other field) must
					// not be hijacked as a page flip.
					if (event.target instanceof HTMLElement && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable)) return;
					if (flipMode === "scroll") {
						markNaturalFlip();
						if (event.key === "PageDown" || event.key === " ") {
							event.preventDefault();
							el.scrollBy({ top: el.clientHeight * 0.9, behavior: "smooth" });
						} else if (event.key === "PageUp") {
							event.preventDefault();
							el.scrollBy({ top: -el.clientHeight * 0.9, behavior: "smooth" });
						} else if (event.key === "Home") {
							event.preventDefault();
							el.scrollTop = 0;
						} else if (event.key === "End") {
							event.preventDefault();
							el.scrollTop = el.scrollHeight;
						}
						return;
					}
					markNaturalFlip();
					if (event.key === "PageDown" || event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === " " || event.key === "Enter") {
						event.preventDefault();
						setPageIndex((v) => Math.min(pageCount - 1, v + 1));
					} else if (event.key === "PageUp" || event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "Backspace") {
						event.preventDefault();
						setPageIndex((v) => Math.max(0, v - 1));
					} else if (event.key === "Home") {
						event.preventDefault();
						setPageIndex(0);
					} else if (event.key === "End") {
						event.preventDefault();
						setPageIndex(pageCount - 1);
					}
				};
				// In paged mode the page is exactly one viewport tall — never
				// scroll. Block the wheel so the page cannot drift under the bar.
				const onWheel = (event) => {
					if (flipMode !== "scroll") {
						event.preventDefault();
						markNaturalFlip();
						const dir = (event.deltaY || event.deltaX) > 0 ? 1 : -1;
						setPageIndex((v) => Math.max(0, Math.min(pageCount - 1, v + dir)));
					}
				};
				el.addEventListener("keydown", onKey);
				el.addEventListener("wheel", onWheel, { passive: false });
				return () => {
					el.removeEventListener("keydown", onKey);
					el.removeEventListener("wheel", onWheel);
				};
			}, [pageCount, flipMode]);
			const isBookmarkedHere = (() => {
				const paragraph = currentParagraph();
				if (paragraph === null) return false;
				// The auto progress marker (kind: "progress") always sits at the
				// current page, so it must not drive the add/remove-bookmark
				// button — only user-defined bookmarks count here.
				return (state?.bookmarks ?? []).some((b) => b.kind !== "progress" && b.paragraph === paragraph);
			})();
			const addBookmark = () => {
				const paragraph = currentParagraph();
				if (paragraph === null) return;
				const existing = state?.bookmarks ?? [];
				if (existing.some((b) => b.kind !== "progress" && b.paragraph === paragraph)) return;
				const preview = paragraphs[paragraph]?.slice(0, 24) ?? "";
				const list = [...existing, { id: `bm-${Date.now()}`, path: "", paragraph, page: flipMode === "scroll" ? -1 : pageIndex, chapterTitle: chapters.find((c) => c.paraIndex <= paragraph)?.title ?? "", preview, createdAt: Date.now() }];
				onState({ bookmarks: list });
				persistProgress(state?.progress ?? null, list);
			};
			const removeBookmarkHere = () => {
				const paragraph = currentParagraph();
				if (paragraph === null) return;
				// Remove only the user's bookmark at this paragraph; the auto
				// progress marker is never deleted.
				const list = (state?.bookmarks ?? []).filter((b) => b.kind === "progress" || b.paragraph !== paragraph);
				onState({ bookmarks: list });
				persistProgress(state?.progress ?? null, list);
			};
			const [pop, setPop] = react.useState(null);
			// Close the TOC/bookmark popovers when clicking anywhere outside
			// them (or their trigger buttons). The mousedown capture runs before
			// the trigger's onClick, so re-clicking the same button still toggles.
			react.useEffect(() => {
				if (pop === null) return;
				const onDown = (event) => {
					if (!(event.target instanceof Element)) return;
					if (event.target.closest("[data-rh-pop]") !== null) return;
					if (event.target.closest("[data-rh-pop-trigger]") !== null) return;
					setPop(null);
					setPopAnchor(null);
				};
				document.addEventListener("mousedown", onDown, true);
				return () => document.removeEventListener("mousedown", onDown, true);
			}, [pop]);
			// When the toolbar search moves to a new match (reading mode), jump
			// to that paragraph. This is a programmatic jump: it must not move
			// the invisible progress bookmark, and it offers a way back.
			const searchActiveRef = react.useRef(searchActive);
			react.useEffect(() => {
				const prev = searchActiveRef.current;
				searchActiveRef.current = searchActive;
				if (searchActive === prev) return;
				const m = searchMatchesRef.current[searchActive];
				if (m === void 0) return;
				// map the global char offset to a paragraph index
				const full = String(text ?? "");
				let paraIndex = -1;
				let acc = 0;
				for (let i = 0; i < paragraphs.length; i++) {
					const len = String(paragraphs[i] ?? "").length + 1;
					if (m.start < acc + len) { paraIndex = i; break; }
					acc += len;
				}
				if (paraIndex < 0) return;
				// Defer the jump out of the effect so the searchActive
				// transition settles before we navigate (prevents feedback
				// re-render loops in paged mode).
				const timer = window.setTimeout(() => { jumpToParagraph(paraIndex); }, 0);
				return () => window.clearTimeout(timer);
			}, [searchActive]);
			const [popAnchor, setPopAnchor] = react.useState(null);
			const openPop = (which, event) => {
				const target = event !== void 0 && event !== null ? event.currentTarget : null;
				if (pop === which) {
					setPop(null);
					setPopAnchor(null);
					return;
				}
				setPop(which);
				if (target !== null) {
					const r = target.getBoundingClientRect();
					// Open upward: the popover's bottom sits just above the button,
					// so it grows toward the top of the window and never spills
					// below the viewport.
					setPopAnchor({ x: Math.round(r.left), bottom: Math.round(window.innerHeight - r.top + 6) });
				} else {
					setPopAnchor(null);
				}
			};
			const [jumpDraft, setJumpDraft] = react.useState("");
			const onJumpKey = (event) => {
				if (event.key !== "Enter") return;
				const n = parseInt(jumpDraft, 10);
				if (Number.isFinite(n) && n >= 1 && n <= pageCount) {
					navigatedAway(currentParagraph());
					setPageIndex(n - 1);
				}
			};
			const pct = pageCount > 0 ? Math.round(((pageIndex + 1) / pageCount) * 100) : 0;
				const style = {
					fontFamily: WRITING_FONTS[fontFamily] || WRITING_FONTS.serif,
					fontSize: fontSize + "px",
					lineHeight: String(lineSpacing),
					background: writingBgColor(bg, dark),
					padding: "12px " + margin + "px",
					overflow: flipMode === "scroll" ? "auto" : "hidden",
					// The "返回原进度" chip is positioned against the reader body
					// (bottom-center of the text area), so the body anchors it.
					position: "relative"
				};
			return react_jsx_runtime.jsxs("div", {
				className: css.readingRoot,
				children: [
					react_jsx_runtime.jsx("div", {
						ref: bodyRef,
						tabIndex: 0,
						className: css.readingBody,
						style: style,
						"aria-label": "reader",
						onScroll: flipMode === "scroll" ? (event) => {
							const el = event.target;
							const max = el.scrollHeight - el.clientHeight;
							scrollTopRef.current = el.scrollTop;
							setScrollPct(max > 0 ? Math.round((el.scrollTop / max) * 100) : 0);
							// user scrolls count as natural progress, but a
							// programmatic jump (which set scrollTop right before)
							// must not overwrite the invisible progress marker
							if (returnTargetRef.current === null && naturalFlipRef.current) {
								// already marked by wheel/key handlers; keep
							} else if (returnTargetRef.current === null) {
								naturalFlipRef.current = true;
							}
							// A real user scroll that moves more than three
							// viewport-heights away means the reader has moved on
							// for good: drop the "返回原进度" chip.
							if (returnTargetRef.current !== null) {
								const target = el.querySelector(`[data-para-index="${returnTargetRef.current}"]`);
								if (target !== null) {
									const delta = Math.abs(el.scrollTop - (target.offsetTop - el.offsetTop - 12));
									if (delta > el.clientHeight * 3) {
										returnTargetRef.current = null;
										setReturnChip(null);
									}
								}
							}
						} : void 0,
						children: [
							flipMode === "scroll"
							? paragraphs.map((p, pi) => {
							const chapter = chapters.find((c) => c.paraIndex === pi);
							// A chapter line is rendered as the heading only; skip
							// duplicating it as a body paragraph.
							const isChapterLine = chapter !== void 0 && chapter.raw === p.trim();
							return react_jsx_runtime.jsxs("div", {
								children: [
									chapter !== void 0 && react_jsx_runtime.jsx("div", { className: css.readingHeading, "data-para-index": String(pi), children: chapter.raw }),
									!isChapterLine && react_jsx_runtime.jsx("p", { className: css.readingPara, "data-para-index": String(pi), style: { margin: "0 0 0.5em" }, children: p })
								]
							}, pi);
						})
						: (() => {
							const visible = pages[pageIndex] ?? [];
							const q = searchQuery;
							const ql = q.toLowerCase();
							const renderSliced = (pi, text) => {
								if (q === "") return text;
								const lower = text.toLowerCase();
								const parts = [];
								let i = 0;
								let idx = lower.indexOf(ql, i);
								while (idx !== -1 && parts.length < 200) {
									if (idx > i) parts.push(text.slice(i, idx));
									parts.push(react_jsx_runtime.jsx("mark", { className: css.readingMark, children: text.slice(idx, idx + q.length) }, `${pi}-${idx}`));
									i = idx + q.length;
									idx = lower.indexOf(ql, i);
								}
								if (i < text.length) parts.push(text.slice(i));
								return parts;
							};
							return visible.map((slice, si) => {
								const pi = slice.paraIndex;
								const chapter = chapters.find((c) => c.paraIndex === pi);
								const text = paragraphs[pi] ?? "";
								// Render the exact character slices produced by the
								// measurement step, so every page is filled to the
								// last line and paragraphs split at character
								// boundaries (CJK) instead of whole paragraphs.
								const charSlices = measured.paraCharSlices[pi] ?? [];
								const start = slice.startLine | 0;
								const count = Math.max(1, slice.lineCount | 0);
								const sliced = charSlices.length > 0
									? charSlices.slice(start, start + count).join("\n")
									: String(text).split("\n").slice(start, start + count).join("\n");
								return react_jsx_runtime.jsxs("div", {
									children: [
										slice.showHeading && chapter !== void 0 && react_jsx_runtime.jsx("div", { className: css.readingHeading, children: chapter.raw }),
										react_jsx_runtime.jsx("p", { className: css.readingPara, "data-para-index": String(pi), "data-slice": String(si), children: renderSliced(pi, sliced) })
									]
								}, `${pi}-${si}`);
								});
							})(),
							returnChip !== null && react_jsx_runtime.jsx("div", {
								"data-rh-pop": "chip",
								className: "rh_returnChip",
								style: {
									position: "absolute",
									left: "50%",
									bottom: 16,
									transform: "translateX(-50%)",
									zIndex: 20,
									display: "inline-flex",
									alignItems: "center",
									gap: 8,
									padding: "6px 14px",
									borderRadius: 999,
									background: "var(--dsw-specific-menu)",
									border: "1px solid var(--dsw-alias-border-inverted)",
									boxShadow: "var(--dsw-shadow-lv3)",
									fontSize: 12,
									color: "var(--dsw-alias-label-primary)",
									cursor: "pointer"
								},
								onClick: () => {
									const target = returnTargetRef.current;
									returnTargetRef.current = null;
									setReturnChip(null);
									if (target === null) return;
									if (flipMode === "scroll") {
										const el = bodyRef.current;
										if (el === null) return;
										naturalFlipRef.current = false;
										el.scrollTop = (el.querySelector(`[data-para-index="${target}"]`)?.offsetTop ?? el.scrollTop) - el.offsetTop - 12;
										return;
									}
									naturalFlipRef.current = false;
									const idx = pages.findIndex((page) => page.some((s) => s.paraIndex === target));
									if (idx >= 0) setPageIndex(idx);
								},
								children: t("reading.returnProgress")
							})
						]
					}),
					react_jsx_runtime.jsx("div", {
						className: css.readingBar,
						children: [
								flipMode !== "scroll" && react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.editorToolBtn,
									disabled: pageIndex <= 0,
									onClick: () => { markNaturalFlip(); setPageIndex((v) => Math.max(0, v - 1)); },
									children: t("reading.prevPage")
								}),
								flipMode !== "scroll" && react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.editorToolBtn,
									disabled: pageCount === 0 || pageIndex >= pageCount - 1,
									onClick: () => { markNaturalFlip(); setPageIndex((v) => Math.min(pageCount - 1, v + 1)); },
									children: t("reading.nextPage")
								}),
								react_jsx_runtime.jsx("div", {
									className: css.readingTrack,
									style: { position: "relative" },
									onClick: (event) => {
										const rect = event.currentTarget.getBoundingClientRect();
										const ratio = (event.clientX - rect.left) / Math.max(1, rect.width);
										// Clicking the progress bar is a programmatic jump:
										// record where the reader was so the "返回原进度"
										// chip can offer to come back.
										navigatedAway(currentParagraph());
										if (flipMode === "scroll") {
											const el = bodyRef.current;
											if (el !== null) {
												const max = el.scrollHeight - el.clientHeight;
												el.scrollTop = Math.round(ratio * max);
											}
										} else {
											setPageIndex(Math.max(0, Math.min(pageCount - 1, Math.round(ratio * (pageCount - 1)))));
										}
									},
									children: react_jsx_runtime.jsx("div", {
										className: css.readingFill,
										style: { width: (flipMode === "scroll" ? scrollPct : (pageCount > 1 ? (pageIndex / (pageCount - 1)) * 100 : 0)) + "%" }
									})
								}),
								flipMode === "scroll"
									? react_jsx_runtime.jsx("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }, children: `${scrollPct}%` })
									: react_jsx_runtime.jsx("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }, children: `${pageIndex + 1}/${pageCount} · ${pct}%` }),
								flipMode !== "scroll" && react_jsx_runtime.jsx("input", {
								type: "text",
								inputMode: "numeric",
								className: css.readingJumpInput,
								placeholder: t("reading.pageJump"),
								title: t("reading.pageJumpHint"),
								value: jumpDraft,
								onChange: (event) => setJumpDraft(event.target.value.replace(/[^0-9]/g, "")),
								onKeyDown: onJumpKey
							}),
							react_jsx_runtime.jsxs("div", {
								style: { position: "relative" },
								children: [
							react_jsx_runtime.jsx("button", {
								type: "button",
								className: css.editorToolBtn,
								title: t("reading.chapters"),
								"data-rh-pop-trigger": "toc",
								onClick: (event) => openPop("toc", event),
								children: t("reading.toc")
							}),
							pop === "toc" && typeof document !== "undefined" && react_dom.createPortal(react_jsx_runtime.jsx("div", {
								"data-rh-pop": "menu",
								className: css.readingPop,
								style: popAnchor !== null ? { left: popAnchor.x, bottom: popAnchor.bottom } : void 0,
								children: chapters.length === 0 ? react_jsx_runtime.jsx("div", { className: css.readingPopEmpty, children: t("reading.noChapters") }) : react_jsx_runtime.jsx("div", {
									className: css.readingPopList,
									children: chapters.map((ch, i) => react_jsx_runtime.jsx("button", {
										type: "button",
										className: css.readingPopItem,
										onClick: () => { jumpToParagraph(ch.paraIndex); setPop(null); setPopAnchor(null); },
										children: [
											react_jsx_runtime.jsx("span", { className: css.readingPopTitle, children: ch.number + (ch.title !== "" && ch.title !== ch.raw ? " " + ch.title : "") })
										]
									}, i))
								})
							}), document.body)
								]
							}),
							react_jsx_runtime.jsxs("div", {
								style: { position: "relative" },
								children: [
								react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.editorToolBtn,
									title: t("reading.bookmarks"),
									"data-rh-pop-trigger": "bookmarks",
									onClick: (event) => openPop("bookmarks", event),
									children: t("reading.bookmarks")
								}),
									pop === "bookmarks" && typeof document !== "undefined" && react_dom.createPortal(react_jsx_runtime.jsx("div", {
										"data-rh-pop": "menu",
										className: css.readingPop,
										style: popAnchor !== null ? { left: popAnchor.x, bottom: popAnchor.bottom } : void 0,
										children: (() => {
											// The invisible progress marker is surfaced here as a
											// pinned bookmark that shows when it was recorded —
											// always first, labelled by its timestamp.
											const all = state?.bookmarks ?? [];
											const progressMark = all.find((b) => b.kind === "progress");
											const manual = all.filter((b) => b.kind !== "progress");
											const items = [];
											if (progressMark !== void 0) {
												items.push(react_jsx_runtime.jsxs("div", {
													className: css.readingPopItem,
													onClick: () => { jumpToParagraph(progressMark.paragraph); setPop(null); setPopAnchor(null); },
													children: [
														react_jsx_runtime.jsx("span", { className: css.readingPopTitle, children: "⏱ " + (progressMark.time != null ? formatBookmarkTime(progressMark.time) : "") }),
														react_jsx_runtime.jsx("span", { style: { fontSize: 10, color: "var(--dsw-alias-label-tertiary)", flex: "none" }, children: t("reading.progressMark") })
													]
												}, "bm-progress"));
											}
											if (all.length === 0) {
												return react_jsx_runtime.jsx("div", { className: css.readingPopEmpty, children: t("reading.noBookmarks") });
											}
											items.push(...manual.map((b) => react_jsx_runtime.jsxs("div", {
												className: css.readingPopItem,
												onClick: () => { jumpToParagraph(b.paragraph); setPop(null); setPopAnchor(null); },
												children: [
													react_jsx_runtime.jsx("span", { className: css.readingPopTitle, children: (b.chapterTitle !== "" ? b.chapterTitle + " · " : "") + b.preview }),
													react_jsx_runtime.jsx("button", {
														type: "button",
														className: css.readingPopDel,
														title: "删除",
														"aria-label": "删除书签",
													onClick: (event) => {
														event.stopPropagation();
														const list = (state?.bookmarks ?? []).filter((x) => x.id !== b.id);
														onState({ bookmarks: list });
														persistProgress(state?.progress ?? null, list);
													},
														children: react_jsx_runtime.jsx("svg", {
															width: 13,
															height: 13,
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															strokeWidth: 1.8,
															strokeLinecap: "round",
															strokeLinejoin: "round",
															"aria-hidden": "true",
															children: [
																react_jsx_runtime.jsx("path", { d: "M3 6h18" }),
																react_jsx_runtime.jsx("path", { d: "M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" }),
																react_jsx_runtime.jsx("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
																react_jsx_runtime.jsx("path", { d: "M10 11v6" }),
																react_jsx_runtime.jsx("path", { d: "M14 11v6" })
															]
														})
													})
												]
											}, b.id)));
											return react_jsx_runtime.jsx("div", { className: css.readingPopList, children: items });
										})()
									}), document.body)
									]
									}),
										react_jsx_runtime.jsx("button", {
										type: "button",
										className: css.editorToolBtn,
										onClick: isBookmarkedHere ? removeBookmarkHere : addBookmark,
									children: isBookmarkedHere ? t("reading.removeBookmark") : t("reading.addBookmark")
								})
							]
						}),
					react_jsx_runtime.jsx("div", {
						ref: measureRef,
					"aria-hidden": "true",
					style: { position: "absolute", visibility: "hidden", pointerEvents: "none", whiteSpace: "pre-wrap", overflowWrap: "anywhere", left: "-9999px", top: "0", width: 0, boxSizing: "border-box" }
				})
				]
			});
		}

		// ---- editor ----------------------------------------------------
		function FilePreviewBody({ preview, t, draft, dirty, saving, error, savedSize, editable, onChange, onSave, writingMode, writingFontSize, writingFontFamily, onToggleWriting, onSetFontSize, onSetFontFamily, onFormat, showRule, onToggleRule, writingBg, writingLineSpacing, writingMargin, onSetBg, onSetLineSpacing, onSetMargin, readingMode, onToggleReading, readingState, onReadingState, flipMode, onSetFlipMode }) {
			const gutterRef = react.useRef(null);
			const backdropRef = react.useRef(null);
			const editorRef = react.useRef(null);
			const [hl, setHl] = react.useState(null);
			const [composing, setComposing] = react.useState(false);
			const [dark, setDark] = react.useState(isDarkMode());
			react.useEffect(() => {
				const root = document.documentElement;
				if (typeof MutationObserver === "undefined") return;
				const observer = new MutationObserver(() => {
					setDark(isDarkMode());
				});
				observer.observe(root, { attributes: true, attributeFilter: ["style", "class", "data-theme", "data-mode"] });
				return () => observer.disconnect();
			}, []);
			const [layoutOpen, setLayoutOpen] = react.useState(false);
			const [flipMenuOpen, setFlipMenuOpen] = react.useState(false);
			react.useEffect(() => {
				if (!layoutOpen && !flipMenuOpen) return;
				const onDown = (event) => {
					if (event.target instanceof Element) {
						if (event.target.closest("[data-layout]") === null) setLayoutOpen(false);
						if (event.target.closest("[data-flip]") === null) setFlipMenuOpen(false);
					}
				};
				window.addEventListener("mousedown", onDown, true);
				return () => window.removeEventListener("mousedown", onDown, true);
			}, [layoutOpen, flipMenuOpen]);
			const lang = hlLanguageOf(preview.name);
			const hlEnabled = !writingMode && lang !== null && draft.length <= HL_MAX_BYTES;
			react.useEffect(() => {
				if (!hlEnabled) {
					setHl(null);
					return;
				}
				const timer = window.setTimeout(() => {
					setHl(highlightCode(draft, HL_LANGUAGES[lang]));
				}, 80);
				return () => {
					window.clearTimeout(timer);
				};
			}, [draft, lang, hlEnabled]);
			const rulePeriod = Math.round(writingFontSize * writingLineSpacing);
			const ruleColor = (() => {
				if (typeof document === "undefined" || typeof getComputedStyle !== "function") return "rgba(127,127,127,.28)";
				try {
					const value = getComputedStyle(document.documentElement).getPropertyValue("--dsw-alias-border-l2").trim();
					// The rule lines must be fainter than the text/background
					// contrast: overlay the border tone at ~30% alpha.
					return value === "" ? "rgba(127,127,127,.28)" : `color-mix(in srgb, ${value} 30%, transparent)`;
				} catch { return "rgba(127,127,127,.28)"; }
			})();
			// The rule lines are drawn as a single tiling gradient overlay
			// (see the editorOverlay child), shifted with the textarea scroll —
			// the browser rasterizes them natively, no per-line DOM nodes.
			const numbers = react.useMemo(() => draft === "" ? "1" : draft.split("\n").map((_, index) => String(index + 1)).join("\n"), [draft]);
			const highlighted = hl !== null && !composing;
			// ---- in-text search (shared by writing + reading modes) ------
			// Matches are computed over the whole draft; the active match is
			// rendered highlighted in the editor/reader. Writing mode adds
			// replace / replace-all.
			const [searchOpen, setSearchOpen] = react.useState(false);
			const [searchAnchor, setSearchAnchor] = react.useState(null);
			const [searchQuery, setSearchQuery] = react.useState("");
			const [searchReplace, setSearchReplace] = react.useState("");
			const [searchActive, setSearchActive] = react.useState(0);
			const searchMatchesRef = react.useRef([]);
			// Close the (portaled) search panel when clicking anywhere outside it
			// or its trigger button.
			react.useEffect(() => {
				if (!searchOpen) return;
				const onDown = (event) => {
					if (!(event.target instanceof Element)) return;
					if (event.target.closest("[data-search]") !== null) return;
					if (event.target.closest(".rh_readingSearchBox") !== null) return;
					setSearchOpen(false);
				};
				document.addEventListener("mousedown", onDown, true);
				return () => document.removeEventListener("mousedown", onDown, true);
			}, [searchOpen]);
			const computeSearchMatches = (query) => {
				if (query === "") return [];
				const q = query.toLowerCase();
				const out = [];
				const body = String(draft ?? "");
				let idx = body.toLowerCase().indexOf(q);
				while (idx !== -1 && out.length < 10000) {
					out.push({ start: idx, end: idx + query.length });
					idx = body.toLowerCase().indexOf(q, idx + query.length);
				}
				return out;
			};
			const updateSearchMatches = (query) => {
				searchMatchesRef.current = computeSearchMatches(query);
				setSearchActive(0);
			};
			const currentMatchRange = () => {
				const m = searchMatchesRef.current[searchActive];
				return m !== void 0 ? { start: m.start, end: m.end } : null;
			};
			const goToMatch = (index) => {
				const matches = searchMatchesRef.current;
				if (matches.length === 0) return;
				const i = ((index % matches.length) + matches.length) % matches.length;
				setSearchActive(i);
				const m = matches[i];
				// scroll the editor textarea / reader body to the match
				if (editorRef.current !== null && !readingMode) {
					const el = editorRef.current;
					const before = String(draft ?? "").slice(0, m.start);
					const lineNo = (before.match(/\n/g) || []).length;
					const lines = el.value.split("\n");
					let scrollY = 0;
					for (let li = 0; li < lineNo && li < lines.length; li++) scrollY += 24;
					el.scrollTop = Math.max(0, scrollY - el.clientHeight / 2);
					el.focus();
					el.setSelectionRange(m.start, m.end);
				}
			};
			const onSearchInput = (event) => {
				const v = event.target.value;
				setSearchQuery(v);
				updateSearchMatches(v);
			};
			const onSearchKey = (event) => {
				if (event.key === "Enter") {
					event.preventDefault();
					goToMatch(event.shiftKey ? searchActive - 1 : searchActive + 1);
				} else if (event.key === "Escape") {
					setSearchOpen(false);
				}
			};
			const doReplace = () => {
				const m = currentMatchRange();
				if (m === null) return;
				const next = String(draft ?? "").slice(0, m.start) + searchReplace + String(draft ?? "").slice(m.end);
				onChange(next);
				// recompute matches after the replacement
				const removed = m.end - m.start;
				const nextMatches = searchMatchesRef.current
					.filter((x) => !(x.start === m.start && x.end === m.end))
					.map((x) => (x.start >= m.end ? { start: x.start - removed + searchReplace.length, end: x.end - removed + searchReplace.length } : x));
				searchMatchesRef.current = nextMatches;
				setSearchActive((v) => Math.min(v, Math.max(0, nextMatches.length - 1)));
			};
			const doReplaceAll = () => {
				const q = searchQuery;
				if (q === "") return;
				const body = String(draft ?? "");
				let count = 0;
				const next = body.split(q).join(searchReplace);
				count = (body.match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
				onChange(next);
				searchMatchesRef.current = [];
				setSearchActive(0);
				return count;
			};
			return react_jsx_runtime.jsxs("div", {
				className: css.editorResize,
				children: [
					react_jsx_runtime.jsx("div", {
						className: css.editorPath,
						title: preview.path,
						children: preview.path
					}),
					react_jsx_runtime.jsxs("div", {
						className: css.editorToolbar,
						children: [
							react_jsx_runtime.jsx("button", {
								type: "button",
								className: clsx(css.editorToolBtn, writingMode && css.editorToolBtnActive),
								"aria-pressed": writingMode,
								onClick: () => onToggleWriting(),
								children: t("writing.mode")
							}),
							react_jsx_runtime.jsx("button", {
								type: "button",
								className: clsx(css.editorToolBtn, readingMode && css.editorToolBtnActive),
								"aria-pressed": readingMode,
								onClick: () => onToggleReading(),
								children: t("reading.mode")
							}),
							(writingMode || readingMode) && react_jsx_runtime.jsxs("div", {
								style: { position: "relative", display: "inline-flex" },
								"data-layout": "trigger",
								children: [
									react_jsx_runtime.jsx("button", {
										type: "button",
										className: clsx(css.editorToolBtn, layoutOpen && css.editorToolBtnActive),
										onClick: () => setLayoutOpen((v) => !v),
										children: t("writing.layout")
									}),
									layoutOpen && react_jsx_runtime.jsxs("div", {
										className: css.layoutMenu,
										children: [
											react_jsx_runtime.jsxs("div", {
												className: css.layoutRow,
												children: [
													react_jsx_runtime.jsx("span", { children: t("writing.font") }),
													react_jsx_runtime.jsx("select", {
														className: css.editorFontSelect,
														value: writingFontFamily,
														"aria-label": t("writing.font"),
														onChange: (event) => onSetFontFamily(event.target.value),
														children: [
															react_jsx_runtime.jsx("option", { value: "serif", children: t("writing.fontSerif") }),
															react_jsx_runtime.jsx("option", { value: "kai", children: t("writing.fontKai") }),
															react_jsx_runtime.jsx("option", { value: "sans", children: t("writing.fontSans") }),
															react_jsx_runtime.jsx("option", { value: "mono", children: t("writing.fontMono") })
														]
													})
												]
											}),
											react_jsx_runtime.jsxs("div", {
												className: css.layoutRow,
												children: [
													react_jsx_runtime.jsx("span", { children: t("writing.fontSize") }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingFontSize <= 12, onClick: () => onSetFontSize(writingFontSize - 2), children: "A-" }),
													react_jsx_runtime.jsx("span", { className: css.editorToolSize, children: String(writingFontSize) }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingFontSize >= 28, onClick: () => onSetFontSize(writingFontSize + 2), children: "A+" })
												]
											}),
											react_jsx_runtime.jsxs("div", {
												className: css.layoutRow,
												children: [
													react_jsx_runtime.jsx("span", { children: t("writing.spacing") }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingLineSpacing <= 1.2, onClick: () => onSetLineSpacing(Math.round((writingLineSpacing - 0.2) * 10) / 10), children: "-" }),
													react_jsx_runtime.jsx("span", { className: css.editorToolSize, children: String(writingLineSpacing.toFixed(1)) }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingLineSpacing >= 2.6, onClick: () => onSetLineSpacing(Math.round((writingLineSpacing + 0.2) * 10) / 10), children: "+" })
												]
											}),
											react_jsx_runtime.jsxs("div", {
												className: css.layoutRow,
												children: [
													react_jsx_runtime.jsx("span", { children: t("writing.margin") }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingMargin <= 8, onClick: () => onSetMargin(writingMargin - 8), children: "-" }),
													react_jsx_runtime.jsx("span", { className: css.editorToolSize, children: String(writingMargin) }),
													react_jsx_runtime.jsx("button", { type: "button", className: css.editorToolBtn, disabled: writingMargin >= 80, onClick: () => onSetMargin(writingMargin + 8), children: "+" })
												]
											}),
											react_jsx_runtime.jsxs("div", {
												className: css.layoutRow,
												children: [
													react_jsx_runtime.jsx("span", { children: t("writing.bg") }),
													react_jsx_runtime.jsx("select", {
														className: css.editorFontSelect,
														value: writingBg,
														"aria-label": t("writing.bg"),
														onChange: (event) => onSetBg(event.target.value),
														children: [
															react_jsx_runtime.jsx("option", { value: "default", children: t("writing.bgDefault") }),
															react_jsx_runtime.jsx("option", { value: "beige", children: t("writing.bgBeige") }),
															react_jsx_runtime.jsx("option", { value: "green", children: t("writing.bgGreen") }),
															react_jsx_runtime.jsx("option", { value: "blue", children: t("writing.bgBlue") })
														]
													})
												]
											})
										]
									})
								]
							}),

							writingMode && react_jsx_runtime.jsx("button", {
								type: "button",
								className: clsx(css.editorToolBtn, showRule && css.editorToolBtnActive),
								"aria-pressed": showRule,
								onClick: () => onToggleRule(),
								children: t("writing.rule")
							}),
							writingMode && react_jsx_runtime.jsx("button", {
								type: "button",
								className: css.editorToolBtn,
								title: t("writing.formatHint"),
								onClick: () => onFormat(),
								children: t("writing.format")
							}),
							(writingMode || readingMode) && react_jsx_runtime.jsxs("div", {
								className: css.readingSearch,
								"data-search": "trigger",
								children: [
									react_jsx_runtime.jsx("button", {
										type: "button",
										className: clsx(css.editorToolBtn, searchOpen && css.editorToolBtnActive),
										title: t("reading.search"),
										onClick: (event) => {
											const r = event.currentTarget.getBoundingClientRect();
											setSearchAnchor({ right: Math.round(r.right), top: Math.round(r.bottom + 6) });
											setSearchOpen((v) => !v);
										},
										children: t("reading.search")
									}),
									searchOpen && typeof document !== "undefined" && react_dom.createPortal(react_jsx_runtime.jsx("div", {
										className: css.readingSearchBox,
										style: searchAnchor !== null ? {
											position: "fixed",
											left: "auto",
											right: Math.max(0, Math.min(window.innerWidth - 320, searchAnchor.right)),
											top: searchAnchor.top,
											width: "auto",
											maxWidth: "min(60vw, 320px)"
										} : void 0,
										children: [
											react_jsx_runtime.jsx("input", {
												ref: (el) => { if (el !== null) el.focus(); },
												type: "text",
												className: css.readingSearchInput,
												placeholder: t("reading.searchHint"),
												value: searchQuery,
												onChange: onSearchInput,
												onKeyDown: onSearchKey
											}),
											react_jsx_runtime.jsx("span", { className: css.readingSearchCount, children: searchMatchesRef.current.length === 0 ? "0/0" : `${searchActive + 1}/${searchMatchesRef.current.length}` }),
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.readingSearchBtn,
												title: t("reading.searchPrev"),
												onClick: () => goToMatch(searchActive - 1),
												children: "▲"
											}),
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.readingSearchBtn,
												title: t("reading.searchNext"),
												onClick: () => goToMatch(searchActive + 1),
												children: "▼"
											}),
											writingMode && react_jsx_runtime.jsx("input", {
												type: "text",
												className: css.readingSearchInput,
												style: { width: 100 },
												placeholder: t("reading.replaceHint"),
												value: searchReplace,
												onChange: (event) => setSearchReplace(event.target.value),
												onKeyDown: (event) => { if (event.key === "Enter") { event.preventDefault(); doReplace(); } }
											}),
											writingMode && react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.editorToolBtn,
												onClick: doReplace,
												children: t("reading.replace")
											}),
											writingMode && react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.editorToolBtn,
												onClick: doReplaceAll,
												children: t("reading.replaceAll")
											}),
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.readingSearchBtn,
												title: "Esc",
												onClick: () => setSearchOpen(false),
												children: "✕"
											})
										]
									}), document.body)
								]
							}),
							readingMode && react_jsx_runtime.jsxs("div", {
								style: { position: "relative", display: "inline-flex" },
								"data-flip": "trigger",
								children: [
									react_jsx_runtime.jsx("button", {
										type: "button",
										className: clsx(css.editorToolBtn, flipMenuOpen && css.editorToolBtnActive),
										title: t("reading.flipMode"),
										onClick: () => setFlipMenuOpen((v) => !v),
										children: flipMode === "paged" ? t("reading.flipPaged") : t("reading.flipScroll")
									}),
									flipMenuOpen && react_jsx_runtime.jsx("div", {
										className: css.layoutMenu,
										children: [
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: clsx(css.readingPopItem, flipMode === "paged" && css.readingPopItemActive),
												onClick: () => { onSetFlipMode("paged"); setFlipMenuOpen(false); },
												children: t("reading.flipPaged")
											}),
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: clsx(css.readingPopItem, flipMode === "scroll" && css.readingPopItemActive),
												onClick: () => { onSetFlipMode("scroll"); setFlipMenuOpen(false); },
												children: t("reading.flipScroll")
											})
										]
									})
								]
							})
						]
					}),
						readingMode ? react_jsx_runtime.jsx(ReadingView, {
							key: preview.path,
							path: preview.path,
							text: draft,
							t: t,
							fontFamily: writingFontFamily,
							fontSize: writingFontSize,
							lineSpacing: writingLineSpacing,
							bg: writingBg,
							margin: writingMargin,
							state: readingState,
							onState: onReadingState,
							flipMode,
							searchQuery,
							searchActive,
							searchMatchesRef
						}) : react_jsx_runtime.jsxs("div", {
							className: css.editorScroll,
							children: [
								!writingMode && react_jsx_runtime.jsx("div", {
									ref: gutterRef,
									className: css.editorGutter,
									"aria-hidden": "true",
									children: numbers
								}),
							react_jsx_runtime.jsxs("div", {
								className: css.editorOverlay,
								children: [
									highlighted && react_jsx_runtime.jsx("pre", {
										ref: backdropRef,
										className: css.editorBackdrop,
										"aria-hidden": "true",
										dangerouslySetInnerHTML: { __html: hl }
									}),
									react_jsx_runtime.jsx("textarea", {
										ref: editorRef,
										className: clsx(css.editorTextarea, highlighted && css.editorTextareaOn),
										style: writingMode ? {
											fontFamily: WRITING_FONTS[writingFontFamily] || WRITING_FONTS.serif,
											fontSize: writingFontSize + "px",
											lineHeight: rulePeriod + "px",
											padding: "12px " + writingMargin + "px",
											backgroundColor: writingBgColor(writingBg, dark),
											whiteSpace: "pre-wrap",
											overflowWrap: "anywhere",
											// Rule lines painted directly on the textarea
											// background. background-attachment: local makes
											// the tiling gradient scroll with the text, so the
											// lines never drift or disappear — no JS syncing.
											// The gradient starts 12px down (top padding) and
											// repeats every rulePeriod px, one faint line per
											// text row.
											...(showRule ? {
												backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent ${rulePeriod - 1}px, ${ruleColor} ${rulePeriod - 1}px, ${ruleColor} ${rulePeriod}px)`,
												backgroundAttachment: "local",
												backgroundRepeat: "repeat",
												backgroundPosition: "0 12px",
												backgroundSize: "100% " + rulePeriod + "px"
											} : {})
										} : void 0,
										value: draft,
										readOnly: !editable,
										spellCheck: false,
										wrap: writingMode ? "soft" : "off",
										"aria-label": preview.path,
										onChange: (event) => {
											onChange(event.target.value);
										},
										onScroll: (event) => {
											if (gutterRef.current !== null) gutterRef.current.scrollTop = event.target.scrollTop;
											if (backdropRef.current !== null) {
												backdropRef.current.scrollTop = event.target.scrollTop;
												backdropRef.current.scrollLeft = event.target.scrollLeft;
											}
										},
										onCompositionStart: () => {
											setComposing(true);
										},
										onCompositionEnd: () => {
											setComposing(false);
										},
										onKeyDown: (event) => {
											if ((event.ctrlKey || event.metaKey) && (event.key === "s" || event.key === "S")) {
												event.preventDefault();
												onSave();
											}
										}
									})
								]
							})
						]
					}),
					error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: error
					}),
					react_jsx_runtime.jsx("div", {
						className: css.editorStatus,
						children: `${formatBytes(savedSize ?? preview.size)} · UTF-8${writingMode ? ` · ${countTextChars(draft)}${t("files.chars")}` : ""}${dirty ? ` · ${t("files.dirty")}` : ""}${preview.truncated === true ? ` · ${t("files.tooLargeToEdit")}` : ""}`
					})
				]
			});
		}

		// ---- directory tree -------------------------------------------
		function FileDirectory({ path, t, listDirectory, openPreview, renameFile, activePath, refreshToken, createFile, createDirectory, workspacePath, addToChat, onNotice, requestKind, ackRequest, copyEntry, pasteInto, refreshTree, deleteEntry, selectedPaths, onSelectEntry, moveSelection, dragTarget, onDragTarget, onClearSelection }) {
			const [state, setState] = react.useState({ status: "loading", entries: [], truncated: false, message: null });
			const [openDirs, setOpenDirs] = react.useState({});
			const [renaming, setRenaming] = react.useState(null);
			const renameCancelRef = react.useRef(false);
			const [ctxMenu, setCtxMenu] = react.useState(null);
			const [createHere, setCreateHere] = react.useState(null);
			const [createRequest, setCreateRequest] = react.useState(null);
			const createCancelRef = react.useRef(false);
			react.useEffect(() => {
				if (requestKind !== null && requestKind !== void 0) {
					setCreateHere({ kind: requestKind, draft: "", busy: false, error: null });
					if (typeof ackRequest === "function") ackRequest();
				}
			}, [requestKind, ackRequest]);
			const commitCreateHere = () => {
				if (createHere === null || createHere.busy) return;
				const name = createHere.draft.trim();
				if (name === "") { setCreateHere(null); return; }
				setCreateHere({ ...createHere, busy: true, error: null });
				const operation = createHere.kind === "dir" ? createDirectory : createFile;
				if (typeof operation !== "function") { setCreateHere(null); return; }
				operation(path, name).then(() => {
					setCreateHere(null);
					load(void 0);
				}, (reason) => {
					setCreateHere((current) => current === null ? current : { ...current, busy: false, error: errorMessage(reason) });
				});
			};
			const load = react.useCallback((signal) => {
				setState({ status: "loading", entries: [], truncated: false, message: null });
				return listDirectory(path, signal, { includeFiles: true }).then((listing) => {
					if (signal !== void 0 && signal.aborted) return;
					setState({ status: "ready", entries: listing.entries ?? [], truncated: listing.truncated === true, message: null });
				}, (reason) => {
					if (signal !== void 0 && signal.aborted) return;
					setState({ status: "error", entries: [], truncated: false, message: errorMessage(reason) });
				});
			}, [path, listDirectory]);
			react.useEffect(() => {
				const controller = new AbortController();
				load(controller.signal);
				return () => {
					controller.abort();
				};
			}, [load, refreshToken]);
			const startRename = (entry) => {
				renameCancelRef.current = false;
				setRenaming({ path: entry.path, original: entry.name, draft: entry.name, busy: false, error: null });
			};
			const commitRename = () => {
				if (renaming === null || renaming.busy) return;
				const name = renaming.draft.trim();
				if (name === "" || name === renaming.original) {
					setRenaming(null);
					return;
				}
				setRenaming({ ...renaming, busy: true, error: null });
				renameFile(renaming.path, name).then(() => {
					setRenaming(null);
					load(void 0);
				}, (reason) => {
					setRenaming((current) => current === null ? current : { ...current, busy: false, error: errorMessage(reason) });
				});
			};
			const renameInput = (entry) => react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
				children: [
					react_jsx_runtime.jsxs("div", {
						className: css.rowWrap,
						children: [
							entry.isDirectory === false ? react_jsx_runtime.jsx(FileGlyph, { name: entry.name }) : react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
							react_jsx_runtime.jsx("input", {
								className: css.inlineInput,
								value: renaming.draft,
								autoFocus: true,
								disabled: renaming.busy,
								"aria-label": t("files.rename.aria", { name: entry.name }),
								onFocus: (event) => {
									const dot = event.target.value.lastIndexOf(".");
									if (dot > 0) event.target.setSelectionRange(0, dot);
									else event.target.select();
								},
								onChange: (event) => {
									setRenaming((current) => current === null ? current : { ...current, draft: event.target.value, error: null });
								},
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.nativeEvent.isComposing) {
										event.preventDefault();
										commitRename();
									} else if (event.key === "Escape") {
										event.preventDefault();
										renameCancelRef.current = true;
										setRenaming(null);
									}
								},
								onBlur: () => {
									if (renameCancelRef.current) {
										renameCancelRef.current = false;
										return;
									}
									commitRename();
								}
							})
						]
					}),
					renaming.error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: renaming.error
					})
				]
			});
			const dirs = state.entries.filter((entry) => entry.isDirectory === true || entry.isDirectory === void 0).sort((left, right) => left.name.localeCompare(right.name));
			const files = state.entries.filter((entry) => entry.isDirectory === false).sort((left, right) => left.name.localeCompare(right.name));
			const orderedEntries = [...dirs, ...files];
			const isSelected = (entry) => selectedPaths !== void 0 && selectedPaths !== null && selectedPaths.has(entry.path);
			const rowSelectedClass = (entry) => clsx(
				entry.isDirectory === false ? css.fileRow : css.dirRow,
				activePath === entry.path && css.fileRowActive,
				isSelected(entry) && css.fileRowSelected,
				dragTarget === entry.path && css.dirRowDropTarget
			);
			const handleRowClick = (entry, event) => {
				if (typeof onSelectEntry === "function") {
					onSelectEntry(entry, orderedEntries, event, path);
				}
			};
			const handleRowDragStart = (entry, event) => {
				if (typeof onSelectEntry === "function" && !isSelected(entry)) {
					// dragging an unselected row selects it alone first
					onSelectEntry(entry, orderedEntries, { ctrlKey: false, shiftKey: false, metaKey: false, altKey: false, preventDefault: () => {}, stopPropagation: () => {} }, path);
				}
				const payload = selectedPaths !== void 0 && selectedPaths !== null && selectedPaths.has(entry.path)
					? { paths: [...selectedPaths], fromDir: path }
					: { paths: [entry.path], fromDir: path };
				event.dataTransfer.setData("application/x-dsh-readwrite-hub", JSON.stringify(payload));
				event.dataTransfer.effectAllowed = "move";
				if (event.dataTransfer.setDragImage !== void 0 && event.currentTarget !== null) {
					try { event.dataTransfer.setDragImage(event.currentTarget, 0, 0); } catch { /* ignore */ }
				}
			};
			const handleDirDrop = (targetDir, event) => {
				event.preventDefault();
				event.stopPropagation();
				if (typeof moveSelection !== "function") return;
				let payload = null;
				try {
					const raw = event.dataTransfer.getData("application/x-dsh-readwrite-hub");
					if (raw !== "") payload = JSON.parse(raw);
				} catch { payload = null; }
				if (payload === null || !Array.isArray(payload.paths) || payload.paths.length === 0) return;
				moveSelection(payload.paths, targetDir);
			};
			return react_jsx_runtime.jsxs("div", {
				className: css.filesList,
				role: "group",
				onMouseDown: (event) => {
					if (typeof onClearSelection !== "function") return;
					if (event.target instanceof Element && event.target.closest(".rh_fileRow,.rh_dirRow,.rh_rootHeader,.rh_rowAction,.rh_filesHeaderAction,.rh_inlineInput,.rh_createRow")) return;
					onClearSelection();
				},
				onContextMenu: (event) => {
					event.preventDefault();
					event.stopPropagation();
					setCtxMenu({ x: event.clientX, y: event.clientY, entry: null });
				},
				children: [
					state.status === "loading" && react_jsx_runtime.jsx("div", {
						className: css.filesLoading,
						role: "status",
						children: t("files.loading")
					}),
					state.status === "error" && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: t("files.error")
					}),
					state.status === "ready" && state.entries.length === 0 && react_jsx_runtime.jsx("div", {
						className: css.filesEmpty,
						children: t("files.empty")
					}),
					createHere !== null && react_jsx_runtime.jsxs("div", {
						className: css.createRow,
						children: [
							react_jsx_runtime.jsx(createHere.kind === "dir" ? _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16 : _deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, { size: 14 }),
							react_jsx_runtime.jsx("input", {
								className: css.inlineInput,
								value: createHere.draft,
								autoFocus: true,
								"aria-label": createHere.kind === "dir" ? t("files.newFolder") : t("files.newFile"),
								placeholder: createHere.kind === "dir" ? t("files.folderName") : t("files.fileName"),
								disabled: createHere.busy,
								onChange: (event) => {
									setCreateHere((current) => current === null ? current : { ...current, draft: event.target.value, error: null });
								},
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.nativeEvent.isComposing) {
										event.preventDefault();
										commitCreateHere();
									} else if (event.key === "Escape") {
										event.preventDefault();
										createCancelRef.current = true;
										setCreateHere(null);
									}
								},
								onBlur: () => {
									if (createCancelRef.current) { createCancelRef.current = false; return; }
									commitCreateHere();
								}
							}),
							createHere.busy && react_jsx_runtime.jsx("span", { className: css.filesLoading, children: "…" })
						]
					}),
					createHere !== null && createHere.error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: createHere.error
					}),
					dirs.map((entry) => {
						const open = openDirs[entry.path] === true;
						if (renaming !== null && renaming.path === entry.path) return react_jsx_runtime.jsx(react_jsx_runtime.Fragment, { children: renameInput(entry) }, entry.path);
						return react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
							children: [
								react_jsx_runtime.jsxs("div", {
									className: css.rowWrap,
									children: [
										react_jsx_runtime.jsxs("button", {
											type: "button",
											className: rowSelectedClass(entry),
											"aria-expanded": open,
											onClick: (event) => {
												if (event.ctrlKey || event.metaKey || event.shiftKey) {
													handleRowClick(entry, event);
													return;
												}
												handleRowClick(entry, event);
												setOpenDirs((current) => ({ ...current, [entry.path]: !open }));
											},
											draggable: true,
											onDragStart: (event) => handleRowDragStart(entry, event),
											onDragOver: (event) => {
												event.preventDefault();
												event.stopPropagation();
												event.dataTransfer.dropEffect = "move";
												if (typeof onDragTarget === "function") onDragTarget(entry.path);
											},
											onDragLeave: (event) => {
												if (typeof onDragTarget !== "function") return;
												const related = event.relatedTarget;
												if (related instanceof Element && event.currentTarget.contains(related)) return;
												onDragTarget(null);
											},
											onDrop: (event) => {
												if (typeof onDragTarget === "function") onDragTarget(null);
												handleDirDrop(entry.path, event);
											},
											onContextMenu: (event) => {
												event.preventDefault();
												event.stopPropagation();
												setCtxMenu({ x: event.clientX, y: event.clientY, entry });
											},
											children: [
												react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconTriangleRightFill14, {
													size: 10,
													className: clsx(css.filesChevron, open && css.filesChevronOpen)
												}),
												react_jsx_runtime.jsx(open ? _deepseek_ai_dsh_client_ui_primitives.IconFolderOpen16 : _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
												react_jsx_runtime.jsx("span", { children: entry.name })
											]
										}),
										react_jsx_runtime.jsx("button", {
											type: "button",
											className: css.rowAction,
											"aria-label": t("files.rename.aria", { name: entry.name }),
											onClick: (event) => {
												event.stopPropagation();
												startRename(entry);
											},
											children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconEditOutline16, { size: 12 })
										})
									]
								}),
								open && react_jsx_runtime.jsx(FileDirectory, {
									path: entry.path,
									t,
									listDirectory,
									openPreview,
									renameFile,
									activePath,
									refreshToken,
									createFile,
									createDirectory,
									workspacePath,
									addToChat,
									onNotice,
									requestKind: createRequest?.path === entry.path ? createRequest.kind : null,
									ackRequest: () => setCreateRequest(null),
									copyEntry,
									pasteInto,
									refreshTree,
									selectedPaths,
									onSelectEntry,
									moveSelection,
									dragTarget,
									onDragTarget,
									onClearSelection
								}, entry.path)
							]
						}, entry.path);
					}),
					files.map((entry) => {
						if (renaming !== null && renaming.path === entry.path) return react_jsx_runtime.jsx(react_jsx_runtime.Fragment, { children: renameInput(entry) }, entry.path);
						return react_jsx_runtime.jsxs("div", {
							className: css.rowWrap,
							children: [
								react_jsx_runtime.jsxs("button", {
									type: "button",
									className: rowSelectedClass(entry),
									onClick: (event) => {
										if (event.ctrlKey || event.metaKey || event.shiftKey) {
											handleRowClick(entry, event);
											return;
										}
										handleRowClick(entry, event);
										openPreview(entry.name, entry.path);
									},
									draggable: true,
									onDragStart: (event) => handleRowDragStart(entry, event),
									onContextMenu: (event) => {
										event.preventDefault();
										event.stopPropagation();
										setCtxMenu({ x: event.clientX, y: event.clientY, entry });
									},
									children: [
										react_jsx_runtime.jsx(FileGlyph, { name: entry.name }),
										react_jsx_runtime.jsx("span", { children: entry.name }),
										typeof entry.size === "number" && react_jsx_runtime.jsx("span", {
											className: css.fileSize,
											children: formatBytes(entry.size)
										})
									]
								}),
								react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.rowAction,
									"aria-label": t("files.rename.aria", { name: entry.name }),
									onClick: (event) => {
										event.stopPropagation();
										startRename(entry);
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconEditOutline16, { size: 12 })
								})
							]
						}, entry.path);
					}),
					state.truncated && react_jsx_runtime.jsx("div", {
						className: css.filesEmpty,
						children: t("files.truncated")
					}),
					react_jsx_runtime.jsx(ContextMenu, {
						menu: ctxMenu,
						t,
						onClose: () => setCtxMenu(null),
						children: [
							ctxMenu !== null && ctxMenu.entry !== null && ctxMenu.entry.isDirectory !== false && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.newFileHere"),
								onClick: () => {
									setOpenDirs((current) => ({ ...current, [ctxMenu.entry.path]: true }));
									setCreateRequest({ path: ctxMenu.entry.path, kind: "file" });
								}
							}),
							ctxMenu !== null && ctxMenu.entry !== null && ctxMenu.entry.isDirectory !== false && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.newFolderHere"),
								onClick: () => {
									setOpenDirs((current) => ({ ...current, [ctxMenu.entry.path]: true }));
									setCreateRequest({ path: ctxMenu.entry.path, kind: "dir" });
								}
							}),
							ctxMenu !== null && ctxMenu.entry !== null && ctxMenu.entry.isDirectory !== false && react_jsx_runtime.jsx("div", { className: css.ctxSep }),
							react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.copyPath"),
								onClick: () => {
									copyToClipboardText(ctxMenu.entry.path);
									onNotice(t("ctx.copied"));
								}
							}),
							react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.copyRelPath"),
								onClick: () => {
									copyToClipboardText(relPathOf(workspacePath, ctxMenu.entry.path));
									onNotice(t("ctx.copied"));
								}
							}),
							react_jsx_runtime.jsx("div", { className: css.ctxSep }),
							ctxMenu !== null && ctxMenu.entry !== null && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.copy"),
								onClick: () => {
									copyEntry(ctxMenu.entry.path);
									onNotice(t("ctx.copied"));
								}
							}),
							ctxMenu !== null && ctxMenu.entry !== null && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.delete"),
								danger: true,
								onClick: () => {
									if (typeof window !== "undefined" && window.confirm(t("ctx.deleteConfirm", { name: ctxMenu.entry.name }))) {
										deleteEntry(ctxMenu.entry.path).then(() => {
											onNotice(t("ctx.deleted"));
											refreshTree();
										}, (reason) => {
											onNotice(errorMessage(reason));
										});
									}
								}
							}),
							react_jsx_runtime.jsx("div", { className: css.ctxSep }),
							ctxMenu !== null && ctxMenu.entry !== null && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.addToChat"),
								onClick: () => {
									const ok = addToChat(ctxMenu.entry);
									onNotice(ok ? t("ctx.addedToChat") : relPathOf(workspacePath, ctxMenu.entry.path));
								}
							}),
							ctxMenu !== null && ctxMenu.entry !== null && react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.reveal"),
								onClick: () => {
									apiReveal(ctxMenu.entry.path).then(() => {
										onNotice(t("ctx.reveal"));
									}, (reason) => {
										onNotice(errorMessage(reason));
									});
								}
							}),
							react_jsx_runtime.jsx("div", { className: css.ctxSep }),
							react_jsx_runtime.jsx(CtxItem, {
								t,
								label: t("ctx.paste"),
								onClick: () => pasteInto(path),
							})
						]
					})
				]
			});
		}

		// ---- one workspace root ---------------------------------------
		function WorkspaceRoot({ workspace, t, listDirectory, renameFile, createFile, createDirectory, openPreview, activePath, refreshToken, addToChat, onNotice, copyEntry, pasteInto, refreshTree, deleteEntry, selectedPaths, onSelectEntry, moveSelection, dragTarget, onDragTarget, onClearSelection }) {
			const [expanded, setExpanded] = react.useState(false);
			const [create, setCreate] = react.useState(null);
			const [rootRefresh, setRootRefresh] = react.useState(0);
			const createCancelRef = react.useRef(false);
			const startCreate = (kind) => {
				setExpanded(true);
				createCancelRef.current = false;
				setCreate({ kind, draft: "", busy: false, error: null });
			};
			const commitCreate = () => {
				if (create === null || create.busy) return;
				const name = create.draft.trim();
				if (name === "") {
					setCreate(null);
					return;
				}
				setCreate({ ...create, busy: true, error: null });
				const operation = create.kind === "dir" ? createDirectory : createFile;
				operation(workspace.path, name).then(() => {
					setCreate(null);
					setRootRefresh((value) => value + 1);
				}, (reason) => {
					setCreate((current) => current === null ? current : { ...current, busy: false, error: errorMessage(reason) });
				});
			};
			return react_jsx_runtime.jsxs("div", {
				children: [
					react_jsx_runtime.jsxs("div", {
						className: css.filesHeaderRow,
						children: [
							react_jsx_runtime.jsxs("button", {
								type: "button",
								className: css.rootHeader,
								title: workspace.path,
								"aria-expanded": expanded,
								onClick: () => {
									setExpanded((value) => !value);
								},
								children: [
									react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconTriangleRightFill14, {
										size: 12,
										className: clsx(css.filesChevron, expanded && css.filesChevronOpen)
									}),
									react_jsx_runtime.jsx(expanded ? _deepseek_ai_dsh_client_ui_primitives.IconFolderOpen16 : _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 }),
									react_jsx_runtime.jsx("span", {
										className: css.rootName,
										children: workspace.title
									})
								]
							}),
							expanded && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: t("files.newFile"),
								side: "bottom",
								delayMs: 500,
								children: react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.filesHeaderAction,
									"aria-label": t("files.newFile"),
									onClick: () => {
										startCreate("file");
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, { size: 14 })
								})
							}),
							expanded && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
								label: t("files.newFolder"),
								side: "bottom",
								delayMs: 500,
								children: react_jsx_runtime.jsx("button", {
									type: "button",
									className: css.filesHeaderAction,
									"aria-label": t("files.newFolder"),
									onClick: () => {
										startCreate("dir");
									},
									children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconFolderClose16, { size: 14 })
								})
							})
						]
					}),
					expanded && create !== null && react_jsx_runtime.jsxs("div", {
						className: css.createRow,
						children: [
							react_jsx_runtime.jsx(create.kind === "dir" ? _deepseek_ai_dsh_client_ui_primitives.IconFolderClose16 : _deepseek_ai_dsh_client_ui_primitives.IconCodeOutline16, { size: 14 }),
							react_jsx_runtime.jsx("input", {
								className: css.inlineInput,
								value: create.draft,
								autoFocus: true,
								"aria-label": create.kind === "dir" ? t("files.newFolder") : t("files.newFile"),
								placeholder: create.kind === "dir" ? t("files.folderName") : t("files.fileName"),
								disabled: create.busy,
								onChange: (event) => {
									setCreate((current) => current === null ? current : { ...current, draft: event.target.value, error: null });
								},
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.nativeEvent.isComposing) {
										event.preventDefault();
										commitCreate();
									} else if (event.key === "Escape") {
										event.preventDefault();
										createCancelRef.current = true;
										setCreate(null);
									}
								},
								onBlur: () => {
									if (createCancelRef.current) {
										createCancelRef.current = false;
										return;
									}
									commitCreate();
								}
							}),
							create.busy && react_jsx_runtime.jsx("span", {
								className: css.filesLoading,
								children: "…"
							})
						]
					}),
					expanded && create !== null && create.error !== null && react_jsx_runtime.jsx("div", {
						className: css.filesError,
						role: "alert",
						children: create.error
					}),
					expanded && react_jsx_runtime.jsx(FileDirectory, {
						path: workspace.path,
						t,
						listDirectory,
						openPreview,
						renameFile,
						activePath,
						refreshToken: rootRefresh + refreshToken,
						createFile,
						createDirectory,
						workspacePath: workspace.path,
						addToChat,
						onNotice,
						copyEntry,
						pasteInto,
						refreshTree,
						deleteEntry,
						selectedPaths,
						onSelectEntry,
						moveSelection,
						dragTarget,
						onDragTarget,
						onClearSelection
					})
				]
			});
		}

			// ---- 自定义右键菜单 -----------------------------------------
			function ContextMenu({ menu, t, onClose, children }) {
				react.useEffect(() => {
					if (menu === null) return;
					const onKey = (event) => {
						if (event.key === "Escape") { event.preventDefault(); onClose(); }
					};
					const onPointer = (event) => {
						if (event.target instanceof Element && event.target.closest(".rh_ctxMenu") === null) onClose();
					};
					window.addEventListener("keydown", onKey, true);
					window.addEventListener("mousedown", onPointer, true);
					return () => {
						window.removeEventListener("keydown", onKey, true);
						window.removeEventListener("mousedown", onPointer, true);
					};
				}, [menu, onClose]);
				if (menu === null) return null;
				const x = Math.max(4, Math.min(menu.x, window.innerWidth - 210));
				const y = Math.max(4, Math.min(menu.y, window.innerHeight - 150));
				const wrapped = react.Children.map(children, (child) => {
					if (child !== null && child !== void 0 && typeof child === "object" && child.type === CtxItem) {
						return react.cloneElement(child, {
							onClick: (...args) => {
								onClose();
								if (typeof child.props.onClick === "function") child.props.onClick(...args);
							}
						});
					}
					return child;
				});
				const menuEl = react_jsx_runtime.jsx("div", {
					className: css.ctxMenu,
					style: { left: x, top: y },
					onContextMenu: (event) => event.preventDefault(),
					children: wrapped
				});
				if (typeof document === "undefined") return menuEl;
				return react_dom.createPortal(menuEl, document.body);
			}
			function CtxItem({ t, label, danger, onClick, children }) {
				return react_jsx_runtime.jsx("button", {
					type: "button",
					className: css.ctxItem,
					"data-danger": danger === true ? "true" : void 0,
					onClick,
					children: react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
						children: [
							children !== void 0 && children,
							react_jsx_runtime.jsx("span", { children: label })
						]
					})
				});
			}

		// ---- settings card (rc.8) -------------------------------------
		/** Self-drawn settings card for the plugin configuration tab.
		 *  Reads/writes the `readwrite-hub` settings namespace through the
		 *  bound scope. No cross-plugin imports: the bundle-purity gate forbids
		 *  importing ui-settings-plugins chrome, so the card owns its own markup
		 *  and styles (reusing the plugin's existing CSS variables). */
		function ExplorerSettingsCard({ t, scope }) {
			const tx = typeof t === "function" ? t : ((key) => {
				const dict = typeof navigator !== "undefined" && (navigator.language ?? "").toLowerCase().startsWith("zh") ? zh : en;
				return dict[key] ?? key;
			});
			const snapshot = react.useSyncExternalStore(
				(listener) => scope.subscribe(listener),
				() => scope.getSnapshot()
			);
			const value = snapshot.value;
			const writable = snapshot.writable === true;
			const [saved, setSaved] = react.useState(false);
			const [draft, setDraft] = react.useState(null);
			const active = draft !== null ? draft : (value ?? {
				writing: { fontFamily: "serif", fontSize: 16, lineSpacing: 1.8, background: "default", autoSave: true, autoSaveDelayMs: 3000 },
				tree: { showHidden: false }
			});
			const setField = (field, v) => setDraft((current) => {
				const base = current !== null ? current : (value ?? { writing: {}, tree: {} });
				const path = field.split(".");
				const head = path[0], tail = path.slice(1).join(".");
				const next = { ...base };
				if (tail !== "") {
					next[head] = { ...(base[head] || {}), [tail]: v };
				} else {
					next[head] = v;
				}
				return next;
			});
			const commit = (nextDraft) => {
				const target = nextDraft ?? active;
				const promises = [];
				if (value !== void 0) {
					// reset fields absent in the draft back to defaults via unset
					const w = target.writing || {};
					promises.push(scope.set("writing", w));
					promises.push(scope.set("tree", target.tree || {}));
				} else {
					promises.push(scope.set("writing", target.writing || {}));
					promises.push(scope.set("tree", target.tree || {}));
				}
				Promise.all(promises).then(() => {
					setDraft(null);
					setSaved(true);
					window.setTimeout(() => setSaved(false), 1600);
				}).catch((error) => {
					console.error("readwrite-hub: settings write failed", error);
				});
			};
			const resetAll = () => {
				Promise.all([
					scope.unset("writing"),
					scope.unset("tree")
				]).then(() => {
					setDraft(null);
					setSaved(true);
					window.setTimeout(() => setSaved(false), 1600);
				}).catch((error) => {
					console.error("readwrite-hub: settings reset failed", error);
				});
			};
			const row = (label, hint, control) => react_jsx_runtime.jsxs("div", {
				style: { display: "flex", alignItems: "center", gap: 10, padding: "6px 0" },
				children: [
					react_jsx_runtime.jsxs("div", {
						style: { flex: 1, minWidth: 0 },
						children: [
							react_jsx_runtime.jsx("div", { style: { fontSize: 13, color: "var(--dsw-alias-label-primary)" }, children: label }),
							hint ? react_jsx_runtime.jsx("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary)" }, children: hint }) : null
						]
					}),
					control
				]
			});
			const selectStyle = { height: 26, borderRadius: 6, border: "1px solid var(--dsw-alias-border-l1)", background: "var(--dsw-alias-bg-layer-1)", color: "var(--dsw-alias-label-primary)", fontSize: 12, padding: "0 6px" };
			const inputStyle = { ...selectStyle, width: 90 };
			const toggleStyle = { width: 16, height: 16 };
			const W = active.writing || {};
			const T = active.tree || {};
			return react_jsx_runtime.jsxs("div", {
				style: { display: "flex", flexDirection: "column", gap: 4, maxWidth: 620 },
				children: [
					react_jsx_runtime.jsx("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--dsw-alias-label-primary)" }, children: tx("settings.title") }),
					react_jsx_runtime.jsx("div", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)", marginBottom: 6 }, children: tx("settings.desc") }),
					react_jsx_runtime.jsx("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--dsw-alias-label-secondary)", marginTop: 4 }, children: tx("settings.writing") }),
					row(tx("settings.writingFontFamily"), null, react_jsx_runtime.jsx("select", {
						style: selectStyle,
						value: W.fontFamily ?? "serif",
						disabled: !writable,
						onChange: (e) => setField("writing.fontFamily", e.target.value),
						children: [
							react_jsx_runtime.jsx("option", { value: "serif", children: tx("writing.fontSerif") }),
							react_jsx_runtime.jsx("option", { value: "kai", children: tx("writing.fontKai") }),
							react_jsx_runtime.jsx("option", { value: "sans", children: tx("writing.fontSans") }),
							react_jsx_runtime.jsx("option", { value: "mono", children: tx("writing.fontMono") })
						]
					})),
					row(tx("settings.writingFontSize"), null, react_jsx_runtime.jsx("input", {
						type: "number",
						style: inputStyle,
						min: 12,
						max: 28,
						step: 1,
						value: W.fontSize ?? 16,
						disabled: !writable,
						onChange: (e) => setField("writing.fontSize", Number(e.target.value))
					})),
					row(tx("settings.writingLineSpacing"), null, react_jsx_runtime.jsx("input", {
						type: "number",
						style: inputStyle,
						min: 1.2,
						max: 2.6,
						step: 0.1,
						value: W.lineSpacing ?? 1.8,
						disabled: !writable,
						onChange: (e) => setField("writing.lineSpacing", Number(e.target.value))
					})),
					row(tx("settings.writingBackground"), null, react_jsx_runtime.jsx("select", {
						style: selectStyle,
						value: W.background ?? "default",
						disabled: !writable,
						onChange: (e) => setField("writing.background", e.target.value),
						children: [
							react_jsx_runtime.jsx("option", { value: "default", children: tx("writing.bgDefault") }),
							react_jsx_runtime.jsx("option", { value: "beige", children: tx("writing.bgBeige") }),
							react_jsx_runtime.jsx("option", { value: "green", children: tx("writing.bgGreen") }),
							react_jsx_runtime.jsx("option", { value: "blue", children: tx("writing.bgBlue") })
						]
					})),
					row(tx("settings.writingAutoSave"), tx("settings.writingAutoSaveHint"), react_jsx_runtime.jsx("input", {
						type: "checkbox",
						style: toggleStyle,
						checked: W.autoSave !== false,
						disabled: !writable,
						onChange: (e) => setField("writing.autoSave", e.target.checked)
					})),
					row(tx("settings.autoSaveDelayMs"), null, react_jsx_runtime.jsx("input", {
						type: "number",
						style: inputStyle,
						min: 500,
						max: 15000,
						step: 100,
						value: W.autoSaveDelayMs ?? 3000,
						disabled: !writable,
						onChange: (e) => setField("writing.autoSaveDelayMs", Number(e.target.value))
					})),
					react_jsx_runtime.jsx("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--dsw-alias-label-secondary)", marginTop: 8 }, children: tx("settings.writing") }),
					row(tx("settings.treeShowHidden"), tx("settings.treeShowHiddenHint"), react_jsx_runtime.jsx("input", {
						type: "checkbox",
						style: toggleStyle,
						checked: T.showHidden === true,
						disabled: !writable,
						onChange: (e) => setField("tree.showHidden", e.target.checked)
					})),
					react_jsx_runtime.jsxs("div", {
						style: { display: "flex", gap: 8, marginTop: 12, alignItems: "center" },
						children: [
							react_jsx_runtime.jsx("button", {
								type: "button",
								disabled: !writable,
								onClick: () => commit(active),
								style: { height: 28, padding: "0 14px", borderRadius: 6, border: "1px solid var(--dsw-alias-border-l1)", background: "var(--dsw-alias-interactive-bg-hover)", color: "var(--dsw-alias-label-primary)", fontSize: 12, cursor: writable ? "pointer" : "default" },
								children: tx("settings.save")
							}),
							react_jsx_runtime.jsx("button", {
								type: "button",
								disabled: !writable,
								onClick: resetAll,
								style: { height: 28, padding: "0 14px", borderRadius: 6, border: "1px solid var(--dsw-alias-border-l1)", background: "transparent", color: "var(--dsw-alias-label-secondary)", fontSize: 12, cursor: writable ? "pointer" : "default" },
								children: tx("settings.resetAll")
							}),
							saved ? react_jsx_runtime.jsx("span", { style: { fontSize: 12, color: "var(--dsw-alias-state-success-primary, #2ea043)" }, children: tx("settings.saved") }) : null,
							!writable ? react_jsx_runtime.jsx("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)" }, children: tx("settings.readonly") }) : null
						]
					})
				]
			});
		}
		// ---- explorer entry (sidebar footer action) -------------------

		function ExplorerAction({ wide, t, workspacesStore, sessionsStore, insertFileReference, openPath, settingsScope }) {
			const tx = typeof t === "function" ? t : ((key) => {
				const dict = typeof navigator !== "undefined" && (navigator.language ?? "").toLowerCase().startsWith("zh") ? zh : en;
				return dict[key] ?? key;
			});
			const items = react.useSyncExternalStore(
				(listener) => workspacesStore.subscribe(listener),
				() => {
					const snapshot = workspacesStore.getSnapshot();
					return Array.isArray(snapshot?.items) ? snapshot.items : [];
				}
			);
			const sessions = react.useSyncExternalStore(
				(listener) => sessionsStore.subscribe(listener),
				() => {
					const snapshot = sessionsStore.getSnapshot();
					return snapshot?.current ?? void 0;
				}
			);
			const visibleItems = items.length === 0 ? items : (() => {
				if (typeof sessions === "string" && sessions !== "") {
					const active = items.find((workspace) => Array.isArray(workspace?.sessionIds) && workspace.sessionIds.includes(sessions));
					if (active !== void 0) return [active];
				}
				return [items[0]];
			})();
			const [open, setOpen] = react.useState(false);
			const [treeWidth, setTreeWidth] = react.useState(300);
			const [panelWidth, setPanelWidth] = react.useState(() => {
				if (typeof window === "undefined") return 640;
				const half = Math.round(window.innerWidth / 2);
				const maxW = Math.max(280, window.innerWidth - Math.round(window.innerWidth / 5));
				return Math.min(half, maxW);
			});
			react.useEffect(() => {
				if (visibleItems.length > 0 && visibleItems[0]?.path) rootPathRef.current = visibleItems[0].path;
				}, [visibleItems[0]?.path]);
			react.useEffect(() => {
				let rootEl = null;
				try { rootEl = document.getElementById("root"); } catch { /* ignore */ }
				if (rootEl !== null) rootEl.style.marginRight = open ? panelWidth + "px" : "";
			}, [open, panelWidth]);
			const [preview, setPreview] = react.useState(null);
			const [edit, setEdit] = react.useState({ path: null, draft: "", dirty: false, saving: false, error: null, savedSize: null });
			const [panelRefresh, setPanelRefresh] = react.useState(0);
			const [toast, setToast] = react.useState(null);
			const [rootCtxMenu, setRootCtxMenu] = react.useState(null);
			const [selectedPaths, setSelectedPaths] = react.useState(() => new Set());
			const [dragTarget, setDragTarget] = react.useState(null);
			const selectedCount = selectedPaths.size;
			const selAnchorRef = react.useRef(null);
			const clearSelection = () => {
				setSelectedPaths(new Set());
				selAnchorRef.current = null;
			};
			const toggleSelection = (path) => {
				setSelectedPaths((current) => {
					const next = new Set(current);
					if (next.has(path)) next.delete(path); else next.add(path);
					return next;
				});
			};
			const selectRange = (entryPath, dirPath, orderedPaths) => {
				setSelectedPaths((current) => {
					const next = new Set();
					const anchor = selAnchorRef.current;
					if (anchor !== null && anchor.dirPath === dirPath && Array.isArray(orderedPaths) && orderedPaths.length > 0) {
						const anchorIdx = orderedPaths.indexOf(anchor.path);
						const entryIdx = orderedPaths.indexOf(entryPath);
						if (anchorIdx >= 0 && entryIdx >= 0) {
							const [lo, hi] = anchorIdx <= entryIdx ? [anchorIdx, entryIdx] : [entryIdx, anchorIdx];
							for (let i = lo; i <= hi; i++) next.add(orderedPaths[i]);
							return next;
						}
					}
					next.add(entryPath);
					return next;
				});
				selAnchorRef.current = { path: entryPath, dirPath };
			};
			const onSelectEntry = (entry, orderedEntries, event, dirPath) => {
				if (event !== void 0 && event !== null && (event.ctrlKey === true || event.metaKey === true)) {
					toggleSelection(entry.path);
					selAnchorRef.current = { path: entry.path, dirPath };
					return;
				}
				if (event !== void 0 && event !== null && event.shiftKey === true) {
					const orderedPaths = orderedEntries.map((item) => item.path);
					selectRange(entry.path, dirPath, orderedPaths);
					return;
				}
				setSelectedPaths(new Set([entry.path]));
				selAnchorRef.current = { path: entry.path, dirPath };
			};
			const moveSelection = (paths, destDir) => {
				if (!Array.isArray(paths) || paths.length === 0) return;
				if (paths.includes(destDir)) { showNotice(tx("move.intoSelf")); return; }
				setToast(null);
				apiMove(paths, destDir).then((result) => {
					const count = result !== null && result !== void 0 && Array.isArray(result.moved) ? result.moved.length : paths.length;
					showNotice(tx("multisel.moved", { count: String(count) }));
					setSelectedPaths(new Set());
					selAnchorRef.current = null;
					setPanelRefresh((current) => current + 1);
				}, (reason) => {
					showNotice(tx("move.failed") + ": " + errorMessage(reason));
				});
			};
						const settingsSnap = react.useSyncExternalStore(
				(settingsScope === void 0 || settingsScope === null) ? (() => () => {}) : (listener) => settingsScope.subscribe(listener),
				() => (settingsScope === void 0 || settingsScope === null) ? null : settingsScope.getSnapshot()
			);
			const wSettings = (settingsSnap !== null && settingsSnap.value !== void 0) ? settingsSnap.value : null;
			const wFont = (wSettings !== null && wSettings.writing !== void 0 && wSettings.writing.fontFamily !== void 0) ? wSettings.writing.fontFamily : "serif";
			const wSize = (wSettings !== null && wSettings.writing !== void 0 && wSettings.writing.fontSize !== void 0) ? wSettings.writing.fontSize : 16;
			const wLine = (wSettings !== null && wSettings.writing !== void 0 && wSettings.writing.lineSpacing !== void 0) ? wSettings.writing.lineSpacing : 1.8;
			const wBg = (wSettings !== null && wSettings.writing !== void 0 && wSettings.writing.background !== void 0) ? wSettings.writing.background : "default";
			const wAutoSave = (wSettings === null || wSettings.writing === void 0 || wSettings.writing.autoSave === void 0) ? true : wSettings.writing.autoSave;
			const wDelay = (wSettings !== null && wSettings.writing !== void 0 && wSettings.writing.autoSaveDelayMs !== void 0) ? wSettings.writing.autoSaveDelayMs : 3000;
			const wTreeHidden = (wSettings !== null && wSettings.tree !== void 0 && wSettings.tree.showHidden !== void 0) ? wSettings.tree.showHidden : false;
			const writingDefaultsRef = react.useRef({ fontFamily: wFont, fontSize: wSize, lineSpacing: wLine, background: wBg, autoSave: wAutoSave, autoSaveDelayMs: wDelay });
			writingDefaultsRef.current = { fontFamily: wFont, fontSize: wSize, lineSpacing: wLine, background: wBg, autoSave: wAutoSave, autoSaveDelayMs: wDelay };
			const [writingMode, setWritingMode] = react.useState(false);
			const [writingFontSize, setWritingFontSize] = react.useState(writingDefaultsRef.current.fontSize);
			const [writingFontFamily, setWritingFontFamily] = react.useState(writingDefaultsRef.current.fontFamily);
			const [showRule, setShowRule] = react.useState(true);
			const [writingBg, setWritingBg] = react.useState(writingDefaultsRef.current.background);
			const [writingLineSpacing, setWritingLineSpacing] = react.useState(writingDefaultsRef.current.lineSpacing);
			const [writingMargin, setWritingMargin] = react.useState(16);
			const [writingTreeHidden, setWritingTreeHidden] = react.useState(writingDefaultsRef.current.treeShowHidden !== void 0 ? writingDefaultsRef.current.treeShowHidden : wTreeHidden);
			const [readingMode, setReadingMode] = react.useState(false);
			const [readingState, setReadingState] = react.useState({ progress: null, bookmarks: [] });
			const [flipMode, setFlipMode] = react.useState("paged");
			// When the sibling dsh-workspace-explorer plugin is also mounted, its
			// floating tab button occupies the same spot; offset ours so both are clickable.
			const [coexistTabOffset, setCoexistTabOffset] = react.useState(false);
			react.useEffect(() => {
				if (typeof document === "undefined") return;
				const check = () => setCoexistTabOffset(document.querySelector(".we_sidebarTab") !== null);
				check();
				const timer = window.setInterval(check, 1200);
				return () => window.clearInterval(timer);
			}, []);
			const clipboardRef = react.useRef(null);
			const toastTimerRef = react.useRef(null);
			const showNotice = (text) => {
				setToast(text);
				if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
				toastTimerRef.current = window.setTimeout(() => setToast(null), 2200);
			};
			const openPreview = (name, path) => {
				setPreview({ name, path, status: "loading", text: "", error: null, truncated: false, size: 0 });
				setEdit({ path, draft: "", dirty: false, saving: false, error: null, savedSize: null });
				setReadingMode(false);
				setReadingState({ progress: null, bookmarks: [] });
				apiStateGet(path).then((value) => {
					if (value !== null && typeof value === "object") {
						setReadingState((current) => ({ progress: value.progress ?? null, bookmarks: Array.isArray(value.bookmarks) ? value.bookmarks : [] }));
					}
				}, () => { /* no saved state yet */ });
				apiRead(path, { maxBytes: 4 * 1024 * 1024 }).then((value) => {
					setPreview((current) => current !== null && current.path === path ? {
						...current,
						status: "ready",
						text: value.text,
						truncated: value.truncated === true,
						size: typeof value.size === "number" ? value.size : 0
					} : current);
					setEdit((current) => current.path === path ? { ...current, draft: value.text } : current);
				}, (reason) => {
					setPreview((current) => current !== null && current.path === path ? {
						...current,
						status: "error",
						error: errorMessage(reason)
					} : current);
				});
			};
			const openFileInHarness = (filePath) => {
				let resolved = filePath;
				if (typeof resolved === "string" && resolved !== "" && !resolved.startsWith("/") && !/^[A-Za-z]:/.test(resolved)) {
					// relative reference (e.g. produced-file chip): resolve against the workspace root
					const root = rootPathRef.current || (items.length > 0 ? items[0].path : "");
					if (root !== "") resolved = String(root).replace(/\/+$/, "") + "/" + resolved;
				}
				const name = String(resolved).split(/[\\/]/).filter(Boolean).pop() || resolved;
				setOpen(true);
				openPreview(name, resolved);
			};
			react.useEffect(() => {
				globalOpenFile = (filePath) => openFileInHarness(filePath);
				return () => { if (globalOpenFile !== null) globalOpenFile = null; };
			}, []);
			const editable = preview !== null && preview.status === "ready" && preview.truncated !== true;
			const changeEdit = (text) => {
				setEdit((current) => ({ ...current, draft: text, dirty: true, error: null }));
			};
			const copyEntry = (path) => {
				clipboardRef.current = path;
				copyToClipboardText(path);
			};
			const pasteInto = (targetPath) => {
				if (clipboardRef.current === null) { onNotice(t("ctx.copy")); return; }
				const src = clipboardRef.current;
				const destDir = String(targetPath || rootPathRef.current || "").replace(/\/+$/, "");
				if (destDir === "") { onNotice(t("ctx.copyPath")); return; }
				const base = src.split("/").pop() || src;
				const ext = base.includes(".") ? base.slice(base.lastIndexOf(".")) : "";
				const stem = ext !== "" ? base.slice(0, base.lastIndexOf(".")) : base;
				let candidate = destDir + "/" + base;
				let attempt = 0;
				const tryCopy = (name) => apiCopy(src, destDir + "/" + name).then(
					() => {
						onNotice(t("ctx.pasted"));
						refreshTree();
					},
					(reason) => {
						const msg = errorMessage(reason);
						if (msg.includes("already exists") || /exists/i.test(msg)) {
							attempt += 1;
							const suffix = ext !== "" ? stem + "-" + attempt + ext : stem + "-" + attempt;
							tryCopy(suffix);
						} else {
							onNotice(msg);
						}
					}
				);
				void candidate;
				tryCopy(base);
			};
			const deleteEntry = (path) => apiDelete(path);
			const refreshTree = () => setPanelRefresh((current) => current + 1);
			const formatEdit = () => {
				setEdit((current) => ({ ...current, draft: formatMd(current.draft), dirty: true, error: null }));
			};
			const saveEdit = () => {
				if (preview === null || !editable || !edit.dirty || edit.saving) return;
				setEdit((current) => ({ ...current, saving: true, error: null }));
				apiWrite(preview.path, edit.draft).then((value) => {
					setEdit((current) => ({ ...current, saving: false, dirty: false, savedSize: typeof value.size === "number" ? value.size : current.savedSize }));
					setPanelRefresh((current) => current + 1);
				}, (reason) => {
					setEdit((current) => ({ ...current, saving: false, error: errorMessage(reason) }));
				});
			};
			// Autosave: in writing mode, save automatically once editing pauses
			// for 3 seconds. Non-writing edits keep the manual Ctrl+S / Save flow.
			react.useEffect(() => {
				if (!writingMode) return;
				if (writingDefaultsRef.current.autoSave === false) return;
				if (!edit.dirty || edit.saving) return;
				const timer = window.setTimeout(() => {
					if (preview !== null && editable && edit.dirty && !edit.saving) saveEdit();
				}, writingDefaultsRef.current.autoSaveDelayMs);
				return () => window.clearTimeout(timer);
			}, [writingMode, edit.dirty, edit.saving, edit.draft, preview, editable]);
			// Persist reading progress / bookmarks (debounced) for the current file.
			react.useEffect(() => {
				if (preview === null || preview.path === null) return;
				if (!readingMode) return;
				const timer = window.setTimeout(() => {
					apiStateSet(preview.path, { progress: readingState.progress ?? null, bookmarks: readingState.bookmarks ?? [] }).catch(() => {});
				}, 900);
				return () => window.clearTimeout(timer);
			}, [readingState, preview, readingMode]);
			const addToChat = (entry) => {
				return insertFileReference(entry.name, entry.path);
			};

			const rootPathRef = react.useRef("");
			const closePanel = () => {
				setOpen(false);
				setPreview(null);
				setEdit({ path: null, draft: "", dirty: false, saving: false, error: null, savedSize: null });
			};
			return react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, {
				children: [
					react_jsx_runtime.jsxs("div", {
						className: clsx(css.sidebarPanel, open && css.sidebarPanelOpen),
						style: { width: panelWidth },
						children: [
							react_jsx_runtime.jsx("div", {
								className: css.sidebarHandle,
								onMouseDown: (event) => {
									event.preventDefault();
									const startX = event.clientX;
									const startWidth = panelWidth;
									const onMove = (moveEvent) => {
										setPanelWidth(Math.max(280, Math.min(window.innerWidth - Math.round(window.innerWidth / 5), startWidth + (startX - moveEvent.clientX))));
									};
									const onUp = () => {
										window.removeEventListener("mousemove", onMove);
										window.removeEventListener("mouseup", onUp);
									};
									window.addEventListener("mousemove", onMove);
									window.addEventListener("mouseup", onUp);
								}
							}),
							react_jsx_runtime.jsxs("div", {
								className: css.sidebarHeader,
								children: [
										react_jsx_runtime.jsx("div", { className: css.sidebarTitle, children: tx("panel.title") }),
										selectedCount > 0 && react_jsx_runtime.jsxs("div", {
											style: { display: "flex", alignItems: "center", gap: 6, marginLeft: 8, fontSize: 12, color: "var(--dsw-alias-label-secondary)" },
											children: [
												react_jsx_runtime.jsx("span", { children: tx("multisel.count", { count: String(selectedCount) }) }),
												react_jsx_runtime.jsx("button", {
													type: "button",
													style: { height: 20, padding: "0 8px", borderRadius: 5, border: "1px solid var(--dsw-alias-border-l1)", background: "transparent", color: "var(--dsw-alias-label-secondary)", fontSize: 11, cursor: "pointer" },
													onClick: () => {
														setSelectedPaths(new Set());
														selAnchorRef.current = null;
													},
													children: tx("multisel.clear")
												})
											]
										}),
									react_jsx_runtime.jsxs("div", {
										className: css.sidebarActions,
										children: [
											editable && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Button, {
												variant: "primary",
												disabled: !edit.dirty || edit.saving,
												onClick: saveEdit,
												children: edit.saving ? tx("files.saving") : tx("files.save")
											}),
											preview !== null && preview.status === "ready" && react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Button, {
												variant: "outline",
												onClick: () => {
													openPath(preview.path).catch((reason) => {
														console.warn("path open rejected:", reason);
													});
												},
												children: tx("files.openExternal")
											}),
											react_jsx_runtime.jsx("button", {
												type: "button",
												className: css.sidebarClose,
												"aria-label": tx("close"),
												onClick: closePanel,
												children: "\u2715"
											})
										]
									})
								]
							}),
							react_jsx_runtime.jsxs("div", {
								className: clsx(css.panel, dragTarget === "root" && css.panelDropRoot),
								onDragOver: (event) => {
									event.preventDefault();
									event.stopPropagation();
									event.dataTransfer.dropEffect = "move";
									setDragTarget("root");
								},
								onDragLeave: (event) => {
									const related = event.relatedTarget;
									if (related instanceof Element && event.currentTarget.contains(related)) return;
									setDragTarget((current) => current === "root" ? null : current);
								},
								onDrop: (event) => {
									event.preventDefault();
									event.stopPropagation();
									setDragTarget(null);
									let payload = null;
									try {
										const raw = event.dataTransfer.getData("application/x-dsh-readwrite-hub");
										if (raw !== "") payload = JSON.parse(raw);
									} catch { payload = null; }
									if (payload === null || !Array.isArray(payload.paths) || payload.paths.length === 0) return;
									const rootDir = visibleItems.length > 0 && visibleItems[0]?.path ? visibleItems[0].path : "";
									if (rootDir === "") return;
									moveSelection(payload.paths, rootDir);
								},
								children: [
									react_jsx_runtime.jsx("div", {
										className: css.panelEditor,
										children: preview === null ? react_jsx_runtime.jsx("div", {
											className: css.panelEmpty,
											children: tx("panel.empty")
										}) : preview.status === "loading" ? react_jsx_runtime.jsx("div", {
											className: css.filesLoading,
											role: "status",
											children: tx("files.loading")
										}) : preview.status === "error" ? react_jsx_runtime.jsx("div", {
											className: css.filesError,
											role: "alert",
											children: preview.error ?? tx("files.error")
										}) : react_jsx_runtime.jsx(FilePreviewBody, {
											preview,
											t: tx,
											draft: edit.draft,
											dirty: edit.dirty,
											saving: edit.saving,
											error: edit.error,
											savedSize: edit.savedSize,
											editable,
											onChange: changeEdit,
											onSave: saveEdit,
											writingMode,
											writingFontSize,
											writingFontFamily,
											onToggleWriting: () => { setWritingMode((v) => !v); if (!writingMode) setReadingMode(false); },
											onSetFontSize: setWritingFontSize,
											onSetFontFamily: setWritingFontFamily,
											onFormat: formatEdit,
											showRule,
											onToggleRule: () => setShowRule((v) => !v),
											writingBg,
											writingLineSpacing,
											writingMargin,
											onSetBg: setWritingBg,
											onSetLineSpacing: setWritingLineSpacing,
											onSetMargin: setWritingMargin,
											readingMode,
											onToggleReading: () => { setReadingMode((v) => !v); if (!readingMode) setWritingMode(false); },
											readingState,
											onReadingState: (patch) => setReadingState((current) => ({ ...current, ...patch })),
											flipMode,
											onSetFlipMode: setFlipMode
										})
									}),

									react_jsx_runtime.jsx("div", {
										className: css.treeHandle,
										onMouseDown: (event) => {
											event.preventDefault();
											const startX = event.clientX;
											const startWidth = treeWidth;
											const onMove = (moveEvent) => {
												setTreeWidth(Math.max(180, Math.min(480, startWidth - (moveEvent.clientX - startX))));
											};
											const onUp = () => {
												window.removeEventListener("mousemove", onMove);
												window.removeEventListener("mouseup", onUp);
											};
											window.addEventListener("mousemove", onMove);
											window.addEventListener("mouseup", onUp);
										}
									}),
									react_jsx_runtime.jsx("div", {
										className: css.panelTree,
										style: { width: treeWidth },
										onMouseDown: (event) => {
											if (event.target instanceof Element && event.target.closest(".rh_fileRow,.rh_dirRow,.rh_rootHeader,.rh_rowAction,.rh_filesHeaderAction,.rh_inlineInput,.rh_createRow,.rh_filesToggle,.rh_filesChevron")) return;
											setSelectedPaths(new Set());
											selAnchorRef.current = null;
										},
										onContextMenu: (event) => {
											event.preventDefault();
											event.stopPropagation();
											setRootCtxMenu({ x: event.clientX, y: event.clientY });
										},
										children: visibleItems.map((workspace) => react_jsx_runtime.jsx(WorkspaceRoot, {
											workspace,
											t: tx,
											listDirectory: apiList,
											renameFile: apiRename,
											createFile: apiNewFile,
											createDirectory: apiMkdir,
											openPreview,
											activePath: preview?.path,
											refreshToken: panelRefresh,
											addToChat,
											onNotice: showNotice,
											copyEntry,
											pasteInto,
											refreshTree,
											deleteEntry,
											selectedPaths,
											onSelectEntry,
											moveSelection,
											dragTarget,
											onDragTarget: setDragTarget,
											onClearSelection: clearSelection
										}, workspace.workspaceId))
									}),
								]
							}),
						toast !== null && react_jsx_runtime.jsx("div", {
							className: css.sidebarToast,
							role: "status",
							children: toast
						})
						]
					}),
					react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: tx("action.title"),
						side: "left",
						delayMs: 300,
						children: react_jsx_runtime.jsx("button", {
							type: "button",
							className: css.sidebarTab,
							style: coexistTabOffset ? { top: "calc(50% - 52px)" } : void 0,
							"aria-label": tx("action.title"),
							onClick: () => {
								if (typeof window !== "undefined") {
									const maxW = Math.max(280, window.innerWidth - Math.round(window.innerWidth / 5));
									setPanelWidth((w) => Math.min(w, maxW));
								}
								setOpen(true);
							},
							children: react_jsx_runtime.jsx(_deepseek_ai_dsh_client_ui_primitives.IconBrowseOutline16, { size: 16 })
						})
					}),
					react_jsx_runtime.jsx(ContextMenu, {
						menu: rootCtxMenu,
						t: tx,
						onClose: () => setRootCtxMenu(null),
						children: [
							react_jsx_runtime.jsx(CtxItem, {
								t: tx,
								label: tx("ctx.paste"),
								onClick: () => pasteInto(rootPathRef.current)
							}),
							react_jsx_runtime.jsx("div", { className: css.ctxSep }),
							react_jsx_runtime.jsx(CtxItem, {
								t: tx,
								label: tx("ctx.addToChat"),
								onClick: () => {
									const root = rootPathRef.current;
									if (root !== "") {
										const name = String(root).split("/").filter(Boolean).pop() || root;
										addToChat({ name, path: root });
									}
									showNotice(tx("ctx.addedToChat"));
								}
							}),
							react_jsx_runtime.jsx(CtxItem, {
								t: tx,
								label: tx("ctx.reveal"),
								onClick: () => {
									if (rootPathRef.current !== "") {
										apiReveal(rootPathRef.current).then(() => {
											showNotice(tx("ctx.reveal"));
										}, (reason) => {
											showNotice(errorMessage(reason));
										});
									}
								}
							}),
							react_jsx_runtime.jsx(CtxItem, {
								t: tx,
								label: tx("ctx.copyPath"),
								onClick: () => {
									copyToClipboardText(rootPathRef.current);
									showNotice(tx("ctx.copied"));
								}
							})
						]
					}),
				]
			});
		}

		// ---- plugin body ----------------------------------------------
		// Global file-open handler registered by ExplorerAction when it mounts.
		let globalOpenFile = null;
		function apply(ctx) {
			
			ctx.effect(() => {
				if (typeof document === "undefined") return;
				const onCapture = (event) => {
					const raw = event.target;
					if (!(raw instanceof Element)) return;
					const el = raw.closest && raw.closest('button[title], a[title], [class*="fileLink"]');
					if (el === null) return;
					if (el.closest && el.closest(".rh_sidebarPanel") !== null) return;
					let path = el.getAttribute && el.getAttribute("title");
					if ((typeof path !== "string" || path === "") && el.classList && /fileLink/.test(String(el.className || ""))) {
						// Tool-call argument link: the button text is the (relative) file path.
						path = (el.textContent || "").trim();
					}
					if (typeof path !== "string" || path === "" || path === ".") return;
					if (el.tagName === "A") {
						const href = el.getAttribute("href") || "";
						if (/^(https?:|mailto:)/i.test(href)) return;
					}
					const pathLike = path.startsWith("/") || /^[A-Za-z]:/.test(path) || path.includes("/") || path.includes("\\") || /\.(md|txt|json|ya?ml|py|js|ts|css|html?|svg|png|jpg|jpeg|gif)$/i.test(path);
					if (!pathLike) return;
					event.preventDefault();
					event.stopPropagation();
					if (globalOpenFile !== null) globalOpenFile(path);
				};
				document.addEventListener("click", onCapture, true);
				return () => document.removeEventListener("click", onCapture, true);
			}, "readwrite-hub: file-link interceptor");
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "readwrite-hub: dictionaries");
			const inputTriggers = ctx.get("inputTriggers");
			ctx.effect(() => inputTriggers.registerSource({
				trigger: "/",
				name: "readwrite-hub",
				candidates: () => Promise.resolve([]),
				onPick: () => void 0,
				codec: {
					clipboardText: (ref) => ref,
					serialize: (ref) => Promise.resolve(ref)
				}
			}), "readwrite-hub: file reference source");
			ctx.slots.inject("settings.plugin.item", () => ctx.slots.register({
				name: "settings.plugin.item",
				key: "readwrite-hub",
				locale: NS,
				inject: () => ({
					scope: ctx.settingsScope.bind({ namespace: "readwrite-hub" })
				})
			}, ExplorerSettingsCard));
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "readwrite-hub",
				locale: NS,
				inject: () => ({
					workspacesStore: ctx.workspaces.list,
					sessionsStore: ctx.sessions.list,
					settingsScope: ctx.settingsScope.bind({ namespace: "readwrite-hub" }),
					openPath: (path) => ctx.workspaces.openPath(path),
					insertFileReference: (label, fullPath) => {
						const snapshot = ctx.sessions.list.getSnapshot();
						const id = snapshot?.current;
						if (id === void 0) return false;
						const actx = ctx.sessions.scope(id);
						if (actx === void 0) return false;
						const conversation = actx.get("conversation");
						if (conversation === void 0) return false;
						const state = conversation.input.for(actx).state.getSnapshot();
						const span = { start: state.draft.length, end: state.draft.length, draftRev: state.draftRev };
						return actx.bail(actx, "slash/input-insert-reference", {
							reference: {
								source: "readwrite-hub",
								ref: fullPath,
								label,
								clipboardText: fullPath
							},
							span
						}) === true;
					}
				})
			}, ExplorerAction));
		}
		const inject = ["slots", "workspaces", "sessions", "inputTriggers", "locale", "settingsScope"];

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
