"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPath = void 0;
var query_string_1 = __importDefault(require("query-string"));
function formatPath(route, params) {
    var url = route.url;
    var urlSplit = url.split('?');
    if (urlSplit.length > 1 && urlSplit[1]) {
        var urlParams = query_string_1.default.parse(url.split('?')[1]);
        params = Object.assign(urlParams, params);
        url = urlSplit[0];
    }
    var paramsStr = query_string_1.default.stringify(params, { encode: false });
    url = "".concat(url, "?").concat(paramsStr);
    return url;
}
exports.formatPath = formatPath;
