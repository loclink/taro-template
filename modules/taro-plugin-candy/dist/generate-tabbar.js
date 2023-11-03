"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTabbar = void 0;
const fs = require("fs-extra");
const path = require("path");
const generateTabbar = (tabbarPath) => {
    if (!fs.pathExistsSync(tabbarPath))
        return {
            custom: true,
            list: [],
        };
    const tabbarPaths = fs
        .readdirSync(tabbarPath)
        .map((item) => {
        const pageCpnPath = path.join(tabbarPath, item, "index.tsx");
        if (fs.pathExistsSync(pageCpnPath)) {
            return {
                text: item,
                pagePath: `pages/tabbar/${item}/index`,
            };
        }
    })
        .filter((item) => item);
    // const tabbarPaths = {
    //   custom: true,
    //   list: configObj.tabbar.map((item) => {
    //     return {
    //       text: item.text,
    //       pagePath: removeLeadingSlash(item.pagePath),
    //     };
    //   }),
    // };
    return {
        custom: true,
        list: tabbarPaths,
    };
};
exports.generateTabbar = generateTabbar;
//# sourceMappingURL=generate-tabbar.js.map