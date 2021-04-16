/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file KA Essentials Build
 * @author Bhavjit Chauhan
 */

//jshint ignore: start


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

_environment_ = this instanceof Processing ? 'CDN' : 'KA';
_console_style_ = 'font-family:system-ui;font-size:0.75rem;';
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.1.0';
ESSENTIALS_ASCII = "\n    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/\n   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/\n  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/\n _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/\n_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/\n\n";
_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info("%cESSENTIALS\n%cThe Khan Academy utility library.\n\n".concat(_environment_, " Build\nVersion ").concat(ESSENTIALS_VERSION, "\nCopyright \xA9 2021 Bhavjit Chauhan\nhttps://github.com/bhavjitChauhan/Essentials"), "color:transparent;\nfont-size:3rem;\nbackground-image: url('https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true');\nbackground-position:center;\nbackground-repeat: no-repeat;\nbackground-size:contain;", _console_style_);
_eval = eval;
e = Processing.instances[0];
var _ref = [e.LEFT, e.RIGHT, e.TOP, e.BOTTOM, e.UP, e.DOWN];
LEFT = _ref[0];
RIGHT = _ref[1];
TOP = _ref[2];
BOTTOM = _ref[3];
UP = _ref[4];
DOWN = _ref[5];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;
WIDTH = e.width;
HEIGHT = e.height;
HALF_WIDTH = WIDTH / 2;
HALF_HEIGHT = HEIGHT / 2;
CANVAS = '#output-canvas';
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

clearLogs = function () {
  return e._clearLogs();
};

noop = function () {
  return _.noop;
};

restart = function () {
  return e.Program.restart();
};

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

chainAsync = function (fns) {
  var i = 0;

  var last = _.last(fns);

  var next = function () {
    var fn = fns[i++];
    fn === last ? fn() : fn(next);
  };

  next();
};

clean = function (fn) {
  var string = fn.toString().replace(/__env__\.KAInfiniteLoopCount\+\+;/g, '').replace(/if \(__env__\.KAInfiniteLoopCount > 1000\) {[\s]+__env__\.KAInfiniteLoopProtect\('[^']*'\);[^}]+}/g, '').replace(/__env__\.PJSOutput\.applyInstance\((__env__\.\S+), '\S+'\)/g, 'new $1');
  return Object.constructor("return (function(__env__) {return ".concat(string, ";});"))()(e);
};

complement = function (fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
};

generateUUID = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};

getColonTime = function () {
  return new Date().toTimeString().slice(0, 8);
};

inherit = function (subClass, superClass) {
  Object.setPrototypeOf(subClass.prototype, superClass.prototype);
  subClass.prototype.constructor = subClass;
  if (superClass.prototype.constructor === Object) superClass.prototype.constructor = superClass;
};

isImage = function (obj) {
  if (typeof obj != 'object') {
    return false;
  }

  return _.isObject(obj.sourceImg);
};

isFont = function (obj) {
  if (typeof obj != 'object') {
    return false;
  }

  return _.isFunction(obj.getCSSDefinition);
};

isSound = function (obj) {
  if (typeof obj != 'object') {
    return false;
  }

  return _.isObject(obj.audio);
};

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

pop = function () {
  e.popStyle();
  e.popMatrix();
};

printf = function (string) {
  var args = Array.from(arguments).slice(1);

  for (var i in args) {
    string = string.replace(/(?<!\\)%/, args[i]);
  }

  string = string.replaceAll(/\\%/g, '%');
  e.println(string);
};

randomInt = function (min, max) {
  return _.random(min, max);
};

push = function () {
  e.pushMatrix();
  e.pushStyle();
};

showGraphics = function (x, y, width, height, fn) {
  var renderer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : e.P2D;
  var g = e.createGraphics(width, height, renderer);
  fn.call(g);
  e.image(g, x, y);
};

timeTaken = function (callback) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  console.time("timeTaken#".concat(id));
  var r = callback();
  console.timeEnd("timeTaken#".concat(id));
  return r;
};
