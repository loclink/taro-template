/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 */
export declare function compose(middleware: Function[]): (context: any, next?: Function) => Promise<any>;
