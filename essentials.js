/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file CDN Essentials Build
 * @author Bhavjit Chauhan
 */

/**
 * A Processing color integer.
 * @typedef {number} color
 */

_environment_ = this instanceof Window ? 'CDN' : 'KA';
_console_style_ = 'font-family:system-ui;font-size:0.75rem;';
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';

ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '2.0.0';
ESSENTIALS_ASCII = `
    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/
   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/
  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/
 _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/
_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/

`;

_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info(
    `%cESSENTIALS
%cThe Khan Academy utility library.

${_environment_} Build
Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    `color:transparent;
font-size:3rem;
background-image: url('https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true');
background-position:center;
background-repeat: no-repeat;
background-size:contain;`,
    _console_style_
);

_eval = eval;
p = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [p.LEFT, p.RIGHT, p.TOP, p.BOTTOM, p.UP, p.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
WIDTH = p.width;

/**
 * Alias for `height`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HEIGHT = p.height;

/**
 * Alias for `WIDTH / 2`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HALF_WIDTH = WIDTH / 2;

/**
 * Alias for `HEIGHT / 2`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HALF_HEIGHT = HEIGHT / 2;

/**
 * Alias for the
 * [`CanvasRenderingContext2D`]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D}
 * used by Processing.
 * 
 * @constant {CanvasRenderingContext2D}
 * 
 * @category Core
 */
ctx = p.externals.context;

/**
 * Alias for `color(255)`.
 *
 * @private
 * 
 * @constant {color}
 */
WHITE = 0xFFFFFFFF;

/**
 * Alias for `color(192)`.
 *
 * @private
 * 
 * @constant {color}
 */
SILVER = 0xFFC0C0C0;

/**
 * @summary
 * Alias for `color(128)`.
 *
 * @private
 * 
 * @description
 * Processing uses the `GRAY` constant for the `filter` function.
 * 
 * @constant {color}
 */
GREY = 0xFF808080;

/**
 * Alias for `color(0)`.
 *
 * @private
 * 
 * @constant {color}
 */
BLACK = 0xFF000000;

/**
 * @summary
 * Alias for `color(255, 0, 0)`.
 *
 * @description
 * Essentials includes the
 * [CSS color names]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
 * in the [Screaming Snake Case]{@link https://en.wikipedia.org/wiki/Snake_case}
 * convention (`COLOR_NAME`).
 * 
 * See the
 * [Colors]{@link https://bhavjitchauhan.github.io/Essentials/tutorial-Colors}
 * tutorial.
 *
 * @constant {color}
 * 
 * @category Core
 *
 * @example
 * fill(RED);
 * text('Hello World', 25, 25);
 *
 * @example
 * const col = color(RED, 50);
 * fill(col);
 * square(25, 25, 25);
 */
RED = 0xFFFF0000;

/**
 * Alias for `color(128, 0, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
MAROON = 0xFF800000;

/**
 * Alias for `color(255, 165, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
ORANGE = 0xFFFFA500;

/**
 * Alias for `color(255, 255, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
YELLOW = 0xFFFFFF00;

/**
 * Alias for `color(128, 128, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
OLIVE = 0xFF808000;

/**
 * Alias for `color(0, 255, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
LIME = 0xFF00FF00;

/**
 * @summary
 * Alias for `color(0, 128, 0)`.
 *
 * @description
 * Essentials includes the
 * [CSS color names]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
 * in the [Screaming Snake Case]{@link https://en.wikipedia.org/wiki/Snake_case}
 * convention (`COLOR_NAME`).
 * 
 * See the
 * [Colors]{@link https://bhavjitchauhan.github.io/Essentials/tutorial-Colors}
 * tutorial.
 *
 * @constant {color}
 * 
 * @category Core
 *
 * @example
 * fill(GREEN);
 * text('Hello World', 25, 25);
 *
 * @example
 * const col = color(GREEN, 50);
 * fill(col);
 * square(25, 25, 25);
 */
GREEN = 0xFF008000;

/**
 * Alias for `color(0, 255, 255)`.
 *
 * @private
 * 
 * @constant {color}
 */
AQUA = 0xFF00FFFF;

/**
 * Alias for `color(0, 128, 128)`.
 *
 * @private
 * 
 * @constant {color}
 */
TEAL = 0xFF008080;

/**
 * @summary
 * Alias for `color(0, 0, 255)`.
 *
 * @description
 * Essentials includes the
 * [CSS color names]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
 * in the [Screaming Snake Case]{@link https://en.wikipedia.org/wiki/Snake_case}
 * convention (`COLOR_NAME`).
 * 
 * See the
 * [Colors]{@link https://bhavjitchauhan.github.io/Essentials/tutorial-Colors}
 * tutorial.
 *
 * @constant {color}
 * 
 * @category Core
 *
 * @example
 * fill(BLUE);
 * text('Hello World', 25, 25);
 *
 * @example
 * const col = color(BLUE, 50);
 * fill(col);
 * square(25, 25, 25);
 */
BLUE = 0xFF0000FF;

/**
 * Alias for `color(0, 0, 128)`.
 *
 * @private
 * 
 * @constant {color}
 */
NAVY = 0xFF000080;

/**
 * Alias for `color(255, 0, 255)`.
 *
 * @private
 * 
 * @constant {color}
 */
FUCHSIA = 0xFFFF00FF;

/**
 * Alias for `color(128, 0, 128)`.
 *
 * @private
 * 
 * @constant {color}
 */
PURPLE = 0xFF800080;

/**
 * Alias for `color(255, 0)`.
 *
 * @private
 * 
 * @constant {color}
 */
 TRANSPARENT = 0x00FFFFFF;

/** 
 * Hashes typed array using the xxHash hash algorithm.
 * 
 * @link https://github.com/Jason3S/xxhash
 * 
 * @private
 * 
 * @param {Array} buffer byte array
 * @param {number} [seed=0] 32-bit unsigned
 * 
 * @returns {string}
 */
_hash = (buffer, seed = 0) => {
    const PRIME_1 = 2654435761,
        PRIME_2 = 2246822519,
        PRIME_3 = 3266489917,
        PRIME_4 = 668265263,
        PRIME_5 = 374761393;
    const b = buffer;
    let acc = (seed + PRIME_5) & 0xFFFFFFFF;
    let offset = 0;

    if (b.length >= 16) {
        const accN = [
            (seed + PRIME_1 + PRIME_2) & 0xFFFFFFFF,
            (seed + PRIME_2) & 0xFFFFFFFF,
            (seed + 0) & 0xFFFFFFFF,
            (seed - PRIME_1) & 0xFFFFFFFF,
        ];
        const b = buffer;
        const limit = b.length - 16;
        let lane = 0;
        for (offset = 0; (offset & 0xFFFFFFF0) <= limit; offset += 4) {
            const i = offset;
            const laneN0 = b[i + 0] + (b[i + 1] << 8);
            const laneN1 = b[i + 2] + (b[i + 3] << 8);
            const laneNP = laneN0 * PRIME_2 + ((laneN1 * PRIME_2) << 16);
            let acc = (accN[lane] + laneNP) & 0xFFFFFFFF;
            acc = (acc << 13) | (acc >>> 19);
            const acc0 = acc & 0xFFFF;
            const acc1 = acc >>> 16;
            accN[lane] = (acc0 * PRIME_1 + ((acc1 * PRIME_1) << 16)) & 0xFFFFFFFF;
            lane = (lane + 1) & 0x3;
        }
        acc =
            (((accN[0] << 1) | (accN[0] >>> 31)) +
                ((accN[1] << 7) | (accN[1] >>> 25)) +
                ((accN[2] << 12) | (accN[2] >>> 20)) +
                ((accN[3] << 18) | (accN[3] >>> 14))) &
            0xFFFFFFFF;
    }
    acc = (acc + buffer.length) & 0xFFFFFFFF;
    const limit = buffer.length - 4;
    for (; offset <= limit; offset += 4) {
        const i = offset;
        const laneN0 = b[i + 0] + (b[i + 1] << 8);
        const laneN1 = b[i + 2] + (b[i + 3] << 8);
        const laneP = laneN0 * PRIME_3 + ((laneN1 * PRIME_3) << 16);
        acc = (acc + laneP) & 0xFFFFFFFF;
        acc = (acc << 17) | (acc >>> 15);
        acc = ((acc & 0xFFFF) * PRIME_4 + (((acc >>> 16) * PRIME_4) << 16)) & 0xFFFFFFFF;
    }
    for (; offset < b.length; ++offset) {
        const lane = b[offset];
        acc = acc + lane * PRIME_5;
        acc = (acc << 11) | (acc >>> 21);
        acc = ((acc & 0xFFFF) * PRIME_1 + (((acc >>> 16) * PRIME_1) << 16)) & 0xFFFFFFFF;
    }
    acc = acc ^ (acc >>> 15);
    acc = (((acc & 0xFFFF) * PRIME_2) & 0xFFFFFFFF) + (((acc >>> 16) * PRIME_2) << 16);
    acc = acc ^ (acc >>> 13);
    acc = (((acc & 0xFFFF) * PRIME_3) & 0xFFFFFFFF) + (((acc >>> 16) * PRIME_3) << 16);
    return (acc < 0 ? acc + 4294967296 : acc).toString(16);
};

/**
 * Gets point on rectangle edge at specified angle.
 * 
 * @private
 * 
 * @param {number} width
 * @param {number} height
 * @param {number} angle radians
 * 
 * @returns {Object} obj
 * @returns {number} obj.x
 * @returns {number} obj.y 
 */
_pointOnRect = (width, height, angle) => {
    angle = -angle;
    while (angle < -Math.PI) {
        angle += p.TAU;
    }
    while (angle > Math.PI) {
        angle -= p.TAU;
    }
    const rectAtan = Math.atan2(height, width);
    const tanTheta = Math.tan(angle);
    let region;
    if ((angle > -rectAtan) && (angle <= rectAtan)) {
        region = 1;
    } else if ((angle > rectAtan) && (angle <= (Math.PI - rectAtan))) {
        region = 2;
    } else if ((angle > (Math.PI - rectAtan)) || (angle <= -(Math.PI - rectAtan))) {
        region = 3;
    } else {
        region = 4;
    }

    const result = {
        x: width / 2,
        y: height / 2
    };

    let dx = 1;
    let dy = 1;
    switch (region) {
        case 1: dy = -1; break;
        case 2: dy = -1; break;
        case 3: dx = -1; break;
        case 4: dx = -1; break;
    }
    if (region == 1 || region == 3) {
        result.x += dx * (width / 2);
        result.y += dy * (width / 2) * tanTheta;
    } else {
        result.x += dx * (height / (2 * tanTheta));
        result.y += dy * (height / 2);
    }

    return result;
};

/**
 * Alias for `_clearLogs()`.
 * 
 * @category Core
 *
 * @example
 * println('Hello World');
 * clearLogs();
 * // expected outcome: blank canvas console
 */
clearLogs = () => p._clearLogs();

/**
 * Literally does nothing. Useful as the default for optional callback arguments.
 * 
 * @category Core
 *
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = function () { };

/**
 * Alias for `drawGraphics`.
 * 
 * @category Core
 */
showGraphics = () => drawGraphics();

/**
 * Attempts to invoke a function with the provided arguments, returning either
 * the result or an error.
 *
 * @link https://www.30secondsofcode.org/js/s/attempt
 * 
 * @category Core
 *
 * @param {} fn Function to attempt.
 * @param {...*} args Functions arguments.
 */
attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (err) {
        return err instanceof Error ? err : new Error(err);
    }
};

/**
 * Calls multiple functions asynchronously.
 *
 * @link https://www.30secondsofcode.org/js/s/chain-async
 * 
 * @category Core
 *
 * @param {Array}  fns  Array containing functions to call
 *
 * @example
 * chainAsync([
 *     function(next) {
 *         $.getScript('. . .', next);
 *     },
 *     function(next) {
 *         $.getScript('. . .', next);
 *     },
 *     main
 * ]);
 */
chainAsync = fns => {
    let i = 0;
    const last = _.last(fns);
    const next = () => {
        const fn = fns[i++];
        fn === last ? fn() : fn(next);
    };
    next();
};

/**
 * @summary
 * Removes Khan Academy's loop protection code from functions.
 *
 * @description
 * Khan Academy adds a few lines of code to every function created to prevent
 * the webpage from freezing. This can be a hinderance when running more
 * resource-intensive code.
 *
 * @link https://khanacademy.org/cs/-/5594326276014080
 * 
 * @category Core
 *
 * @param {Function} fn Function to be cleaned
 *
 * @returns {Function} Cleaned function.
 *
 * @example
 * const drawEllipses = function() {
 *     for (let i = 0; i < 1e4; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * };
 * // possible error: 'A for loop is taking too long to run.'
 *
 * @example
 * const drawEllipses = clean(function() {
 *     for (let i = 0; i < 1e4; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * });
 */
clean = fn => {
    const string = fn.toString()
        .replace(/__env__\.KAInfiniteLoopCount\+\+;/g, '')
        .replace(/if \(__env__\.KAInfiniteLoopCount > 1000\) {[\s]+__env__\.KAInfiniteLoopProtect\('[^']*'\);[^}]+}/g, '')
        .replace(/__env__\.PJSOutput\.applyInstance\((__env__\.\S+), '\S+'\)/g,
            'new $1');
    return Object.constructor(`return (function(__env__) {return ${string};});`)()(p);
};

/**
 * Returns a function that is the
 * [negation]{@link https://en.wikipedia.org/wiki/Negation} of the given
 * function
 *
 * @link https://www.30secondsofcode.org/js/s/complement
 * 
 * @category Core
 *
 * @param {Function} fn Given function
 *
 * @returns {Function} Complement function
 *
 * @example
 * const isEven = function(num) {
 *     return num % 2 === 0;
 * };
 * const isOdd = complement(isEven);
 */
complement = fn => (...args) => !fn(...args);

/**
 * Evaluate Processing.js code represented as a string.
 * 
 * @category Core
 * 
 * @param {string} str
 * 
 * @returns {*}
 */
evalPJS = str => _eval(`with (p) ${str}`);

/**
 * Draws image of graphics created with `createGraphics`.
 * 
 * @category Core
 *
 * @param {number} x x-coordinate of image
 * @param {number} y y-coordinate of image
 * @param {number} width width of image
 * @param {number} height height of image
 * @param {Function} fn draw code
 * @param {P2D|P3D} [renderer=P2D]
 *
 * @example
 * drawGraphics(100, 100, 100, 100, function() {
 *     this.background(BLACK);
 *     this.fill(RED);
 *     this.rect(25, 25, 50, 50);
 * });
 * // expected outcome: red square embedded in black square
 */
drawGraphics = (x, y, width, height, fn, renderer = p.P2D) => {
    const g = p.createGraphics(width, height, renderer);
    fn.call(g);
    p.image(g, x, y);
};

/**
 * Generates an ID.
 * 
 * @category Core
 * 
 * @param {number} [length=8]
 *
 * @returns {string}
 * 
 * @see {@link generateUUID}
 */
generateID = (length = 8) => {
    const odd = length % 2 != 0;
    const arr = _eval(`new Uint8Array(Math.ceil(${length} / 2))`);
    crypto.getRandomValues(arr);
    const id = Array.from(arr, i => i.toString(16).padStart(2, '0')).join('');
    return odd ? id.slice(0, -1) : id;
};

/**
 * Generates a
 * [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}.
 * 
 * @category Core
 *
 * @returns {string}
 * 
 * @see {@link generateID}
 */
generateUUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
            c ^
            (crypto.getRandomValues(_eval('new Uint8Array(1)'))[0] & (15 >> (c / 4)))
        ).toString(16)
    );

/**
 * Returns a string of the form `HH:MM:SS`.
 *
 * @link https://www.30secondsofcode.org/js/s/get-colon-time-from-date
 * 
 * @category Core
 *
 * @returns {string} Formatted time
 *
 * @example
 * println(getColorTime());
 * // expected outcome: Time in the form of `HH:MM:SS`
 */
getColonTime = function () {
    return (new Date()).toTimeString().slice(0, 8);
};

/**
 * Efficiently inherits properties from the parent class to the child class.
 * 
 * @category Core
 *
 * @param {Function} subClass Class to be inherited to
 * @param {Function} superClass Class to inherit from
 *
 * @example
 * const Element = function(x, y, w, h) {
 *     this.x = x;
 *     this.y = y;
 *     this.w = w;
 *     this.h = h;
 * };
 * Element.prototype.draw = function() {
 *     rect(this.x, this.y, this.w, this.h);
 * };
 * const Button = function(x, y, w, h) {
 *     Element.call(this, x, y, w, h);
 * };
 * inherit(Button, Element);
 *
 * const b = new Button(100, 100, 150, 50);
 * b.draw();
 * // expected outcome: rectangle with arguments (100, 100, 150, 50)
 */
inherit = (subClass, superClass) => {
    Object.setPrototypeOf(subClass.prototype, superClass.prototype);
    subClass.prototype.constructor = subClass;
    if (superClass.prototype.constructor === Object)
        superClass.prototype.constructor = superClass;
};

/**
 * Checks if function is empty. Does not work for
 * [arrow function expressions]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions}.
 * 
 * @category Core
 * 
 * @param {Function} fn
 * 
 * @returns {boolean}
 * 
 * @example
 * const fn = function () {};
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @example
 * function fn() {};
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @example
 * const fn = noop;
 * println(isEmptyFunction(fn));
 * // expected output: true
 * 
 * @see {@link noop}
 */
isEmptyFunction = fn => {
    return _.isFunction(fn) &&
        /^function[^{]*[{]\s*[}]\s*$/.test(
            Function.prototype.toString.call(fn));
};

/**
 * Checks if object is a Khan Academy font object.
 * 
 * @category Core
 * 
 * @param {Object} obj
 * 
 * @returns {boolean}
 * 
 * @example
 * const arial = createFont('Arial');
 * println(isFont(arial));
 * // expected output: true 
 * 
 * @example
 * const monospace = font('monospace');
 * println(isFont(monospace));
 * // expected output: true
 * 
 * @see {@link font}
 */
isFont = obj => obj instanceof p.PFont;

/**
 * Checks if object is a Khan Academy image object.
 * 
 * @category Core
 *
 * @param {Object} obj
 * 
 * @returns {boolean}
 *
 * @example
 * const i = getImage("avatars/leaf-green");
 * println(isImage(i));
 * // expected output: true
 */
isImage = obj => obj instanceof p.PImage;

/**
 * Checks if object is a Khan Academy sound object.
 * 
 * @category Core
 *
 * @param {Object} obj
 * 
 * @returns {boolean}
 *
 * @example
 * const s = getSound("retro/boom1");
 * println(isSound(s));
 * // expected output: true
 */
isSound = obj => obj.audio instanceof Audio;

/**
 * @summary
 * Calculates fastest function in terms of iterations.
 *
 * @description
 * The functions will be called _n_ number of times. Their times will be how
 * long they took to run _n_ number of times. The more iterations, the more
 * accurate the result.
 *
 * Running resource-intensive function may result in an infinite loop error.
 * This can be can bypassed using the {@link clean} function.
 *
 * @link https://www.30secondsofcode.org/js/s/most-performant
 * 
 * @category Core
 *
 * @param {Array} fns Functions to be compared
 * @param {number} [iterations=1e4] Number of times function should be called
 * @param {boolean} [timings=false] Return array of timings
 *
 * @returns {number|Array} Index of fastest function or array of timings
 *
 * @example
 * const testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * const result = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[result] + ' performed faster.');
 * // possible output: 'console.log performed faster.'
 * 
 * @example
 * const testees = {
 *     'ellipse': function() {
 *         ellipse(100, 100, 100, 100);
 *     },
 *     'rect': function() {
 *         rect(100, 100, 100, 100);
 *     }
 * }
 * const results = mostPerformant(Object.values(testees), 1e3, true)
 * results.forEach(function(result, i) {
 *     printf('%: %ms', Object.keys(testees)[i].padEnd(8), result)
 * });
 * // example output: `
 * // ellipse : 3.0350000597536564ms
 * // rect    : 3.325000172480941ms
 * // `
 */
mostPerformant = (fns, iterations = 1e4, timings = false) => {
    const times = fns.map(fn => {
        const startTime = performance.now();
        for (let i = 0; i < iterations; i++) fn();
        return performance.now() - startTime;
    });
    if (timings) return times;
    return times.indexOf(Math.min(...times));
};

/**
 * Restores Processing and Canvas state.
 * 
 * @category Core
 *
 * @example
 * push();
 * stroke(WHITE);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 *
 * @see {@link push}
 */
pop = () => {
    p.popStyle();
    ctx.restore();
};

/**
 * Prints formatted string to canvas console.
 * 
 * @category Core
 *
 * @param {string} str String with format
 * @param {...*} args Arguments
 *
 * @example
 * printf('Hello %', 'World');
 * // expected output: 'Hello World'
 *
 * @example
 * // To use the literal '%' character use double backslashes (\\)
 * printf('%\\% complete', 50);
 * // expected output: '50% complete'
 */
printf = function(str, ...args) {
    str = str.toString();
    for (const arg of args) {
        str = str.replace(/(?<!\\)%/, arg);
    }
    str = str.replaceAll(/\\%/g, '%');
    p.println(str);
};

/**
 * Generates a random integer in a given range.
 * 
 * @category Core
 *
 * @param {number} [min=0] Minimum value
 * @param {number} max Maximum value
 *
 * @returns {number} Generated integer
 *
 * @example
 * printf('Random integer between 1 and 5 (inclusive): %', randomInt(1, 5));
 *
 * @example
 * printf('Random integer between 0 and 5 (inclusive): %', randomInt(5));
 */
randomInt = (min, max) => _.random(min, max);

/**
 * Saves Processing and Canvas state.
 * 
 * @category Core
 *
 * @example
 * push();
 * stroke(WHITE);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 *
 * @see {@link pop}
 */
push = () => {
    p.pushStyle();
    ctx.save();
};

/**
 * @summary
 * Cleanly restarts the program.
 * 
 * @description
 * Calls functions that interact with the Canvas if the appropriate Essentials
 * component is present.
 * 
 * @category Core
 * 
 * @todo Add other functions that alter the Canvas
 */
restart = () => {
    if (typeof COLOR_ESSENTIALS != 'undefined') {
        noShadow();
        shadowBlur(0);
        shadowOffset(0, 0);
    }
    if (typeof SHAPE_ESSENTIALS != 'undefined') {
        noStrokeDash();
        strokeDashOffset(0);
    }
    if (typeof EXTERNAL_ESSENTIALS != 'undefined') {
        clearElements();
        closeLog();
        exitPointerLock();
        forceAllowScroll();
    }
    p.colorMode(p.RGB, 255);
    p.draw = noop;
    p.Program.restart();
};

/**
 * Round number to nearest value.
 * 
 * @category Core
 * 
 * @param {number} n
 * @param {number} precision
 * 
 * @example
 * const n = 123456789;
 * console.log(roundTo(n, 1e3));
 * // expected output: 123457000
 * 
 * @example
 * console.log(roundTo(Math.E, 1e-3));
 * // expected output: 2.718
 * 
 * @example
 * const megabytes = 2000;
 * printf('~% MB', roundTo(megabytes, 1024));
 * // expected output: '~2048 MB'
 */
roundTo = (n, precision) => {
    if (!precision) return n;
    return Math.round(n / precision) * precision;
};

/**
 * Measures the time it takes for a function to execute and logs to browser
 * console.
 *
 * @link https://www.30secondsofcode.org/js/s/time-taken
 * 
 * @category Core
 *
 * @param {Function} callback Function to be measured
 * @param {string} [id] Custom ID for multiple consecutive tests
 *
 * @example
 * timeTaken(function() {
 *     for(let i = 0; i < 1e3; i++) { println(i); }
 * });
 * // possible output: 'timeTaken#default: 1000.000000000000 ms'
 *
 * @example
 * timeTaken(function() {
 *     for(let i = 0; i < 1e3; i++) { println(i); }
 * }, '1000');
 * // possible output: 'timeTaken#1000: 1000.000000000000 ms'
 * timeTaken(function() {
 *     for(let i = 0; i < 1e2; i++) { println(i); }
 * }, '100');
 * // possible output: 'timeTaken#100: 100.000000000000 ms'
 *
 */
timeTaken = (callback, id = 'default') => {
    console.time(`timeTaken#${id}`);
    const r = callback();
    console.timeEnd(`timeTaken#${id}`);
    return r;
};

_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Color Essentials depends on the Essentials Core.');
} else {
    COLOR_ESSENTIALS = true;
    if (!_silent_ && !_color_initialized_) console.info(
        '%cColor Essentials',
        _console_style_
    );
}

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
BRIGHTNESS = 'brightness';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
LUMINANCE = 'brightness';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
CONTRAST = 'contrast';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
DROP_SHADOW = 'drop-shadow';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
GRAYSCALE = p.GRAY;

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
HUE_ROTATE = 'hue-rotate';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
OPACITY = 'opacity';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
SATURATE = 'saturate';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
SEPIA = 'sepia';

/**
 * Default RGBA color range.
 * 
 * @constant {Array.<number>}
 * 
 * @category Color
 */
RGB_COLOR_RANGE = [255, 255, 255, 255];

/**
 * Default HSBA color range.
 * 
 * @constant {Array.<number>}
 * 
 * @category Color
 */
HSB_COLOR_RANGE = [360, 100, 100, 100];

// Pinks {
/**
 * Alias for `color(199, 21, 133)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_VIOLET_RED = 0xFFC71585;

/**
 * Alias for `color(255, 20, 147)`.
 *
 * @private
 *
 * @constant {color}
 */
DEEP_PINK = 0xFFFF1493;

/**
 * Alias for `color(219, 112, 147)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_VIOLET_RED = 0xFFDB7093;

/**
 * Alias for `color(255, 105, 180)`.
 *
 * @private
 *
 * @constant {color}
 */
HOT_PINK = 0xFFFF69B4;

/**
 * Alias for `color(255, 182, 193)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_PINK = 0xFFFFB6C1;

/**
 * Alias for `color(255, 192, 203)`.
 *
 * @private
 *
 * @constant {color}
 */
PINK = 0xFFFFC0CB;
// }

// Reds {
/**
 * Alias for `color(139, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_RED = 0xFF8B0000;

/**
 * Alias for `color(255, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
RED = 0xFFFF0000;

/**
 * Alias for `color(178, 34, 34)`.
 *
 * @private
 *
 * @constant {color}
 */
FIRE_BRICK = 0xFFB22222;

/**
 * Alias for `color(220, 20, 60)`.
 *
 * @private
 *
 * @constant {color}
 */
CRIMSON = 0xFFDC143C;

/**
 * Alias for `color(205, 92, 92)`.
 *
 * @private
 *
 * @constant {color}
 */
INDIAN_RED = 0xFFCD5C5C;

/**
 * Alias for `color(240, 128, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_CORAL = 0xFFF08080;

/**
 * Alias for `color(250, 128, 114)`.
 *
 * @private
 *
 * @constant {color}
 */
SALMON = 0xFFFA8072;

/**
 * Alias for `color(233, 150, 122)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SALMON = 0xFFE9967A;

/**
 * Alias for `color(255, 160, 122)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SALMON = 0xFFFFA07A;
// }

// Oranges {
/**
 * Alias for `color(255, 69, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
ORANGE_RED = 0xFFFF4500;

/**
 * Alias for `color(255, 99, 71)`.
 *
 * @private
 *
 * @constant {color}
 */
TOMATO = 0xFFFF6347;

/**
 * Alias for `color(255, 140, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_ORANGE = 0xFFFF8C00;

/**
 * Alias for `color(255, 127, 80)`.
 *
 * @private
 *
 * @constant {color}
 */
CORAL = 0xFFFF7F50;

/**
 * Alias for `color(255, 165, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
ORANGE = 0xFFFFA500;
// }

// Yellows {
/**
 * Alias for `color(189, 183, 107)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_KHAKI = 0xFFBDB76B;

/**
 * Alias for `color(255, 215, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
GOLD = 0xFFFFD700;

/**
 * Alias for `color(240, 230, 140)`.
 *
 * @private
 *
 * @constant {color}
 */
KHAKI = 0xFFF0E68C;

/**
 * Alias for `color(255, 218, 185)`.
 *
 * @private
 *
 * @constant {color}
 */
PEACH_PUFF = 0xFFFFDAB9;

/**
 * Alias for `color(255, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
YELLOW = 0xFFFFFF00;

/**
 * Alias for `color(238, 232, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_GOLDENROD = 0xFFEEE8AA;

/**
 * Alias for `color(255, 228, 181)`.
 *
 * @private
 *
 * @constant {color}
 */
MOCCASIN = 0xFFFFE4B5;

/**
 * Alias for `color(255, 239, 213)`.
 *
 * @private
 *
 * @constant {color}
 */
PAPAYA_WHIP = 0xFFFFEFD5;

/**
 * Alias for `color(250, 250, 210)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GOLDENROD_YELLOW = 0xFFFAFAD2;

/**
 * Alias for `color(255, 250, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
LEMON_CHIFFON = 0xFFFFFACD;

/**
 * Alias for `color(255, 255, 224)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_YELLOW = 0xFFFFFFE0;
// }

// Browns {
/**
 * Alias for `color(128, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
MAROON = 0xFF800000;

/**
 * Alias for `color(165, 42, 42)`.
 *
 * @private
 *
 * @constant {color}
 */
BROWN = 0xFFA52A2A;

/**
 * Alias for `color(139, 69, 19)`.
 *
 * @private
 *
 * @constant {color}
 */
SADDLE_BROWN = 0xFF8B4513;

/**
 * Alias for `color(160, 82, 45)`.
 *
 * @private
 *
 * @constant {color}
 */
SIENNA = 0xFFA0522D;

/**
 * Alias for `color(210, 105, 30)`.
 *
 * @private
 *
 * @constant {color}
 */
CHOCOLATE = 0xFFD2691E;

/**
 * Alias for `color(184, 134, 11)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GOLDENROD = 0xFFB8860B;

/**
 * Alias for `color(205, 133, 63)`.
 *
 * @private
 *
 * @constant {color}
 */
PERU = 0xFFCD853F;

/**
 * Alias for `color(188, 143, 143)`.
 *
 * @private
 *
 * @constant {color}
 */
ROSY_BROWN = 0xFFBC8F8F;

/**
 * Alias for `color(218, 165, 32)`.
 *
 * @private
 *
 * @constant {color}
 */
GOLDENROD = 0xFFDAA520;

/**
 * Alias for `color(244, 164, 96)`.
 *
 * @private
 *
 * @constant {color}
 */
SANDY_BROWN = 0xFFF4A460;

/**
 * Alias for `color(210, 180, 140)`.
 *
 * @private
 *
 * @constant {color}
 */
TAN = 0xFFD2B48C;

/**
 * Alias for `color(222, 184, 135)`.
 *
 * @private
 *
 * @constant {color}
 */
BURLY_WOOD = 0xFFDEB887;

/**
 * Alias for `color(245, 222, 179)`.
 *
 * @private
 *
 * @constant {color}
 */
WHEAT = 0xFFF5DEB3;

/**
 * Alias for `color(255, 222, 173)`.
 *
 * @private
 *
 * @constant {color}
 */
NAVAJO_WHITE = 0xFFFFDEAD;

/**
 * Alias for `color(255, 228, 196)`.
 *
 * @private
 *
 * @constant {color}
 */
BISQUE = 0xFFFFE4C4;

/**
 * Alias for `color(255, 235, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
BLANCHED_ALMOND = 0xFFFFEBCD;

/**
 * Alias for `color(255, 248, 220)`.
 *
 * @private
 *
 * @constant {color}
 */
CORNSILK = 0xFFFFF8DC;
// }

// Greens {
/**
 * Alias for `color(0, 100, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GREEN = 0xFF006400;

/**
 * Alias for `color(0, 128, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
GREEN = 0xFF008000;

/**
 * Alias for `color(85, 107, 47)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_OLIVE_GREEN = 0xFF556B2F;

/**
 * Alias for `color(34, 139, 34)`.
 *
 * @private
 *
 * @constant {color}
 */
FOREST_GREEN = 0xFF228B22;

/**
 * Alias for `color(46, 139, 87)`.
 *
 * @private
 *
 * @constant {color}
 */
SEA_GREEN = 0xFF2E8B57;

/**
 * Alias for `color(128, 128, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
OLIVE = 0xFF808000;

/**
 * Alias for `color(107, 142, 35)`.
 *
 * @private
 *
 * @constant {color}
 */
OLIVE_DRAB = 0xFF6B8E23;

/**
 * Alias for `color(60, 179, 113)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SEA_GREEN = 0xFF3CB371;

/**
 * Alias for `color(50, 205, 50)`.
 *
 * @private
 *
 * @constant {color}
 */
LIME_GREEN = 0xFF32CD32;

/**
 * Alias for `color(0, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
LIME = 0xFF00FF00;

/**
 * Alias for `color(0, 255, 127)`.
 *
 * @private
 *
 * @constant {color}
 */
SPRING_GREEN = 0xFF00FF7F;

/**
 * Alias for `color(0, 250, 154)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SPRING_GREEN = 0xFF00FA9A;

/**
 * Alias for `color(143, 188, 143)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SEA_GREEN = 0xFF8FBC8F;

/**
 * Alias for `color(102, 205, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_AQUAMARINE = 0xFF66CDAA;

/**
 * Alias for `color(154, 205, 50)`.
 *
 * @private
 *
 * @constant {color}
 */
YELLOW_GREEN = 0xFF9ACD32;

/**
 * Alias for `color(124, 252, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
LAWN_GREEN = 0xFF7CFC00;

/**
 * Alias for `color(127, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
CHARTREUSE = 0xFF7FFF00;

/**
 * Alias for `color(144, 238, 144)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GREEN = 0xFF90EE90;

/**
 * Alias for `color(173, 255, 47)`.
 *
 * @private
 *
 * @constant {color}
 */
GREEN_YELLOW = 0xFFADFF2F;

/**
 * Alias for `color(152, 251, 152)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_GREEN = 0xFF98FB98;
// }

// Cyans {
/**
 * Alias for `color(0, 128, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
TEAL = 0xFF008080;

/**
 * Alias for `color(0, 139, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_CYAN = 0xFF008B8B;

/**
 * Alias for `color(32, 178, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SEA_GREEN = 0xFF20B2AA;

/**
 * Alias for `color(95, 158, 160)`.
 *
 * @private
 *
 * @constant {color}
 */
CADET_BLUE = 0xFF5F9EA0;

/**
 * Alias for `color(0, 206, 209)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_TURQUOISE = 0xFF00CED1;

/**
 * Alias for `color(72, 209, 204)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_TURQUOISE = 0xFF48D1CC;

/**
 * Alias for `color(64, 224, 208)`.
 *
 * @private
 *
 * @constant {color}
 */
TURQUOISE = 0xFF40E0D0;

/**
 * Alias for `color(0, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
AQUA = 0xFF00FFFF;

/**
 * Alias for `color(0, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
CYAN = 0xFF00FFFF;

/**
 * Alias for `color(127, 255, 212)`.
 *
 * @private
 *
 * @constant {color}
 */
AQUAMARINE = 0xFF7FFFD4;

/**
 * Alias for `color(175, 238, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_TURQUOISE = 0xFFAFEEEE;

/**
 * Alias for `color(224, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_CYAN = 0xFFE0FFFF;
// }

// Blues {
/**
 * Alias for `color(0, 0, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
NAVY = 0xFF000080;

/**
 * Alias for `color(0, 0, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_BLUE = 0xFF00008B;

/**
 * Alias for `color(0, 0, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_BLUE = 0xFF0000CD;

/**
 * Alias for `color(0, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
BLUE = 0xFF0000FF;

/**
 * Alias for `color(25, 25, 112)`.
 *
 * @private
 *
 * @constant {color}
 */
MIDNIGHT_BLUE = 0xFF191970;

/**
 * Alias for `color(65, 105, 225)`.
 *
 * @private
 *
 * @constant {color}
 */
ROYAL_BLUE = 0xFF4169E1;

/**
 * Alias for `color(70, 130, 180)`.
 *
 * @private
 *
 * @constant {color}
 */
STEEL_BLUE = 0xFF4682B4;

/**
 * Alias for `color(30, 144, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
DODGER_BLUE = 0xFF1E90FF;

/**
 * Alias for `color(0, 191, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
DEEP_SKY_BLUE = 0xFF00BFFF;

/**
 * Alias for `color(100, 149, 237)`.
 *
 * @private
 *
 * @constant {color}
 */
CORNFLOWER_BLUE = 0xFF6495ED;

/**
 * Alias for `color(135, 206, 235)`.
 *
 * @private
 *
 * @constant {color}
 */
SKY_BLUE = 0xFF87CEEB;

/**
 * Alias for `color(135, 206, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SKY_BLUE = 0xFF87CEFA;

/**
 * Alias for `color(176, 196, 222)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_STEEL_BLUE = 0xFFB0C4DE;

/**
 * Alias for `color(173, 216, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_BLUE = 0xFFADD8E6;

/**
 * Alias for `color(176, 224, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
POWDER_BLUE = 0xFFB0E0E6;
// }

// Purples {
/**
 * Alias for `color(75, 0, 130)`.
 *
 * @private
 *
 * @constant {color}
 */
INDIGO = 0xFF4B0082;

/**
 * Alias for `color(128, 0, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
PURPLE = 0xFF800080;

/**
 * Alias for `color(139, 0, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_MAGENTA = 0xFF8B008B;

/**
 * Alias for `color(148, 0, 211)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_VIOLET = 0xFF9400D3;

/**
 * Alias for `color(72, 61, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SLATE_BLUE = 0xFF483D8B;

/**
 * Alias for `color(138, 43, 226)`.
 *
 * @private
 *
 * @constant {color}
 */
BLUE_VIOLET = 0xFF8A2BE2;

/**
 * Alias for `color(153, 50, 204)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_ORCHID = 0xFF9932CC;

/**
 * Alias for `color(255, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
FUCHSIA = 0xFFFF00FF;

/**
 * Alias for `color(255, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
MAGENTA = 0xFFFF00FF;

/**
 * Alias for `color(106, 90, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
SLATE_BLUE = 0xFF6A5ACD;

/**
 * Alias for `color(123, 104, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SLATE_BLUE = 0xFF7B68EE;

/**
 * Alias for `color(186, 85, 211)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_ORCHID = 0xFFBA55D3;

/**
 * Alias for `color(147, 112, 219)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_PURPLE = 0xFF9370DB;

/**
 * Alias for `color(218, 112, 214)`.
 *
 * @private
 *
 * @constant {color}
 */
ORCHID = 0xFFDA70D6;

/**
 * Alias for `color(238, 130, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
VIOLET = 0xFFEE82EE;

/**
 * Alias for `color(221, 160, 221)`.
 *
 * @private
 *
 * @constant {color}
 */
PLUM = 0xFFDDA0DD;

/**
 * Alias for `color(216, 191, 216)`.
 *
 * @private
 *
 * @constant {color}
 */
THISTLE = 0xFFD8BFD8;

/**
 * Alias for `color(230, 230, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
LAVENDER = 0xFFE6E6FA;

/**
 * Alias for `color(102, 51, 153)`.
 *
 * @private
 *
 * @constant {color}
 */
REBECCA_PURPLE = 0xFF663399;
// }

// Whites {
/**
 * Alias for `color(255, 228, 225)`.
 *
 * @private
 *
 * @constant {color}
 */
MISTY_ROSE = 0xFFFFE4E1;

/**
 * Alias for `color(250, 235, 215)`.
 *
 * @private
 *
 * @constant {color}
 */
ANTIQUE_WHITE = 0xFFFAEBD7;

/**
 * Alias for `color(250, 240, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
LINEN = 0xFFFAF0E6;

/**
 * Alias for `color(245, 245, 220)`.
 *
 * @private
 *
 * @constant {color}
 */
BEIGE = 0xFFF5F5DC;

/**
 * Alias for `color(245)`.
 *
 * @private
 *
 * @constant {color}
 */
WHITE_SMOKE = 0xFFF5F5F5;

/**
 * Alias for `color(255, 240, 245)`.
 *
 * @private
 *
 * @constant {color}
 */
LAVENDER_BLUSH = 0xFFFFF0F5;

/**
 * Alias for `color(253, 245, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
OLD_LACE = 0xFFFDF5E6;

/**
 * Alias for `color(240, 248, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
ALICE_BLUE = 0xFFF0F8FF;

/**
 * Alias for `color(255, 245, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
SEASHELL = 0xFFFFF5EE;

/**
 * Alias for `color(248, 248, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
GHOST_WHITE = 0xFFF8F8FF;

/**
 * Alias for `color(240, 255, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
HONEYDEW = 0xFFF0FFF0;

/**
 * Alias for `color(255, 250, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
FLORAL_WHITE = 0xFFFFFAF0;

/**
 * Alias for `color(240, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
AZURE = 0xFFF0FFFF;

/**
 * Alias for `color(245, 255, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
MINT_CREAM = 0xFFF5FFFA;

/**
 * Alias for `color(255, 250, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
SNOW = 0xFFFFFAFA;

/**
 * Alias for `color(255, 255, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
IVORY = 0xFFFFFFF0;

/**
 * Alias for `color(255)`.
 *
 * @private
 *
 * @constant {color}
 */
WHITE = 0xFFFFFFFF;
// }

// Greys {
/**
 * Alias for `color(0)`.
 *
 * @private
 *
 * @constant {color}
 */
BLACK = 0xFF000000;

/**
 * Alias for `color(47, 79, 79)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SLATE_GRAY = DARK_SLATE_GREY = 0xFF2F4F4F;

/**
 * Alias for `color(105, 105, 105)`.
 *
 * @private
 *
 * @constant {color}
 */
DIM_GRAY = DIM_GREY = 0xFF696969;

/**
 * Alias for `color(112, 128, 144)`.
 *
 * @private
 *
 * @constant {color}
 */
SLATE_GRAY = SLATE_GREY = 0xFF708090;

/**
 * Alias for `color(128,)`.
 *
 * @private
 *
 * @constant {color}
 */
GREY = 0xFF808080;

/**
 * Alias for `color(119, 136, 153)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SLATE_GRAY = LIGHT_SLATE_GREY = 0xFF778899;

/**
 * Alias for `color(169)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GRAY = DARK_GREY = 0xFFA9A9A9;

/**
 * Alias for `color(192,)`.
 *
 * @private
 *
 * @constant {color}
 */
SILVER = 0xFFC0C0C0;

/**
 * Alias for `color(211)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GRAY = LIGHT_GREY = 0xFFD3D3D3;

/**
 * Alias for `color(220)`.
 *
 * @private
 *
 * @constant {color}
 */
GAINSBORO = 0xFFDCDCDC;

/**
 * Create color in given color mode.
 * 
 * @private
 * 
 * @param {Array|number} arr
 * @param {number} [colorMode=getColorMode()]
 * @param {number} [currentColorMode=colorMode]
 * 
 * @returns {number}
 */
_createColor = (arr, colorMode = getColorMode(), currentColorMode = colorMode) => {
    const oppositeColorMode = colorMode == p.RGB ? p.HSB : p.RGB;
    const isDifferentColorMode = currentColorMode == oppositeColorMode;
    let defaultAlpha = getAlphaRange();
    if (currentColorMode != colorMode) {
        if (colorMode == p.RGB) defaultAlpha = RGB_COLOR_RANGE[3];
        else defaultAlpha = HSB_COLOR_RANGE[3];
    }
    arr = _parseColorArray(arr, defaultAlpha);
    if (isDifferentColorMode) {
        p.pushStyle();
        presetColorMode(colorMode);
    }
    result = p.color.apply(null, arr);
    isDifferentColorMode && p.popStyle();
    return result;
};

/**
 * Appends Canvas filter.
 * 
 * @private
 * 
 * @param {string} filter
 */
_appendFilter = filter => {
    if (ctx.filter == 'none') return ctx.filter = filter;
    ctx.filter += filter;
};

/**
 * Parses color array.
 * 
 * @private
 * 
 * @param {Array} arr
 * @param {number} [defaultAlpha=getAlphaRange()]
 * @param {boolean} [range=false]
 */
_parseColorArray = (arr, defaultAlpha = getAlphaRange(), range = false) => {
    if (_.isNumber(arr)) arr = [arr];
    switch (arr.length) {
        case 1:
            arr = [arr[0], arr[0], arr[0], range ? arr[0] : defaultAlpha];
            break;
        case 2:
            arr = [arr[0], arr[0], arr[0], arr[1]];
            break;
        case 3:
            arr.push(defaultAlpha);
    }
    return arr;
};

/**
 * Clears all CSS effects from the canvas.
 * 
 * @category Color
 */
clearEffects = () => ctx.filter = 'none';

/**
 * Gets the color range for alpha.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 255, 255, 255, 1);
 * println(getAlphaRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getAlphaRange = () => p.alpha(WHITE);

/**
 * Gets the color range for blue.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getBlueRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getBlueRange = () => p.blue(WHITE);

/**
 * Gets the color range for brightness.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getBrightnessRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getBrightnessRange = () => getBlueRange();

/**
 * Gets the color range for green.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getGreenRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getGreenRange = () => p.green(WHITE);

/**
 * Gets the rounded color range for hue.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getHueRange());
 * // expected output: 360
 * 
 * @see {@link getColorRange}
 */
getHueRange = () => getRedRange();

/**
 * Gets the color range for red.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getRedRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getRedRange = () => p.red(WHITE);

/**
 * Gets the color range for saturation.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getSaturationRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getSaturationRange = () => getGreenRange();

/**
 * Gets current shadow color.
 * 
 * @category Color
 * 
 * @returns {color}
 */
getShadow = () => hexToRGB(ctx.shadowColor);

/**
 * Gets current shadow blur strength.
 * 
 * @category Color
 * 
 * @returns {number}
 */
getShadowBlur = () => ctx.shadowBlur;

/**
 * Checks if current color range is the default.
 * 
 * @category Color
 */
isDefaultColorRange = () => getColorRange() == RGB_COLOR_RANGE;

/**
 * Turns off shadow.
 * 
 * @category Color
 */
noShadow = () => shadow(TRANSPARENT);

/**
 * Gets current shadow offset.
 * 
 * @category Color
 * 
 * @returns {Array.<number>}
 */
getShadowOffset = () => [ctx.shadowOffsetX, ctx.shadowOffsetY];

/**
 * @summary
 * Draws an angular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * angularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: angular gradient from red to yellow
 *
 * @example
 * angularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: angular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * angularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: angular gradient from green to light blue in strips of thickness 25
 */
angularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    angle -= 90;
    // `atan` could be `asin`. See https://jsbench.me/mmklrhzgra/1 & https://www.khanacademy.org/cs/-/4713637410717696
    const dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    p.pushStyle();
    if (step == 1) {
        p.strokeWeight(1.5);
        for (let i = angle; i < angle + 359; i += dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, (i - angle) / 360));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        p.strokeWeight(1);
        for (let i = angle; i < angle + 359; i += dTheta) {
            const c = p.lerpColor(startColor, endColor, (i - angle) / 360);
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    p.popStyle();
};

/**
 * @summary
 * Draws an circular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * circularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: circular gradient from red to yellow
 *
 * @example
 * circularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: circular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * circularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: circular gradient from green to light blue in strips of thickness 25
 */
circularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    const dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    p.pushStyle();
    if (step == 1) {
        p.strokeWeight(1.5);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        p.strokeWeight(1);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            const c = p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
        // Temporary fix for missing triangle
        r1 = p.radians(angle - 180);
        r2 = p.radians(angle - 180 - dTheta);
        p.stroke(endColor);
        p.fill(endColor);
        p.triangle(x + width / 2, y + height / 2,
            p.map(Math.cos(r1), -1, 1, x, x + width),
            p.map(Math.sin(r1), -1, 1, y, y + height),
            p.map(Math.cos(r2), -1, 1, x, x + width),
            p.map(Math.sin(r2), -1, 1, y, y + height));
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            const c = p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    p.popStyle();
};

/**
 * Applies a Gaussian blur of the canvas image.
 * 
 * @category Color
 * 
 * @param {number} [radius=5]
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * blur();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a Gaussian blur of radius 5 pixels
 */
p.blur = (radius = 5) => {
    if (_.isNumber(radius)) radius = `${radius}px`;
    _appendFilter(`blur(${radius})`);
};

/**
 * Adjusts the contrast of the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * contrast(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150%
 */
contrast = amount => _appendFilter(`contrast(${amount}%)`);

/**
 * Applies a drop shadow to all objects.
 * 
 * @category Color
 * 
 * @param {number} x x offset
 * @param {number} [y=x] y offset
 * @param {number} [radius=5] blur radius
 * @param {color|string} [color=BLACK]
 * 
 * @example
 * push();
 * dropShadow(10);
 * printf('%', ctx.filter);
 * image(img, 20, 20, WIDTH - 40, HEIGHT - 40);
 * pop();
 * // expected outcome: a black drop shadow offset by 10 pixels
 */
dropShadow = (x, y = x, radius = 5, color = '#000') => {
    if (_.isNumber(color)) color = RGBToHex(color);
    _appendFilter(`drop-shadow(${x}px ${y}px ${radius}px ${color})`);
};

/**
 * @summary
 * Applies CSS effect on the canvas.
 * 
 * @description
 * The `effect` function is much more efficient than the Processing version.
 * Since Processing by default does not clear Canvas filters, wrap `effect`
 * calls in `push`/`pop`, or use the `clearEffects` function.
 * 
 * Unlike their Processing counterparts, effects are applied to everything
 * drawn _after_ the `effect` function is called.
 * 
 * To use CSS properties directly, see the MDN documentation on
 * [CanvasRenderingContext2D.filter]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter#browser_compatibility}.
 * 
 * @category Color
 * 
 * @param {string} filter Either `BLUR`, `BRIGHTNESS`, `LUMINANCE`, `CONTRAST`, `DROP_SHADOW`, `GRAY`, `GRAY_SCALE`, `HUE_ROTATE`, `INVERT`, `OPACITY`, `SATURATE` or `SEPIA`.
 * @param {...*} args
 */
effect = (filter, ...args) => {
    switch(filter) {
        case p.BLUR:
            return p.blur(...args);
        case BRIGHTNESS:
        case LUMINANCE:
            return luminance(...args);
        case CONTRAST:
            return contrast(...args);
        case DROP_SHADOW:
            return dropShadow(...args);
        case p.GRAY:
        case GRAYSCALE:
            return grayscale(...args);
        case HUE_ROTATE:
            return hueRotate(...args);
        case p.INVERT:
            return invert(...args);
        case OPACITY:
            return opacity(...args);
        case SATURATE:
            return saturate(...args);
        case SEPIA:
            return sepia(...args);
    }
    _appendFilter(filter);
};

/**
 * Faster blur on a rectangular selection.
 * 
 * @category Color
 *
 * @param {number} [strength=10]
 * @param {number} [x=0] x-coordinate of the rectangle
 * @param {number} [y=0] y-coordinate of the rectangle
 * @param {number} [width=WIDTH] width of the rectangle
 * @param {number} [height=width || HEIGHT] height of the rectangle
 */
fastBlur = (strength = 10, x = 0, y = 0, width = WIDTH, height = width || HEIGHT) => {
    if (x < 0) {
        width += x;
        x = 0;
    }
    if (y < 0) {
        height += y;
        y = 0;
    }
    strength = p.constrain(strength, 0, Math.min(width, height));
    p.image(p.get(x, y, width, height), x, y, width / strength, height / strength);
    p.image(p.get(x, y, width / strength, height / strength), x, y, width, height);
};

/**
 * Gets the color mode.
 * 
 * @category Color
 * 
 * @example
 * colorMode(RGB);
 * println(getColorMode() == RGB);
 * // expected output: true
 */
getColorMode = () => p.color(getRedRange(), 0, 0) == -0x10000 ? p.RGB : p.HSB;

/**
 * Gets current color range.
 * 
 * @category Color
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * console.log(getColorRange());
 * // expected output: [360, 100, 100, 100]
 */
getColorRange = () => [p.red, p.green, p.blue, p.alpha].map(fn => fn.call(null, WHITE));

/**
 * @summary
 * Gets current fill color.
 * 
 * @description
 * Processing will only update the current fill if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the fill value.
 * 
 * @category Color
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getFill = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.fillStyle);
};

/**
 * @summary
 * Gets current stroke color.
 * 
 * @description
 * Processing will only update the current stroke if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the stroke value.
 * 
 * @category Color
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getStroke = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.strokeStyle);
};

/**
 * Converts to canvas image to grayscale.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% grayscale
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% grayscale
 */
grayscale = (amount = 100) => _appendFilter(`grayscale(${amount}%)`);

/**
 * Converts hex to RGB color type.
 * 
 * @category Color
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 */
hexToHSB = (hex, color = true) => {
    if (color) return hexToRGB(hex);
    return RGBToHSB.apply(p, hexToRGB(hex, false));
};

/**
 * Converts hex to RGB color type.
 * 
 * @category Color
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 *
 * @example
 * const col = hexToRGB('#006FDE');
 * println(hex(col, 6));
 * // expected output: '006FDE'
 * 
 * @example
 * println(hexToRGB('#AAAA', false));
 * // expected output: [170, 170, 170, 170]
 * 
 * @example
 * const hex = '#F00';
 * colorMode(RGB, 1, 1, 1, 1);
 * println(hexToRGB(hex, false));
 * // expected output: [1, 0, 0, 1]
 */
hexToRGB = (hex, color = true) => {
    const currentColorMode = getColorMode();
    hex = hex.replace('#', '');
    switch (hex.length) {
        case 3:
        case 6:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => r + r + g + g + b + b);
            break;
        case 4:
        case 8:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b, a) => r + r + g + g + b + b + a + a);
            break;
    }
    let arr = hex
        .match(/.{2}/g)
        .map(x => parseInt(x, 16));
    if (arr.length == 3) arr.push(RGB_COLOR_RANGE[3]);
    if (!isDefaultColorRange() && currentColorMode == p.RGB) {
        arr = mapColorRange(arr);
    }
    let result = arr;
    if (color) result = _createColor(arr, p.RGB, currentColorMode);
    return result;
};

