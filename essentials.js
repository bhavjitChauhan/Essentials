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

_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
_env_ = typeof PI == 'undefined' ? 'CDN' : 'KA';

ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.1.0';
ESSENTIALS_ASCII = `
    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/
   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/
  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/
 _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/
_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/

`;

_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info(
    `%cEssentials
%cThe Khan Academy utility library.

${_env_} Build
Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    'font-family:system-ui;font-size:1rem;',
    'font-family:system-ui;font-size:0.75rem;'
);

_eval = eval;
e = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [e.LEFT, e.RIGHT, e.TOP, e.BOTTOM, e.UP, e.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 */
WIDTH = e.width;

/**
 * Alias for `height`.
 */
HEIGHT = e.height;

/**
 * Alias for `WIDTH / 2`.
 */
HALF_WIDTH = WIDTH / 2;

/**
 * Alias for `HEIGHT / 2`.
 */
HALF_HEIGHT = HEIGHT / 2;

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
 * Alias for `_clearLogs()`.
 *
 * @example
 * println('Hello World');
 * clearLogs();
 * // expected outcome: blank canvas console
 */
clearLogs = () => e._clearLogs();

/**
 * Literally does nothing. Useful as the default for optional callback arguments.
 *
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = () => _.noop;

/**
 * Alias for `Program.restart()`
 */
restart = () => e.Program.restart();

/**
 * Attempts to invoke a function with the provided arguments, returning either
 * the result or an error.
 *
 * @link https://www.30secondsofcode.org/js/s/attempt
 *
 * @param {} fn Function to attempt.
 * @param {...*} args Functions arguments.
 */
attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};

/**
 * Calls multiple functions asynchronously.
 *
 * @link https://www.30secondsofcode.org/js/s/chain-async
 *
 * @param {Array}  fns  Array containing functions to call
 *
 * @example
 * let array;
 * chainAsync([
 *     function(next) {
 *         console.log('Generating array...');
 *         array = [];
 *         for (let i = 0; i < 10000; i++) {
 *             array.push(Math.random(0, 100));
 *         }
 *         next();
 *     }, function(next) {
 *         console.log('Sorting array...');
 *         array.sort();
 *         next();
 *     }, function() {
 *         console.log(array);
 *     }
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
    return Object.constructor(`return (function(__env__) {return ${string};});`)()(e);
};

/**
 * Returns a function that is the
 * [negation]{@link https://en.wikipedia.org/wiki/Negation} of the given
 * function
 *
 * @link https://www.30secondsofcode.org/js/s/complement
 *
 * @param {Function} fn Given function
 *
 * @returns {Function} Complement function
 *
 * @example
 * const isEven = function(num) {
 *     return num % 2 === 0;
 * }
 * const isOdd = complement(isEven);
 */
complement = fn => (...args) => !fn(...args);

/**
 * Generates a
 * [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}.
 *
 * @returns {string}
 */
generateUUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );

/**
 * Returns a string of the form `HH:MM:SS`.
 *
 * @link https://www.30secondsofcode.org/js/s/get-colon-time-from-date
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
 * let b = new Button(100, 100, 150, 50);
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
 * Checks if object is a Khan Academy font object.
 * 
 * @param {Object} obj
 * 
 * @example
 * let f = createFont('Arial');
 * println(isFont(f));
 * // expected output: true 
 * 
 * @example
 * let f = font('monospace');
 * println(isFont(f));
 * // expected output: true
 * 
 * @see font
 */
isFont = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isFunction(obj.getCSSDefinition);
};

/**
 * Checks if object is a Khan Academy image object.
 *
 * @param {Object} obj
 *
 * @example
 * let i = getImage("avatars/leaf-green");
 * println(isImage(i));
 * // expected output: true
 */
isImage = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isObject(obj.sourceImg);
};

/**
 * Checks if object is a Khan Academy sound object.
 *
 * @param {Object} obj
 *
 * @example
 * let s = getSound("retro/boom1");
 * println(isSound(s));
 * // expected output: true
 */
isSound = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isObject(obj.audio);
};

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
 * @param {Array} fns Functions to be compared
 * @param {number} [iterations=1e4] Number of times function should be called
 *
 * @returns {Array} Index of function which performed fastest
 *
 * @example
 * let testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * let test = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[test.winner] + ' performed faster.');
 * // possible output: 'console.log performed faster.'
 */
mostPerformant = (fns, iterations = 1e4) => {
    const times = fns.map(fn => {
        const before = performance.now();
        for (let i = 0; i < iterations; i++) fn();
        return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
};

/**
 * Equivalent to using
 * [popMatrix]{@link http://processingjs.org/reference/popMatrix_/} and
 * [popStyle]{@link http://processingjs.org/reference/popStyle_/}.
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
 * @see push
 */
pop = () => {
    e.popStyle();
    e.popMatrix();
};

/**
 * Prints formatted string to canvas console.
 *
 * @param {string} assertion String with format
 * @param {*} arguments Arguments
 *
 * @example
 * printf('Hello %', 'World');
 * // expected output: 'Hello World'
 *
 * @example
 * // To use the literal '%' character use double backslashes (\\)
 * printf('% \\% %', 'A', 'B');
 * // expected output: 'A % B'
 */
printf = function(string) {
    const args = Array.from(arguments)
        .slice(1);
    for (const i in args) {
        string = string.replace(/(?<!\\)%/, args[i]);
    }
    string = string.replaceAll(/\\%/g, '%');
    e.println(string);
};

/**
 * Equivalent to using
 * [pushMatrix]{@link http://processingjs.org/reference/pushMatrix_/} and
 * [pushStyle]{@link http://processingjs.org/reference/pushStyle_/}.
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
 * @see pop
 */
push = () => {
    e.pushMatrix();
    e.pushStyle();
};

/**
 * Generates a random integer in a given range.
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
 * Shows image of graphics created with `createGraphics`.
 *
 * @param {number} x x-coordinate of image
 * @param {number} y y-coordinate of image
 * @param {number} width width of image
 * @param {number} height height of image
 * @param {Function} fn draw code
 * @param {P2D|P3D} [renderer=P2D]
 *
 * @example
 * showGraphics(100, 100, 100, 100, function() {
 *     this.background(0);
 *     this.fill(RED);
 *     this.rect(25, 25, 50, 50);
 * });
 * // expected outcome: red square embedded in black square
 */
showGraphics = (x, y, width, height, fn, renderer = e.P2D) => {
    const g = e.createGraphics(width, height, renderer);
    fn.call(g);
    e.image(g, x, y);
};

/**
 * Measures the time it takes for a function to execute and logs to browser
 * console.
 *
 * @link https://www.30secondsofcode.org/js/s/time-taken
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

/** @module Color */

_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Color Essentials depends on the Essentials Core.');
} else {
    COLOR_ESSENTIALS = true;
    if (!_silent_ && !_color_initialized_) console.info(
        '%cColor Essentials',
        'font-family:system-ui;font-size:0.75rem;'
    );
}

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
    const dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    push();
    if (step == 1) {
        e.strokeWeight(1.5);
        for (let i = angle; i < angle + 359; i += dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, (i - angle) / 360));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        e.strokeWeight(1);
        for (let i = angle; i < angle + 359; i += dTheta) {
            const c = e.lerpColor(startColor, endColor, (i - angle) / 360);
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    pop();
};

/**
 * @summary
 * Alias for `color(255, 0, 0)`.
 *
 * @description
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
 *
 * @example
 * fill(RED);
 * text('Hello World', 25, 25);
 *
 * @example
 * let c = color(RED, 50);
 * fill(c);
 * square(25, 25, 25);
 */
RED = e.color(255, 0, 0);

/**
 * @summary
 * Alias for `color(0, 128, 0)`.
 *
 * @description
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
 *
 * @example
 * fill(GREEN);
 * text('Hello World', 25, 25);
 *
 * @example
 * let c = color(GREEN, 50);
 * fill(c);
 * square(25, 25, 25);
 */
GREEN = e.color(0, 128, 0);

/**
 * @summary
 * Alias for `color(0, 0, 255)`.
 *
 * @description
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
 *
 * @example
 * fill(BLUE);
 * text('Hello World', 25, 25);
 *
 * @example
 * let c = color(BLUE, 50);
 * fill(c);
 * square(25, 25, 25);
 */
BLUE = e.color(0, 0, 255);
LIGHTSALMON = e.color(255, 160, 122),
SALMON = e.color(250, 128, 114);
DARKSALMON = e.color(233, 150, 122);
LIGHTCORAL = e.color(240, 128, 128);
INDIANRED = e.color(205, 92, 92);
CRIMSON = e.color(220, 20, 60);
FIREBRICK = e.color(178, 34, 34);
DARKRED = e.color(139, 0, 0);
CORAL = e.color(255, 127, 80);
TOMATO = e.color(255, 99, 71);
ORANGERED = e.color(255, 69, 0);
GOLD = e.color(255, 215, 0);
ORANGE = e.color(255, 165, 0);
DARKORANGE = e.color(255, 140, 0);
LIGHTYELLOW = e.color(255, 255, 224);
LEMONCHIFFON = e.color(255, 250, 205);
LIGHTGOLDENRODYELLOW = e.color(250, 250, 210);
PAPAYAWHIP = e.color(255, 239, 213);
MOCCASIN = e.color(255, 228, 181);
PEACHPUFF = e.color(255, 218, 185);
PALEGOLDENROD = e.color(238, 232, 170);
KHAKI = e.color(240, 230, 140);
DARKKHAKI = e.color(189, 183, 107);
YELLOW = e.color(255, 255, 0);
LAWNGREEN = e.color(124, 252, 0);
CHARTREUSE = e.color(127, 255, 0);
LIMEGREEN = e.color(50, 205, 50);
LIME = e.color(0, 255, 0);
FORESTGREEN = e.color(34, 139, 34);
DARKGREEN = e.color(0, 100, 0);
GREENYELLOW = e.color(173, 255, 47);
YELLOWGREEN = e.color(154, 205, 50);
SPRINGGREEN = e.color(0, 255, 127);
MEDIUMSPRINGGREEN = e.color(0, 250, 154);
LIGHTGREEN = e.color(144, 238, 144);
PALEGREEN = e.color(152, 251, 152);
DARKSEAGREEN = e.color(143, 188, 143);
MEDIUMSEAGREEN = e.color(60, 179, 113);
SEAGREEN = e.color(46, 139, 87);
OLIVE = e.color(128, 128, 0);
DARKOLIVEGREEN = e.color(85, 107, 47);
OLIVEDRAB = e.color(107, 142, 35);
LIGHTCYAN = e.color(224, 255, 255);
CYAN = e.color(0, 255, 255);
AQUA = e.color(0, 255, 255);
AQUAMARINE = e.color(127, 255, 212);
MEDIUMAQUAMARINE = e.color(102, 205, 170);
PALETURQUOISE = e.color(175, 238, 238);
TURQUOISE = e.color(64, 224, 208);
MEDIUMTURQUOISE = e.color(72, 209, 204);
DARKTURQUOISE = e.color(0, 206, 209);
LIGHTSEAGREEN = e.color(32, 178, 170);
CADETBLUE = e.color(95, 158, 160);
DARKCYAN = e.color(0, 139, 139);
TEAL = e.color(0, 128, 128);
POWDERBLUE = e.color(176, 224, 230);
LIGHTBLUE = e.color(173, 216, 230);
LIGHTSKYBLUE = e.color(135, 206, 250);
SKYBLUE = e.color(135, 206, 235);
DEEPSKYBLUE = e.color(0, 191, 255);
LIGHTSTEELBLUE = e.color(176, 196, 222);
DODGERBLUE = e.color(30, 144, 255);
CORNFLOWERBLUE = e.color(100, 149, 237);
STEELBLUE = e.color(70, 130, 180);
ROYALBLUE = e.color(65, 105, 225);
MEDIUMBLUE = e.color(0, 0, 205);
DARKBLUE = e.color(0, 0, 139);
NAVY = e.color(0, 0, 128);
MIDNIGHTBLUE = e.color(25, 25, 112);
MEDIUMSLATEBLUE = e.color(123, 104, 238);
SLATEBLUE = e.color(106, 90, 205);
DARKSLATEBLUE = e.color(72, 61, 139);
LAVENDER = e.color(230, 230, 250);
THISTLE = e.color(216, 191, 216);
PLUM = e.color(221, 160, 221);
VIOLET = e.color(238, 130, 238);
ORCHID = e.color(218, 112, 214);
FUCHSIA = e.color(255, 0, 255);
MAGENTA = e.color(255, 0, 255);
MEDIUMORCHID = e.color(186, 85, 211);
MEDIUMPURPLE = e.color(147, 112, 219);
BLUEVIOLET = e.color(138, 43, 226);
DARKVIOLET = e.color(148, 0, 211);
DARKORCHID = e.color(153, 50, 204);
DARKMAGENTA = e.color(139, 0, 139);
PURPLE = e.color(128, 0, 128);
INDIGO = e.color(75, 0, 130);
PINK = e.color(255, 192, 203);
LIGHTPINK = e.color(255, 182, 193);
HOTPINK = e.color(255, 105, 180);
DEEPPINK = e.color(255, 20, 147);
PALEVIOLETRED = e.color(219, 112, 147);
MEDIUMVIOLETRED = e.color(199, 21, 133);
WHITE = e.color(255, 255, 255);
SNOW = e.color(255, 250, 250);
HONEYDEW = e.color(240, 255, 240);
MINTCREAM = e.color(245, 255, 250);
AZURE = e.color(240, 255, 255);
ALICEBLUE = e.color(240, 248, 255);
GHOSTWHITE = e.color(248, 248, 255);
WHITESMOKE = e.color(245, 245, 245);
SEASHELL = e.color(255, 245, 238);
BEIGE = e.color(245, 245, 220);
OLDLACE = e.color(253, 245, 230);
FLORALWHITE = e.color(255, 250, 240);
IVORY = e.color(255, 255, 240);
ANTIQUEWHITE = e.color(250, 235, 215);
LINEN = e.color(250, 240, 230);
LAVENDERBLUSH = e.color(255, 240, 245);
MISTYROSE = e.color(255, 228, 225);
GAINSBORO = e.color(220, 220, 220);
LIGHTGRAY = e.color(211, 211, 211);
SILVER = e.color(192, 192, 192);
DARKGRAY = e.color(169, 169, 169);
GRAY = e.color(128, 128, 128);
DIMGRAY = e.color(105, 105, 105);
LIGHTSLATEGRAY = e.color(119, 136, 153);
SLATEGRAY = e.color(112, 128, 144);
DARKSLATEGRAY = e.color(47, 79, 79);
BLACK = e.color(0, 0, 0);
CORNSILK = e.color(255, 248, 220);
BLANCHEDALMOND = e.color(255, 235, 205);
BISQUE = e.color(255, 228, 196);
NAVAJOWHITE = e.color(255, 222, 173);
WHEAT = e.color(245, 222, 179);
BURLYWOOD = e.color(222, 184, 135);
TAN = e.color(210, 180, 140);
ROSYBROWN = e.color(188, 143, 143);
SANDYBROWN = e.color(244, 164, 96);
GOLDENROD = e.color(218, 165, 32);
PERU = e.color(205, 133, 63);
CHOCOLATE = e.color(210, 105, 30);
SADDLEBROWN = e.color(139, 69, 19);
SIENNA = e.color(160, 82, 45);
BROWN = e.color(165, 42, 42);
MAROON = e.color(128, 0, 0);
TRANSPARENT = e.color(255, 0);

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
    const dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    push();
    if (step == 1) {
        e.strokeWeight(1.5);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        e.strokeWeight(1);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
        // Temporary fix for missing triangle
        r1 = e.radians(angle - 180);
        r2 = e.radians(angle - 180 - dTheta);
        e.stroke(endColor);
        e.fill(endColor);
        e.triangle(x + width / 2, y + height / 2,
            e.map(Math.cos(r1), -1, 1, x, x + width),
            e.map(Math.sin(r1), -1, 1, y, y + height),
            e.map(Math.cos(r2), -1, 1, x, x + width),
            e.map(Math.sin(r2), -1, 1, y, y + height));
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    pop();
};

/**
 * Converts hex to RGB color type.
 *
 * @param {string} hex Hex color value, optional `#`; can be shorthand
 *
 * @returns {color} RGB color value
 *
 * @example
 * let c = hexToRGB('#fff');
 * println(c);
 * // expected output: -1
 * background(c);
 * // expected outcome: white background
 */
hexToRGB = hex => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? result.splice(1).map(function (i) {
        return parseInt(i, 16);
    }) : null;
    push();
    e.colorMode(e.RGB);
    result = e.color.apply(e, result);
    pop();
    return result;
};

