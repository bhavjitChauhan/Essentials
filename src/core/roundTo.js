
/**
 * Round number to nearest value.
 * 
 * @category Core
 * 
 * @param {number} n
 * @param {number} precision
 * 
 * @example
 * const n = 123456789;
 * console.log(roundTo(n, 1e3));
 * // expected output: 123457000
 * 
 * @example
 * console.log(roundTo(Math.E, 1e-3));
 * // expected output: 2.718
 * 
 * @example
 * const megabytes = 2000;
 * printf('~% MB', roundTo(megabytes, 1024));
 * // expected output: '~2048 MB'
 */
roundTo = (n, precision) => {
    if (!precision) return n;
    return Math.round(n / precision) * precision;
};
