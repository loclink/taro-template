"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommand = void 0;
const creater_1 = require("../command/creater");
const path_1 = require("../command/path");
const registerCommand = (ctx) => {
    ctx.registerCommand({
        name: "path",
        fn: async () => await (0, path_1.handlePathCommand)(ctx),
    });
    ctx.registerCommand({
        name: "gs",
        synopsisList: [
            "taro gs home/goods-list     (在分包目录中生成home/goods-list, 例如: pages-sub/home/goods-list)",
        ],
        fn: async (opt) => await (0, creater_1.handleCreater)(ctx, opt),
    });
    ctx.registerCommand({
        name: "gp",
        synopsisList: ["taro gp auth     (在主包目录中生成auth, 例如: pages/auth)"],
        fn: async (opt) => await (0, creater_1.handleCreater)(ctx, opt),
    });
    ctx.registerCommand({
        name: "gt",
        synopsisList: [
            "taro gt profile     (在tabbar中生成profile, 例如: pages/tabbar/profile)",
        ],
        fn: async (opt) => await (0, creater_1.handleCreater)(ctx, opt),
    });
};
exports.registerCommand = registerCommand;
//# sourceMappingURL=handle-command.js.map