/**
 * Converts HSB to RGB color type.
 *
 * @param {(number|color)} x Hue value or color
 * @param {number} [s] Saturation value
 * @param {number} [v] Brightness value
 *
 * @returns {string}  RGB color value
 *
 * @example
 * let c = HSBToRGB(85, 255, 255);
 * println(c);
 * // expected output: -16711936
 * background(c);
 * // expected outcome: green background
 */
HSBToRGB = function(x, s, v) {
    if (arguments.length == 1) {
        c = x;
        x = e.hue(c), s = e.saturation(c), v = e.brightness(c);
    }
    x /= 255, s /= 255, v /= 255;

    const i = Math.floor(x * 6),
        f = x * 6 - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s);

    let r, g, b;
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    const result = [r, g, b].map(function (i) {
        return i * 255;
    });

    return e.color.apply(e, result);
};

/**
 * @summary
 * Draws a radial gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
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
radialGradient = (x, y, width, height, startColor, endColor, step = 5) => {
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

/**
 * @summary
 * Draws a linear gradient from `startColor` to `endColor` in the form of a rectangle.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
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
linearGradient = (x, y, width, height, startColor, endColor, direction = RIGHT, step = 5) => {
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
 * Converts RGB to hex color type.
 *
 * @param {(number|color)} x Red value or color
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 *
 * @returns {string}  Hex color value
 *
 * @example
 * println(RGBToHex(255, 0, 0));
 * // expected output: #ff0000
 *
 * @example
 * let c = RED;
 * println(RGBToHex(c));
 * // expected output: #ff0000
 */
