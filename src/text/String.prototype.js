/**
 * Formats string similar to [template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals} in ES6
 * 
 * @param {string} string Formatted string
 * 
 * @example
 * println('PI is ${Math.PI.toFixed(2)}'.format())
 * // expected output: PI is 3.14
 */
String.prototype.format = function () {
    let string = this;
    let match = _.first(string.match(/\${.*?}/));
    while (match) {
        let formatted;
        try {
            formatted = _eval(`\`${match}\``);
        } catch (error) {
            const head = match.match(/(\w+)\(/)[1];
            const args = match.match(/\(([^)]+)\)/)[1].split(',');
            formatted = e[head](...args);
        }
        string = string.replace(match, formatted);
        match = _.first(string.match(/\${.*?}/));
    }
    return string;
};

/**
 * Obfuscate strings as hexadecimal and unicode escape characters.
 * 
 * @link https://www.khanacademy.org/cs/-/4812748875104256
 * 
 * @example
 * let str = 'Hello World';
 * let obfuscated = str.obfuscate();
 * println(obfuscated);
 * // expected output: \x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64
 * println('\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64');
 * // expected output: Hello World
 */
String.prototype.obfuscate = function () {
    let str = '';
    for (const i in _.range(this.length)) {
        let curr = this.charCodeAt(i).toString(16);
        if (curr.length <= 2) {
            while (curr.length < 2) {
                curr = '0' + curr;
            }
            str += '\\x' + curr;
        } else {
            while (curr.length < 4) {
                curr = '0' + curr;
            }
            str += '\\u' + curr;
        }
    }
    return str;
};

/**
 * Removes non-ACII characters from string.
 * 
 * @link https://www.30secondsofcode.org/js/s/remove-non-ascii
 * 
 * @example
 * let str = 'Hello 😀';
 * let strippedStr = str.removeNonASCII();
 * println(strippedStr)
 * // expected output: 'Hello '
 */
String.prototype.removeNonASCII = function () {
    return this.replace(/[^\x20-\x7E]/g, '');
};

/**
 * Converts string to camel case.
 * 
 * @link https://www.30secondsofcode.org/js/s/to-camel-case
 * 
 * @example
 * println('lorem ipsum'.toCamelCase());
 * // expected output: 'loremIpsum'
 */
String.prototype.toCamelCase = function () {
    const s =
        this
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * Converts string to kebab case.
 * 
 * @link https://www.30secondsofcode.org/js/s/to-kebab-case
 * 
 * @example
 * println('lorem ipsum'.toKebabCase());
 * // expected output: 'lorem-ipsum'
 */
String.prototype.toKebabCase = function () {
    return this
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
};

/**
 * Converts string to snake case.
 * 
 * @link https://www.30secondsofcode.org/js/s/to-snake-case
 * 
 * @example
 * println('lorem ipsum'.toSnakeCase());
 * // expected output: 'lorem_ipsum'
 */
String.prototype.toSnakeCase = function () {
    return this
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
};

/**
 * Converts string to title case.
 *
 * @link https://www.30secondsofcode.org/js/s/to-title-case
 *
 * @example
 * println('lorem ipsum'.toTitleCase());
 * // expected output: 'Lorem Ipsum'
 */
String.prototype.toTitleCase = function () {
    return this
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');
};
