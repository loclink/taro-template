"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const chokidar = require("chokidar");
const ts_morph_1 = require("ts-morph");
const utils_1 = require("./utils");
const generate_main_1 = require("./generate-main");
const generate_sub_1 = require("./generate-sub");
const generate_tabbar_1 = require("./generate-tabbar");
function getConfigValue(config, key) {
    let regex = new RegExp(key + ": '([^']*)'");
    let match = config.match(regex);
    return match ? match[1] : null;
}
function handleGen(ctx) {
    return new Promise((resolve) => {
        const { sourcePath } = ctx.paths;
        const appConfigPath = path.join(ctx.paths.sourcePath, 'app.config.ts');
        const pagesPath = path.join(sourcePath, './pages');
        const pagesSubPath = path.join(sourcePath, './pages-sub');
        const tabbarPath = path.join(sourcePath, './pages/tabbar');
        const configPath = path.join(sourcePath, 'config.ts');
        let appConfigObj = {};
        let configObj = {};
        const project = new ts_morph_1.Project();
        project.addSourceFileAtPath(configPath);
        const sourceFile = project.addSourceFileAtPath(appConfigPath);
        // 读取app.config.ts
        sourceFile.forEachDescendant((node) => {
            if (node.getKindName() === 'CallExpression') {
                const callExpr = node;
                if (callExpr.getExpression().getText() === 'defineAppConfig') {
                    const configStr = callExpr.getArguments()[0].getText();
                    appConfigObj = eval(`(${configStr})`);
                }
            }
        });
        // 拿到homePage
        const configCodeStr = fs.readFileSync(configPath).toString();
        configObj = { homePage: getConfigValue(configCodeStr, 'homePage') };
        // 生成tabbar
        const tabbarPaths = (0, generate_tabbar_1.generateTabbar)(tabbarPath);
        // 生成主包页面
        const pagesPathArr = (0, generate_main_1.generateMainPages)(sourcePath, pagesPath, tabbarPaths);
        // 生成分包页面
        const pagesSubPathArr = (0, generate_sub_1.generateSubPages)(pagesSubPath);
        // set最终结果
        appConfigObj.pages = pagesPathArr;
        appConfigObj.subPackages = pagesSubPathArr;
        appConfigObj.tabBar = tabbarPaths;
        // 处理首页路径，将首页路径置顶
        if (configObj === null || configObj === void 0 ? void 0 : configObj.homePage) {
            const page = appConfigObj.pages.find((item) => { var _a; return (_a = configObj.homePage) === null || _a === void 0 ? void 0 : _a.includes(item || ''); });
            if (page) {
                appConfigObj.pages = appConfigObj.pages.filter((item) => { var _a; return !((_a = configObj.homePage) === null || _a === void 0 ? void 0 : _a.includes(item || '')); });
                appConfigObj.pages.unshift(page);
            }
        }
        // 写入结果
        const finalText = `export default defineAppConfig(${(0, utils_1.stringify)(appConfigObj)});\n`;
        fs.writeFileSync(appConfigPath, finalText);
        resolve();
        console.log(ctx.helper.chalk.green('✨ 已自动注册路径至app.config.ts'));
    });
}
/**
 * 命令行扩展
 */
exports.default = (ctx) => {
    if (process.env.NODE_ENV === 'production')
        return;
    chokidar
        .watch([
        path.join(ctx.paths.sourcePath, 'pages/**/index.tsx'),
        path.join(ctx.paths.sourcePath, 'pages-sub/*/*/index.tsx'),
    ], { ignoreInitial: true })
        .on('add', () => handleGen(ctx))
        .on('ready', () => handleGen(ctx))
        .on('unlinkDir', () => handleGen(ctx));
    ctx.onBuildFinish(() => {
        // handleGen(paths);
    });
};
//# sourceMappingURL=index.js.map