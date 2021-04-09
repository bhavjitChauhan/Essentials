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

_environment_ = undefined instanceof Processing ? 'CDN' : 'KA';
_console_style_ = 'font-family:system-ui;font-size:0.75rem;';
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';

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
    `%cESSENTIALS
%cThe Khan Academy utility library.

${_environment_} Build
Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    `color:transparent;
font-size:3rem;
background-image: url("https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true");
background-position:center;
background-repeat: no-repeat;
background-size:contain;`,
    _console_style_
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
 * };
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
 * const testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * const result = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[test] + ' performed faster.');
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
 *     this.background(BLACK);
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
