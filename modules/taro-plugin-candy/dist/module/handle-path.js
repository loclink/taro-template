"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTabbarPath = exports.getSubPackagePath = exports.getPagesPath = exports.getRichTextTempPath = exports.getRichTextTargetPath = exports.getComponentsPath = exports.getPluginConfigPath = exports.getAppConfigPath = exports.getTemplatePath = void 0;
const path = require("path");
const constant_1 = require("../constant");
const getTemplatePath = () => {
    return path.resolve(__dirname, "../../templates");
};
exports.getTemplatePath = getTemplatePath;
const getAppConfigPath = (ctx) => {
    return path.resolve(ctx.paths.sourcePath, constant_1.APP_CONFIG_FILE_NAME);
};
exports.getAppConfigPath = getAppConfigPath;
const getPluginConfigPath = (ctx) => {
    return path.resolve(ctx.paths.sourcePath, constant_1.PLUGIN_CONFIG_FILE_NAME);
};
exports.getPluginConfigPath = getPluginConfigPath;
const getComponentsPath = (ctx) => {
    return path.resolve(ctx.paths.sourcePath, "components");
};
exports.getComponentsPath = getComponentsPath;
const getRichTextTargetPath = (ctx) => {
    return path.join((0, exports.getComponentsPath)(ctx), "rich-text");
};
exports.getRichTextTargetPath = getRichTextTargetPath;
const getRichTextTempPath = () => {
    return path.join((0, exports.getTemplatePath)(), "rich-text");
};
exports.getRichTextTempPath = getRichTextTempPath;
const getPagesPath = (ctx) => {
    return path.resolve(ctx.paths.sourcePath, "pages");
};
exports.getPagesPath = getPagesPath;
const getSubPackagePath = async (ctx) => {
    var _a;
    const pluginConfig = (_a = ctx.pluginConfigModel) === null || _a === void 0 ? void 0 : _a.getConfig();
    return path.resolve(ctx.paths.sourcePath, (pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.subPackageDir) || "pages-sub");
};
exports.getSubPackagePath = getSubPackagePath;
const getTabbarPath = (ctx) => {
    return path.join((0, exports.getPagesPath)(ctx), "tabbar");
};
exports.getTabbarPath = getTabbarPath;
//# sourceMappingURL=handle-path.js.map