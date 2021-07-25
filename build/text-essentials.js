_text_initialized_ = typeof TEXT_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Text Essentials depends on the Essentials Core.');
} else {
    TEXT_ESSENTIALS = true;
    if (!_silent_ && !_text_initialized_) console.info(
        '%cText Essentials',
        _console_style_
    );
}

/**
 * Alias for `format`.
 * 
 * @category Text
 * 
 * @param {string} str
 * 
 * @example
 * console.log(f('PI is ${Math.PI.toFixed(2)}'));
 * // expected output: 'PI is 3.14'
 * 
 * @see {@link format}
 */
f = str => format(str);

/**
 * Gets current text size.
 * 
 * @category Text
 * 
 * @returns {number}
 */
getTextSize = () => ctx.font.match(/\d+/);

/**
 * Fast gradient by filling each character with a different color as opposed to
 * masking the text with the gradient.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 *
 * @example
 * font('sans-serif', 25);
 * fastGradientText('Hello World', 10, textAscent() * 2, RED, YELLOW);
 * // expected outcome: 'Hello World' with gradient fill from red to yellow
 *
 * @example
 * font('sans-serif', 25, 'bold');
 * fastGradientText('Hello\nWorld', 10, textAscent() * 4, PURPLE, PINK);
 * // expected outcome: 'Hello World', bold, with gradient fill from purple to pink in two lines
 *
 * @see {@link font}
 */
fastGradientText = (string, x, y, startColor, endColor) => {
    p.pushStyle();
    if (!string.includes('\n')) {
        for (let i = 0; i < string.length; i++) {
            p.fill(p.lerpColor(startColor, endColor, i / (string.length)));
            p.text(string[i], x + p.textWidth(string.slice(0, i)), y);
        }
    } else {
        const strings = string.split('\n');
        for (const i in strings) {
            fastGradientText(strings[i], x, y + i * textAscent(), startColor, endColor);
        }
    }
    p.popStyle();
};

/**
 * Sets font, size and other [CSS font properties]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/font}.
 * 
 * @category Text
 *
 * @param {(string|font)}  name  Name of font or font
 * @param {number}  [size]  Font size
 * @param {...string}  properties  CSS font properties
 *
 * @returns {font}  Created font
 *
 * @example
 * fill(BLACK);
 * font('Arial', 30, 'bold');
 * text('Hello World', 100, 100);
 * // expected outcome: 'Hello World' in bold Arial font
 *
 * @example
 * const arialBold = font('Arial', 'bold');
 * textSize(30);
 * text('Hello World', 100, 100);
 * // expected outcome: 'Hello World' in normal Arial normal size font
 * // `textSize()` should not be used with `font()`
 *
 * // Instead, use `font()`
 * font(arialBold, 30);
 * text('Hello World', 100, 200);
 * // expected outcome: 'Hello World' in bold Arial size 30 font
 *
 * @example
 * // Use the `-call` parameter to prevent the font automatically being set
 * // This functionality is useful when defining font variables
 * const serif = font('serif', '-call');
 * text('Hello World', 100, 100);
 * // expected outcome: the text will still be in normal Arial font
 * font(serif);
 * text('Hello World', 100, 200);
 * // expected outcome: the text will be in serif font
 *
 * @example
 * const arialBoldItalic = font('Arial', 'bold', 'italic');
 * text('Hello World', 100, 100);
 * // expected outcome: 'Hello World' in bold and italic Arial font
 *
 * // Use the negate syntax to remove properties from fonts
 * font(arialBoldItalic, '-bold');
 * text('Hello World', 100, 200);
 * // expected outcome: 'Hello World' in italic Arial font
 */
