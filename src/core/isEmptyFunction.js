/**
 * Checks if function is empty. Does not work for
 * [arrow function expressions]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions}.
 * 
 * @param {Function} fn
 * 
 * @example
 * const fn = function () {};
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @example
 * function fn() {};
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @example
 * const fn = noop;
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @see noop
 */
isEmptyFunction = fn => {
    return _.isFunction(fn) &&
        /^function[^{]*[{]\s*[}]\s*$/.test(
            Function.prototype.toString.call(fn));
};