/**
 * Converts RGB(A) to CSS hexadecimal values.
 * 
 * @category Color
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 */
HSBToHex = (...args) => {
    let shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    const notDefaultColorRange = !isDefaultColorRange();
    notDefaultColorRange && p.pushStyle();
    presetColorMode(p.RGB);
    const arr = HSBToRGB(...args).map(value => Math.round(value));
    notDefaultColorRange && p.popStyle();
    return RGBToHex(...arr, shorthand, octothorpe);
};

/**
 * Converts HSB to RGB.
 * 
 * @link https://stackoverflow.com/a/54070620
 * 
 * @category Color
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(HSBToRGB(0, 100, 100));
 * // expected outcome: [255, 0, 0, 255]
 * @example
 * println(HSBToRGB(BLUE));
 * // expected outcome: [0, 0, 255, 255]
 */
HSBToRGB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.RGB ? currentColorRange : RGB_COLOR_RANGE;
    let h, s, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.HSB);
            }
            [h, s, b, a] = toHSB(args[0]);
            notDefaultColorRange && p.popStyle();
            h /= 60, s /= 100, b /= 100, a /= 100;
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / HSB_COLOR_RANGE[3];
            h = args.shift() / 60;
            [s, b] = args.map((value, i) => value /= HSB_COLOR_RANGE[i + 1]);
    }
    f = (n, k = (n + h) % 6) => b - b * s * Math.max(Math.min(k, 4 - k, 1), 0);
    let arr = [f(5), f(3), f(1), a || 1];
    arr = arr.map((value, i) => value * mapColorRange[i]);
    return arr;
};

