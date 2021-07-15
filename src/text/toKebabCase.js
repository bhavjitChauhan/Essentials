/**
 * Converts string to [kebab case](https://github.com/bhavjitChauhan/Essentials/wiki/Text-Cases).
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-kebab-case
 *
 * @param {string} str
 * 
 * @returns {string} string in kebab case
 * 
 * @example
 * println(toKebabCase('normal text'));
 * // expected output: 'normal-text'
 * 
 * @example
 * println(toKebabCase('camelCase'));
 * // expected output: 'camel-case'
 * 
 * @example
 * println(toKebabCase('snake_case'));
 * // expected output: 'snake-case'
 * 
 * @example
 * println('normal text'.toKebabCase());
 * // expected output: 'normal-text'
 */
toKebabCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
};
