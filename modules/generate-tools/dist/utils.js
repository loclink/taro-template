"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseObjectNode = exports.getCssModuleClassName = exports.getCssModuleExt = exports.getCssModuleMode = exports.cssExt = exports.firstUpperCase = exports.toCamelCase = void 0;
// const t = require('@babel/types')
const t = require("@babel/types");
function toCamelCase(str, capitalizeFirstLetter = false) {
    let result = '';
    if (str.includes('-')) {
        result = str.toLowerCase().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    }
    else {
        result = str;
    }
    if (!capitalizeFirstLetter) {
        result = result.charAt(0).toLowerCase() + result.slice(1);
    }
    else {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    return result;
}
exports.toCamelCase = toCamelCase;
/** 首字母大写 */
function firstUpperCase(str) {
    return str.replace(/\b(\w)(\w*)/g, function (_$0, $1, $2) {
        return $1.toUpperCase() + $2;
    });
}
exports.firstUpperCase = firstUpperCase;
const cssExts = {
    none: "css",
    sass: "scss",
    less: "less",
    stylus: "styl",
};
/** 计算css后缀 */
function cssExt(css) {
    return cssExts[css];
}
exports.cssExt = cssExt;
//计算开启模式
function getCssModuleMode(cssModuleConfig) {
    if (cssModuleConfig === "page") {
        return { page: true, component: false };
    }
    if (cssModuleConfig === "page,component") {
        return { page: true, component: true };
    }
    if (cssModuleConfig === "component") {
        return { page: false, component: true };
    }
    return { page: false, component: false };
}
exports.getCssModuleMode = getCssModuleMode;
/**
 * 补充一下后缀，生成　.module
 * */
function getCssModuleExt(cssModuleOpened) {
    return cssModuleOpened ? ".module" : "";
}
exports.getCssModuleExt = getCssModuleExt;
function getCssModuleClassName(className, cssModuleOpened) {
    return cssModuleOpened ? `{styles.${className}}` : `"${className}"`;
}
exports.getCssModuleClassName = getCssModuleClassName;
//自动更新 app.confit.ts
function traverseObjectNode(node, newpagePath) {
    if (node.type === "ClassProperty" || node.type === "ObjectProperty") {
        const properties = node.value.properties;
        const obj = {};
        properties.forEach((p) => {
            let key = t.isIdentifier(p.key) ? p.key.name : p.key.value;
            obj[key] = traverseObjectNode(p.value, newpagePath);
        });
        return obj;
    }
    if (node.type === "ObjectExpression") {
        const properties = node.properties;
        const obj = {};
        properties.forEach((p) => {
            let key = t.isIdentifier(p.key) ? p.key.name : p.key.value;
            obj[key] = traverseObjectNode(p.value, newpagePath);
        });
        return obj;
    }
    if (node.type === "ArrayExpression") {
        const newpage = t.stringLiteral(newpagePath);
        return [newpage]
            .concat(node.elements)
            .map((item) => traverseObjectNode(item, newpagePath));
    }
    if (node.type === "NullLiteral") {
        return null;
    }
    if (node.type === "VariableDeclaration") {
        return node.declarations.map((item) => traverseObjectNode(item, newpagePath));
    }
    if (node.type === "VariableDeclarator") {
        if (node.id.name === "config") {
            return traverseObjectNode(node.init, newpagePath);
        }
    }
    return node.value;
}
exports.traverseObjectNode = traverseObjectNode;
//# sourceMappingURL=utils.js.map