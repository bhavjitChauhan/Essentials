/**
 * Obfuscate strings as hexadecimal and unicode escape characters.
 *
 * @link https://www.khanacademy.org/cs/-/4812748875104256
 *
 * @param {string} str
 * 
 * @returns {string} obfuscated string
 * 
 * @example
 * let str = 'Hello World';
 * let obfuscated = obfuscate(str);
 * println(obfuscated);
 * // expected output: \x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64
 * println('\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64');
 * // expected output: Hello World
 * 
 * @example
 * println(str.obfuscate());
 * // expected output: \x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64 
 */
obfuscate = str => {
    let result = '';
    for (const i in _.range(str.length)) {
        let curr = str.charCodeAt(i).toString(16);
        if (curr.length <= 2) {
            while (curr.length < 2) {
                curr = '0' + curr;
            }
            result += '\\x' + curr;
        } else {
            while (curr.length < 4) {
                curr = '0' + curr;
            }
            result += '\\u' + curr;
        }
    }
    return result;
};
