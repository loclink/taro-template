"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 */
function compose(middleware) {
    if (!Array.isArray(middleware))
        throw new TypeError('Middleware stack must be an array!');
    for (var _i = 0, middleware_1 = middleware; _i < middleware_1.length; _i++) {
        var fn = middleware_1[_i];
        if (typeof fn !== 'function')
            throw new TypeError('Middleware must be composed of functions!');
    }
    /**
     * @param {Object} context
     * @return {Promise}
     * @api public
     */
    return function (context, next) {
        // last called middleware #
        var index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(new Error('next() called multiple times'));
            index = i;
            var fn = middleware[i];
            if (i === middleware.length)
                fn = next;
            if (!fn)
                return Promise.resolve();
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    };
}
exports.compose = compose;
