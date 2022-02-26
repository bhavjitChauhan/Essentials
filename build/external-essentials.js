_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';
_set_code_limit_ = typeof _set_code_limit_ !== 'undefined' ? _set_code_limit_ : 25;

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('External Essentials depends on the Essentials Core.');
} else {
    EXTERNAL_ESSENTIALS = true;
    if (!_silent_ && !_external_initialized_) console.info(
        '%cExternal Essentials',
        _console_style_
    );
}

/**
 * Canvas jQuery selector.
 *
 * @constant {string}
 * 
 * @category External
 * 
 * @example
 * // Log canvas element style to browser console
 * console.log($(CANVAS).attr('style)');
 */
CANVAS = '#output-canvas';

/**
 * Canvas log jQuery selector.
 *
 * @constant {string}
 * 
 * @category External
 * 
 * @example
 * // Log canvas log text to browser console
 * console.log($(CANVAS_LOG).last().text());
 */
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

/**
 * Calls the `preventDefault` method of an Event.
 * 
 * @private
 * 
 * @param {Event} e
 */
_preventDefault = e => e.preventDefault();

/**
 * Allows page scrolling when mouse is over canvas.
 * 
 * @category External
 * 
 * @see {@link forceAllowScroll}
 * @see {@link preventScroll}
 */
allowScroll = () => $(CANVAS).off('wheel', _preventDefault);

/**
 * Closes the canvas log
 * 
 * @category External
 */
closeLog = () => $('body > div:nth-child(1) > div:nth-child(3)').click();

/**
 * Releases pointer.
 * 
 * @category External
 * 
 * @see {@link requestPointerLock}
 */
exitPointerLock = () => document.exitPointerLock();

/**
 * @summary
 * Removes all 'wheel' event handlers attached to the canvas.
 * 
 * @description
 * `allowScroll` only removes the event handler that prevents the page from
 * being scrolled, however if the program is edited or restarted this is no
 * longer possible.
 * 
 * This function is not intended for production use.
 * 
 * @category External
 * 
 * @see {@link allowScroll}
 * @see {@link preventScroll}
 */
forceAllowScroll = () => $(CANVAS).off('wheel');

/**
 * Gets the currently selected text in the canvas.
 * 
 * @link https://www.30secondsofcode.org/js/s/get-selected-text
 * 
 * @category External
 * 
 * @returns {string}
 * 
 * @see {@link drawElement}
 */
getSelectedText = () => window.getSelection().toString();

/**
 * Prevents page from scrolling when mouse is over canvas.
 * 
 * @category External
 * 
 * @see {@link allowScroll}
 * @see {@link forceAllowScroll}
 */
preventScroll = () => $(CANVAS).on('wheel', _preventDefault);

/**
 * Locks pointer to canvas.
 * 
 * @category External
 * 
 * @see {@link exitPointerLock}
 */
requestPointerLock = () => $(CANVAS)[0].requestPointerLock();

/**
 * Resizes the canvas log.
 * 
 * @category External
 * 
 * @param {number} height
 */
resizeLog = height => $('body > div:nth-child(1)').css('height', height);

/**
 * Checks if touch events are supported.
 * 
 * @link https://www.30secondsofcode.org/js/s/supports-touch-events
 * 
 * @category External
 * 
 * @returns {boolean}
 * 
 * @see {@link detectDeviceType}
 */
supportsTouchEvents = () => 'ontouchstart' in window;

/**
 * Deletes all HTML elements from the canvas.
 * 
 * @category External
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
 * @category External
 * 
 * @param {string} str String to be copied
 * 
 * @example
 * copyToClipboard('Hello World');
 * // expected outcome: 'Hello World' copied to clipboard
 */
copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};

