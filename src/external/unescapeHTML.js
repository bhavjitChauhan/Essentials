/**
 * Unescape an escaped HTML string.
 * 
 * @category External
 * 
 * @link https://www.30secondsofcode.org/js/s/unescape-html
 * 
 * @param {string} str escaped HTML
 * 
 * @returns {string} unescaped HTML
 * 
 * @example
 * const str = '&lt;a href=&quot;#&quot;&gt;Hello world&lt;/a&gt;';
 * println(unescapeHTML(str));
 * // expected output: '<a href="#">Hello world</a>'
 */
unescapeHTML = str =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
        ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': '\'',
            '&quot;': '"'
        }[tag] || tag)
    );
