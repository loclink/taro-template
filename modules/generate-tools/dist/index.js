"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./generators/page");
const utils_1 = require("./utils");
exports.default = (ctx, pluginOpts) => {
    const { css = "less", cssModules = "page", nocss = false } = pluginOpts;
    const cssModuleMode = (0, utils_1.getCssModuleMode)(cssModules);
    ctx.registerCommand({
        // 命令名
        name: "g",
        // 执行 taro g --help 时输出的 options 信息
        optionsMap: {
            "-p": "页面路径 ",
            "-s": "分包页面路径",
        },
        // 执行 taro upload --help 时输出的使用例子的信息
        synopsisList: [
            "taro g -p index                   (生成=>pages/index/index)",
            "taro g -p mime                    (生成=>pages/mime/index)",
            "taro g -p profile/about           (生成=>pages/profile/about)",
            "taro g -s home/goods-list         (生成=>pages/sub-pages/home/goods-list)",
        ],
        async fn() {
            const cssExtStr = (0, utils_1.cssExt)(css);
            const { chalk, resolveScriptPath } = ctx.helper;
            let { p: page, s: subPage } = ctx.runOpts.options;
            const { appPath, sourcePath } = ctx.paths;
            if (typeof page !== "string" && typeof subPage !== "string") {
                return console.log(chalk.red("请输入需要创建的页面名称！！"));
            }
            //如果是创建页面
            if (typeof page === "string") {
                try {
                    (0, page_1.PageGenerator)({
                        cssModule: cssModuleMode.page,
                        page: `pages/${page}`,
                        appPath,
                        chalk,
                        cssExt: cssExtStr,
                        nocss,
                    });
                    // parseEntry(ctx, entryPath, pagePath);
                }
                catch (e) {
                    console.log(chalk.red(e));
                }
            }
            if (typeof subPage === "string") {
                try {
                    (0, page_1.PageGenerator)({
                        cssModule: cssModuleMode.page,
                        page: `pages-sub/${subPage}`,
                        appPath,
                        chalk,
                        cssExt: cssExtStr,
                        nocss,
                    });
                }
                catch (e) {
                    console.log(chalk.red(e));
                }
            }
        },
    });
};
//# sourceMappingURL=index.js.map