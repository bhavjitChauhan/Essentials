/**
 * Checks if number is an integer.
 * 
 * @param {number} n
 * 
 * @example
 * const n = 123;
 * console.log(isInteger(n));
 * // expected output: true
 * 
 * @returns {boolean}
 */
isInteger = n => _.isNumber(n) && n % 1 == 0;