/**
 * Applies a hue rotation on the canvas image.
 * 
 * @category Color
 * 
 * @param {number} angle
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(90);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 * 
 * @example
 * angleMode = 'radians';
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(PI / 2);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 */
hueRotate = angle => _appendFilter(`hue-rotate(${angle}${p.angleMode == 'degrees' ? 'deg' : 'rad'})`);

/**
 * Inverts the canvas image.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * invert();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: inverted
 */
invert = (amount = 100) => _appendFilter(`invert(${amount}%)`);

/**
 * @summary
 * Draws a linear gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @category Color
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.angle]
 * @param {number} [settings.x0] x-coordinate of gradient start point
 * @param {number} [settings.y0] y-coordinate of gradient start point
 * @param {number} [settings.x1] x-coordinate of gradient end point
 * @param {number} [settings.y1] y-coordinate of gradient end point
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: linear gradient from red to blue
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: linear gradient from red to to green to blue
 */
linearGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, angle, x0, y0, x1, y1 } = settings;
    height = height || width;
    if (_.isNumber(angle)) {
        if (p.angleMode == 'degrees') angle = p.radians(angle);
        const result = _pointOnRect(width, height, angle);
        x0 = x0 || x + width - result.x;
        y0 = y0 || y + height - result.y;
        x1 = x1 || x + result.x;
        y1 = y1 || y + result.y;
    }
    push();
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};

