/**
 * The Khan Academy utility library.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file Local Khan Academy utility JavaScript library
 * @author Bhavjit Chauhan
 */

//jshint ignore: start
var e = eval('__env__');


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * The Khan Academy utility library.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file Khan Academy utility JavaScript library
 * @author Bhavjit Chauhan
 */
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.0.1';
ESSENTIALS_ASCII = "/\\\\\\\\\\\\\\\\  /\\\\ \\\\    /\\\\ \\\\  /\\\\\\\\\\\\\\\\/\\\\\\     /\\\\/\\\\\\ /\\\\\\\\\\\\/\\\\      /\\       /\\\\        /\\\\ \\\\  \n/\\\\      /\\\\    /\\\\/\\\\    /\\\\/\\\\      /\\ /\\\\   /\\\\     /\\\\    /\\\\     /\\ \\\\     /\\\\      /\\\\    /\\\\\n/\\\\       /\\\\       /\\\\      /\\\\      /\\\\ /\\\\  /\\\\     /\\\\    /\\\\    /\\  /\\\\    /\\\\       /\\\\      \n/\\\\\\\\\\\\     /\\\\       /\\\\    /\\\\\\\\\\\\  /\\\\  /\\\\ /\\\\     /\\\\    /\\\\   /\\\\   /\\\\   /\\\\         /\\\\    \n/\\\\            /\\\\       /\\\\ /\\\\      /\\\\   /\\ /\\\\     /\\\\    /\\\\  /\\\\\\\\\\\\ /\\\\  /\\\\            /\\\\ \n/\\\\      /\\\\    /\\\\/\\\\    /\\\\/\\\\      /\\\\    /\\ \\\\     /\\\\    /\\\\ /\\\\       /\\\\ /\\\\      /\\\\    /\\\\\n/\\\\\\\\\\\\\\\\  /\\\\ \\\\    /\\\\ \\\\  /\\\\\\\\\\\\\\\\/\\\\      /\\\\     /\\\\    /\\\\/\\\\         /\\\\/\\\\\\\\\\\\\\\\  /\\\\ \\\\";
_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info("%cEssentials Library\n%cThe Khan Academy utility library.\n\nVersion ".concat(ESSENTIALS_VERSION, "\nCopyright \xA9 2021 Bhavjit Chauhan\nhttps://github.com/bhavjitChauhan/Essentials"), 'font-family:system-ui;font-size:1rem;', 'font-family:system-ui;font-size:0.75rem;');
e = Processing.instances[0];
_eval = eval;

/**
 * Alias for `_clearLogs()`.
 *
 * @example
 * println('Hello World');
 * clearLogs();
 * // expected outcome: blank canvas console
 */
clearLogs = function () {
  return e._clearLogs();
};

/**
 * Literally does nothing.
 * 
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = function () {
  return _.noop;
};

/**
 * Alias for `Program.restart()`
 */
restart = function () {
  return e.Program.restart();
};

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
 * Attempts to invoke a function with the provided arguments, returning either
 *      the result or an error.
 *
 * @link https://www.30secondsofcode.org/js/s/attempt
 *
 * @param {} fn Function to attempt.
 * @param {...*} args Functions arguments.
 */
