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

// jshint ignore: start
(/\/*/);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

_environment_ = this instanceof Window ? 'CDN' : 'KA';
_console_style_ = 'font-family:system-ui;font-size:0.75rem;';
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '2.0.0';
ESSENTIALS_ASCII = "\n    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/\n   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/\n  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/\n _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/\n_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/\n\n";
_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info("%cESSENTIALS\n%cThe Khan Academy utility library.\n\n".concat(_environment_, " Build\nVersion ").concat(ESSENTIALS_VERSION, "\nCopyright \xA9 2021 Bhavjit Chauhan\nhttps://github.com/bhavjitChauhan/Essentials"), "color:transparent;\nfont-size:3rem;\nbackground-image: url('https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true');\nbackground-position:center;\nbackground-repeat: no-repeat;\nbackground-size:contain;", _console_style_);
_eval = eval;
p = Processing.instances[0];
var _ref = [p.LEFT, p.RIGHT, p.TOP, p.BOTTOM, p.UP, p.DOWN];
LEFT = _ref[0];
RIGHT = _ref[1];
TOP = _ref[2];
BOTTOM = _ref[3];
UP = _ref[4];
DOWN = _ref[5];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;
WIDTH = p.width;
HEIGHT = p.height;
HALF_WIDTH = WIDTH / 2;
HALF_HEIGHT = HEIGHT / 2;
ctx = p.externals.context;
WHITE = 0xFFFFFFFF;
SILVER = 0xFFC0C0C0;
GREY = 0xFF808080;
BLACK = 0xFF000000;
RED = 0xFFFF0000;
MAROON = 0xFF800000;
ORANGE = 0xFFFFA500;
YELLOW = 0xFFFFFF00;
OLIVE = 0xFF808000;
LIME = 0xFF00FF00;
GREEN = 0xFF008000;
AQUA = 0xFF00FFFF;
TEAL = 0xFF008080;
BLUE = 0xFF0000FF;
NAVY = 0xFF000080;
FUCHSIA = 0xFFFF00FF;
PURPLE = 0xFF800080;
TRANSPARENT = 0x00FFFFFF;

_hash = function (buffer) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var PRIME_1 = 2654435761,
      PRIME_2 = 2246822519,
      PRIME_3 = 3266489917,
      PRIME_4 = 668265263,
      PRIME_5 = 374761393;
  var b = buffer;
  var acc = seed + PRIME_5 & 0xFFFFFFFF;
  var offset = 0;

  if (b.length >= 16) {
    var accN = [seed + PRIME_1 + PRIME_2 & 0xFFFFFFFF, seed + PRIME_2 & 0xFFFFFFFF, seed + 0 & 0xFFFFFFFF, seed - PRIME_1 & 0xFFFFFFFF];
    var _b = buffer;

    var _limit = _b.length - 16;

    var lane = 0;

    for (offset = 0; (offset & 0xFFFFFFF0) <= _limit; offset += 4) {
      var i = offset;
      var laneN0 = _b[i + 0] + (_b[i + 1] << 8);
      var laneN1 = _b[i + 2] + (_b[i + 3] << 8);
      var laneNP = laneN0 * PRIME_2 + (laneN1 * PRIME_2 << 16);

      var _acc = accN[lane] + laneNP & 0xFFFFFFFF;

      _acc = _acc << 13 | _acc >>> 19;
      var acc0 = _acc & 0xFFFF;
      var acc1 = _acc >>> 16;
      accN[lane] = acc0 * PRIME_1 + (acc1 * PRIME_1 << 16) & 0xFFFFFFFF;
      lane = lane + 1 & 0x3;
    }

    acc = (accN[0] << 1 | accN[0] >>> 31) + (accN[1] << 7 | accN[1] >>> 25) + (accN[2] << 12 | accN[2] >>> 20) + (accN[3] << 18 | accN[3] >>> 14) & 0xFFFFFFFF;
  }

  acc = acc + buffer.length & 0xFFFFFFFF;
  var limit = buffer.length - 4;

  for (; offset <= limit; offset += 4) {
    var _i = offset;

    var _laneN = b[_i + 0] + (b[_i + 1] << 8);

    var _laneN2 = b[_i + 2] + (b[_i + 3] << 8);

    var laneP = _laneN * PRIME_3 + (_laneN2 * PRIME_3 << 16);
    acc = acc + laneP & 0xFFFFFFFF;
    acc = acc << 17 | acc >>> 15;
    acc = (acc & 0xFFFF) * PRIME_4 + ((acc >>> 16) * PRIME_4 << 16) & 0xFFFFFFFF;
  }

  for (; offset < b.length; ++offset) {
    var _lane = b[offset];
    acc = acc + _lane * PRIME_5;
    acc = acc << 11 | acc >>> 21;
    acc = (acc & 0xFFFF) * PRIME_1 + ((acc >>> 16) * PRIME_1 << 16) & 0xFFFFFFFF;
  }

  acc = acc ^ acc >>> 15;
  acc = ((acc & 0xFFFF) * PRIME_2 & 0xFFFFFFFF) + ((acc >>> 16) * PRIME_2 << 16);
  acc = acc ^ acc >>> 13;
  acc = ((acc & 0xFFFF) * PRIME_3 & 0xFFFFFFFF) + ((acc >>> 16) * PRIME_3 << 16);
  return (acc < 0 ? acc + 4294967296 : acc).toString(16);
};

_pointOnRect = function (width, height, angle) {
  angle = -angle;

  while (angle < -Math.PI) {
    angle += p.TAU;
  }

  while (angle > Math.PI) {
    angle -= p.TAU;
  }

  var rectAtan = Math.atan2(height, width);
  var tanTheta = Math.tan(angle);
  var region;

  if (angle > -rectAtan && angle <= rectAtan) {
    region = 1;
  } else if (angle > rectAtan && angle <= Math.PI - rectAtan) {
    region = 2;
  } else if (angle > Math.PI - rectAtan || angle <= -(Math.PI - rectAtan)) {
    region = 3;
  } else {
    region = 4;
  }

  var result = {
    x: width / 2,
    y: height / 2
  };
  var dx = 1;
  var dy = 1;

  switch (region) {
    case 1:
      dy = -1;
      break;

    case 2:
      dy = -1;
      break;

    case 3:
      dx = -1;
      break;

    case 4:
      dx = -1;
      break;
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

clearLogs = function () {
  return p._clearLogs();
};

noop = function () {};

showGraphics = function () {
  return drawGraphics();
};

attempt = function (fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  } catch (err) {
    return err instanceof Error ? err : new Error(err);
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
  return Object.constructor("return (function(__env__) {return ".concat(string, ";});"))()(p);
};

complement = function (fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
};

evalPJS = function (str) {
  return _eval("with (p) ".concat(str));
};

drawGraphics = function (x, y, width, height, fn) {
  var renderer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p.P2D;
  var g = p.createGraphics(width, height, renderer);
  fn.call(g);
  p.image(g, x, y);
};

generateID = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var odd = length % 2 != 0;

  var arr = _eval("new Uint8Array(Math.ceil(".concat(length, " / 2))"));

  crypto.getRandomValues(arr);
  var id = Array.from(arr, function (i) {
    return i.toString(16).padStart(2, '0');
  }).join('');
  return odd ? id.slice(0, -1) : id;
};

generateUUID = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(_eval('new Uint8Array(1)'))[0] & 15 >> c / 4).toString(16);
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

isEmptyFunction = function (fn) {
  return _.isFunction(fn) && /^function[^{]*[{]\s*[}]\s*$/.test(Function.prototype.toString.call(fn));
};

isFont = function (obj) {
  return obj instanceof p.PFont;
};

isImage = function (obj) {
  return obj instanceof p.PImage;
};

isSound = function (obj) {
  return obj.audio instanceof Audio;
};

mostPerformant = function (fns) {
  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
  var timings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var times = fns.map(function (fn) {
    var startTime = performance.now();

    for (var i = 0; i < iterations; i++) {
      fn();
    }

    return performance.now() - startTime;
  });
  if (timings) return times;
  return times.indexOf(Math.min.apply(Math, _toConsumableArray(times)));
};

pop = function () {
  p.popStyle();
  ctx.restore();
};

printf = function (str) {
  str = str.toString();

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
    var arg = _args[_i2];
    str = str.replace(/(?<!\\)%/, arg);
  }

  str = str.replaceAll(/\\%/g, '%');
  p.println(str);
};

randomInt = function (min, max) {
  return _.random(min, max);
};

push = function () {
  p.pushStyle();
  ctx.save();
};

restart = function () {
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

roundTo = function (n, precision) {
  if (!precision) return n;
  return Math.round(n / precision) * precision;
};

timeTaken = function (callback) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  console.time("timeTaken#".concat(id));
  var r = callback();
  console.timeEnd("timeTaken#".concat(id));
  return r;
};