/**
 * Detects whether the page is being viewed on a mobile device or a desktop.
 *
 * @link https://www.30secondsofcode.org/js/s/detect-device-type
 * 
 * @category External
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
 * Detects the preferred language of the current user.
 *
 * @link https://www.30secondsofcode.org/js/s/detect-language
 * 
 * @category External
 *
 * @returns {string} Preferred language as a [language tag]{@link https://en.wikipedia.org/wiki/IETF_language_tag}
 *
 * @example
 * println(detectLanguage());
 * // expected outcome: Language tag
 */
detectLanguage = (defaultLanguage = 'en-US') =>
    navigator.language ||
    (_.isArray(navigator.languages) && navigator.languages[0]) ||
    defaultLanguage;

/**
 * @summary
 * Disables BabyHint's banned properties.
 * 
 * @description 
 * This function is not intended for production use. The program will be
 * restarted for changes to take effect.
 * 
 * @category External
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
        throw 'Restarting program to allow banned properties...';
    }
};

/**
 * @summary
 * Disables Khan Academy's loop protector.
 * 
 * @description
 * The program will be restarted for changes to take effect.
 * 
 * @category External
 */
disableLoopProtector = () => {
    if (!isEmptyFunction(LoopProtector.prototype.leave)) {
        console.warn('Restarting program to disable loop protector...');
        LoopProtector.prototype.leave = noop;
        restart();
        throw 'Restarting program to disable loop protector...';
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
 * @category External
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
 * @category External
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
 * Gets canvas log text and time.
 * 
 * @category External
 * 
 * @param {number} i index of log
 * 
 * @returns {Object} obj
 * @returns {string} obj.text
 * @returns {Date} obj.time
 * 
 * @example
 * println('Hello');
 * println('World');
 * const log = getLogs(0);
 * console.log(log.text);
 * // expected output: 'Hello'
 * console.log(log.time);
 * // expected output: Date
 */
getLog = i => {
    if (!Number.isInteger(i)) return;
    const keys = ['text', 'time'];
    const pair = [getLogsText(i), getLogsTime(i)];
    return _.object(keys, pair);
};

/**
 * Gets current code in editor.
 * 
 * @category External
 * 
 * @returns {string}
 */
getCode = function () {
    let obj = arguments.callee;
    while (!(obj.arguments[0] instanceof Processing)) {
        obj = obj.caller;
        if (obj.arguments[0] instanceof MouseEvent || obj.arguments[0] instanceof KeyboardEvent) return console.warn('`getCode` is not supported in Processing event functions.');
    }
    return obj.caller.arguments[0];
};

/**
 * Gets canvas log text and times.
 * 
 * @category External
 * 
 * @returns {Array.<{string: string, time: Date}>}
 * 
 * @example
 * println('Hello');
 * println('World');
 * const logs = getLogs();
 * console.log(logs[0].text);
 * // expected output: 'Hello'
 * console.log(logs[1].time);
 * // expected output: Date
 */
getLogs = () => {
    const keys = ['text', 'time'], arr = [];
    const pairs = _.zip(getLogsText(), getLogsTime());
    pairs.forEach(pair => {
        arr.push(_.object(keys, pair));
    });
    return arr;
};

/**
 * Gets canvas log strings.
 * 
 * @category External
 * 
 * @param number [i] index of log
 * 
 * @returns {string[]|string}
 * 
 * @example
 * println('Hello');
 * println('World');
 * console.log(getLogsText());
 * // expected output: ['Hello', 'World']
 * 
 * @example
 * printMD('_Markdown_');
 * printHTML('<i>HTML</i>');
 * console.log(getLogsText());
 * // expected output: ['<i>Markdown</i>', '<i>HTML</i>']
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * console.log(getLogsText(0));
 * // expected output: 'First'
 * console.log(getLogsText(-1));
 * // expected output: 'Third'
 */
getLogsText = i => {
    const logs = $(CANVAS_LOG);
    if (Number.isInteger(i)) {
        if (logs.length <= i) return;
        return logs.eq(i).html();
    }
    return logs
        .toArray()
        .map(el => $(el).html());
};

/**
 * Gets canvas log times.
 * 
 * @category External
 * 
 * @param number [i] index of log
 * 
 * @returns {Date[]|Date}
 * 
 * @example
 * println('Hello');
 * println('World');
 * console.log(getLogsTime());
 * // expected output: [Date, Date]
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * console.log(getLogsTime(0));
 * // expected output: Date
 * console.log(getLogsTime(-1));
 * // expected output: Date
 */
getLogsTime = i => {
    const logs = $(CANVAS_LOG);
    if (Number.isInteger(i)) {
        if (logs.length <= i) return;
        const el = logs.eq(i);
        const date = (new Date).toLocaleDateString();
        const time = el.parent().attr('title');
        return new Date(`${date}, ${time}`);
    }
    return logs
        .toArray()
        .map((_el, i) => getLogsTime(i));
};

/**
 * Checks if the browser tab of the page is focused.
 * 
 * @category External
 * 
 * @link https://www.30secondsofcode.org/js/s/is-browser-tab-focused
 * 
 * @returns {boolean}
 */
isBrowserTabFocused = () => !document.hidden;

/**
 * Checks if [Local Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-local-storage-enabled
 * 
 * @category External
 * 
 * @returns {boolean}
 */
isLocalStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};

/**
 * Checks if [Session Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-session-storage-enabled
 * 
 * @category External
 * 
 * @returns {boolean}
 */
isSessionStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.sessionStorage.setItem(key, null);
        window.sessionStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};