RGBToHex = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }
    return '#' + ((1 << 24) + (x << 16) + (g << 8) + b).toString(16).slice(1);
};

/**
 * Converts RGB to HSB color type.
 *
 * @param {(number|color)} x Red value or color
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 *
 * @returns {string}  HSB color value
 *
 * @example
 * let c = RGBToHSB(255, 0, 0);
 * println(c);
 * // expected output: -65536
 * colorMode(HSB);
 * background(c);
 * // expected outcome: red background
 */
RGBToHSB = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }

    x /= 255, g /= 255, b /= 255;

    const maxValue = Math.max(x, g, b);
    const minValue = Math.min(x, g, b);
    const v = maxValue;

    const d = maxValue - minValue;
    const s = maxValue === 0 ? 0 : d / maxValue;

    if (maxValue === minValue) {
        h = 0;
    } else {
        switch (maxValue) {
            case x: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - x) / d + 2; break;
            case b: h = (x - g) / d + 4; break;
        }
        h /= 6;
    }

    let result = [h, s, v].map(function (i) {
        return i * 255;
    });
    push();
    e.colorMode(e.HSB);
    result = e.color.apply(e, result);
    pop();
    return result;
};

/**
 * Converts hex or RGB to HSB color value.
 *
 * @param {(string|color)} x Hex, red or HSB color value
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * colorMode(HSB);
 * background(toHSB('fff'));
 * // expected outcome: white background
 *
 * @example
 * colorMode(HSB);
 * background(toHSB(255, 0, 0));
 * // expected outcome: red background
 *
 * @example
 * println(toHSB(-1))
 * // expected output: [0, 0, 255]
 */
