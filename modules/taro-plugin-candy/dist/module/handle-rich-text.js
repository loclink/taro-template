"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenerateRichText = void 0;
const fs = require("fs-extra");
const little_spanner_1 = require("little-spanner");
const constant_1 = require("../constant");
const handle_path_1 = require("./handle-path");
const handleGenerateRichText = async (ctx) => {
    var _a, _b, _c, _d, _e;
    const pluginConfig = (_a = ctx.pluginConfigModel) === null || _a === void 0 ? void 0 : _a.getConfig();
    const appConfig = (_b = ctx.appConfigModel) === null || _b === void 0 ? void 0 : _b.getConfig();
    let cpns = (appConfig === null || appConfig === void 0 ? void 0 : appConfig.usingComponents) || {};
    if ((_c = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.usingComponents) === null || _c === void 0 ? void 0 : _c.includes(constant_1.RICH_TEXT)) {
        console.log(ctx.helper.chalk.green(`✨ 已启用rich-text组件`));
        if (!cpns.parse) {
            cpns = Object.assign(Object.assign({}, cpns), { parse: "./components/rich-text/parse/index" });
            const finalCpnsStr = JSON.stringify(cpns);
            (_d = ctx.appConfigModel) === null || _d === void 0 ? void 0 : _d.setConfig("usingComponents", finalCpnsStr);
        }
        if (fs.existsSync((0, handle_path_1.getRichTextTargetPath)(ctx)))
            return;
        (0, little_spanner_1.copyDir)((0, handle_path_1.getRichTextTempPath)(), (0, handle_path_1.getRichTextTargetPath)(ctx));
        console.log(ctx.helper.chalk.green(`✅ rich-text组件已同步至: ${(0, handle_path_1.getRichTextTargetPath)(ctx)}`));
    }
    else {
        if (!cpns.parse)
            return;
        delete cpns.parse;
        const finalCpnsStr = JSON.stringify(cpns);
        (_e = ctx.appConfigModel) === null || _e === void 0 ? void 0 : _e.setConfig("usingComponents", finalCpnsStr);
    }
};
exports.handleGenerateRichText = handleGenerateRichText;
//# sourceMappingURL=handle-rich-text.js.map