/**
 * Checks if the user color scheme preference is dark.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-dark-color-scheme
 * 
 * @category External
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
 * Complementary function of `prefersDarkColorScheme`.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-light-color-scheme
 * 
 * @category External
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
 * Prints HTML to canvas log.
 * 
 * @description
 * Links must be opened while holding the <kbd>CTRL</kbd> key.
 * 
 * @category External
 * 
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
 * 
 * @see {@link printMD}
 */
printHTML = data => {
    data = data.replace(
        /<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g,
        '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>'
    );
    p.println('');
    $(CANVAS_LOG).last().html(data);
};

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

/**
 * Remove element from canvas.
 * 
 * @category External
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

__setCodeCallCount = typeof __setCodeCallCount !== 'undefined' ? __setCodeCallCount : 0;
__setCodeLastCall = typeof __setCodeLastCall !== 'undefined' ? __setCodeLastCall : 0;
/**
 * @summary
 * Sets editor code.
 * 
 * @description
 * To prevent a "rogue" `setCode` function, if the function is called 25 times
 * in a row it stops itself. Set the `_set_code_limit_` variable to `false` to
 * disable this functionality.
 * 
 * @category External
 * 
 * @param {*} code
 */
setCode = code => {
    if (_.isNumber(_set_code_limit_)) {
        if (Date.now() - __setCodeLastCall < 75) __setCodeCallCount++;
        else __setCodeCallCount = 0;
        __setCodeLastCall = Date.now();
    }
    if (__setCodeCallCount > _set_code_limit_) return console.warn('`setCode` limit reached. Set the `_set_code_limit_` flag to `false` to disable this functionality.');
    window.top.postMessage(JSON.stringify({ code: code }));
};

/**
 * Set log data.
 * 
 * @category External
 * 
 * @param {number} i index of log
 * @param {*} data
 * @param {boolean} [update=true] update log time
 * 
 * @example
 * println('Hello');
 * setLog(0, 'Hey');
 * console.log(getLogsText());
 * // expected output: ['Hey']
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * setLog(-1, 'Last');
 * console.log(getLogsText());
 * // expected output: ['First', 'Second', 'Last']
 */
setLog = (i, data, update = true) => {
    const logs = $(CANVAS_LOG);
    if (logs.length <= i) return;
    const el = logs.eq(i);
    el.html(data);
    if (update) el.parent().attr('title', (new Date()).toLocaleTimeString());
};

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