font = function (family) {
    let properties = Array.from(arguments)
        .slice(1);
    // Font size doesn't take effect unless `properties` array has at least one
    properties.push('');
    let call = properties.find(function (property) {
        return _.isBoolean(property);
    });
    call = !_.isBoolean(call) && true;
    properties = _.without(properties, true, false);
    let _font;
    let size = properties.find(function (property) { return !isNaN(property); });
    if (isFont(family)) {
        _font = family;
        size = size || +_font.css.match(/\d+/)[0];
        previousCSS = _font.css.split(' ');
        previousProperties = previousCSS
            .slice(0, -2)
            .filter(function (property) {
                return property !== 'normal';
            });
        properties = _.union(properties, previousProperties);
        let negates = properties.filter(function (property) {
            if (!_.isString(property)) return false;
            return property.charAt(0) == '-';
        });
        negates = negates.map(function (negate) {
            return negate.substr(1);
        });
        properties = properties.filter(function (property) {
            if (!_.isString(property)) return false;
            return property.charAt(0) != '-';
        });
        properties = (
            _.difference(properties, negates)
                .join(' '));
        _font.css = `${properties} ${size}px/${size + 2}px ${_.last(previousCSS)}`;
        // font.css = properties + ' ' + size + 'px/' + (size + 2) + 'px ' + _.last(previousCSS);
    } else {
        size = size || 12;
        _font = p.createFont(family, size);
        properties = _.without(properties, size);
        _font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + `${size}px/${size + 2}px ${family}`;
        // font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + size + 'px/' + (size + 2) + 'px ' + family;
    }
    call && p.textFont(_font);
    return _font;
};

/**
 * Formats string using [template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}.
 * 
 * @category Text
 *
 * @param {string} str
 * 
 * @returns {string} formatted string
 *
 * @example
 * console.log(format('PI is ${Math.PI.toFixed(2)}'))
 * // expected output: 'PI is 3.14'
 * 
 * @example
 * console.log(format('${millis()}ms elapsed'));
 * // example outcome: '100ms elapsed'
 * 
 * @example
 * console.log('E is ${Math.E.toFixed(2)}'.format());
 * // expected output: 'E is 2.72'
 * 
 * @see {@link f}
 */
format = str => evalPJS(`\`${str}\``);

/**
 * Converts milliseconds to a readable format of duration.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/format-duration
 *
 * @param {number} ms duration in milliseconds
 * @param {number} [precision=1e-3] nearest number to round to in terms of milliseconds
 * @param {boolean} [raw=false] return raw values
 *
 * @returns {string|Array} Readable format of duration.
 *
 * @example
 * const martianDay = 88775244;
 * console.log(formatDuration(martianDay));
 * // expected output: '1 day, 39 minutes, 35 seconds, 244 milliseconds'
 * 
 * @example
 * const earthDay = 86399999.9466;
 * console.log(formatDuration(earthDay, 1e3 * 60 * 60 * 24));
 * // expected output: '1 day'
 * 
 * @example
 * const moonRotation = 27.322 * 24 * 60 * 60 * 1000;
 * console.log(formatDuration(moonRotation, 1e3, true));
 * // expected output: [0, 0, 27, 7, 43, 41, 0, 0]
 */
