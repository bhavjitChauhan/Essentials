/**
 * Escapes a string for use in HTML.
 * 
 * @link https://www.30secondsofcode.org/js/s/escape-html
 * 
 * @param {string} str
 * 
 * @returns {string} escaped HTML
 * 
 * @example
 * const str = '<a href="#">Hello world</a>';
 * println(escapeHTML(str));
 * // expected output: '&lt;a href=&quot;#&quot;&gt;Hello world&lt;/a&gt;'
 */
escapeHTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
