"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePathCommand = void 0;
const handle_init_1 = require("../module/handle-init");
const handlePathCommand = async (ctx) => {
    await (0, handle_init_1.handleInitAppConfig)(ctx);
    process.exit(0);
};
exports.handlePathCommand = handlePathCommand;
//# sourceMappingURL=path.js.map