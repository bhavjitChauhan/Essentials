/** @module External */

_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('External Essentials depends on the Essentials Core.');
} else {
    EXTERNAL_ESSENTIALS = true;
    if (!_silent_ && !_external_initialized_) console.info(
        '%cExternal Essentials',
        _console_style_
    );
}

// For minified KA builds, BabyHint scans strings for banned properties as well
_doc = _eval('documen' + 't');

CREATE_ELEMENT = 'createElemen' + 't';

_preventDefault = e => e.preventDefault();

/**
 * Canvas jQuery selector.
 *
 * @example
 * // Log canvas element style to browser console
 * console.log($(CANVAS).attr('style)');
 */
CANVAS = '#output-canvas';

/**
 * Canvas log jQuery selector.
 *
 * @example
 * // Log canvas log text to browser console
 * console.log($(CANVAS_LOG).text());
 */
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

/**
 * Checks if touch events are supported.
 * 
 * @link https://www.30secondsofcode.org/js/s/supports-touch-events
 * 
 * @returns {boolean}
 * 
 * @see {@link detectDeviceType}
 */
supportsTouchEvents = () => 'ontouchstart' in window;

/**
 * Gets the currently selected text in the canvas.
 * 
 * @link https://www.30secondsofcode.org/js/s/get-selected-text
 * 
 * @returns {string}
 * 
 * @see {@link drawElement}
 */
getSelectedText = () => window.getSelection().toString();

/**
 * Prevents page from scrolling when mouse is over canvas.
 * 
 * @see {@link allowScroll}
 * @see {@link forceAllowScroll}
 */
preventScroll = () => $(CANVAS).on('wheel', _preventDefault);

/**
 * Allows page scrolling when mouse is over canvas.
 * 
 * @see {@link forceAllowScroll}
 * @see {@link preventScroll}
 */
allowScroll = () => $(CANVAS).off('wheel', _preventDefault);

/**
 * @summary
 * Removes all 'wheel' event handlers attached to the canvas.
 * 
 * @description
 * `allowScroll` only removes the event handler that prevents the page from
 * being scrolled, however if the program is editted or restarted this is no
 * longer possible.
 * 
 * This function is not intended for production use.
 * 
 * @see {@link allowScroll}
 * @see {@link preventScroll}
 */
forceAllowScroll = () => $(CANVAS).off('wheel');

/**
 * Locks pointer to canvas.
 * 
 * @see {@link exitPointerLock}
 */
requestPointerLock = () => $(CANVAS)[0].requestPointerLock();

/**
 * Releases pointer.
 * 
 * @see {@link requestPointerLock}
 */
exitPointerLock = () => _doc.exitPointerLock();

/**
 * Resizes the canvas log.
 * 
 * @param {number} height
 */
resizeLog = height => $('body > div:nth-child(1)').css('height', height);

/**
 * Closes the canvas log
 */
closeLog = () => $('body > div:nth-child(1) > div:nth-child(3)').click();

/**
 * Detects whether the page is being viewed on a mobile device or a desktop.
 *
 * @link https://www.30secondsofcode.org/js/s/detect-device-type
 *
 * @returns {string} 'Mobile' or 'Desktop'
 *
 * @example
 * println(detectDeviceType());
 * // expected outcome: 'Mobile' or 'Desktop'
 */
detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? 'Mobile'
        : 'Desktop';

/**
 * Deletes all HTML elements from the canvas.
 * 
 * @see {@link deleteElement}
 * @see {@link drawElement}
 */
clearElements = () => $('#essentials').empty();

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

/**
 * Detects the preferred language of the current user.
 *
 * @link https://www.30secondsofcode.org/js/s/detect-language
 *
 * @returns {string} Preferred language as a [language tag]{@link https://en.wikipedia.org/wiki/IETF_language_tag}
 *
 * @example
 * println(detectLanguage());
 * // expected outcome: Language tag
 */
detectLanguage = (defaultLanguage = 'en-US') =>
    navigator.language ||
    (Array.isArray(navigator.languages) && navigator.languages[0]) ||
    defaultLanguage;

/**
 * @summary
 * Disables BabyHint's banned properties.
 * 
 * @description 
 * This function is not intended for production use. The program will be
 * restarted for changes to take effect.
 * 
 * @example
 * document;
 * // expected error: 'document is a reserved word.'
 * 
 * // 1. Comment out the banned properties
 * // document;
 * allowBannedProperties();
 * 
 * // 2. Uncomment the banned properties
 * document;
 * // no expected error
 * 
 */
allowBannedProperties = () => {
    if (!_.isEmpty(BabyHint.bannedProperties)) {
        console.warn('Restarting program to allow banned properties...');
        BabyHint.bannedProperties = {};
        restart();
    }
};

/**
 * @summary
 * Disables Khan Academy's loop protector.
 * 
 * @description
 * The program will be restarted for changes to take effect.
 */
disableLoopProtector = () => {
    if (!isEmptyFunction(LoopProtector.prototype.leave)) {
        console.warn('Restarting program to disable loop protector...');
        LoopProtector.prototype.leave = noop;
        restart();
    }
};

