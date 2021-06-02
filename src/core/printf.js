/**
 * Prints formatted string to canvas console.
 *
 * @param {str} assertion String with format
 * @param {*} arguments Arguments
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
    e.println(str);
};
