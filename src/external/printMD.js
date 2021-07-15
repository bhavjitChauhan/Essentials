/**
 * @summary
 * Prints markdown to canvas log.
 * 
 * @description
 * Markdown features are limited to bold, italics and hyperlinks. Links must be
 * opened while holding the CTRL key.
 * 
 * @category External
 *
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printMD('*bold*');
 * // expected outcome: bold text
 * 
 * @example
 * printMD('_italic_');
 * // expected outcome: italic test
 * 
 * @example
 * printMD('[link](https://khanacademy.org)');
 * // expected outcome: hyperlink to Khan Academy
 * 
 * @see {@link printHTML}
 */
printMD = data => {
    let str = '';
    let bold, italic;
    function formatMD(tag, open) {
        str += `<${open ? '/' : ''}${tag}>`;
    }
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case '*':
                formatMD('b', bold);
                bold = !bold;
                break;
            case '_':
                formatMD('i', italic);
                italic = !italic;
                break;
            case '[':
                try {
                    const substr = data.substr(i, data.length);
                    const text = substr.match(/(?<=\[).+?(?=\])/)[0];
                    const URL = substr.match(/(?<=\().+?(?=\))/)[0];
                    str += `<a href="${URL}">${text}</a>`;
                    i += text.length + URL.length + 3;
                    break;
                } catch (err) {
                    console.warn(`Markdown error: ${err}`);
                }
                break;
            default:
                str += data[i];
        }
    }
    printHTML(str);
};