attempt = function (fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
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
chainAsync = function (fns) {
  var i = 0;

  var last = _.last(fns);

  var next = function () {
    var fn = fns[i++];
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
clean = function (fn) {
  var string = fn.toString().replace(/__env__\.KAInfiniteLoopCount\+\+;/g, '').replace(/if \(__env__\.KAInfiniteLoopCount > 1000\) {[\s]+__env__\.KAInfiniteLoopProtect\('[^']*'\);[^}]+}/g, '').replace(/__env__\.PJSOutput\.applyInstance\((__env__\.\S+), '\S+'\)/g, 'new $1');
  return Object.constructor("return (function(__env__) {return ".concat(string, ";});"))()(e);
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
complement = function (fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
};

/**
 * Generates a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}.
 * 
 * @returns {string}
 */
generateUUID = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};

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
  return new Date().toTimeString().slice(0, 8);
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
inherit = function (subClass, superClass) {
  Object.setPrototypeOf(subClass.prototype, superClass.prototype);
  subClass.prototype.constructor = subClass;
  if (superClass.prototype.constructor === Object) superClass.prototype.constructor = superClass;
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
isFont = function (obj) {
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
isImage = function (obj) {
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
isSound = function (obj) {
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
 * The functions will be called _x_ number of times. Their times will be how long
 * they took to run _x_ number of times. The more iterations, the more accurate
 * the result.
 *
 * Running resource-intensive function may result in an infinite loop error. You
 * can bypass this using the {@link clean} function.
 *
 * @link https://www.30secondsofcode.org/js/s/most-performant
 *
 * @param {Array} fns Functions to be compared
 * @param {number} [iterations=1e4] Number of times function should be invoked
 *
 * @returns {Object} Index of function which performed fastest and times
 *  recorded
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
mostPerformant = function (fns) {
  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
  var times = fns.map(function (fn) {
    var before = performance.now();

    for (var i = 0; i < iterations; i++) {
      fn();
    }

    return performance.now() - before;
  });
  return times.indexOf(Math.min.apply(Math, _toConsumableArray(times)));
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
pop = function () {
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
printf = function (string) {
  var args = Array.from(arguments).slice(1);

  for (var i in args) {
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
push = function () {
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
randomInt = function (min, max) {
  return _.random(min, max);
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
timeTaken = function (callback) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  console.time("timeTaken#".concat(id));
  var r = callback();
  console.timeEnd("timeTaken#".concat(id));
  return r;
};

/** @module Color */
_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Color Essentials depends on the Essentials Core.');
} else {
  COLOR_ESSENTIALS = true;
  if (!_silent_ && !_color_initialized_) console.info('%cColor Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

/**
 * @summary
 * Alias for `color(255, 0, 0)`.
 * 
 * @description
 * Essentials includes the [CSS color names]{@link w3schools.com/colors/colors_names.asp} in the format `COLORNAME`.
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
 * Essentials includes the [CSS color names]{@link w3schools.com/colors/colors_names.asp} in the format `COLORNAME`.
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
 * Essentials includes the [CSS color names]{@link w3schools.com/colors/colors_names.asp} in the format `COLORNAME`.
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
LIGHTSALMON = e.color(255, 160, 122), SALMON = e.color(250, 128, 114);
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
hexToRGB = function (hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
HSBToRGB = function (x, s, v) {
  if (arguments.length == 1) {
    c = x;
    x = e.hue(c), s = e.saturation(c), v = e.brightness(c);
  }

  x /= 255, s /= 255, v /= 255;
  var i = Math.floor(x * 6),
      f = x * 6 - i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s);
  var r, g, b;

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  var result = [r, g, b].map(function (i) {
    return i * 255;
  });
  return e.color.apply(e, result);
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
RGBToHSB = function (x, g, b) {
  if (arguments.length == 1) {
    c = x;
    x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
  }

  x /= 255, g /= 255, b /= 255;
  var maxValue = Math.max(x, g, b);
  var minValue = Math.min(x, g, b);
  var v = maxValue;
  var d = maxValue - minValue;
  var s = maxValue === 0 ? 0 : d / maxValue;

  if (maxValue === minValue) {
    h = 0;
  } else {
    switch (maxValue) {
      case x:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - x) / d + 2;
        break;

      case b:
        h = (x - g) / d + 4;
        break;
    }

    h /= 6;
  }

  var result = [h, s, v].map(function (i) {
    return i * 255;
  });
  push();
  e.colorMode(e.HSB);
  result = e.color.apply(e, result);
  pop();
  return result;
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
RGBToHex = function (x, g, b) {
  if (arguments.length == 1) {
    c = x;
    x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
  }

  return '#' + ((1 << 24) + (x << 16) + (g << 8) + b).toString(16).slice(1);
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
toHSB = function () {
  var args = arguments;

  if (args.length == 1) {
    var _c = args[0];

    if (typeof _c == 'number') {
      return [e.hue(_c), e.saturation(_c), e.brightness(_c)];
    } else {
      return RGBToHSB.apply(e, toRGB(hexToRGB(_c)));
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
toRGB = function () {
  var args = arguments;

  if (args.length == 1) {
    var _c2 = args[0];

    if (typeof _c2 == 'number') {
      return [e.red(_c2), e.green(_c2), e.blue(_c2)];
    } else {
      return hexToRGB(_c2);
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
  if (!_silent_ && !_text_initialized_) console.info('%cText Essentials', 'font-family:system-ui;font-size:0.75rem;');
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
  var properties = Array.from(arguments).slice(1); // Font size doesn't take effect unless `properties` array has at least one

  properties.push('');
  var call = properties.find(function (property) {
    return _.isBoolean(property);
  });
  call = !_.isBoolean(call) && true;
  properties = _.without(properties, true, false);

  var _font;

  var size = properties.find(function (property) {
    return !isNaN(property);
  });

  if (isFont(family)) {
    _font = family;
    size = size || +_font.css.match(/\d+/)[0];
    previousCSS = _font.css.split(' ');
    previousProperties = previousCSS.slice(0, -2).filter(function (property) {
      return property !== 'normal';
    });
    properties = _.union(properties, previousProperties);
    var negates = properties.filter(function (property) {
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
    properties = _.difference(properties, negates).join(' ');
    _font.css = "".concat(properties, " ").concat(size, "px/").concat(size + 2, "px ").concat(_.last(previousCSS)); // font.css = properties + ' ' + size + 'px/' + (size + 2) + 'px ' + _.last(previousCSS);
  } else {
    size = size || 12;
    _font = e.createFont(family, size);
    properties = _.without(properties, size);
    _font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + "".concat(size, "px/").concat(size + 2, "px ").concat(family); // font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + size + 'px/' + (size + 2) + 'px ' + family;
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
formatDuration = function (ms) {
  if (ms < 0) ms = -ms;
  var time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time).filter(function (val) {
    return val[1] !== 0;
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return "".concat(val, " ").concat(key).concat(val !== 1 ? 's' : '');
  }).join(', ');
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
highlightText = function (string) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.textAscent();
  var highlightColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : YELLOW;

  if (!/\S/.test(string)) {
    return;
  }

  string = string.split('\n');
  e.noStroke();
  e.rectMode(e.CORNER);
  e.textAlign(e.LEFT, e.TOP);

  for (var i in string) {
    string[i] = " ".concat(string[i], " ");
    push();
    e.fill(highlightColor);
    e.rect(x, y + i * e.textAscent() * 2, e.textWidth(string[i]), e.textAscent() * 1.75);
    pop();
    e.text(string[i], x, y + i * e.textAscent() * 2);
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
lightOrDarkText = function (backgroundColor) {
  var r, g, b;

  if (typeof backgroundColor === 'string') {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor);
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
multicoloredText = function (string) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.textAscent();

  if (!/\S/.test(string)) {
    return;
  }

  string = string.split('\n');
  push();
  e.textAlign(e.LEFT, e.CORNER);

  for (var i in string) {
    string[i] = string[i].split(/\[|]/);
    var splits = 0;

    for (var j in string[i]) {
      if (/\d+,\d+,\d+/.test(string[i][j])) {
        var rgb = string[i][j].split(',');
        e.fill.apply(e, rgb);
        delete string[i][j];

        if (splits === 0) {
          string[i][j - 1] += ' ';
        }

        splits += 1;
      } else {
        var w = e.textWidth(string[i].slice(0, j));
        e.text(string[i][j], x + w - splits * 2 * e.textWidth(' '), y + i * e.textAscent() * 2);
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
ordinalSuffix = function (n) {
  var int = parseInt(n, 10),
      digits = [int % 10, int % 100],
      oPattern = [1, 2, 3, 4],
      ordinals = ['st', 'nd', 'rd', 'th'],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
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
outlineText = function (string) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.textAscent();
  var outlineColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BLACK;

  if (!/\S/.test(string)) {
    return;
  }

  push();
  e.fill(outlineColor);

  for (var i = -2; i < 3; i++) {
    for (var j = -1; j < 3; j++) {
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
pluralize = function (value, word) {
  var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';

  var _pluralize = function (num, word) {
    var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';
    return [1, -1].includes(Number(num)) ? word : plural;
  };

  if (typeof value === 'object') return function (num, word) {
    return _pluralize(num, word, value[word]);
  };
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
  var string = this;

  var match = _.first(string.match(/\${.*?}/));

  while (match) {
    var formatted = void 0;

    try {
      formatted = _eval("`".concat(match, "`"));
    } catch (error) {
      var _e2;

      var head = match.match(/(\w+)\(/)[1];
      var args = match.match(/\(([^)]+)\)/)[1].split(',');
      formatted = (_e2 = e)[head].apply(_e2, _toConsumableArray(args));
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
  var str = '';

  for (var i in _.range(this.length)) {
    var curr = this.charCodeAt(i).toString(16);

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
  var s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
  }).join('');
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
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('-');
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
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('_');
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
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }).join(' ');
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
underlineText = function (string) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.textAscent();
  var underlineColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BLACK;
  var underlineWeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : e.externals.context.font.match(/\d+/)[0] / 12;

  if (!/\S/.test(string)) {
    return;
  }

  strings = string.split('\n');
  push();
  e.strokeCap(e.SQUARE);
  e.strokeWeight(underlineWeight);
  e.stroke(underlineColor);

  for (var i in strings) {
    e.line(x, y + e.textAscent() / 4 + e.textAscent() * i * 1.55, x + e.textWidth(strings[i]), y + e.textAscent() / 4 + e.textAscent() * i * 1.55);
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
wordWrap = function (str, max) {
  var br = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';
  return str.replace(new RegExp("(?![^\\n]{1,".concat(max, "}$)([^\\n]{1,").concat(max, "})\\s"), 'g'), '$1' + br);
};