/**
 * Adjusts brightness of the canvas image by applying a linear multiplier.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * luminance(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: brightness increased to 150%
 */
luminance = amount => _appendFilter(`brightness(${amount}%)`);

/**
 * Applies transparency to the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * opacity(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% opacity
 */
opacity = amount => _appendFilter(`opacity(${amount}%)`);

/**
 * Sets the color mode to selected preset.
 * 
 * @category Color
 * 
 * @param {number} [mode] `RGB` or `HSB`
 * 
 * @example
 * presetColorMode(HSB);
 * println(getColorRange());
 * // expected output: [360, 100, 100, 100]
 * presetColorMode();
 * println(getColorRange());
 * // expected output: [255, 255, 255, 255]
 * 
 * @see {@link getColorRange}
 */
presetColorMode = mode => {
    if (!mode)
        mode = getColorMode() == p.RGB ? p.HSB : p.RGB;
    switch (mode) {
        case p.RGB:
            p.colorMode(p.RGB, 255);
            break;
        case p.HSB:
            p.colorMode(p.HSB, 360, 100, 100, 100);
    }
};

/**
 * Maps color range array to current or a custom color range.
 * 
 * @category Color
 * 
 * @param {Array.<number>|number} values
 * @param {Array.<number>|number} [colorRange] custom color range
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * println(mapColorRange([255, 0, 0]));
 * // expected output: [360, 0, 0, 100]
 * 
 * @example
 * println(mapColorRange([255, 0, 0], [360, 100, 100, 100]));
 * // expected output: [360, 0, 0, 100]
 */