toHSB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.hue(c), e.saturation(c), e.brightness(c)];
        } else {
            return RGBToHSB.apply(e, toRGB(hexToRGB(c)));
        }
    } else if (args.length == 3) {
        return RGBToHSB.apply(e, args);
    }
};

/**
 * Converts hex or HSB to RGB color value.
 *
 * @param {(string|color)} x Hex, hue or RGB color value
 * @param {number} [s] Saturation value
 * @param {number} [v] Brightness value
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
toRGB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.red(c), e.green(c), e.blue(c)];
        } else {
            return hexToRGB(c);
        }
    } else if (args.length == 3) {
        return HSBToRGB.apply(e, args);
    }
};

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
 * Fast gradient by filling each character with a different color as opposed to
 * masking the text with the gradient.
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
 * @see font
 */
fastGradientText = (string, x = 0, y = e.textAscent(), startColor, endColor) => {
    push();
    if (!string.includes('\n')) {
        for (let i = 0; i < string.length; i++) {
            e.fill(e.lerpColor(startColor, endColor, i / (string.length)));
            e.text(string[i], x + e.textWidth(string.slice(0, i)), y);
        }
    } else {
        const strings = string.split('\n');
        for (const i in strings) {
            fastGradientText(strings[i], x, y + i * textAscent(), startColor, endColor);
        }
    }
    pop();
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
 * Sets font, size and other [CSS font
 * properties]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/font}.
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
 * Draws a string with a highlight background.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {number} [highlightColor=YELLOW] color of highlight background
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
 * Draws text with multiple colors that are passed in using special syntax.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
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
 * Formats string similar to [template
 * literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
 * in ES6
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

/** @module Shape */

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Shape Essentials depends on the Essentials Core.');
} else {
    SHAPE_ESSENTIALS = true;
    if (!_silent_ && !_shape_initialized_) console.info(
        '%cShape Essentials',
        'font-family:system-ui;font-size:0.75rem;'
    );
}

