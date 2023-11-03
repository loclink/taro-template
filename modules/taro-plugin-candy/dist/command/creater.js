"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreater = void 0;
const utils_1 = require("../utils");
const handle_creater_1 = require("../module/handle-creater");
const handleCreater = async (ctx, { _ }) => {
    if ((_ === null || _ === void 0 ? void 0 : _.length) < 2) {
        console.log(ctx.helper.chalk.red("请输入页面路径"));
    }
    else {
        const cmd = _[0];
        const path = _[1];
        if (!(0, utils_1.validPath)(path)) {
            console.log(ctx.helper.chalk.red("页面路径不合法"));
            process.exit(0);
        }
        switch (cmd) {
            case "gp":
                (0, handle_creater_1.generatorMainPackagePage)(ctx, path);
                break;
            case "gs":
                (0, handle_creater_1.generatorSubPackagePage)(ctx, path);
                break;
            case "gt":
                (0, handle_creater_1.generatorTabBarPage)(ctx, path);
                break;
        }
    }
    process.exit(0);
};
exports.handleCreater = handleCreater;
//# sourceMappingURL=creater.js.map