mapColorRange = (values, colorRange) => {
    const currentColorRange = getColorRange();
    if (colorRange) {
        colorRange = _parseColorArray(colorRange, currentColorRange[3], true);
        values = _parseColorArray(values, currentColorRange[3])
            .map((value, i) => p.map(value, 0, currentColorRange[i], 0, colorRange[i]));
    } else {
        values = _parseColorArray(values, 255)
            .map((value, i) => p.map(value, 0, 255, 0, currentColorRange[i]));
    }
    return values;
};

/**
 * @summary
 * Draws a radial gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
 * 
 * @category Color
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.x0=x + width / 2] x-coordinate of gradient start circle
 * @param {number} [settings.y0=y + height / 2] y-coordinate of gradient start circle
 * @param {number} [settings.r0=0] radius of gradient start circle
 * @param {number} [settings.x1=x + width / 2] x-coordinate of gradient end circle
 * @param {number} [settings.y1=y + height / 2] y-coordinate of gradient end circle
 * @param {number} [settings.r1=width / 2] radius of gradient end circle
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: radial gradient from red to blue
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: radial gradient from red to to green to blue
 */
radialGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, x0, y0, r0, x1, y1, r1 } = settings;
    height = height || width;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    if (!_.isNumber(x0)) x0 = centerX;
    if (!_.isNumber(y0)) y0 = centerY;
    r0 = r0 || 0;
    if (!_.isNumber(x1)) x1 = centerX;
    if (!_.isNumber(y1)) y1 = centerY;
    r1 = r1 || width / 2;
    push();
    const gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};

