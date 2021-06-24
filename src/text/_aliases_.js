/**
 * Gets current text size.
 * 
 * @returns {number}
 */
getTextSize = () => ctx.font.match(/\d+/);

/**
 * Alias for `format`.
 * 
 * @param {string} str
 * 
 * @example
 * console.log(f('PI is ${Math.PI.toFixed(2)}'));
 * // expected output: 'PI is 3.14'
 * 
 * @see {@link format}
 */
f = str => format(str);
