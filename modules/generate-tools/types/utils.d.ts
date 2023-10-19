export declare function toCamelCase(str: string, capitalizeFirstLetter?: boolean): string;
/** 首字母大写 */
export declare function firstUpperCase(str: string): string;
/** 计算css后缀 */
export declare function cssExt(css: any): any;
export declare function getCssModuleMode(cssModuleConfig: any): {
    page: boolean;
    component: boolean;
};
/**
 * 补充一下后缀，生成　.module
 * */
export declare function getCssModuleExt(cssModuleOpened: any): "" | ".module";
export declare function getCssModuleClassName(className: any, cssModuleOpened: any): string;
export declare function traverseObjectNode(node: any, newpagePath: string): any;