/**
 * Converts RGB(A) to CSS hexadecimal values.
 * 
 * @category Color
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 *
 * @example
 * console.log(RGBToHex(0, 111, 222));
 * // expected output: '#006FDE'
 *
 * @example
 * const col = GREEN;
 * console.log(RGBToHex(col));
 * // expected output: '#008000'
 * 
 * @example
 * const col = color(RED, 100);
 * console.log(RGBToHex(col));
 * // expected output: '#FF000064'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col), false);
 * // expected output: '#FF0000'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col));
 * // expected output: '#F00'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col, false, false));
 * // expected output: 'FF0000'
 */
RGBToHex = (...args) => {
    let hexadecimal, shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    switch (args.length) {
        case 1: {
            const a = p.alpha(args[0]);
            hexadecimal = p.hex(args[0], 6) + (a != RGB_COLOR_RANGE[3] ? a.toString(16).padStart(2, '0') : '');
            break;
        }
        case 3:
        case 4:
            hexadecimal = ((1 << 24) + (args[0] << 16) + (args[1] << 8) + args[2]).toString(16).slice(1);
            if (args.length == 4 && args[3] != RGB_COLOR_RANGE[3]) hexadecimal += args[3].toString(16).padStart(2, '0');
    }
    if (shorthand) {
        if (hexadecimal.length == 8) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3(\w)\4/, '$1$2$3$4');
        if (hexadecimal.length == 6) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3/, '$1$2$3');
    }
    return (octothorpe ? '#' : '') + hexadecimal.toUpperCase();
};

