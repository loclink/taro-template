"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execRouterBackListener = exports.registerRouterBackListener = exports.routerBackListenerCollection = void 0;
var taro_1 = require("@tarojs/taro");
exports.routerBackListenerCollection = [];
/** 注册全局路由返回监听 */
function registerRouterBackListener(listener) {
    exports.routerBackListenerCollection.push(listener);
}
exports.registerRouterBackListener = registerRouterBackListener;
function execRouterBackListener(from) {
    var _a;
    var to = {
        url: ((_a = taro_1.Current.router) === null || _a === void 0 ? void 0 : _a.path) || '',
    };
    for (var _i = 0, routerBackListenerCollection_1 = exports.routerBackListenerCollection; _i < routerBackListenerCollection_1.length; _i++) {
        var listener = routerBackListenerCollection_1[_i];
        listener(to, from);
    }
}
exports.execRouterBackListener = execRouterBackListener;
