"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageData = void 0;
var func_1 = require("../func");
var PageData = /** @class */ (function () {
    function PageData() {
    }
    PageData.getPageData = function (default_value) {
        var route_key = (0, func_1.getCurrentRouteKey)();
        var result = PageData.pageData.get(route_key) || default_value;
        return result;
    };
    PageData.delPageData = function (route_key) {
        PageData.pageData.delete(route_key);
    };
    PageData.delPagePromise = function (route_key) {
        PageData.pagePromise.delete(route_key);
    };
    PageData.setPageData = function (route_key, data) {
        this.pageData.set(route_key, data);
    };
    PageData.setPagePromise = function (route_key, options) {
        this.pagePromise.set(route_key, options);
    };
    PageData.emitBack = function (route_key) {
        var pme = PageData.pagePromise.get(route_key);
        if (!pme)
            return;
        var result = PageData.backResult.get(route_key);
        PageData.delPageData(route_key);
        PageData.delPagePromise(route_key);
        if (result) {
            PageData.backResult.delete(route_key);
            if (result instanceof Error) {
                pme.rej(result);
            }
            else {
                pme.res(result);
            }
        }
        else {
            pme.res(null);
        }
    };
    PageData.setBackResult = function (result) {
        var route_key = (0, func_1.getCurrentRouteKey)();
        PageData.backResult.set(route_key, result);
    };
    PageData.pageData = new Map();
    PageData.pagePromise = new Map();
    PageData.backResult = new Map();
    return PageData;
}());
exports.PageData = PageData;