/**
 * Converts RGB to HSB.
 * 
 * @link https://stackoverflow.com/a/54070620
 * 
 * @category Color
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(RGBToHSB(0, 0, 255));
 * // expected outcome: [240, 100, 100, 100]
 * 
 * @example
 * println(RGBToHSB(BLUE));
 * // expected outcome: [240, 100, 100, 100]
 */
RGBToHSB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.HSB ? currentColorRange : HSB_COLOR_RANGE;
    const fns = [
        hue => p.map(hue, 0, 6, 0, mapColorRange[0]),
        saturation => saturation * mapColorRange[1],
        brightness => brightness * mapColorRange[2],
        alpha => alpha * mapColorRange[3]
    ];
    let r, g, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.RGB);
            }
            [r, g, b, a] = toRGB(args[0]).map((value, i) => value /= RGB_COLOR_RANGE[i]);
            notDefaultColorRange && p.popStyle();
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / RGB_COLOR_RANGE[3];
            [r, g, b] = args.map((value, i) => value /= RGB_COLOR_RANGE[i]);
    }
    const max = Math.max(r, g, b),
        chroma = max - Math.min(r, g, b);
    const hue = chroma && ((max == r) ? (g - b) / chroma : ((max == g) ? 2 + (b - r) / chroma : 4 + (r - g) / chroma));
    let arr = [hue < 0 ? hue + 6 : hue, max && chroma / max, max, a || 1];
    arr = arr.map((value, i) => fns[i](value));
    return arr;
};

/**
 * Saturates the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * saturate(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150% saturation
 */
saturate = amount => _appendFilter(`saturate(${amount}%)`);

/**
 * Converts the canvas image to sepia.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * sepia();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% sepia
 */
sepia = (amount = 100) => _appendFilter(`sepia(${amount}%)`);

/**
 * Sets shadow color.
 * 
 * @category Color
 * 
 * @param {...number|color|string} args
 * 
 * @example
 * push();
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * pop();
 * // expected outcome: square with a black shadow
 * 
 * @example
 * push();
 * shadow(255, 0, 0);
 * shadowBlur(10);
 * circle(100, 100, 100);
 * pop();
 * // expected outcome: circle with a red shadow
 */
shadow = (...args) => {
    let color = args[0];
    if (args.length > 1) color = p.color.apply(null, args);
    if (_.isNumber(args[0])) color = RGBToHex(color, false);
    ctx.shadowColor = color;
};

/**
 * Sets shadow blur strength.
 * 
 * @category Color
 * 
 * @param {number} radius
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * // expected outcome: square with a black shadow
 */
shadowBlur = radius => ctx.shadowBlur = radius;

/**
 * Sets shadow offset.
 * 
 * @category Color
 * 
 * @param {number} x
 * @param {number} [y=x]
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * shadowOffset(10);
 * square(100, 100, 100);
 * // expected outcome: square with black shadow offset by 10px in both directions
 */
shadowOffset = (x, y = x) => {
    if (_.isNumber(x)) ctx.shadowOffsetX = x;
    ctx.shadowOffsetY = y;
};

/**
 * Converts color integers, hex or RGB values to HSB.
 * 
 * @category Color
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * println(toRGB(BLUE));
 * // expected output: [0, 0, 255, 255]
 * 
 * @example
 * const col = toRGB('#F00')
 * println(hex(col, 6));
 * // expected output: 'FF0000'
 * 
 * @example
 * println(toRGB(0, 100, 100));
 * // expected output: [255, 0, 0, 255]
 */
toHSB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isRGB = getColorMode() == p.RGB;
                if (isRGB) {
                    p.pushStyle();
                    presetColorMode(p.HSB);
                }
                const arr = [p.hue(col), p.saturation(col), p.brightness(col), p.alpha(col)];
                isRGB && p.popStyle();
                return arr;
            }
            return hexToHSB(col);
        }
        case 3:
        case 4:
            return RGBToHSB.apply(p, args);
    }
};

/**
 * Converts color integers, hex or HSB values to RGB.
 * 
 * @category Color
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * background(toRGB('fff'));
 * // expected outcome: white background
 *
 * @example
 * background(toRGB(0, 255, 255));
 * // expected outcome: red background
 *
 * @example
 * println(toRGB(-1))
 * // expected output: [255, 255, 255]
 */
toRGB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isHSB = getColorMode() == p.HSB;
                if (isHSB) {
                    p.pushStyle();
                    presetColorMode(p.RGB);
                }
                const arr = [p.red(col), p.green(col), p.blue(col), p.alpha(col)];
                isHSB && p.popStyle();
                return arr;
            }
            return hexToRGB(col);
        }
        case 3:
        case 4:
            return HSBToRGB.apply(p, args);
    }
};

/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws a linear gradient from `startColor` to `endColor` in the form of a rectangle.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the gradient
 * @param {number} y y-coordinate of the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param
 * {LEFT|RIGHT|TOP|UP|BOTTOM|DOWN|TOP_LEFT|TOP_RIGHT|BOTTOM_RIGHT|BOTTOM_LEFT}
 * [direction=RIGHT] direction of gradient
 * @param {number} [step=5] step size
 *
 * @example
 * linearGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: linear gradient from left to right; red to yellow
 *
 * @example
 * linearGradient(150, 25, 100, 100, PURPLE, PINK, TOP_RIGHT);
 * // expected outcome: linear gradient from bottom-left to top-right; purple to pink
 *
 * @example
 * linearGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, BOTTOM_RIGHT, 10);
 * // expected outcome: linear gradient from top-left to bottom-right; green to light blue in strips of thickness 10
 */
 linearGradientOld = (x, y, width, height, startColor, endColor, direction = RIGHT, step = 5) => {
    push();
    e.strokeWeight(1);
    switch (direction) {
        case LEFT:
        case RIGHT:
            if (direction == LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width));
                    e.line(x + i, y, x + i, y + height);
                }
            } else {
                for (let i = 0; i < width; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / width);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x + i, y, width - i, height); }
                    else { e.rect(x + i, y, step, height); }
                }
            }
            break;
        case TOP:
        case UP:
        case BOTTOM:
        case DOWN:
            if (direction == TOP || direction == UP) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < height; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / height));
                    e.line(x, y + i, x + width, y + i);
                }
            } else {
                for (let i = 0; i < height; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / height);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x, y + i, width, height - i); }
                    else { e.rect(x, y + i, width, step); }
                }
            }
            break;
        case TOP_LEFT:
        case BOTTOM_RIGHT:
            if (direction == TOP_LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + i, y, x, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + i, y + height, x + width, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(-45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(-side / 2, i, side, side - i); }
                        else { this.rect(-side / 2, i, side, step); }
                    }
                });
            }
            break;
        case TOP_RIGHT:
        case BOTTOM_LEFT:
            if (direction == TOP_RIGHT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + width - i, y, x + width, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + width - i, y + height, x, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(0, i - side / 2, side, side - i); }
                        else { this.rect(0, i - side / 2, side, step); }
                    }
                });
            }
    }
    pop();
};

/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws a radial gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of center of the gradient
 * @param {number} y y-coordinate of center the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [step=5] step size
 *
 * @example
 * radialGradient(100, 100, 100, 100, RED, YELLOW);
 * // expected outcome: radial gradient from red to yellow
 *
 * @example
 * radialGradient(250, 100, 100, 100, PURPLE, PINK, 10);
 * // expected outcome: radial gradient from purple to pink with step size 10
 */
 radialGradientOld = (x, y, width, height, startColor, endColor, step = 5) => {
    push();
    e.strokeWeight(1);
    const maxRadius = Math.max(width, height);
    if (step == 1) {
        e.noFill();
        for (let i = 0; i < maxRadius; i++) {
            e.stroke(e.lerpColor(endColor, startColor, i / maxRadius));
            e.arc(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height),
                0, 360);
        }
    } else {
        for (let i = 0; i < maxRadius; i += step) {
            const c = e.lerpColor(endColor, startColor, i / maxRadius);
            e.stroke(c);
            e.fill(c);
            e.ellipse(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height));
        }
    }
    pop();
};

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
    p.pushStyle();
    p.textAlign(p.LEFT, p.TOP);
    p.text(str, x, y);
    p.popStyle();
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

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Shape Essentials depends on the Essentials Core.');
} else {
    SHAPE_ESSENTIALS = true;
    if (!_silent_ && !_shape_initialized_) console.info(
        '%cShape Essentials',
        _console_style_
    );
}

/**
 * Gets current stroke cap.
 * 
 * @category Shape
 * 
 * @returns {string}
 * 
 * @example
 * strokeCap(SQUARE);
 * println(getStrokeCap() == SQUARE);
 * // expected output: true
 */
getStrokeCap = () => ctx.lineCap;

/**
 * Gets current stroke join.
 * 
 * @category Shape
 * 
 * @returns {string}
 * 
 * @example
 * strokeJoin(SQUARE);
 * println(getStrokeJoin() == SQUARE);
 * // expected output: true
 */
getStrokeJoin = () => ctx.lineJoin;

/**
 * Gets current stroke weight.
 * 
 * @category Shape
 * 
 * @returns {number}
 * 
 * @example
 * strokeWeight(5);
 * println(getStrokeWeight());
 * // expected output: 5
 */
getStrokeWeight = () => ctx.lineWidth;

/**
 * Removes line dash pattern.
 * 
 * @category Shape
 * 
 * @example
 * strokeDash(1, 20);
 * noStrokeDash();
 * line(50, 50, 350, 50);
 * // expected outcome: regular line
 * 
 * @see {@link strokeDash}
 */
noStrokeDash = () => strokeDash();

/**
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 *
 */
circle = (x, y, radius) => p.ellipse(x, y, radius, radius);

/**
 * Draws a 2D cylinder.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/5157537806548992
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of cylinder
 * @param {number} y y-coordinate of cylinder
 * @param {number} width
 * @param {number} height
 *
 * @example
 * cylinder(100, 100, 100, 50);
 */