/**
 * Faster blur effect on a rectangular selection.
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} size intensity of blur
 */
blurRect = (x, y, width, height, size) => {
    if (size <= 0) return;
    size = e.constrain(size, 0, Math.min(width, height));
    e.image(e.get(x, y, width, height), x, y, width / size, height / size);
    e.image(e.get(x, y, width / size, height / size), x, y, width, height);
};

/**
 * Draws a 2D cylinder.
 *
 * @link https://www.khanacademy.org/cs/-/5157537806548992
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
    push();
    e.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? e.TWO_PI : 360;
        e.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const central = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            e.vertex(z, -r);
            e.bezierVertex(z + central, -r, z + r, -central, z + r, 0);
            e.bezierVertex(z + r, central, z + central, r, z, r);
            e.vertex(-z, r);
            e.bezierVertex(-z - central, r, -z - r, central, -z - r, 0);
            e.bezierVertex(-z - r, -central, -z - central, -r, -z, -r);
        }, true);
    }
    pop();
};

/**
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 *
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 *
 */
circle = (x, y, radius) => e.ellipse(x, y, radius, radius);

/**
 * @summary
 * Draws a dashed line.
 *
 * @description
 * If `endDash` is true, a dash will be drawn of smaller length than defined by
 * `dashLength` to finish the line. If `endPoint` is true, a point will be drawn
 * at (x2, y2). Use the `smooth` function to prevent jagged dashes.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 * @param {boolean} [endDash=true] draw dash at end
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(3);
 * dashedLine(50, 50, 350, 50);
 * // expected outcome: straight dashed line
 *
 * @example
 * dashedLine(50, 75, 350, 75, 5, 10);
 * // expected outcome: straight dashed line with a dash length of 5 and spacing of 10
 *
 * @example
 * dashedLine(50, 100, 350, 100, 5, 10, false, false);
 * // expected outcome: straight dashed line and no end point
 *
 * @example
 * dashedLine(50, 125, 352.5, 125, 10, 5);
 * // expected outcome: straight dashed line and an end dash
 *
 * @example
 * dashedLine(50, 150, 352.5, 150, 10, 5, false);
 * // expected outcome: straight dashed line and no end dash
 *
 * @see dottedLine
 */
