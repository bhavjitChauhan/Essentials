// {
/**
 * Essentials X.
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


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

drawGraphics = function (x, y, width, height, fn) {
  var renderer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p.P2D;
  var g = p.createGraphics(width, height, renderer);
  fn.call(g);
  p.image(g, x, y);
};

evalPJS = function (str) {
  return _eval("with (p) ".concat(str));
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

push = function () {
  p.pushStyle();
  ctx.save();
};

randomInt = function (min, max) {
  return _.random(min, max);
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

_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Color Essentials depends on the Essentials Core.');
} else {
  COLOR_ESSENTIALS = true;
  if (!_silent_ && !_color_initialized_) console.info('%cColor Essentials', _console_style_);
}

BRIGHTNESS = 'brightness';
LUMINANCE = 'brightness';
CONTRAST = 'contrast';
DROP_SHADOW = 'drop-shadow';
GRAYSCALE = p.GRAY;
HUE_ROTATE = 'hue-rotate';
OPACITY = 'opacity';
SATURATE = 'saturate';
SEPIA = 'sepia';
RGB_COLOR_RANGE = [255, 255, 255, 255];
HSB_COLOR_RANGE = [360, 100, 100, 100];
MEDIUM_VIOLET_RED = 0xFFC71585;
DEEP_PINK = 0xFFFF1493;
PALE_VIOLET_RED = 0xFFDB7093;
HOT_PINK = 0xFFFF69B4;
LIGHT_PINK = 0xFFFFB6C1;
PINK = 0xFFFFC0CB;
DARK_RED = 0xFF8B0000;
RED = 0xFFFF0000;
FIRE_BRICK = 0xFFB22222;
CRIMSON = 0xFFDC143C;
INDIAN_RED = 0xFFCD5C5C;
LIGHT_CORAL = 0xFFF08080;
SALMON = 0xFFFA8072;
DARK_SALMON = 0xFFE9967A;
LIGHT_SALMON = 0xFFFFA07A;
ORANGE_RED = 0xFFFF4500;
TOMATO = 0xFFFF6347;
DARK_ORANGE = 0xFFFF8C00;
CORAL = 0xFFFF7F50;
ORANGE = 0xFFFFA500;
DARK_KHAKI = 0xFFBDB76B;
GOLD = 0xFFFFD700;
KHAKI = 0xFFF0E68C;
PEACH_PUFF = 0xFFFFDAB9;
YELLOW = 0xFFFFFF00;
PALE_GOLDENROD = 0xFFEEE8AA;
MOCCASIN = 0xFFFFE4B5;
PAPAYA_WHIP = 0xFFFFEFD5;
LIGHT_GOLDENROD_YELLOW = 0xFFFAFAD2;
LEMON_CHIFFON = 0xFFFFFACD;
LIGHT_YELLOW = 0xFFFFFFE0;
MAROON = 0xFF800000;
BROWN = 0xFFA52A2A;
SADDLE_BROWN = 0xFF8B4513;
SIENNA = 0xFFA0522D;
CHOCOLATE = 0xFFD2691E;
DARK_GOLDENROD = 0xFFB8860B;
PERU = 0xFFCD853F;
ROSY_BROWN = 0xFFBC8F8F;
GOLDENROD = 0xFFDAA520;
SANDY_BROWN = 0xFFF4A460;
TAN = 0xFFD2B48C;
BURLY_WOOD = 0xFFDEB887;
WHEAT = 0xFFF5DEB3;
NAVAJO_WHITE = 0xFFFFDEAD;
BISQUE = 0xFFFFE4C4;
BLANCHED_ALMOND = 0xFFFFEBCD;
CORNSILK = 0xFFFFF8DC;
DARK_GREEN = 0xFF006400;
GREEN = 0xFF008000;
DARK_OLIVE_GREEN = 0xFF556B2F;
FOREST_GREEN = 0xFF228B22;
SEA_GREEN = 0xFF2E8B57;
OLIVE = 0xFF808000;
OLIVE_DRAB = 0xFF6B8E23;
MEDIUM_SEA_GREEN = 0xFF3CB371;
LIME_GREEN = 0xFF32CD32;
LIME = 0xFF00FF00;
SPRING_GREEN = 0xFF00FF7F;
MEDIUM_SPRING_GREEN = 0xFF00FA9A;
DARK_SEA_GREEN = 0xFF8FBC8F;
MEDIUM_AQUAMARINE = 0xFF66CDAA;
YELLOW_GREEN = 0xFF9ACD32;
LAWN_GREEN = 0xFF7CFC00;
CHARTREUSE = 0xFF7FFF00;
LIGHT_GREEN = 0xFF90EE90;
GREEN_YELLOW = 0xFFADFF2F;
PALE_GREEN = 0xFF98FB98;
TEAL = 0xFF008080;
DARK_CYAN = 0xFF008B8B;
LIGHT_SEA_GREEN = 0xFF20B2AA;
CADET_BLUE = 0xFF5F9EA0;
DARK_TURQUOISE = 0xFF00CED1;
MEDIUM_TURQUOISE = 0xFF48D1CC;
TURQUOISE = 0xFF40E0D0;
AQUA = 0xFF00FFFF;
CYAN = 0xFF00FFFF;
AQUAMARINE = 0xFF7FFFD4;
PALE_TURQUOISE = 0xFFAFEEEE;
LIGHT_CYAN = 0xFFE0FFFF;
NAVY = 0xFF000080;
DARK_BLUE = 0xFF00008B;
MEDIUM_BLUE = 0xFF0000CD;
BLUE = 0xFF0000FF;
MIDNIGHT_BLUE = 0xFF191970;
ROYAL_BLUE = 0xFF4169E1;
STEEL_BLUE = 0xFF4682B4;
DODGER_BLUE = 0xFF1E90FF;
DEEP_SKY_BLUE = 0xFF00BFFF;
CORNFLOWER_BLUE = 0xFF6495ED;
SKY_BLUE = 0xFF87CEEB;
LIGHT_SKY_BLUE = 0xFF87CEFA;
LIGHT_STEEL_BLUE = 0xFFB0C4DE;
LIGHT_BLUE = 0xFFADD8E6;
POWDER_BLUE = 0xFFB0E0E6;
INDIGO = 0xFF4B0082;
PURPLE = 0xFF800080;
DARK_MAGENTA = 0xFF8B008B;
DARK_VIOLET = 0xFF9400D3;
DARK_SLATE_BLUE = 0xFF483D8B;
BLUE_VIOLET = 0xFF8A2BE2;
DARK_ORCHID = 0xFF9932CC;
FUCHSIA = 0xFFFF00FF;
MAGENTA = 0xFFFF00FF;
SLATE_BLUE = 0xFF6A5ACD;
MEDIUM_SLATE_BLUE = 0xFF7B68EE;
MEDIUM_ORCHID = 0xFFBA55D3;
MEDIUM_PURPLE = 0xFF9370DB;
ORCHID = 0xFFDA70D6;
VIOLET = 0xFFEE82EE;
PLUM = 0xFFDDA0DD;
THISTLE = 0xFFD8BFD8;
LAVENDER = 0xFFE6E6FA;
REBECCA_PURPLE = 0xFF663399;
MISTY_ROSE = 0xFFFFE4E1;
ANTIQUE_WHITE = 0xFFFAEBD7;
LINEN = 0xFFFAF0E6;
BEIGE = 0xFFF5F5DC;
WHITE_SMOKE = 0xFFF5F5F5;
LAVENDER_BLUSH = 0xFFFFF0F5;
OLD_LACE = 0xFFFDF5E6;
ALICE_BLUE = 0xFFF0F8FF;
SEASHELL = 0xFFFFF5EE;
GHOST_WHITE = 0xFFF8F8FF;
HONEYDEW = 0xFFF0FFF0;
FLORAL_WHITE = 0xFFFFFAF0;
AZURE = 0xFFF0FFFF;
MINT_CREAM = 0xFFF5FFFA;
SNOW = 0xFFFFFAFA;
IVORY = 0xFFFFFFF0;
WHITE = 0xFFFFFFFF;
BLACK = 0xFF000000;
DARK_SLATE_GRAY = DARK_SLATE_GREY = 0xFF2F4F4F;
DIM_GRAY = DIM_GREY = 0xFF696969;
SLATE_GRAY = SLATE_GREY = 0xFF708090;
GREY = 0xFF808080;
LIGHT_SLATE_GRAY = LIGHT_SLATE_GREY = 0xFF778899;
DARK_GRAY = DARK_GREY = 0xFFA9A9A9;
SILVER = 0xFFC0C0C0;
LIGHT_GRAY = LIGHT_GREY = 0xFFD3D3D3;
GAINSBORO = 0xFFDCDCDC;

_appendFilter = function (filter) {
  if (ctx.filter == 'none') return ctx.filter = filter;
  ctx.filter += filter;
};

_createColor = function (arr) {
  var colorMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getColorMode();
  var currentColorMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : colorMode;
  var oppositeColorMode = colorMode == p.RGB ? p.HSB : p.RGB;
  var isDifferentColorMode = currentColorMode == oppositeColorMode;
  var defaultAlpha = getAlphaRange();

  if (currentColorMode != colorMode) {
    if (colorMode == p.RGB) defaultAlpha = RGB_COLOR_RANGE[3];else defaultAlpha = HSB_COLOR_RANGE[3];
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

_parseColorArray = function (arr) {
  var defaultAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getAlphaRange();
  var range = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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

clearEffects = function () {
  return ctx.filter = 'none';
};

getBlueRange = function () {
  return p.blue(WHITE);
};

getAlphaRange = function () {
  return p.alpha(WHITE);
};

getBrightnessRange = function () {
  return getBlueRange();
};

getGreenRange = function () {
  return p.green(WHITE);
};

getHueRange = function () {
  return getRedRange();
};

getRedRange = function () {
  return p.red(WHITE);
};

getSaturationRange = function () {
  return getGreenRange();
};

getShadowBlur = function () {
  return ctx.shadowBlur;
};

getShadow = function () {
  return hexToRGB(ctx.shadowColor);
};

isDefaultColorRange = function () {
  return getColorRange() == RGB_COLOR_RANGE;
};

getShadowOffset = function () {
  return [ctx.shadowOffsetX, ctx.shadowOffsetY];
};

noShadow = function () {
  return shadow(TRANSPARENT);
};

angularGradient = function (x, y, width, height, startColor, endColor) {
  var angle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
  angle -= 90;
  var dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
  p.pushStyle();

  if (step == 1) {
    p.strokeWeight(1.5);

    for (var i = angle; i < angle + 359; i += dTheta) {
      p.stroke(p.lerpColor(startColor, endColor, (i - angle) / 360));
      r = p.radians(i);
      p.line(x + width / 2, y + height / 2, p.map(Math.cos(r), -1, 1, x, x + width), p.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    p.strokeWeight(1);

    for (var _i3 = angle; _i3 < angle + 359; _i3 += dTheta) {
      var c = p.lerpColor(startColor, endColor, (_i3 - angle) / 360);
      p.stroke(c);
      p.fill(c);
      r1 = p.radians(_i3);
      r2 = p.radians(_i3 - dTheta);
      p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  p.popStyle();
};

circularGradient = function (x, y, width, height, startColor, endColor) {
  var angle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
  var dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
  p.pushStyle();

  if (step == 1) {
    p.strokeWeight(1.5);

    for (var i = angle - 1; i < angle + 180; i += dTheta) {
      p.stroke(p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
      r = p.radians(i);
      p.line(x + width / 2, y + height / 2, p.map(Math.cos(r), -1, 1, x, x + width), p.map(Math.sin(r), -1, 1, y, y + height));
    }

    for (var _i4 = angle - 1; _i4 > angle - 180; _i4 -= dTheta) {
      p.stroke(p.lerpColor(startColor, endColor, Math.abs((_i4 - angle) / 180)));
      r = p.radians(_i4);
      p.line(x + width / 2, y + height / 2, p.map(Math.cos(r), -1, 1, x, x + width), p.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    p.strokeWeight(1);

    for (var _i5 = angle - 1; _i5 < angle + 180; _i5 += dTheta) {
      var c = p.lerpColor(startColor, endColor, Math.abs((_i5 - angle) / 180));
      p.stroke(c);
      p.fill(c);
      r1 = p.radians(_i5);
      r2 = p.radians(_i5 - dTheta);
      p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));
    }

    r1 = p.radians(angle - 180);
    r2 = p.radians(angle - 180 - dTheta);
    p.stroke(endColor);
    p.fill(endColor);
    p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));

    for (var _i6 = angle - 1; _i6 > angle - 180; _i6 -= dTheta) {
      var _c = p.lerpColor(startColor, endColor, Math.abs((_i6 - angle) / 180));

      p.stroke(_c);
      p.fill(_c);
      r1 = p.radians(_i6);
      r2 = p.radians(_i6 - dTheta);
      p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  p.popStyle();
};

p.blur = function () {
  var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  if (_.isNumber(radius)) radius = "".concat(radius, "px");

  _appendFilter("blur(".concat(radius, ")"));
};

contrast = function (amount) {
  return _appendFilter("contrast(".concat(amount, "%)"));
};

dropShadow = function (x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
  var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#000';
  if (_.isNumber(color)) color = RGBToHex(color);

  _appendFilter("drop-shadow(".concat(x, "px ").concat(y, "px ").concat(radius, "px ").concat(color, ")"));
};

effect = function (filter) {
  var _p;

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  switch (filter) {
    case p.BLUR:
      return (_p = p).blur.apply(_p, args);

    case BRIGHTNESS:
    case LUMINANCE:
      return luminance.apply(void 0, args);

    case CONTRAST:
      return contrast.apply(void 0, args);

    case DROP_SHADOW:
      return dropShadow.apply(void 0, args);

    case p.GRAY:
    case GRAYSCALE:
      return grayscale.apply(void 0, args);

    case HUE_ROTATE:
      return hueRotate.apply(void 0, args);

    case p.INVERT:
      return invert.apply(void 0, args);

    case OPACITY:
      return opacity.apply(void 0, args);

    case SATURATE:
      return saturate.apply(void 0, args);

    case SEPIA:
      return sepia.apply(void 0, args);
  }

  _appendFilter(filter);
};

fastBlur = function () {
  var strength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : WIDTH;
  var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : width || HEIGHT;

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

getColorMode = function () {
  return p.color(getRedRange(), 0, 0) == -0x10000 ? p.RGB : p.HSB;
};

getColorRange = function () {
  return [p.red, p.green, p.blue, p.alpha].map(function (fn) {
    return fn.call(null, WHITE);
  });
};

getFill = function () {
  var draw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  draw && p.rect(0, 0, '%');
  return hexToRGB(ctx.fillStyle);
};

grayscale = function () {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return _appendFilter("grayscale(".concat(amount, "%)"));
};

getStroke = function () {
  var draw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  draw && p.rect(0, 0, '%');
  return hexToRGB(ctx.strokeStyle);
};

hexToHSB = function (hex) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (color) return hexToRGB(hex);
  return RGBToHSB.apply(p, hexToRGB(hex, false));
};

hexToRGB = function (hex) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentColorMode = getColorMode();
  hex = hex.replace('#', '');

  switch (hex.length) {
    case 3:
    case 6:
      hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])$/i, function (_m, r, g, b) {
        return r + r + g + g + b + b;
      });
      break;

    case 4:
    case 8:
      hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, function (_m, r, g, b, a) {
        return r + r + g + g + b + b + a + a;
      });
      break;
  }

  var arr = hex.match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
  if (arr.length == 3) arr.push(RGB_COLOR_RANGE[3]);

  if (!isDefaultColorRange() && currentColorMode == p.RGB) {
    arr = mapColorRange(arr);
  }

  var result = arr;
  if (color) result = _createColor(arr, p.RGB, currentColorMode);
  return result;
};

HSBToHex = function () {
  var shorthand = true,
      octothorpe = true;

  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  if (_.every(_.last(args, 2), _.isBoolean)) {
    octothorpe = args.pop();
    shorthand = args.pop();
  } else if (_.isBoolean(_.last(args))) shorthand = args.pop();

  var notDefaultColorRange = !isDefaultColorRange();
  notDefaultColorRange && p.pushStyle();
  presetColorMode(p.RGB);
  var arr = HSBToRGB.apply(void 0, args).map(function (value) {
    return Math.round(value);
  });
  notDefaultColorRange && p.popStyle();
  return RGBToHex.apply(void 0, _toConsumableArray(arr).concat([shorthand, octothorpe]));
};

HSBToRGB = function () {
  var currentColorRange = getColorRange();
  var mapColorRange = getColorMode() == p.RGB ? currentColorRange : RGB_COLOR_RANGE;
  var h, s, b, a;

  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  switch (args.length) {
    case 1:
      {
        var notDefaultColorRange = !isDefaultColorRange();

        if (notDefaultColorRange) {
          p.pushStyle();
          presetColorMode(p.HSB);
        }

        var _toHSB = toHSB(args[0]);

        var _toHSB2 = _slicedToArray(_toHSB, 4);

        h = _toHSB2[0];
        s = _toHSB2[1];
        b = _toHSB2[2];
        a = _toHSB2[3];
        notDefaultColorRange && p.popStyle();
        h /= 60, s /= 100, b /= 100, a /= 100;
        break;
      }

    case 3:
    case 4:
      if (args.length == 4) a = args.pop() / HSB_COLOR_RANGE[3];
      h = args.shift() / 60;

      var _args$map = args.map(function (value, i) {
        return value /= HSB_COLOR_RANGE[i + 1];
      });

      var _args$map2 = _slicedToArray(_args$map, 2);

      s = _args$map2[0];
      b = _args$map2[1];
  }

  f = function (n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h) % 6;
    return b - b * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  var arr = [f(5), f(3), f(1), a || 1];
  arr = arr.map(function (value, i) {
    return value * mapColorRange[i];
  });
  return arr;
};

hueRotate = function (angle) {
  return _appendFilter("hue-rotate(".concat(angle).concat(p.angleMode == 'degrees' ? 'deg' : 'rad', ")"));
};

invert = function () {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return _appendFilter("invert(".concat(amount, "%)"));
};

linearGradient = function (settings) {
  var x = settings.x,
      y = settings.y,
      width = settings.width,
      height = settings.height,
      stops = settings.stops,
      angle = settings.angle,
      x0 = settings.x0,
      y0 = settings.y0,
      x1 = settings.x1,
      y1 = settings.y1;
  height = height || width;

  if (_.isNumber(angle)) {
    if (p.angleMode == 'degrees') angle = p.radians(angle);

    var _result = _pointOnRect(width, height, angle);

    x0 = x0 || x + width - _result.x;
    y0 = y0 || y + height - _result.y;
    x1 = x1 || x + _result.x;
    y1 = y1 || y + _result.y;
  }

  push();
  var gradient = ctx.createLinearGradient(x0, y0, x1, y1);
  if (!_.every(stops, _.isArray)) stops = stops.map(function (color, i, arr) {
    return [p.norm(i, 0, arr.length - 1), color];
  });

  var _iterator = _createForOfIteratorHelper(stops),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var stop = _step.value;
      if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
      gradient.addColorStop.apply(gradient, _toConsumableArray(stop));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  pop();
};

luminance = function (amount) {
  return _appendFilter("brightness(".concat(amount, "%)"));
};

mapColorRange = function (values, colorRange) {
  var currentColorRange = getColorRange();

  if (colorRange) {
    colorRange = _parseColorArray(colorRange, currentColorRange[3], true);
    values = _parseColorArray(values, currentColorRange[3]).map(function (value, i) {
      return p.map(value, 0, currentColorRange[i], 0, colorRange[i]);
    });
  } else {
    values = _parseColorArray(values, 255).map(function (value, i) {
      return p.map(value, 0, 255, 0, currentColorRange[i]);
    });
  }

  return values;
};

opacity = function (amount) {
  return _appendFilter("opacity(".concat(amount, "%)"));
};

presetColorMode = function (mode) {
  if (!mode) mode = getColorMode() == p.RGB ? p.HSB : p.RGB;

  switch (mode) {
    case p.RGB:
      p.colorMode(p.RGB, 255);
      break;

    case p.HSB:
      p.colorMode(p.HSB, 360, 100, 100, 100);
  }
};

radialGradient = function (settings) {
  var x = settings.x,
      y = settings.y,
      width = settings.width,
      height = settings.height,
      stops = settings.stops,
      x0 = settings.x0,
      y0 = settings.y0,
      r0 = settings.r0,
      x1 = settings.x1,
      y1 = settings.y1,
      r1 = settings.r1;
  height = height || width;
  var centerX = x + width / 2;
  var centerY = y + height / 2;
  if (!_.isNumber(x0)) x0 = centerX;
  if (!_.isNumber(y0)) y0 = centerY;
  r0 = r0 || 0;
  if (!_.isNumber(x1)) x1 = centerX;
  if (!_.isNumber(y1)) y1 = centerY;
  r1 = r1 || width / 2;
  push();
  var gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
  if (!_.every(stops, _.isArray)) stops = stops.map(function (color, i, arr) {
    return [p.norm(i, 0, arr.length - 1), color];
  });

  var _iterator2 = _createForOfIteratorHelper(stops),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var stop = _step2.value;
      if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
      gradient.addColorStop.apply(gradient, _toConsumableArray(stop));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  pop();
};

RGBToHex = function () {
  var hexadecimal,
      shorthand = true,
      octothorpe = true;

  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  if (_.every(_.last(args, 2), _.isBoolean)) {
    octothorpe = args.pop();
    shorthand = args.pop();
  } else if (_.isBoolean(_.last(args))) shorthand = args.pop();

  switch (args.length) {
    case 1:
      {
        var a = p.alpha(args[0]);
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

RGBToHSB = function () {
  var currentColorRange = getColorRange();
  var mapColorRange = getColorMode() == p.HSB ? currentColorRange : HSB_COLOR_RANGE;
  var fns = [function (hue) {
    return p.map(hue, 0, 6, 0, mapColorRange[0]);
  }, function (saturation) {
    return saturation * mapColorRange[1];
  }, function (brightness) {
    return brightness * mapColorRange[2];
  }, function (alpha) {
    return alpha * mapColorRange[3];
  }];
  var r, g, b, a;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  switch (args.length) {
    case 1:
      {
        var notDefaultColorRange = !isDefaultColorRange();

        if (notDefaultColorRange) {
          p.pushStyle();
          presetColorMode(p.RGB);
        }

        var _toRGB$map = toRGB(args[0]).map(function (value, i) {
          return value /= RGB_COLOR_RANGE[i];
        });

        var _toRGB$map2 = _slicedToArray(_toRGB$map, 4);

        r = _toRGB$map2[0];
        g = _toRGB$map2[1];
        b = _toRGB$map2[2];
        a = _toRGB$map2[3];
        notDefaultColorRange && p.popStyle();
        break;
      }

    case 3:
    case 4:
      if (args.length == 4) a = args.pop() / RGB_COLOR_RANGE[3];

      var _args$map3 = args.map(function (value, i) {
        return value /= RGB_COLOR_RANGE[i];
      });

      var _args$map4 = _slicedToArray(_args$map3, 3);

      r = _args$map4[0];
      g = _args$map4[1];
      b = _args$map4[2];
  }

  var max = Math.max(r, g, b),
      chroma = max - Math.min(r, g, b);
  var hue = chroma && (max == r ? (g - b) / chroma : max == g ? 2 + (b - r) / chroma : 4 + (r - g) / chroma);
  var arr = [hue < 0 ? hue + 6 : hue, max && chroma / max, max, a || 1];
  arr = arr.map(function (value, i) {
    return fns[i](value);
  });
  return arr;
};

saturate = function (amount) {
  return _appendFilter("saturate(".concat(amount, "%)"));
};

sepia = function () {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return _appendFilter("sepia(".concat(amount, "%)"));
};

shadow = function () {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var color = args[0];
  if (args.length > 1) color = p.color.apply(null, args);
  if (_.isNumber(args[0])) color = RGBToHex(color, false);
  ctx.shadowColor = color;
};

shadowBlur = function (radius) {
  return ctx.shadowBlur = radius;
};

shadowOffset = function (x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
  if (_.isNumber(x)) ctx.shadowOffsetX = x;
  ctx.shadowOffsetY = y;
};

toHSB = function () {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  switch (args.length) {
    case 1:
      {
        var col = args[0];

        if (_.isNumber(col)) {
          var isRGB = getColorMode() == p.RGB;

          if (isRGB) {
            p.pushStyle();
            presetColorMode(p.HSB);
          }

          var arr = [p.hue(col), p.saturation(col), p.brightness(col), p.alpha(col)];
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

toRGB = function () {
  for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    args[_key10] = arguments[_key10];
  }

  switch (args.length) {
    case 1:
      {
        var col = args[0];

        if (_.isNumber(col)) {
          var isHSB = getColorMode() == p.HSB;

          if (isHSB) {
            p.pushStyle();
            presetColorMode(p.RGB);
          }

          var arr = [p.red(col), p.green(col), p.blue(col), p.alpha(col)];
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

linearGradientOld = function (x, y, width, height, startColor, endColor) {
  var direction = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : RIGHT;
  var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
  push();
  e.strokeWeight(1);

  switch (direction) {
    case LEFT:
    case RIGHT:
      if (direction == LEFT) {
        var _ref2 = [endColor, startColor];
        startColor = _ref2[0];
        endColor = _ref2[1];
      }

      if (step == 1) {
        for (var i = 0; i < width; i++) {
          e.stroke(e.lerpColor(startColor, endColor, i / width));
          e.line(x + i, y, x + i, y + height);
        }
      } else {
        for (var _i7 = 0; _i7 < width; _i7 += step) {
          var c = e.lerpColor(startColor, endColor, _i7 / width);
          e.stroke(c);
          e.fill(c);

          if (_i7 + step > width) {
            e.rect(x + _i7, y, width - _i7, height);
          } else {
            e.rect(x + _i7, y, step, height);
          }
        }
      }

      break;

    case TOP:
    case UP:
    case BOTTOM:
    case DOWN:
      if (direction == TOP || direction == UP) {
        var _ref3 = [endColor, startColor];
        startColor = _ref3[0];
        endColor = _ref3[1];
      }

      if (step == 1) {
        for (var _i8 = 0; _i8 < height; _i8++) {
          e.stroke(e.lerpColor(startColor, endColor, _i8 / height));
          e.line(x, y + _i8, x + width, y + _i8);
        }
      } else {
        for (var _i9 = 0; _i9 < height; _i9 += step) {
          var _c2 = e.lerpColor(startColor, endColor, _i9 / height);

          e.stroke(_c2);
          e.fill(_c2);

          if (_i9 + step > width) {
            e.rect(x, y + _i9, width, height - _i9);
          } else {
            e.rect(x, y + _i9, width, step);
          }
        }
      }

      break;

    case TOP_LEFT:
    case BOTTOM_RIGHT:
      if (direction == TOP_LEFT) {
        var _ref4 = [endColor, startColor];
        startColor = _ref4[0];
        endColor = _ref4[1];
      }

      if (step == 1) {
        for (var _i10 = 0; _i10 < width; _i10++) {
          e.stroke(e.lerpColor(startColor, endColor, _i10 / width / 2));
          e.line(x + _i10, y, x, y + e.map(_i10, 0, width, 0, height));
        }

        for (var _i11 = 0; _i11 < width; _i11++) {
          e.stroke(e.lerpColor(startColor, endColor, _i11 / width / 2 + 0.5));
          e.line(x + _i11, y + height, x + width, y + e.map(_i11, 0, width, 0, height));
        }
      } else {
        var side = Math.max(width, height) * Math.sqrt(2);
        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(-45);

          for (var _i12 = 0; _i12 < side; _i12 += step) {
            var _c3 = this.lerpColor(startColor, endColor, _i12 / side);

            this.stroke(_c3);
            this.fill(_c3);

            if (_i12 + step > side) {
              this.rect(-side / 2, _i12, side, side - _i12);
            } else {
              this.rect(-side / 2, _i12, side, step);
            }
          }
        });
      }

      break;

    case TOP_RIGHT:
    case BOTTOM_LEFT:
      if (direction == TOP_RIGHT) {
        var _ref5 = [endColor, startColor];
        startColor = _ref5[0];
        endColor = _ref5[1];
      }

      if (step == 1) {
        for (var _i13 = 0; _i13 < width; _i13++) {
          e.stroke(e.lerpColor(startColor, endColor, _i13 / width / 2));
          e.line(x + width - _i13, y, x + width, y + e.map(_i13, 0, width, 0, height));
        }

        for (var _i14 = 0; _i14 < width; _i14++) {
          e.stroke(e.lerpColor(startColor, endColor, _i14 / width / 2 + 0.5));
          e.line(x + width - _i14, y + height, x, y + e.map(_i14, 0, width, 0, height));
        }
      } else {
        var _side = Math.max(width, height) * Math.sqrt(2);

        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(45);

          for (var _i15 = 0; _i15 < _side; _i15 += step) {
            var _c4 = this.lerpColor(startColor, endColor, _i15 / _side);

            this.stroke(_c4);
            this.fill(_c4);

            if (_i15 + step > _side) {
              this.rect(0, _i15 - _side / 2, _side, _side - _i15);
            } else {
              this.rect(0, _i15 - _side / 2, _side, step);
            }
          }
        });
      }

  }

  pop();
};

radialGradientOld = function (x, y, width, height, startColor, endColor) {
  var step = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 5;
  push();
  e.strokeWeight(1);
  var maxRadius = Math.max(width, height);

  if (step == 1) {
    e.noFill();

    for (var i = 0; i < maxRadius; i++) {
      e.stroke(e.lerpColor(endColor, startColor, i / maxRadius));
      e.arc(x, y, width - e.map(i, 0, maxRadius, 0, width), height - e.map(i, 0, maxRadius, 0, height), 0, 360);
    }
  } else {
    for (var _i16 = 0; _i16 < maxRadius; _i16 += step) {
      var c = e.lerpColor(endColor, startColor, _i16 / maxRadius);
      e.stroke(c);
      e.fill(c);
      e.ellipse(x, y, width - e.map(_i16, 0, maxRadius, 0, width), height - e.map(_i16, 0, maxRadius, 0, height));
    }
  }

  pop();
};

_text_initialized_ = typeof TEXT_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Text Essentials depends on the Essentials Core.');
} else {
  TEXT_ESSENTIALS = true;
  if (!_silent_ && !_text_initialized_) console.info('%cText Essentials', _console_style_);
}

f = function (str) {
  return format(str);
};

getTextSize = function () {
  return ctx.font.match(/\d+/);
};

fastGradientText = function (string, x, y, startColor, endColor) {
  p.pushStyle();

  if (!string.includes('\n')) {
    for (var i = 0; i < string.length; i++) {
      p.fill(p.lerpColor(startColor, endColor, i / string.length));
      p.text(string[i], x + p.textWidth(string.slice(0, i)), y);
    }
  } else {
    var _strings = string.split('\n');

    for (var _i17 in _strings) {
      fastGradientText(_strings[_i17], x, y + _i17 * textAscent(), startColor, endColor);
    }
  }

  p.popStyle();
};

font = function (family) {
  var properties = Array.from(arguments).slice(1);
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
    _font.css = "".concat(properties, " ").concat(size, "px/").concat(size + 2, "px ").concat(_.last(previousCSS));
  } else {
    size = size || 12;
    _font = p.createFont(family, size);
    properties = _.without(properties, size);
    _font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + "".concat(size, "px/").concat(size + 2, "px ").concat(family);
  }

  call && p.textFont(_font);
  return _font;
};

format = function (str) {
  return evalPJS("`".concat(str, "`"));
};

formatDuration = function (ms, precision) {
  var raw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!ms) return '0';
  if (ms < 0) ms = -ms;
  if (precision) ms = roundTo(ms, precision);
  if (ms < 1e-3) return '0';
  var time = {
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
  return Object.entries(time).filter(function (val) {
    return val[1] !== 0;
  }).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        key = _ref7[0],
        val = _ref7[1];

    return "".concat(val, " ").concat(pluralize(val, key));
  }).join(', ');
};

formatNumber = function (n) {
  var locales = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return n.toLocaleString(locales, options);
};

highlightText = function (string, x, y) {
  var highlightColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : YELLOW;

  if (!/\S/.test(string)) {
    return;
  }

  string = string.split('\n');
  p.pushStyle();
  p.noStroke();
  p.rectMode(p.CORNER);
  p.textAlign(p.LEFT, p.TOP);

  for (var i in string) {
    string[i] = " ".concat(string[i], " ");
    p.pushStyle();
    p.fill(highlightColor);
    p.rect(x, y + i * p.textAscent() * 2, p.textWidth(string[i]), p.textAscent() * 1.75);
    p.popStyle();
    p.text(string[i], x, y + i * p.textAscent() * 2);
  }

  p.popStyle();
};

lightOrDarkText = function (backgroundColor) {
  var r, g, b;

  if (typeof backgroundColor === 'string') {
    var _result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor);

    r = parseInt(_result2[1], 16);
    g = parseInt(_result2[2], 16);
    b = parseInt(_result2[3], 16);
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

multicoloredText = function (string, x, y) {
  if (!/\S/.test(string)) {
    return;
  }

  string = string.split('\n');
  p.pushStyle();
  p.textAlign(p.LEFT, p.CORNER);

  for (var i in string) {
    string[i] = string[i].split(/\[|]/);
    var splits = 0;

    for (var j in string[i]) {
      if (/\d+,\d+,\d+/.test(string[i][j])) {
        var rgb = string[i][j].split(',');
        p.fill.apply(p, rgb);
        delete string[i][j];

        if (splits === 0) {
          string[i][j - 1] += ' ';
        }

        splits += 1;
      } else {
        var w = p.textWidth(string[i].slice(0, j));
        p.text(string[i][j], x + w - splits * 2 * p.textWidth(' '), y + i * p.textAscent() * 2);
      }
    }
  }

  p.popStyle();
};

obfuscate = function (str) {
  var result = '';

  for (var i in _.range(str.length)) {
    var curr = str.charCodeAt(i).toString(16);

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

ordinalSuffix = function (n) {
  var int = parseInt(n, 10),
      digits = [int % 10, int % 100],
      oPattern = [1, 2, 3, 4],
      ordinals = ['st', 'nd', 'rd', 'th'],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
};

outlineText = function (str, x, y) {
  var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : BLACK;
  str = str.replace('\n', '');
  ctx.save();
  ctx.lineJoin = 'round';
  ctx.lineWidth = weight;
  if (_.isNumber(color)) color = typeof COLOR_ESSENTIALS != 'undefined' ? RGBToHex(color, false) : '#' + hex(color, 6);
  ctx.strokeStyle = color;
  ctx.strokeText(str, x, y);
  ctx.restore();
  pushStyle();
  p.textAlign(p.LEFT, p.TOP);
  p.text(str, x, y);
  popStyle();
};

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

removeNonASCII = function (str) {
  return str.replace(/[^\x20-\x7E]/g, '');
};

String.prototype.format = function () {
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

toCamelCase = function (str) {
  var s = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
  }).join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

toKebabCase = function (str) {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('-');
};

toSnakeCase = function (str) {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('_');
};

toTitleCase = function (str) {
  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }).join(' ');
};

underlineText = function (string, x, y) {
  var underlineColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : BLACK;
  var underlineWeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : p.externals.context.font.match(/\d+/)[0] / 12;

  if (!/\S/.test(string)) {
    return;
  }

  strings = string.split('\n');
  p.pushStyle();
  p.strokeCap(p.SQUARE);
  p.strokeWeight(underlineWeight);
  p.stroke(underlineColor);

  for (var i in strings) {
    p.line(x, y + p.textAscent() / 4 + p.textAscent() * i * 1.55, x + p.textWidth(strings[i]), y + p.textAscent() / 4 + p.textAscent() * i * 1.55);
  }

  p.textAlign(p.LEFT, p.CORNER);
  p.text(string, x, y);
  p.popStyle();
};

wordWrap = function (str, max) {
  var br = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';
  return str.replace(new RegExp("(?![^\\n]{1,".concat(max, "}$)([^\\n]{1,").concat(max, "})\\s"), 'g'), '$1' + br);
};

outlineTextOld = function (string) {
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

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Shape Essentials depends on the Essentials Core.');
} else {
  SHAPE_ESSENTIALS = true;
  if (!_silent_ && !_shape_initialized_) console.info('%cShape Essentials', _console_style_);
}

getStrokeCap = function () {
  return ctx.lineCap;
};

getStrokeJoin = function () {
  return ctx.lineJoin;
};

getStrokeWeight = function () {
  return ctx.lineWidth;
};

noStrokeDash = function () {
  return strokeDash();
};

circle = function (x, y, radius) {
  return p.ellipse(x, y, radius, radius);
};

cylinder = function (x, y, width, height) {
  width = Math.abs(width);
  height = Math.abs(height);
  p.pushMatrix();
  p.translate(x, y);

  if (height > width) {
    var _TAU = Math.cos(Math.PI) < 0 ? p.TWO_PI : 360;

    p.rotate(_TAU / 4);
    cylinder(0, 0, height, width);
  } else {
    var _r = height / 2;

    var z = (width - height) / 2;

    var central = 4 / 3 * (Math.sqrt(2) - 1) * _r;

    drawShape(function () {
      p.vertex(z, -_r);
      p.bezierVertex(z + central, -_r, z + _r, -central, z + _r, 0);
      p.bezierVertex(z + _r, central, z + central, _r, z, _r);
      p.vertex(-z, _r);
      p.bezierVertex(-z - central, _r, -z - _r, central, -z - _r, 0);
      p.bezierVertex(-z - _r, -central, -z - central, -_r, -z, -_r);
    }, true);
  }

  p.popMatrix();
};

donut = function (x, y, majorDiameter, minorDiameter) {
  var kappa = 4 / 3 * (Math.sqrt(2) - 1);
  p.pushMatrix();
  p.translate(x, y);
  p.pushStyle();
  p.noStroke();
  drawShape(function () {
    var radius = minorDiameter / 2;
    var central = kappa * radius;
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

drawShape = function (fn, close, mode) {
  close = close && p.CLOSE;
  p.beginShape(mode);
  fn();
  p.endShape(close);
};

edge = function (x, y, length) {
  var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (p.angleMode == 'degrees') angle = p.radians(angle);
  var x2 = x + length * Math.cos(angle);
  var y2 = y + length * Math.sin(angle);
  p.line(x, y, x2, y2);
};

getRotation = function () {
  var degrees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p.angleMode == 'degrees';
  var matrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ctx.getTransform();
  var angle = Math.atan2(matrix.b, matrix.a);
  if (angle < 0) angle += Math.PI * 2;
  return degrees ? p.degrees(angle) : angle;
};

heart = function (x, y, radius) {
  var ay = y - 2 * radius / 5,
      by = y + radius,
      c1y = y - 6 * radius / 5,
      c2y = y - 2 * radius / 5;
  var c1x = x + radius / 2,
      c2x = x + 9 * radius / 5;
  drawShape(function () {
    p.vertex(x, ay);
    p.bezierVertex(c1x, c1y, c2x, c2y, x, by);
    c1x = 2 * x - c1x;
    c2x = 2 * x - c2x;
    p.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
  }, true);
};

parallelogram = function (ax, ay, bx, by, cx, cy) {
  var dx = bx - ax;
  var dy = by - ay;
  p.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

polygon = function (x, y, sides, radius, rotation) {
  var _TAU = Math.cos(Math.PI) < 0 ? 2 * Math.PI : 360;

  p.pushMatrix();
  p.translate(x, y);
  p.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    for (var theta = 0; theta < _TAU; theta += _TAU / sides) {
      p.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
    }
  }, true);
  p.popMatrix();
};

rectangle = function (x, y, width) {
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : width;
  var tl = arguments.length > 4 ? arguments[4] : undefined;
  var tr = arguments.length > 5 ? arguments[5] : undefined;
  var br = arguments.length > 6 ? arguments[6] : undefined;
  var bl = arguments.length > 7 ? arguments[7] : undefined;
  if (tl == undefined) p.rect(x, y, width, height);else if (tr == undefined) p.rect(x, y, width, height, tl);else if (br == undefined) p.rect(x, y, width, height, tl, tl, tr, tr);else if (bl == undefined) p.rect(x, y, width, height, tl, tr, br, 0);else p.rect(x, y, width, height, tl, tr, br, bl);
};

square = function (x, y, side, tl, tr, br, bl) {
  if (tl == undefined) p.rect(x, y, side, side);else if (tr == undefined) p.rect(x, y, side, side, tl);else if (br == undefined) p.rect(x, y, side, side, tl, tl, tr, tr);else if (bl == undefined) p.rect(x, y, side, side, tl, tr, br, 0);else p.rect(x, y, side, side, tl, tr, br, bl);
};

rhombus = function (ax, ay, bx, by, cx, cy) {
  var r = p.dist(ax, ay, bx, by) / p.dist(ax, ay, cx, cy);
  cx = ax + r * (cx - ax);
  cy = ay + r * (cy - ay);
  parallelogram(ax, ay, bx, by, cx, cy);
};

star = function (x, y, externalRadius) {
  var spikes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var rotation = arguments.length > 4 ? arguments[4] : undefined;

  var _TAU = Math.cos(Math.PI) < 0 ? p.TWO_PI : 360;

  var interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
  p.pushMatrix();
  p.translate(x, y);
  p.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    var internalRadius;

    for (var theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
      internalRadius = internalRadius === externalRadius ? interior : externalRadius;
      p.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
    }
  }, true);
  p.popMatrix();
};

strokeDash = function () {
  for (var _len11 = arguments.length, segments = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    segments[_key11] = arguments[_key11];
  }

  return ctx.setLineDash(segments);
};

trapezoid = function (x, y, height, topBase, bottomBase) {
  var maxBase = Math.max(topBase, bottomBase);
  p.quad(x + (maxBase - topBase) / 2, y, x + (maxBase - topBase) / 2 + topBase - 1, y, x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1, x + (maxBase - bottomBase) / 2, y + height - 1);
};

strokeDashOffset = function (offset) {
  return ctx.lineDashOffset = offset;
};

_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';
_set_code_limit_ = typeof _set_code_limit_ !== 'undefined' ? _set_code_limit_ : 25;

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('External Essentials depends on the Essentials Core.');
} else {
  EXTERNAL_ESSENTIALS = true;
  if (!_silent_ && !_external_initialized_) console.info('%cExternal Essentials', _console_style_);
}

CANVAS = '#output-canvas';
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

_preventDefault = function (e) {
  return e.preventDefault();
};

allowScroll = function () {
  return $(CANVAS).off('wheel', _preventDefault);
};

closeLog = function () {
  return $('body > div:nth-child(1) > div:nth-child(3)').click();
};

exitPointerLock = function () {
  return document.exitPointerLock();
};

forceAllowScroll = function () {
  return $(CANVAS).off('wheel');
};

getSelectedText = function () {
  return window.getSelection().toString();
};

preventScroll = function () {
  return $(CANVAS).on('wheel', _preventDefault);
};

requestPointerLock = function () {
  return $(CANVAS)[0].requestPointerLock();
};

resizeLog = function (height) {
  return $('body > div:nth-child(1)').css('height', height);
};

supportsTouchEvents = function () {
  return 'ontouchstart' in window;
};

clearElements = function () {
  return $('#essentials').empty();
};

copyToClipboard = function (str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

detectDeviceType = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
};

detectLanguage = function () {
  var defaultLanguage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  return navigator.language || _.isArray(navigator.languages) && navigator.languages[0] || defaultLanguage;
};

allowBannedProperties = function () {
  if (!_.isEmpty(BabyHint.bannedProperties)) {
    console.warn('Restarting program to allow banned properties...');
    BabyHint.bannedProperties = {};
    restart();
    throw 'Restarting program to allow banned properties...';
  }
};

disableLoopProtector = function () {
  if (!isEmptyFunction(LoopProtector.prototype.leave)) {
    console.warn('Restarting program to disable loop protector...');
    LoopProtector.prototype.leave = noop;
    restart();
    throw 'Restarting program to disable loop protector...';
  }
};

drawElement = function (el) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(el instanceof jQuery)) settings = el;
  var container = $('#essentials');

  if (!container.length) {
    var div = $('<div>', {
      id: 'essentials'
    });
    div.css({
      position: 'absolute',
      'pointer-events': 'none'
    });
    $(CANVAS).parent().prepend(div);
    container = $('#essentials');
  }

  var defaults = {
    data: null,
    id: generateID(),
    x: 0,
    y: 0,
    width: 'max-content',
    height: 'max-content',
    interactive: true
  };

  var _$defaults = _.defaults(settings, defaults),
      data = _$defaults.data,
      id = _$defaults.id,
      x = _$defaults.x,
      y = _$defaults.y,
      width = _$defaults.width,
      height = _$defaults.height,
      interactive = _$defaults.interactive;

  if (el instanceof jQuery) {
    data && el.append(data);
    (x !== 0 || y !== 0) && el.css('position', 'absolute');
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

escapeHTML = function (str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '\'': '&#39;',
      '"': '&quot;'
    }[tag] || tag;
  });
};

getCode = function () {
  var obj = arguments.callee;

  while (!(obj.arguments[0] instanceof Processing)) {
    obj = obj.caller;
    if (obj.arguments[0] instanceof MouseEvent || obj.arguments[0] instanceof KeyboardEvent) return console.warn('`getCode` is not supported in Processing event functions.');
  }

  return obj.caller.arguments[0];
};

getLog = function (i) {
  if (!Number.isInteger(i)) return;
  var keys = ['text', 'time'];
  var pair = [getLogsText(i), getLogsTime(i)];
  return _.object(keys, pair);
};

getLogs = function () {
  var keys = ['text', 'time'],
      arr = [];

  var pairs = _.zip(getLogsText(), getLogsTime());

  pairs.forEach(function (pair) {
    arr.push(_.object(keys, pair));
  });
  return arr;
};

getLogsText = function (i) {
  var logs = $(CANVAS_LOG);

  if (Number.isInteger(i)) {
    if (logs.length <= i) return;
    return logs.eq(i).html();
  }

  return logs.toArray().map(function (el) {
    return $(el).html();
  });
};

getLogsTime = function (i) {
  var logs = $(CANVAS_LOG);

  if (Number.isInteger(i)) {
    if (logs.length <= i) return;
    var el = logs.eq(i);
    var date = new Date().toLocaleDateString();
    var time = el.parent().attr('title');
    return new Date("".concat(date, ", ").concat(time));
  }

  return logs.toArray().map(function (_el, i) {
    return getLogsTime(i);
  });
};

isBrowserTabFocused = function () {
  return !document.hidden;
};

isLocalStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

isSessionStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.sessionStorage.setItem(key, null);
    window.sessionStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

prefersDarkColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

prefersLightColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
};

printHTML = function (data) {
  data = data.replace(/<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g, '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>');
  p.println('');
  $(CANVAS_LOG).last().html(data);
};

printMD = function (data) {
  var str = '';
  var bold, italic;

  function formatMD(tag, open) {
    str += "<".concat(open ? '/' : '').concat(tag, ">");
  }

  for (var i = 0; i < data.length; i++) {
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
          var substr = data.substr(i, data.length);
          var text = substr.match(/(?<=\[).+?(?=\])/)[0];
          var URL = substr.match(/(?<=\().+?(?=\))/)[0];
          str += "<a href=\"".concat(URL, "\">").concat(text, "</a>");
          i += text.length + URL.length + 3;
          break;
        } catch (err) {
          console.warn("Markdown error: ".concat(err));
        }

        break;

      default:
        str += data[i];
    }
  }

  printHTML(str);
};

removeElement = function (id) {
  $("#".concat(id)).remove();
};

__setCodeCallCount = typeof __setCodeCallCount !== 'undefined' ? __setCodeCallCount : 0;
__setCodeLastCall = typeof __setCodeLastCall !== 'undefined' ? __setCodeLastCall : 0;

setCode = function (code) {
  if (_.isNumber(_set_code_limit_)) {
    if (Date.now() - __setCodeLastCall < 75) __setCodeCallCount++;else __setCodeCallCount = 0;
    __setCodeLastCall = Date.now();
  }

  if (__setCodeCallCount > _set_code_limit_) return console.warn('`setCode` limit reached. Set the `_set_code_limit_` flag to `false` to disable this functionality.');
  window.top.postMessage(JSON.stringify({
    code: code
  }));
};

setLog = function (i, data) {
  var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var logs = $(CANVAS_LOG);
  if (logs.length <= i) return;
  var el = logs.eq(i);
  el.html(data);
  if (update) el.parent().attr('title', new Date().toLocaleTimeString());
};

unescapeHTML = function (str) {
  return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
    return {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#39;': '\'',
      '&quot;': '"'
    }[tag] || tag;
  });
};
// }
