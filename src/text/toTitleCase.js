/**
 * Converts string to `Title Case`.
 * 
 * @category Text
 *
 * @see {@link https://www.30secondsofcode.org/js/s/to-title-case}
 *
 * @param {string} str
 * 
 * @returns {string} string in title case
 * 
 * @example
 * println(toTitleCase('normal text'));
 * // expected output: 'Normal Text'
 * 
 * @example
 * println(toTitleCase('camelCase'));
 * // expected output: 'Camel Case'
 * 
 * @example
 * println(toTitleCase('kebab-case'));
 * // expected output: 'Kebab Case'
 * 
 * @example
 * println(toTitleCase('snake_case'));
 * // expected output: 'Snake Case'
 * 
 * @example
 * println('normal text'.toTitleCase());
 * // expected output: 'Normal Text'
 */
toTitleCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');
};
