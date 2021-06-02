/**
 * Formats string similar to [template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
 * in ES6
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
 * console.log(f('E is ${Math.E.toFixed(2)}'))
 * // expected output: 'E is 2.72'
 * 
 * @see {@link f}
 */
format = str => {
    let match = _.first(str.match(/\${.*?}/));
    while (match) {
        str = str.replace(match, evalPJS(`\`${match}\``));
        match = _.first(str.match(/\${.*?}/));
    }
    return str;
};
