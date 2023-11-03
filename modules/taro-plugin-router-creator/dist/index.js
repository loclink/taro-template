"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("./plugin");
exports.default = (ctx, config) => {
    if (process.env.NODE_ENV === "production")
        return;
    new plugin_1.Plugin(ctx, config).onBuildStart().registerCommand();
};
//# sourceMappingURL=index.js.map