dashedLine = (x1, y1, x2, y2, dashLength = 10, spacing = 10, endDash = true, endPoint = true) => {
    const length = e.dist(x1, y1, x2, y2);
    let i = 0;
    for (; i <= length - dashLength; i += dashLength + 2 * spacing) {
        e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), e.map(i + dashLength, 0, length, x1, x2), e.map(i + dashLength, 0, length, y1, y2));
    }
    if (endDash && i < length) e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), x2, y2);
    if (endPoint && i >= length) e.point(x2 + 0.5, y2 + 0.5);
};

/**
 * @summary
 * Draws a dotted line.
 *
 * @description
 * If `endPoint` is true, a point will be drawn at (x2, y2). Use the `smooth`
 * function to prevent jagged points.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [spacing=10] gap between points
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(4);
 * dottedLine(50, 50, 350, 50);
 * // expected outcome: straight dotted line
 *
 * @example
 * dottedLine(50, 75, 350, 75, 14);
 * // expected outcome: straight dotted line with spacing of 14
 *
 * @example
 * dottedLine(50, 100, 350, 100, 14, false);
 * // expected outcome: straight dotted line with spacing of 14 and no end point
 *
 * @see dashedLine
 */
dottedLine = (x1, y1, x2, y2, spacing = 10, endPoint = true) => {
    const length = e.dist(x1, y1, x2, y2);
    for (let i = 0; i < length; i += spacing) {
        e.point(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2));
    }
    if (endPoint) e.point(x2, y2);
};

