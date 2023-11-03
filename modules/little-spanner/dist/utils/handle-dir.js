"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDir = exports.copyDir = void 0;
const fs = require("fs-extra");
const copyDir = (originDir, target) => {
    fs.copySync(originDir, target);
};
exports.copyDir = copyDir;
const removeDir = (dirPath) => {
    fs.removeSync(dirPath);
};
exports.removeDir = removeDir;
