"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const handle_rich_text_1 = require("./module/handle-rich-text");
const handle_path_1 = require("./module/handle-path");
const handle_init_1 = require("./module/handle-init");
const handle_command_1 = require("./module/handle-command");
const little_spanner_1 = require("little-spanner");
/**
 * 命令行扩展
 */
exports.default = async (ctx) => {
    var _a;
    if (process.env.NODE_ENV === "production")
        return;
    ctx.pluginConfigModel = await (0, little_spanner_1.loadPluginConfig)(ctx.paths.sourcePath);
    ctx.appConfigModel = await (0, little_spanner_1.loadAppConfig)(ctx.paths.sourcePath);
    const subPackageDir = (_a = ctx.pluginConfigModel) === null || _a === void 0 ? void 0 : _a.getConfig().subPackageDir;
    (0, handle_command_1.registerCommand)(ctx);
    ctx.helper.chokidar
        .watch([(0, handle_path_1.getPluginConfigPath)(ctx)])
        .on("change", async () => {
        ctx.pluginConfigModel = await (0, little_spanner_1.loadPluginConfig)(ctx.paths.sourcePath);
        ctx.appConfigModel = await (0, little_spanner_1.loadAppConfig)(ctx.paths.sourcePath);
        await (0, handle_rich_text_1.handleGenerateRichText)(ctx);
        await (0, handle_init_1.handleInitAppConfig)(ctx);
    });
    ctx.helper.chokidar
        .watch([
        path.join(ctx.paths.sourcePath, "pages/**/index.tsx"),
        path.join(ctx.paths.sourcePath, `${subPackageDir}/*/*/index.tsx`),
    ], { ignoreInitial: true })
        .on("add", () => (0, handle_init_1.handleInitAppConfig)(ctx));
    // ctx.onBuildComplete(async () => {});
    ctx.onBuildStart(async () => {
        await (0, handle_rich_text_1.handleGenerateRichText)(ctx);
        await (0, handle_init_1.handleInitAppConfig)(ctx);
    });
    // ctx.onBuildFinish(() => {});
};
//# sourceMappingURL=index.js.map