formatDuration = (ms, precision, raw = false) => {
    if (!ms) return '0';
    if (ms < 0) ms = -ms;
    if (precision) ms = roundTo(ms, precision);
    if (ms < 1e-3) return '0';
    const time = {
        year: Math.floor(ms / 3.1536e10),
        month: Math.floor(ms / 2.592e9),
        day: Math.floor(ms / 8.64e7),
        hour: Math.floor(ms / 3.6e6) % 24,
        minute: Math.floor(ms / 6e4) % 60,
        second: Math.floor(ms / 1e3) % 60,
        millisecond: Math.floor(ms) % 1e3,
        microsecond: Math.floor(ms * 1e3) % 1e3
    };
    if (raw) return Object.values(time);
    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${pluralize(val, key)}`)
        .join(', ');
};

/**
 * Converts a number to a more readable format.
 * 
 * @category Text
 * 
 * @param {number} n
 * @param {string|Array} [locales='en']
 * @param {Object} [options]
 * 
 * @returns {string}
 * 
 * @example
 * const n = 123456789;
 * printf('%', formatNumber(n));
 * // expected output: '123,456,789'
 * 
 * @example
 * const n = 1234.56789;
 * printf('%', formatNumber(n));
 * // expected output: '1,234.568'
 * printf('%', formatNumber(n, 'en', { minimumFractionDigits: 5 }));
 * // expected output: '1,234.56789'
 * 
 * @example
 * const n = 123456789;
 * printf('%', formatNumber(n, 'uk'));
 * // expected output: '123 456 789'
 * 
 * @example
 * const n = 1000;
 * printf('%', formatNumber(n, 'en', { style: 'currency', currency: 'usd' }));
 * // expected output: '$1,000.00'
 * 
 */
formatNumber = (n, locales = 'en', options = {}) => n.toLocaleString(locales, options);

/**
 * Draws a string with a highlight background.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {number} [highlightColor=YELLOW] color of highlight background
 *
 * @example
 * const str = 'Highlighted\nText';
 * fill(BLACK);
 * highlightText(str, 25, 25);
 *
 * @example
 * const str = 'Highlighted\nText';
 * fill(LIGHT_GREEN);
 * highlightText(str, 25, 25, BLACK);
 */
highlightText = (string, x, y, highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    p.pushStyle();
    p.noStroke();
    p.rectMode(p.CORNER);
    p.textAlign(p.LEFT, p.TOP);
    for (const i in string) {
        string[i] = ` ${string[i]} `;
        p.pushStyle();
        p.fill(highlightColor);
        p.rect(x, y + (i * p.textAscent() * 2), p.textWidth(string[i]), p.textAscent() * 1.75);
        p.popStyle();
        p.text(string[i], x, y + (i * p.textAscent() * 2));
    }
    p.popStyle();
};

/**
 * Determines if text should be black or white based on background color.
 * 
 * @category Text
 *
 * @param {number} backgroundColor Color of background
 *
 * @returns {number} Color of text
 *
 * @example
 * let h = 0,
 *     s = 0,
 *     b = 0;
 * colorMode(HSB);
 * textAlign(CENTER, CENTER);
 * textSize(50);
 * draw = function() {
 *     h = frameCount % 255;
 *     s = frameCount % 255;
 *     b = frameCount % 255;
 *     let c = color(h, s, b);
 *     background(c);
 *     fill(lightOrDarkText(hex(h, 2) + hex(s, 2) + hex(b, 2)));
 *     text("TEXT", width / 2, height / 2);
 * };
 */
lightOrDarkText = backgroundColor => {
    let r, g, b;
    if (typeof backgroundColor === 'string') {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor);
        r = parseInt(result[1], 16);
        g = parseInt(result[2], 16);
        b = parseInt(result[3], 16);
    } else {
        r = p.red(backgroundColor);
        g = p.green(backgroundColor);
        b = p.blue(backgroundColor);
    }
    if ((r + b + g) / 3 < 225) {
        return WHITE;
    }
    return BLACK;
};

/**
 * Draws text with multiple colors that are passed in using special syntax.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 *
 * @example
 * const str = 'Multi-[255,0,0]Colored\n[0,255,0]Text';
 * fill(BLUE);
 * multicoloredText(str, 25, 25);
 */
multicoloredText = (string, x, y) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    p.pushStyle();
    p.textAlign(p.LEFT, p.CORNER);
    for (const i in string) {
        string[i] = string[i].split(/\[|]/);
        let splits = 0;
        for (const j in string[i]) {
            if (/\d+,\d+,\d+/.test(string[i][j])) {
                const rgb = string[i][j].split(',');
                p.fill.apply(p, rgb);
                delete string[i][j];
                if (splits === 0) {
                    string[i][j - 1] += ' ';
                }
                splits += 1;
            } else {
                const w = p.textWidth(string[i].slice(0, j));
                p.text(string[i][j], x + w - (splits * 2 * p.textWidth(' ')), y + (i * p.textAscent() * 2));
            }
        }
    }
    p.popStyle();
};

/**
 * Obfuscate strings as hexadecimal and unicode escape characters.
 * 
 * @category Text
 *
 * @link https://www.khanacademy.org/cs/-/4812748875104256
 *
 * @param {string} str
 * 
 * @returns {string} obfuscated string
 * 
 * @example
 * const str = 'Hello World';
 * const obfuscated = obfuscate(str);
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

/**
 * Takes a number and returns it as a string with the correct ordinal indicator
 * suffix.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-ordinal-suffix
 *
 * @param {(number|string)} n Number
 *
 * @returns {string} Number with ordinal suffix.
 *
 * @example
 * println(ordinalSuffix(123));
 * // expected output: '123rd'
 */
ordinalSuffix = n => {
    const int = parseInt(n, 10),
        digits = [int % 10, int % 100],
        oPattern = [1, 2, 3, 4],
        ordinals = ['st', 'nd', 'rd', 'th'],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + ordinals[digits[0] - 1]
        : int + ordinals[3];
};

/**
 * @summary
 * Draws text with an outline.
 * 
 * @description
 * If Color Essentials is not present, outlines cannot be translucent.
 * 
 * @category Text
 *
 * @param {string} str
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {number} weight
 * @param {color|string} [color=BLACK] color of outline
 *
 * @example
 * const str = 'Outlined Text';
 * outlineText(str, 25, 25);
 *
 * @example
 * const str = 'Outlined Text';
 * fill(BLACK);
 * outlineText(str, 25, 25, 10, ORANGE);
 * 
 * @todo Fix multiline strings
 * @todo Mimic `text$4` and `text$6`
 */
outlineText = (str, x, y, weight = 5, color = BLACK) => {
    str = str.replace('\n', '');
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.lineWidth = weight;
    if (_.isNumber(color))
        color = typeof COLOR_ESSENTIALS != 'undefined' ? RGBToHex(color, false) : '#' + hex(color, 6);
    ctx.strokeStyle = color;
    ctx.strokeText(str, x, y);
    ctx.restore();
    pushStyle();
    p.textAlign(p.LEFT, p.TOP);
    p.text(str, x, y);
    popStyle();
};

/**
 * Returns the singular or plural form of the word based on the input number,
 * using an optional dictionary if supplied.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/pluralize
 *
 * @param {number} value Number of items
 * @param {string} word Word to pluralize
 * @param {string} [plural=word+'s'] Custom pluralized form
 *
 * @example
 * let apples;
 * const printApples = function() {
 *     printf('% %.', apples, pluralize(apples, 'apple'));
 * }
 * apples = 2;
 * printApples();
 * // expected output: '2 apples.'
 * apples = 1;
 * printApples();
 * // expected output: '1 apple.'
 *
 * @example
 * const people = 2;
 * printf('% %.', people, pluralize(people, 'person', 'people'));
 * // expected output: '2 people.'
 *
 * @see {@link printf}
 */
pluralize = (value, word, plural = word + 's') => {
    const _pluralize = (num, word, plural = word + 's') =>
        [1, -1].includes(Number(num)) ? word : plural;
    if (typeof value === 'object')
        return (num, word) => _pluralize(num, word, value[word]);
    return _pluralize(value, word, plural);
};

/**
 * Removes non-ASCII characters from string.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/remove-non-ascii
 *
 * @param {string} str
 * 
 * @returns {string} formatted string
 * 
 * @example
 * const str = 'Hello 😀';
 * const strippedStr = removeNonASCII(str);
 * println(strippedStr)
 * // expected output: 'Hello '
 * 
 * @example
 * println(str.removeNonASCII());
 * // expected output: 'Hello '
 */
removeNonASCII = str => {
    return str.replace(/[^\x20-\x7E]/g, '');
};

String.prototype.format = function() {
    return format(this);
};

String.prototype.obfuscate = function () {
    return obfuscate(this);
};

String.prototype.removeNonASCII = function () {
    return removeNonASCII(this);
};

String.prototype.toTitleCase = function () {
    return toTitleCase(this);
};

String.prototype.toCamelCase = function () {
    return toCamelCase(this);
};

String.prototype.toKebabCase = function () {
    return toKebabCase(this);
};

String.prototype.toSnakeCase = function () {
    return toSnakeCase(this);
};

/**
 * Converts string to `camelCase`.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-camel-case
 *
 * @param {string} str
 * 
 * @returns {string} string in camel case
 * 
 * @example
 * println(toCamelCase('normal text'));
 * // expected output: 'normalText'
 * 
 * @example
 * println(toCamelCase('kebab-case'));
 * // expected output: 'kebabCase'
 * 
 * @example
 * println(toCamelCase('snake_case'));
 * // expected output: 'snakeCase'
 * 
 * @example
 * println('normal text'.toCamelCase());
 * // expected output: 'normalText'
 */
toCamelCase = str => {
    const s =
        str
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * Converts string to `kebab-case`.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-kebab-case
 *
 * @param {string} str
 * 
 * @returns {string} string in kebab case
 * 
 * @example
 * println(toKebabCase('normal text'));
 * // expected output: 'normal-text'
 * 
 * @example
 * println(toKebabCase('camelCase'));
 * // expected output: 'camel-case'
 * 
 * @example
 * println(toKebabCase('snake_case'));
 * // expected output: 'snake-case'
 * 
 * @example
 * println('normal text'.toKebabCase());
 * // expected output: 'normal-text'
 */
toKebabCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
};

/**
 * Converts string to `snake_case`.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-snake-case
 *
 * @param {string} str
 * 
 * @returns {string} string in snake case
 * 
 * @example
 * println(toSnakeCase('normal text'));
 * // expected output: 'normal_text'
 * 
 * @example
 * println(toSnakeCase('camelCase'));
 * // expected output: 'camel_case'
 * 
 * @example
 * println(toSnakeCase('kebab-case'));
 * // expected output: 'kebab_case'
 * 
 * @example
 * println('normal text'.toSnakeCase());
 * // expected output: 'normal_text'
 */
toSnakeCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
};

/**
 * Converts string to `Title Case`.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-title-case
 *
 * @param {string} str
 * 
 * @returns {string} string in title case
 * 
 * @example
 * println(toTitleCase('normal text'));
 * // expected output: 'Normal Text'
 * 
 * @example
 * println(toTitleCase('camelCase'));
 * // expected output: 'Camel Case'
 * 
 * @example
 * println(toTitleCase('kebab-case'));
 * // expected output: 'Kebab Case'
 * 
 * @example
 * println(toTitleCase('snake_case'));
 * // expected output: 'Snake Case'
 * 
 * @example
 * println('normal text'.toTitleCase());
 * // expected output: 'Normal Text'
 */
toTitleCase = str => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');
};

/**
 * Draws text underlined.
 * 
 * @category Text
 *
 * @param {string} string Text to be underlined
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * @param {color} [underlineColor=BLACK] Color of underline
 * @param {number} [underlineWeight] Weight of underline
 *
 * @example
 * const str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25);
 *
 * @example
 * const str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25, RED, 5);
 */
underlineText = (string, x, y, underlineColor = BLACK, underlineWeight = p.externals.context.font.match(/\d+/)[0] / 12) => {
    if (!(/\S/).test(string)) {
        return;
    }
    strings = string.split('\n');
    p.pushStyle();
    p.strokeCap(p.SQUARE);
    p.strokeWeight(underlineWeight);
    p.stroke(underlineColor);
    for (const i in strings) {
        p.line(x, y + (p.textAscent() / 4) + (p.textAscent() * i * 1.55), x + p.textWidth(strings[i]), y + (p.textAscent() / 4) + (p.textAscent() * i * 1.55));
    }
    p.textAlign(p.LEFT, p.CORNER);
    p.text(string, x, y);
    p.popStyle();
};

/**
 * Wraps a string to a given number of characters using a string break
 * character.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/word-wrap
 *
 * @param {string} str String to be wrapped
 * @param {number} max Maximum number of characters per line
 * @param {string} [br='\n'] Custom break character
 *
 * @example
 * const str = 'This string should have a maximum line length of thirty-two characters.';
 * const wrappedStr = wordWrap(str, 32);
 * println(wrappedStr);
 * // expected output: 
 * // 'This string should have a
 * // maximum line length of
 * // thirty-two characters.'
 * const customWrappedStr = wordWrap(str, 32, '<br>');
 * println(customWrappedStr);
 * // expected output: 'This string should have a<br>maximum line length of<br>thirty-two characters.'
 */
wordWrap = (str, max, br = '\n') => str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), '$1' + br
);

/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws text with an outline.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {color} [outlineColor=BLACK] color of outline
 *
 * @example
 * let str = 'Outlined\nText';
 * outlineText(str, 25, 25);
 *
 * @example
 * let str = 'Outlined\nText';
 * fill(BLACK);
 * outlineText(str, 25, 25, ORANGE);
 */
 outlineTextOld = (string, x = 0, y = e.textAscent(), outlineColor = BLACK) => {
    if (!(/\S/).test(string)) {
        return;
    }
    push();
    e.fill(outlineColor);
    for (let i = -2; i < 3; i++) {
        for (let j = -1; j < 3; j++) {
            e.text(string, x + i, y + j);
        }
        e.text(string, x + i, y);
        e.text(string, x, y + i);
    }
    pop();
    e.text(string, x, y);
};
