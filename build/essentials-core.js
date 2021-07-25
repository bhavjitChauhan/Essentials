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
