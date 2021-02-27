/**
 * Prints formatted string to canvas console.
 * 
 * @param {string} assertion String with format
 * @param {*} arguments Arguments
 * 
 * @example
 * printf('Hello %', 'World');
 * // expected output: 'Hello World'
 * 
 * @example
 * // To use the literal '%' character use double backslashes (\\)
 * printf('% \\% %', 'A', 'B');
 * // expected output: 'A % B'
 */
printf = function(string) {
    const args = Array.from(arguments)
        .slice(1);
    for (const i in args) {
        string = string.replace(/(?<!\\)%/, args[i]);
    }
    string = string.replaceAll(/\\%/g, '%');
    e.println(string);
};