cylinder = (x, y, width, height) => {
    width = Math.abs(width);
    height = Math.abs(height);
    p.pushMatrix();
    p.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
        p.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const central = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            p.vertex(z, -r);
            p.bezierVertex(z + central, -r, z + r, -central, z + r, 0);
            p.bezierVertex(z + r, central, z + central, r, z, r);
            p.vertex(-z, r);
            p.bezierVertex(-z - central, r, -z - r, central, -z - r, 0);
            p.bezierVertex(-z - r, -central, -z - central, -r, -z, -r);
        }, true);
    }
    p.popMatrix();
};

/**
 * Draws a donut.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the donut
 * @param {number} y y-coordinate of the donut
 * @param {number} majorDiameter Diameter of outer circle
 * @param {number} minorDiameter Diameter of inner circle
 *
 * @example
 * donut(100, 100, 100, 50);
 */
donut = (x, y, majorDiameter, minorDiameter) => {
    const kappa = 4 / 3 * (Math.sqrt(2) - 1);
    p.pushMatrix();
    p.translate(x, y);
    p.pushStyle();
    p.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, central, central, radius, 0, radius);
        p.bezierVertex(-central, radius, -radius, central, -radius, 0);
        p.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        p.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, -central, central, -radius, 0, -radius);
        p.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        p.bezierVertex(-radius, central, -central, radius, 0, radius);
        p.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    p.popStyle();

    p.pushStyle();
    p.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    p.popStyle();
    p.popMatrix();
};

/**
 * Alternative for `beginShape()`/`endShape()`.
 * 
 * @category Shape
 *
 * @param {Function} fn Shape function
 * @param {CLOSE|boolean} [close] Whether to close the shape
 * @param {POINTS|LINES|TRIANGLES|TRIANGLE_FAN|TRIANGLE_STRIP|QUADS|QUAD_STRIP}
 * [mode] Shape mode
 *
 * @example
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, CLOSE);
 * // expected outcome: square
 *
 * @example
 * strokeWeight(5);
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, false, POINTS);
 * // expected outcome: points in a square formation
 */
drawShape = (fn, close, mode) => {
    close = close && p.CLOSE;
    p.beginShape(mode);
    fn();
    p.endShape(close);
};

/**
 * Draws a line of a given length and at a given angle.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of start point
 * @param {number} y y-coordinate of start point
 * @param {number} length length of line
 * @param {number} [angle=0] rotation of line
 *
 * @example
 * angleMode = 'degrees';
 * edge(50, 50, 300, 0);
 * // expected outcome: horizontal line of length 300
 *
 * @example
 * edge(50, 75, 100, 45);
 * // expected outcome: line of length 100 rotated 45 degrees
 *
 * @example
 * angleMode = 'radians';
 * edge(200, 75, 100, PI / 4);
 * // expected outcome: line of length 100 rotated 45 degrees
 */
edge = (x, y, length, angle = 0) => {
    if (p.angleMode == 'degrees') angle = p.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    p.line(x, y, x2, y2);
};

/**
 * Gets current rotation transformation.
 * 
 * @category Shape
 * 
 * @param {boolean} [degrees=p.angleMode == 'degrees'] convert to degrees
 * @param {DOMMatrix} [matrix=ctx.getTransform()]
 * 
 * @returns {number}
 */
getRotation = (degrees = p.angleMode == 'degrees', matrix = ctx.getTransform()) => {
    let angle = Math.atan2(matrix.b, matrix.a);
    if (angle < 0) angle += Math.PI * 2;
    return degrees ? p.degrees(angle) : angle;
};

/**
 * Draws a heart.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/2085250861
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the heart
 * @param {number} y y-coordinate of the heart
 * @param {number} radius
 *
 * @example
 * heart(100, 100, 50);
 */
heart = (x, y, radius) => {
    const ay = y - 2 * radius / 5,
        by = y + radius,
        c1y = y - 6 * radius / 5,
        c2y = y - 2 * radius / 5;
    let c1x = x + radius / 2,
        c2x = x + 9 * radius / 5;

    drawShape(() => {
        p.vertex(x, ay);
        p.bezierVertex(c1x, c1y, c2x, c2y, x, by);
        c1x = 2 * x - c1x;
        c2x = 2 * x - c2x;
        p.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
    }, true);
};

/**
 * Draws a parallelogram.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/4747962019348480
 * 
 * @category Shape
 *
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 *
 * @example
 * parallelogram(50, 50, 200, 50, 100, 100);
 *
 * @see {@link rhombus}
 */
parallelogram = (ax, ay, bx, by, cx, cy) => {
    const dx = bx - ax;
    const dy = by - ay;
    p.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

/**
 * Draws a polygon with _n_ sides.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/1304459398
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of polygon's circumcircle
 * @param {number} y y-coordinate of polygon's circumcircle
 * @param {number} sides Number of sides
 * @param {number} radius Radius of circumcircle
 * @param {number} [rotation=0] Rotation of polygon in degrees or radians
 *
 * @example
 * polygon(100, 100, 5, 100);
 *
 * @example
 * polygon(100, 100, 5, 100, 180);
 *
 * // Alternative method
 * angleMode = 'radians';
 * polygon(100, 100, 5, 100, PI);
 */
polygon = (x, y, sides, radius, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? 2 * Math.PI : 360;
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            p.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};

/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults.
 *
 * @description
 * The rectangle will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * rectangle(50, 50, 100, 50);
 * // expected outcome: Rectangle with side lengths 100 and 50
 * @example
 * rectangle(150, 50, 100, 50, 10);
 * // expected outcome: Rectangle with radius 10 for all corners
 * @example
 * rectangle(250, 50, 100, 50, 10, 0);
 * // expected outcome: Rectangle with radius 10 for top corners
 * @example
 * rectangle(50, 150, 100, 50, 10, 10, 10); 
 * // expected outcome: Rectangle with radius 10 for all but bottom-left corner
 * @example
 * rectangle(150, 150, 100, 50, 10, 10, 0, 10);
 * // expected outcome: Rectangle with radius 10 for all but bottom-right corner
 *
 * @see {@link square}
 */
rectangle = (x, y, width, height = width, tl, tr, br, bl) => {
    if (tl == undefined) p.rect(x, y, width, height);
    else if (tr == undefined) p.rect(x, y, width, height, tl);
    else if (br == undefined) p.rect(x, y, width, height, tl, tl, tr, tr);
    else if (bl == undefined) p.rect(x, y, width, height, tl, tr, br, 0);
    else p.rect(x, y, width, height, tl, tr, br, bl);
};

/**
 * Draws a rhombus.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://khanacademy.org/cs/-/4747962019348480
 * 
 * @category Shape
 *
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 *
 * @example
 * rhombus(50, 100, 100, 50, 100, 100);
 *
 * @see {@link parallelogram}
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = p.dist(ax, ay, bx, by) / p.dist(ax, ay, cx, cy);
    cx = ax + r * (cx - ax);
    cy = ay + r * (cy - ay);
    parallelogram(ax, ay, bx, by, cx, cy);
};

/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults and one `side`
 * parameter.
 *
 * @description
 * The square will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the square
 * @param {number} y y-coordinate of the square
 * @param {number} side side length of the square
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * square(50, 50, 50);
 * // expected outcome: Square with side length 50
 * @example
 * square(150, 50, 50, 10);
 * // expected outcome: Square with radius 10 for all corners
 * @example
 * square(250, 50, 50, 10, 0);
 * // expected outcome: Square with radius 10 for top corners
 * @example
 * square(50, 150, 50, 10, 10, 10);
 * // expected outcome: Square with radius 10 for all but bottom-left corner
 * @example
 * square(150, 150, 50, 10, 10, 0, 10);
 * // expected outcome: Square with radius 10 for all but bottom-right corner
 *
 * @see {@link rectangle}
 */
square = (x, y, side, tl, tr, br, bl) => {
    if (tl == undefined) p.rect(x, y, side, side);
    else if (tr == undefined) p.rect(x, y, side, side, tl);
    else if (br == undefined) p.rect(x, y, side, side, tl, tl, tr, tr);
    else if (bl == undefined) p.rect(x, y, side, side, tl, tr, br, 0);
    else p.rect(x, y, side, side, tl, tr, br, bl);
};

/**
 * Draws a star with _n_ spikes.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/1171581918
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of star
 * @param {number} y y-coordinate of star
 * @param {number} externalRadius External radius
 * @param {number} [spikes=5] Number of spikes
 * @param {number} [rotation=0] Rotation of star in degrees or radians
 *
 * @example
 * star(100, 100, 50);
 *
 * @example
 * star(100, 100, 50, 7, 10);
 */
star = (x, y, externalRadius, spikes = 5, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
    const interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            p.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};

/**
 * Sets the line dash pattern.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
 * 
 * @category Shape
 * 
 * @param {...number} segment distances to alternately draw a line and a gap
 * 
 * @example
 * strokeDash(1, 20);
 * line(50, 50, 350, 50);
 * // expected outcome: dotted line with a gap of 50
 * 
 * @example
 * strokeDash(10, 5);
 * square(100, 100, 100);
 * // expected outcome: square with a dash length of 10 and spacing of 5
 * 
 * @example
 * strokeDash(5, 5, 20, 5);
 * square(100, 100, 100);
 * // expected outcome: square with a dash length alternating between 5 and 20 and spacing of 5
 * 
 * @see {@link noStrokeDash}
 */
strokeDash = (...segments) => ctx.setLineDash(segments);

/**
 * Sets the line dash offset.
 * 
 * @category Shape
 * 
 * @param {number} offset
 * 
 * @example
 * strokeDashOffset(0);
 * strokeDash(10, 10);
 * line(50, 50, 350, 50);
 * // expected outcome: dashed line
 * strokeDashOffset(5);
 * line(50, 100, 350, 100);
 * // expected outcome: dashed line offset by 5 pixels
 */
strokeDashOffset = offset => ctx.lineDashOffset = offset;

/**
 * Draws a trapezoid.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 * 
 * @category Shape
 * 
 * @param {number} x x-coordinate of trapezoid
 * @param {number} y y-coordinate of trapezoid
 * @param {number} height height of trapezoid
 * @param {number} topBase width of top base
 * @param {number} bottomBase width of bottom base
 * 
 * @example
 * trapezoid(100, 100, 100, 150, 200);
 * // expected outcome: trapezoid 
 */
trapezoid = (x, y, height, topBase, bottomBase) => {
    const maxBase = Math.max(topBase, bottomBase);
    p.quad(x + (maxBase - topBase) / 2, y,
        x + (maxBase - topBase) / 2 + topBase - 1, y,
        x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1,
        x + (maxBase - bottomBase) / 2, y + height - 1);
};
