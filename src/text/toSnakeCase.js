/**
 * Converts string to `snake_case`.
 * 
 * @category Text
 *
 * @see {@link https://www.30secondsofcode.org/js/s/to-snake-case}
 *
 * @param {string} str
 * 
 * @returns {string} string in snake case
 * 
 * @example
 * println(toSnakeCase('normal text'));
 * // expected output: 'normal_text'
 * 
 * @example
 * println(toSnakeCase('camelCase'));
 * // expected output: 'camel_case'
 * 
 * @example
 * println(toSnakeCase('kebab-case'));
 * // expected output: 'kebab_case'
 * 
 * @example
 * println('normal text'.toSnakeCase());
 * // expected output: 'normal_text'
 */
toSnakeCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
};
