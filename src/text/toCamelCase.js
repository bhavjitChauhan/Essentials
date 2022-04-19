/**
 * Converts string to `camelCase`.
 * 
 * @category Text
 *
 * @see {@link https://www.30secondsofcode.org/js/s/to-camel-case}
 *
 * @param {string} str
 * 
 * @returns {string} string in camel case
 * 
 * @example
 * println(toCamelCase('normal text'));
 * // expected output: 'normalText'
 * 
 * @example
 * println(toCamelCase('kebab-case'));
 * // expected output: 'kebabCase'
 * 
 * @example
 * println(toCamelCase('snake_case'));
 * // expected output: 'snakeCase'
 * 
 * @example
 * println('normal text'.toCamelCase());
 * // expected output: 'normalText'
 */
toCamelCase = str => {
    const s =
        str
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};