/**
 * Draws a donut.
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
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
    push();
    e.translate(x, y);
    push();
    e.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, central, central, radius, 0, radius);
        e.bezierVertex(-central, radius, -radius, central, -radius, 0);
        e.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        e.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, -central, central, -radius, 0, -radius);
        e.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        e.bezierVertex(-radius, central, -central, radius, 0, radius);
        e.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    pop();

    push();
    e.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    pop();
    pop();
};

/**
 * Alias for `beginShape()`/`endShape()`.
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
    close = close && e.CLOSE;
    e.beginShape(mode);
    fn();
    e.endShape(close);
};

/**
 * Draws a line of a given length and at a given angle.
 *
 * @param {number} x x-coordinate of start point
 * @param {number} y y-coordinate of start point
 * @param {number} length length of line
 * @param {number} angle rotation of line
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
edge = (x, y, length, angle) => {
    if (angleMode == 'degrees') angle = e.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    line(x, y, x2, y2);
};

/**
 * Draws a heart.
 *
 * @link https://www.khanacademy.org/cs/-/2085250861
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
        e.vertex(x, ay);
        e.bezierVertex(c1x, c1y, c2x, c2y, x, by);
        c1x = 2 * x - c1x;
        c2x = 2 * x - c2x;
        e.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
    }, true);
};

/**
 * Draws a parallelogram.
 *
 * @link https://www.khanacademy.org/cs/-/4747962019348480
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
 * @see rhombus
 */
parallelogram = (ax, ay, bx, by, cx, cy) => {
    const dx = bx - ax;
    const dy = by - ay;
    e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

/**
 * Draws a polygon with _n_ sides.
 *
 * @link https://www.khanacademy.org/cs/-/1304459398
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
    push();
    e.translate(x, y);
    e.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            e.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    pop();
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
 * @see square
 */
rectangle = (x, y, width, height = width, tl, tr, br, bl) => {
    if (tl == undefined) e.rect(x, y, width, height);
    else if (tr == undefined) e.rect(x, y, width, height, tl);
    else if (br == undefined) e.rect(x, y, width, height, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, width, height, tl, tr, br, 0);
    else e.rect(x, y, width, height, tl, tr, br, bl);
};

/**
 * Draws a rhombus.
 *
 * @link https://khanacademy.org/cs/-/4747962019348480
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
 * @see parallelogram
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
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
 * @see rectangle
 */
square = (x, y, side, tl, tr, br, bl) => {
    if (tl == undefined) e.rect(x, y, side, side);
    else if (tr == undefined) e.rect(x, y, side, side, tl);
    else if (br == undefined) e.rect(x, y, side, side, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, side, side, tl, tr, br, 0);
    else e.rect(x, y, side, side, tl, tr, br, bl);
};

/**
 * Draws a star with _n_ spikes.
 *
 * @link https://www.khanacademy.org/cs/-/1171581918
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
    const _TAU = (Math.cos(Math.PI) < 0) ? e.TWO_PI : 360;
    const interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
    push();
    e.translate(x, y);
    e.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            e.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);

    pop();
};

/**
 * Draws a trapezoid.
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
    e.quad(x + (maxBase - topBase) / 2, y,
        x + (maxBase - topBase) / 2 + topBase - 1, y,
        x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1,
        x + (maxBase - bottomBase) / 2, y + height - 1);
};
