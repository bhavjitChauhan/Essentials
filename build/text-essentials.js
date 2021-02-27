/** @module Text */

_text_initialized_ = typeof TEXT_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Text Essentials depends on the Essentials Core.');
} else if (typeof COLOR_ESSENTIALS === 'undefined') {
    console.error('Text Essentials depends on Color Essentials.');
} else {
    TEXT_ESSENTIALS = true;
    if (!_silent_ && !_text_initialized_) console.info(
        '%cText Essentials',
        'font-family:system-ui;font-size:0.75rem;'
    );
}

/**
 * Sets font, size and other [CSS font properties]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/font}.
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
 * let f = font('Arial', 'bold');
 * textSize(30);
 * text('Hello World', 100, 100);
 * // expected outcome: 'Hello World' in normal Arial normal size font
 * // `textSize()` should not be used with `font()`
 * 
 * // Instead, use `font()`
 * font(f, 30);
 * text('Hello World', 100, 200);
 * // expected outcome: 'Hello World' in bold Arial size 30 font
 * 
 * @example
 * // Use the `-call` parameter to prevent the font automatically being set
 * // This functionality is useful when defining font variables
 * let f = font('serif', '-call');
 * text('Hello World', 100, 100);
 * // expected outcome: the text will still be in normal Arial font
 * font(f);
 * text('Hello World', 100, 200);
 * // expected outcome: the text will be in serif font
 * 
 * @example
 * let f = font('Arial', 'bold', 'italic');
 * text('Hello World', 100, 100);
 * // expected outcome: 'Hello World' in bold and italic Arial font
 * 
 * // Use the negate syntax to remove properties from fonts
 * font(f, '-bold');
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
        _font = e.createFont(family, size);
        properties = _.without(properties, size);
        _font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + `${size}px/${size + 2}px ${family}`;
        // font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + size + 'px/' + (size + 2) + 'px ' + family;
    }
    call && e.textFont(_font);
    return _font;
};

/**
 * Converts milliseconds to a readable format of duration.
 * 
 * @link https://www.30secondsofcode.org/js/s/format-duration
 * 
 * @param {number}  ms  Duration in milliseconds
 * 
 * @returns {string}  Readable format of duration.
 * 
 * @example
 * let martianDay = 88775244;
 * console.log(formatDuration(martianDay));
 * // expected output: '1 day, 39 minutes, 35 seconds, 244 milliseconds'
 */
formatDuration = ms => {
    if (ms < 0) ms = -ms;
    const time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
        .join(', ');
};

/**
 * Draws a string with a highlight background.
 * 
 * @param {string} string String to be highlighted
 * @param {number} [x=0] x-coordinate value
 * @param {number} [y='text height'] y-coordinate value
 * @param {number} [highlightColor=YELLOW] Color of highlight background
 * 
 * @example
 * let str = 'Highlighted\nText';
 * fill(BLACK);
 * highlightText(str, 25, 25);
 * 
 * @example
 * let str = 'Highlighted\nText';
 * fill(LIGHTGREEN);
 * highlightText(str, 25, 25, BLACK);
 */
highlightText = (string, x = 0, y = e.textAscent(), highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    e.noStroke();
    e.rectMode(e.CORNER);
    e.textAlign(e.LEFT, e.TOP);
    for (const i in string) {
        string[i] = ` ${string[i]} `;
        push();
        e.fill(highlightColor);
        e.rect(x, y + (i * e.textAscent() * 2), e.textWidth(string[i]), e.textAscent() * 1.75);
        pop();
        e.text(string[i], x, y + (i * e.textAscent() * 2));
    }
};

/**
 * Determines if text should be black or white based on background color.
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
 *     let TEST_COLOR = color(h, s, b);
 *     background(TEST_COLOR);
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
        r = e.red(backgroundColor);
        g = e.green(backgroundColor);
        b = e.blue(backgroundColor);
    }
    if ((r + b + g) / 3 < 225) {
        return WHITE;
    }
    return BLACK;
};

/**
 * Draws text with multiple colors that are passed in using special syntax.
 * 
 * @param {string} string Input string
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * 
 * @example
 * let str = 'Multi-[255,0,0]Colored\n[0,255,0]Text';
 * fill(BLUE);
 * multicoloredText(str, 25, 25);
 */
