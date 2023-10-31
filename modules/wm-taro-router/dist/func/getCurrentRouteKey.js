"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentRouteKey = void 0;
var taro_1 = __importDefault(require("@tarojs/taro"));
var constants_1 = require("../constants");
function getCurrentRouteKey() {
    if (!taro_1.default.Current.page) {
        return '';
    }
    return taro_1.default.Current.page[constants_1.ROUTE_KEY];
}
exports.getCurrentRouteKey = getCurrentRouteKey;
