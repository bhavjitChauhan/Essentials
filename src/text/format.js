/**
 * Formats string similar to [template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
 * in ES6
 *
 * @param {string} str
 * 
 * @returns {string} formatted string
 *
 * @example
 * println(format('PI is ${Math.PI.toFixed(2)}'))
 * // expected output: PI is 3.14
 * 
 * @example
 * println(format('${millis()}ms elapsed'));
 * // expected outcome: value of millis() + 'ms elapsed'
 */
format = str => {
    let match = _.first(str.match(/\${.*?}/));
    while (match) {
        let formatted;
        try {
            formatted = _eval(`\`${match}\``);
        } catch (err) {
            let head = match.match(/(\w+)\(/);
            if (_.isArray(head)) {
                head = head[1];
                let args = match.match(/\(([^)]+)\)/);
                if (_.isArray(args)) {
                    args = args[1].split(',');
                    formatted = e[head](...args);
                } else {
                    formatted = e[head]();
                }
            } else {
                const property = match.match(/\w+/);
                formatted = e[property];
            }
        }
        str = str.replace(match, formatted);
        match = _.first(str.match(/\${.*?}/));
    }
    return str;
};
