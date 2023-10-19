"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMainPages = void 0;
const fs = require("fs-extra");
const path = require("path");
const generateMainPages = (sourcePath, pagesPath, tabbarPaths) => {
    let pagesPathArr = fs
        .readdirSync(pagesPath)
        .map((item) => {
        const pageCpnPath = path.join(sourcePath, './pages', item, 'index.tsx');
        if (fs.pathExistsSync(pageCpnPath)) {
            return `pages/${item}/index`;
        }
    })
        .filter((item) => item);
    const tabbarPathArr = tabbarPaths.list.map((item) => item.pagePath);
    pagesPathArr = [...pagesPathArr, ...tabbarPathArr];
    return pagesPathArr;
};
exports.generateMainPages = generateMainPages;
//# sourceMappingURL=generate-main.js.map