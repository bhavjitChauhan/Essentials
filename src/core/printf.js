/**
 * Prints formatted string to canvas console.
 * 
 * @category Core
 *
 * @param {string} str String with format
 * @param {...*} args Arguments
 *
 * @example
 * printf('Hello %', 'World');
 * // expected output: 'Hello World'
 *
 * @example
 * // To use the literal '%' character use double backslashes (\\)
 * printf('%\\% complete', 50);
 * // expected output: '50% complete'
 */
printf = function(str, ...args) {
    str = str.toString();
    for (const arg of args) {
        str = str.replace(/(?<!\\)%/, arg);
    }
    str = str.replaceAll(/\\%/g, '%');
    p.println(str);
};
