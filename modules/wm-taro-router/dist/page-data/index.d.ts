export declare class PageData {
    private static pageData;
    private static pagePromise;
    private static backResult;
    static getPageData<T = any>(default_value?: T): T;
    private static delPageData;
    private static delPagePromise;
    static setPageData(route_key: string, data: any): void;
    static setPagePromise(route_key: string, options: {
        res: (val: any) => void;
        rej: (err: any) => void;
    }): void;
    static emitBack(route_key: string): void;
    static setBackResult(result: any): void;
}
