/**
 * Copies a string to the clipboard.
 * 
 * @link https://www.30secondsofcode.org/js/s/copy-to-clipboard
 * 
 * @param {string} str String to be copied
 * 
 * @example
 * copyToClipboard('Hello World');
 * // expected outcome: 'Hello World' copied to clipboard
 */
copyToClipboard = str => {
    const el = _doc[CREATE_ELEMENT]('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    _doc.body.appendChild(el);
    const selected =
        _doc.getSelection().rangeCount > 0
            ? _doc.getSelection().getRangeAt(0)
            : false;
    el.select();
    _doc.execCommand('copy');
    _doc.body.removeChild(el);
    if (selected) {
        _doc.getSelection().removeAllRanges();
        _doc.getSelection().addRange(selected);
    }
};