/**
 * @summary
 * Creates an HTML element and "draws" it on top of the canvas.
 * 
 * @description
 * If no jQuery object is provided an empty `<div>` element is created that
 * contains HTML provided in the `data` parameter.
 * 
 * By default, elements are interactive, meaning they block canvas interaction
 * directly under them. Set the `interactive` settings to `false` to allow for
 * click-through canvas interaction instead.
 * 
 * @param {jQuery} [el] jQuery object
 * @param {Object} [settings]
 * @param {string} [settings.data] HTML
 * @param {string} [settings.id] HTML id
 * @param {number} [settings.x=0] x-coordinate of the element
 * @param {number} [settings.y=0] y-coordinate of the element
 * @param {number} [settings.width='max-content'] width of element
 * @param {number} [settings.height='max-content'] height of element
 * @param {boolean} [settings.interactive=true]
 * @param {Object} [settings.css]
 * 
 * @returns {string} id
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World'
 * });
 * drawElement(el);
 * // expected outcome: 'Hello World' element drawn at the top-left corner
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World'
 * });
 * drawElement(el, {
 *     x: 100,
 *     y: 100
 * });
 * // expected outcome: 'Hello World' element drawn at (100, 100)
 * 
 * @example
 * drawElement({
 *     data: '<p>Hello World</p>',
 *     x: 100,
 *     y: 100
 * });
 * // expected outcome: 'Hello World' element drawn at (100, 100)
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World',
 *     css: { color: 'red' }
 * });
 * drawElement(el);
 * // expected outcome: 'Hello World' element drawn at the top-left corner in red
 * 
 * @example
 * drawElement({
 *     data: '<p>Hello World</p>',
 *     css: { color: 'red' }
 * });
 * // expected outcome: 'Hello World' element drawn at the top-left corner in red
 * 
 * @see {@link removeElement}
 * @see {@link clearElements}
 */
drawElement = (el, settings = {}) => {
    if (!(el instanceof jQuery)) settings = el;
    let container = $('#essentials');
    if (!container.length) {
        const div = $('<div>', {
            id: 'essentials'
        });
        div.css({
            position: 'absolute',
            'pointer-events': 'none'
        });
        $(CANVAS).parent().prepend(div);
        container = $('#essentials');
    }
    const defaults = {
        data: null,
        id: generateID(),
        x: 0,
        y: 0,
        width: 'max-content',
        height: 'max-content',
        interactive: true
    };
    const { data, id, x, y, width, height, interactive } = _.defaults(settings, defaults);
    if (el instanceof jQuery) {
        data && el.append(data);
        (x !== 0 || y !== 0 ) && el.css('position', 'absolute');
        !el.attr('id') && el.attr('id', id);
        !el.css('left') && el.css('left', x);
        !el.css('top') && el.css('top', y);
        el.css('width') == '0px' && el.css('width', width);
        el.css('height') == '0px' && el.css('height', height);
        !el.css('pointer-events') && el.css('pointer-events', 'auto');
    } else {
        el = $('<div>', {
            html: data,
            id: id
        });
        el.css({
            position: 'absolute',
            left: x,
            top: y
        });
        width && el.css('width', width);
        height && el.css('height', height);
        interactive && el.css('pointer-events', 'auto');
    }
    Object.prototype.hasOwnProperty.call(settings, 'css') && el.css(settings.css);
    container.append(el);
    return id;
};

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
            '\'': '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );

/**
 * Checks if the browser tab of the page is focused.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-browser-tab-focused
 * 
 * @returns {boolean}
 */
isBrowserTabFocused = () => !_doc.hidden;

/**
 * Checks if [Session Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-session-storage-enabled
 * 
 * @returns {boolean}
 */
isSessionStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.sessionStorage.setItem(key, null);
        window.sessionStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Checks if the user color scheme preference is dark.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-dark-color-scheme
 * 
 * @returns {boolean}
 * 
 * @see {@link prefersLightColorScheme}
 */
prefersDarkColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * Checks if [Local Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-local-storage-enabled
 * 
 * @returns {boolean}
 */
isLocalStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Complementory function of `prefersDarkColorScheme`.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-light-color-scheme
 * 
 * @returns {boolean}
 * 
 * @see {@link prefersDarkColorScheme}
 */
prefersLightColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

/**
 * @summary
 * Prints markdown to canvas log.
 * 
 * @description
 * Markdown features are limited to bold, italics and hyperlinks. Links must be
 * opened while holding the CTRL key.
 *
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printMD('*bold*');
 * // expected outcome: bold text
 * 
 * @example
 * printMD('_italic_');
 * // expected oucome: italic test
 * 
 * @example
 * printMD('[link](https://khanacademy.org)');
 * // expected oucome: hyperlink to Khan Academy
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

/**
 * @summary
 * Prints HTML to canvas log.
 * 
 * @description
 * Links must be opened while holding the CTRL key.
 * 
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
 * 
 * @see {@link printMD}
 */
printHTML = data => {
    data = data.replace(/<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g, '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>');
    const previousData = $(CANVAS_LOG).html();
    if (!previousData) e.println('');
    $(CANVAS_LOG).html((previousData && (previousData + '<br>') || '') + data);
};

/**
 * Unescapes an escaped HTML string.
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

/**
 * Remove element from canvas.
 * 
 * @param {string} id HTML id attribute
 * 
 * @example
 * drawElement({
 *     data: '<h1>Hello World</h1>',
 *     id: 'hello-world',
 *     x: 100,
 *     y: 100
 * });
 * removeElement('hello-world');
 * // expected outcome: removed element
 * 
 * @example
 * const el = drawElement({
 *     data: '<h1>Hello World</h1>',
 *     x: 100,
 *     y: 100
 * });
 * removeElement(el);
 * // expected outcome: removed element
 * 
 * @see {@link clearElements}
 * @see {@link drawElement}
 */
removeElement = id => {
    $(`#${id}`).remove();
};
