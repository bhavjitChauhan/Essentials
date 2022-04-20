/**
 * Returns formatted string.
 * 
 * @category Core
 *
 * @param {string} str String with format
 * @param {...*} args Arguments
 * 
 * @returns {string}
 *
 * @example
 * const str = sprintf('Hello %', 'World');
 * println(str);
 * // expected output: 'Hello World'
 *
 * @example
 * // To use the literal '%' character use double backslashes (\\)
 * const str = sprintf('%\\% complete', 50);
 * println(str);
 * // expected output: '50% complete'
 * 
 * @see {@link printf}
 */
sprintf = (str, ...args) => {
    str = str.toString();
    for (const arg of args) {
        str = str.replace(/(?<!\\)%/, arg);
    }
    str = str.replace(/\\%/g, '%');
    return str;
};
