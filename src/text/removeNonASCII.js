/**
 * Removes non-ASCII characters from string.
 *
 * @link https://www.30secondsofcode.org/js/s/remove-non-ascii
 *
 * @param {string} str
 * 
 * @returns {string} formatted string
 * 
 * @example
 * const str = 'Hello 😀';
 * const strippedStr = removeNonASCII(str);
 * println(strippedStr)
 * // expected output: 'Hello '
 * 
 * @example
 * println(str.removeNonASCII());
 * // expected output: 'Hello '
 */
removeNonASCII = str => {
    return str.replace(/[^\x20-\x7E]/g, '');
};
