/**
 * Returns a function that is the
 * [negation]{@link https://en.wikipedia.org/wiki/Negation} of the given
 * function
 *
 * @see {@link https://www.30secondsofcode.org/js/s/complement}
 * 
 * @category Core
 *
 * @param {Function} fn Given function
 *
 * @returns {Function} Complement function
 *
 * @example
 * const isEven = function(num) {
 *     return num % 2 === 0;
 * };
 * const isOdd = complement(isEven);
 */
complement = fn => (...args) => !fn(...args);