multicoloredText = (string, x = 0, y = e.textAscent()) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    push();
    e.textAlign(e.LEFT, e.CORNER);
    for (const i in string) {
        string[i] = string[i].split(/\[|]/);
        let splits = 0;
        for (const j in string[i]) {
            if (/\d+,\d+,\d+/.test(string[i][j])) {
                const rgb = string[i][j].split(',');
                e.fill.apply(e, rgb);
                delete string[i][j];
                if (splits === 0) {
                    string[i][j - 1] += ' ';
                }
                splits += 1;
            } else {
                const w = e.textWidth(string[i].slice(0, j));
                e.text(string[i][j], x + w - (splits * 2 * e.textWidth(' ')), y + (i * e.textAscent() * 2));
            }
        }
    }
    pop();
};

/**
 * Takes a number and returns it as a string with the correct ordinal indicator
 * suffix.
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
 * Draws text with an outline.
 * 
 * @param {string} string String to be outlined
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * @param {number} [outlineColor=BLACK] Color of outline
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
outlineText = (string, x = 0, y = e.textAscent(), outlineColor = BLACK) => {
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

/**
 * Returns the singular or plural form of the word based on the input number,
 * using an optional dictionary if supplied.
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
 * let people = 2;
 * printf('% %.', people, pluralize(people, 'person', 'people'));
 * // expected output: '2 people.'
 *
 * @see printf
 */
pluralize = (value, word, plural = word + 's') => {
    const _pluralize = (num, word, plural = word + 's') =>
        [1, -1].includes(Number(num)) ? word : plural;
    if (typeof value === 'object')
        return (num, word) => _pluralize(num, word, value[word]);
    return _pluralize(value, word, plural);
};

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

/**
 * Draws text underlined.
 * 
 * @param {string} string Text to be underlined
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * @param {color} [underlineColor=BLACK] Color of underline
 * @param {number} [underlineWeight] Weight of underline
 * 
 * @example
 * let str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25);
 * 
 * @example
 * let str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25, RED, 5);
 */
underlineText = (string, x = 0, y = e.textAscent(), underlineColor = BLACK, underlineWeight = e.externals.context.font.match(/\d+/)[0] / 12) => {
    if (!(/\S/).test(string)) {
        return;
    }
    strings = string.split('\n');
    push();
    e.strokeCap(e.SQUARE);
    e.strokeWeight(underlineWeight);
    e.stroke(underlineColor);
    for (const i in strings) {
        e.line(x, y + (e.textAscent() / 4) + (e.textAscent() * i * 1.55), x + e.textWidth(strings[i]), y + (e.textAscent() / 4) + (e.textAscent() * i * 1.55));
    }
    e.textAlign(e.LEFT, e.CORNER);
    e.text(string, x, y);
    pop();
};

/**
 * Wraps a string to a given number of characters using a string break
 * character.
 *
 * @link https://www.30secondsofcode.org/js/s/word-wrap
 *
 * @param {string} str String to be wrapped
 * @param {number} max Maximum number of characters per line
 * @param {string} [br='\n'] Custom break character
 *
 * @example
 * let str = 'This string should have a maximum line length of thirty-two characters.';
 * let wrappedStr = wordWrap(str, 32);
 * println(wrappedStr);
 * // expected output: 
 * // 'This string should have a
 * // maximum line length of
 * // thirty-two characters.'
 * let customWrappedStr = wordWrap(str, 32, '<br>');
 * println(customWrappedStr);
 * // expected output: 'This string should have a<br>maximum line length of<br>thirty-two characters.'
 */
wordWrap = (str, max, br = '\n') => str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), '$1' + br
);
