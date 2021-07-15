/**
 * Formats string using [template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}.
 * 
 * @category Text
 *
 * @param {string} str
 * 
 * @returns {string} formatted string
 *
 * @example
 * console.log(format('PI is ${Math.PI.toFixed(2)}'))
 * // expected output: 'PI is 3.14'
 * 
 * @example
 * console.log(format('${millis()}ms elapsed'));
 * // example outcome: '100ms elapsed'
 * 
 * @example
 * console.log('E is ${Math.E.toFixed(2)}'.format());
 * // expected output: 'E is 2.72'
 * 
 * @see {@link f}
 */
format = str => evalPJS(`\`${str}\``);
