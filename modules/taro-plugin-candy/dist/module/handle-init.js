"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMainPackagePaths = exports.generateTabbarPaths = exports.generateSubPackagePaths = exports.handleInitAppConfig = void 0;
const fs = require("fs-extra");
const path = require("path");
const handle_path_1 = require("./handle-path");
/**
 * app.config.ts初始化
 * @param ctx
 */
const handleInitAppConfig = async (ctx) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const pagesConfig = await (0, exports.generateMainPackagePaths)(ctx);
    const subPackagesPaths = await (0, exports.generateSubPackagePaths)(ctx);
    (_a = ctx.appConfigModel) === null || _a === void 0 ? void 0 : _a.setConfig("pages", JSON.stringify(pagesConfig.pagesPaths), false);
    const tababrType = (_b = ctx.pluginConfigModel) === null || _b === void 0 ? void 0 : _b.getConfig().tabbarType;
    const tabBarConfig = (_c = ctx.appConfigModel) === null || _c === void 0 ? void 0 : _c.getConfig().tabBar;
    if (tababrType) {
        (_d = ctx.appConfigModel) === null || _d === void 0 ? void 0 : _d.setConfig("tabBar", JSON.stringify(pagesConfig.tabbarPaths), false);
    }
    else {
        if (fs.pathExistsSync((0, handle_path_1.getTabbarPath)(ctx)) && tabBarConfig) {
            (_e = ctx.appConfigModel) === null || _e === void 0 ? void 0 : _e.remove("tabBar");
        }
    }
    (_f = ctx.appConfigModel) === null || _f === void 0 ? void 0 : _f.setConfig("subPackages", JSON.stringify(subPackagesPaths), false);
    (_g = ctx.appConfigModel) === null || _g === void 0 ? void 0 : _g.saveConfig();
    console.log(ctx.helper.chalk.green(`✅ 页面路径已自动同步成功`));
};
exports.handleInitAppConfig = handleInitAppConfig;
/** 生成分包路径配置 */
const generateSubPackagePaths = async (ctx) => {
    const subPackagePath = await (0, handle_path_1.getSubPackagePath)(ctx);
    const pagesSubPathArr = fs
        .readdirSync(subPackagePath)
        .map((subName) => {
        const root = `pages-sub/${subName}`;
        const pages = fs
            .readdirSync(path.join(subPackagePath, subName))
            .map((item) => {
            const pageSubCpnPath = path.join(subPackagePath, subName, item, "index.tsx");
            if (fs.pathExistsSync(pageSubCpnPath)) {
                return `${item}/index`;
            }
        })
            .filter((item) => item);
        if (pages.length) {
            return {
                root,
                pages,
            };
        }
    })
        .filter((item) => item);
    return pagesSubPathArr;
};
exports.generateSubPackagePaths = generateSubPackagePaths;
/** 生成tabbar路径配置 */
const generateTabbarPaths = async (ctx) => {
    var _a;
    const tabbarPath = (0, handle_path_1.getTabbarPath)(ctx);
    if (!fs.pathExistsSync(tabbarPath)) {
        return {
            custom: true,
            list: [],
        };
    }
    const tabbarDir = (_a = ctx.pluginConfigModel) === null || _a === void 0 ? void 0 : _a.getConfig().tabbarDir;
    const tabbarPaths = fs
        .readdirSync(tabbarPath)
        .map((item) => {
        const pageCpnPath = path.join(tabbarPath, item, "index.tsx");
        if (fs.pathExistsSync(pageCpnPath)) {
            return {
                text: item,
                pagePath: `pages/${tabbarDir}/${item}/index`,
            };
        }
    })
        .filter((item) => item);
    return {
        custom: true,
        list: tabbarPaths,
    };
};
exports.generateTabbarPaths = generateTabbarPaths;
/** 生成主包路径配置 */
const generateMainPackagePaths = async (ctx) => {
    const tabbarPaths = await (0, exports.generateTabbarPaths)(ctx);
    let pagesPathArr = fs
        .readdirSync((0, handle_path_1.getPagesPath)(ctx))
        .map((item) => {
        const pageCpnPath = path.join(ctx.paths.sourcePath, "./pages", item, "index.tsx");
        if (fs.pathExistsSync(pageCpnPath)) {
            return `pages/${item}/index`;
        }
    })
        .filter((item) => item);
    const tabbarPathArr = tabbarPaths.list.map((item) => item === null || item === void 0 ? void 0 : item.pagePath);
    pagesPathArr = [...pagesPathArr, ...tabbarPathArr];
    pagesPathArr = await handleHomePage(ctx, pagesPathArr);
    return { pagesPaths: pagesPathArr, tabbarPaths };
};
exports.generateMainPackagePaths = generateMainPackagePaths;
const handleHomePage = async (ctx, pathsPathArr) => {
    var _a;
    const homePage = (_a = ctx.pluginConfigModel) === null || _a === void 0 ? void 0 : _a.getConfig().homePage;
    const homePathStr = pathsPathArr.find((item) => `/${item}` === homePage);
    if (homePathStr) {
        const finalPaths = pathsPathArr.filter((item) => `/${item}` !== homePage);
        finalPaths.unshift(homePathStr);
        return finalPaths;
    }
    else {
        return pathsPathArr;
    }
};
//# sourceMappingURL=handle-init.js.map