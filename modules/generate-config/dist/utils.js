"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLeadingSlash = exports.stringifyObject = exports.stringifyArray = exports.stringify = void 0;
function stringify(value, indent = "") {
    if (typeof value === "object") {
        if (Array.isArray(value)) {
            return stringifyArray(value, indent);
        }
        else {
            return stringifyObject(value, indent);
        }
    }
    else {
        return JSON.stringify(value);
    }
}
exports.stringify = stringify;
function stringifyArray(arr, indent = "") {
    let str = "[\n";
    for (let i = 0; i < arr.length; i++) {
        str += indent + "  " + stringify(arr[i], indent + "  ") + ",\n";
    }
    str = str.slice(0, -2) + "\n" + indent + "]";
    if (!arr.length)
        str = "[]";
    return str;
}
exports.stringifyArray = stringifyArray;
function stringifyObject(obj, indent = "") {
    let str = "{\n";
    for (let key in obj) {
        str +=
            indent + "  " + key + ": " + stringify(obj[key], indent + "  ") + ",\n";
    }
    str = str.slice(0, -2) + "\n" + indent + "}";
    return str;
}
exports.stringifyObject = stringifyObject;
function removeLeadingSlash(str) {
    return str.replace(/^\//, '');
}
exports.removeLeadingSlash = removeLeadingSlash;
//# sourceMappingURL=utils.js.map