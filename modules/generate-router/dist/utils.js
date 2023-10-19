"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = exports.formatPageDir = exports.extractValue = void 0;
const ts_morph_1 = require("ts-morph");
function extractValue(options) {
    const { name, declaration } = options;
    if (!ts_morph_1.VariableDeclaration.is(declaration.getKind()))
        throw Error(`${name} 应该导出变量类型`);
    const text = declaration.getFullText();
    return text.split("=", 2)[1].trim();
}
exports.extractValue = extractValue;
function formatPageDir(dirName) {
    return dirName
        .replace(/\-/g, "_")
        .replace(/\_(\w)/g, (letter) => {
        return letter.toUpperCase();
    })
        .replace(/^\S/, (s) => s.toUpperCase());
}
exports.formatPageDir = formatPageDir;
function isNil(val) {
    return val === undefined || val === null;
}
exports.isNil = isNil;
//# sourceMappingURL=utils.js.map