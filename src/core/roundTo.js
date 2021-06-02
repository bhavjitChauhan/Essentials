
/**
 * Round number to nearest value.
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
 */
roundTo = (n, precision) => {
    if (!precision) return n;
    return Math.round(n / precision) * precision;
};
