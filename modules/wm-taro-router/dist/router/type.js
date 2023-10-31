"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigateType = void 0;
var NavigateType;
(function (NavigateType) {
    /** 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Router.back 可以返回到原页面。小程序中页面栈最多十层。 */
    NavigateType["navigateTo"] = "navigateTo";
    /** 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。 */
    NavigateType["redirectTo"] = "redirectTo";
    /** 关闭所有页面，打开到应用内的某个页面 */
    NavigateType["reLaunch"] = "reLaunch";
    /** 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
    NavigateType["switchTab"] = "switchTab";
})(NavigateType || (exports.NavigateType = NavigateType = {}));
