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

showGraphics = function (x, y, width, height, fn) {
  var renderer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : e.P2D;
  var g = e.createGraphics(width, height, renderer);
  fn.call(g);
  e.image(g, x, y);
};

_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
_env_ = typeof PI == 'undefined' ? 'CDN' : 'KA';
ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.1.0beta';
ESSENTIALS_ASCII = "\n    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/\n   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/\n  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/\n _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/\n_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/\n\n";
_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info("%cEssentials\n%cThe Khan Academy utility library.\n\n".concat(_env_, " Build\nVersion ").concat(ESSENTIALS_VERSION, "\nCopyright \xA9 2021 Bhavjit Chauhan\nhttps://github.com/bhavjitChauhan/Essentials"), 'font-family:system-ui;font-size:1rem;', 'font-family:system-ui;font-size:0.75rem;');

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

isImage = function (obj) {
  if (typeof obj != 'object') {
    return false;
  }

  return _.isObject(obj.sourceImg);
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

push = function () {
  e.pushMatrix();
  e.pushStyle();
};

randomInt = function (min, max) {
  return _.random(min, max);
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
  if (!_silent_ && !_color_initialized_) console.info('%cColor Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

angularGradient = function (x, y, width, height, startColor, endColor) {
  var angle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
  angle -= 90;
  var dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
  push();

  if (step == 1) {
    e.strokeWeight(1.5);

    for (var i = angle; i < angle + 359; i += dTheta) {
      e.stroke(e.lerpColor(startColor, endColor, (i - angle) / 360));
      r = e.radians(i);
      e.line(x + width / 2, y + height / 2, e.map(Math.cos(r), -1, 1, x, x + width), e.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    e.strokeWeight(1);

    for (var _i = angle; _i < angle + 359; _i += dTheta) {
      var _c = e.lerpColor(startColor, endColor, (_i - angle) / 360);

      e.stroke(_c);
      e.fill(_c);
      r1 = e.radians(_i);
      r2 = e.radians(_i - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  pop();
};

circularGradient = function (x, y, width, height, startColor, endColor) {
  var angle = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 5;
  var dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
  push();

  if (step == 1) {
    e.strokeWeight(1.5);

    for (var i = angle - 1; i < angle + 180; i += dTheta) {
      e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
      r = e.radians(i);
      e.line(x + width / 2, y + height / 2, e.map(Math.cos(r), -1, 1, x, x + width), e.map(Math.sin(r), -1, 1, y, y + height));
    }

    for (var _i2 = angle - 1; _i2 > angle - 180; _i2 -= dTheta) {
      e.stroke(e.lerpColor(startColor, endColor, Math.abs((_i2 - angle) / 180)));
      r = e.radians(_i2);
      e.line(x + width / 2, y + height / 2, e.map(Math.cos(r), -1, 1, x, x + width), e.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    e.strokeWeight(1);

    for (var _i3 = angle - 1; _i3 < angle + 180; _i3 += dTheta) {
      var _c2 = e.lerpColor(startColor, endColor, Math.abs((_i3 - angle) / 180));

      e.stroke(_c2);
      e.fill(_c2);
      r1 = e.radians(_i3);
      r2 = e.radians(_i3 - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }

    r1 = e.radians(angle - 180);
    r2 = e.radians(angle - 180 - dTheta);
    e.stroke(endColor);
    e.fill(endColor);
    e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));

    for (var _i4 = angle - 1; _i4 > angle - 180; _i4 -= dTheta) {
      var _c3 = e.lerpColor(startColor, endColor, Math.abs((_i4 - angle) / 180));

      e.stroke(_c3);
      e.fill(_c3);
      r1 = e.radians(_i4);
      r2 = e.radians(_i4 - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  pop();
};

RED = e.color(255, 0, 0);
GREEN = e.color(0, 128, 0);
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

linearGradient = function (x, y, width, height, startColor, endColor) {
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
        for (var _i5 = 0; _i5 < width; _i5 += step) {
          var _c4 = e.lerpColor(startColor, endColor, _i5 / width);

          e.stroke(_c4);
          e.fill(_c4);

          if (_i5 + step > width) {
            e.rect(x + _i5, y, width - _i5, height);
          } else {
            e.rect(x + _i5, y, step, height);
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
        for (var _i6 = 0; _i6 < height; _i6++) {
          e.stroke(e.lerpColor(startColor, endColor, _i6 / height));
          e.line(x, y + _i6, x + width, y + _i6);
        }
      } else {
        for (var _i7 = 0; _i7 < height; _i7 += step) {
          var _c5 = e.lerpColor(startColor, endColor, _i7 / height);

          e.stroke(_c5);
          e.fill(_c5);

          if (_i7 + step > width) {
            e.rect(x, y + _i7, width, height - _i7);
          } else {
            e.rect(x, y + _i7, width, step);
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
        for (var _i8 = 0; _i8 < width; _i8++) {
          e.stroke(e.lerpColor(startColor, endColor, _i8 / width / 2));
          e.line(x + _i8, y, x, y + e.map(_i8, 0, width, 0, height));
        }

        for (var _i9 = 0; _i9 < width; _i9++) {
          e.stroke(e.lerpColor(startColor, endColor, _i9 / width / 2 + 0.5));
          e.line(x + _i9, y + height, x + width, y + e.map(_i9, 0, width, 0, height));
        }
      } else {
        var side = Math.max(width, height) * Math.sqrt(2);
        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(-45);

          for (var _i10 = 0; _i10 < side; _i10 += step) {
            var _c6 = this.lerpColor(startColor, endColor, _i10 / side);

            this.stroke(_c6);
            this.fill(_c6);

            if (_i10 + step > side) {
              this.rect(-side / 2, _i10, side, side - _i10);
            } else {
              this.rect(-side / 2, _i10, side, step);
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
        for (var _i11 = 0; _i11 < width; _i11++) {
          e.stroke(e.lerpColor(startColor, endColor, _i11 / width / 2));
          e.line(x + width - _i11, y, x + width, y + e.map(_i11, 0, width, 0, height));
        }

        for (var _i12 = 0; _i12 < width; _i12++) {
          e.stroke(e.lerpColor(startColor, endColor, _i12 / width / 2 + 0.5));
          e.line(x + width - _i12, y + height, x, y + e.map(_i12, 0, width, 0, height));
        }
      } else {
        var _side = Math.max(width, height) * Math.sqrt(2);

        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(45);

          for (var _i13 = 0; _i13 < _side; _i13 += step) {
            var _c7 = this.lerpColor(startColor, endColor, _i13 / _side);

            this.stroke(_c7);
            this.fill(_c7);

            if (_i13 + step > _side) {
              this.rect(0, _i13 - _side / 2, _side, _side - _i13);
            } else {
              this.rect(0, _i13 - _side / 2, _side, step);
            }
          }
        });
      }

  }

  pop();
};

radialGradient = function (x, y, width, height, startColor, endColor) {
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
    for (var _i14 = 0; _i14 < maxRadius; _i14 += step) {
      var _c8 = e.lerpColor(endColor, startColor, _i14 / maxRadius);

      e.stroke(_c8);
      e.fill(_c8);
      e.ellipse(x, y, width - e.map(_i14, 0, maxRadius, 0, width), height - e.map(_i14, 0, maxRadius, 0, height));
    }
  }

  pop();
};

RGBToHex = function (x, g, b) {
  if (arguments.length == 1) {
    c = x;
    x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
  }

  return '#' + ((1 << 24) + (x << 16) + (g << 8) + b).toString(16).slice(1);
};

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

toHSB = function () {
  var args = arguments;

  if (args.length == 1) {
    var _c9 = args[0];

    if (typeof _c9 == 'number') {
      return [e.hue(_c9), e.saturation(_c9), e.brightness(_c9)];
    } else {
      return RGBToHSB.apply(e, toRGB(hexToRGB(_c9)));
    }
  } else if (args.length == 3) {
    return RGBToHSB.apply(e, args);
  }
};

toRGB = function () {
  var args = arguments;

  if (args.length == 1) {
    var _c10 = args[0];

    if (typeof _c10 == 'number') {
      return [e.red(_c10), e.green(_c10), e.blue(_c10)];
    } else {
      return hexToRGB(_c10);
    }
  } else if (args.length == 3) {
    return HSBToRGB.apply(e, args);
  }
};

_text_initialized_ = typeof TEXT_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Text Essentials depends on the Essentials Core.');
} else if (typeof COLOR_ESSENTIALS === 'undefined') {
  console.error('Text Essentials depends on Color Essentials.');
} else {
  TEXT_ESSENTIALS = true;
  if (!_silent_ && !_text_initialized_) console.info('%cText Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

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
    _font = e.createFont(family, size);
    properties = _.without(properties, size);
    _font.css = (!_.isEmpty(properties) && properties.join(' ') + ' ') + "".concat(size, "px/").concat(size + 2, "px ").concat(family);
  }

  call && e.textFont(_font);
  return _font;
};

fastGradientText = function (string) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.textAscent();
  var startColor = arguments.length > 3 ? arguments[3] : undefined;
  var endColor = arguments.length > 4 ? arguments[4] : undefined;
  push();

  if (!string.includes('\n')) {
    for (var i = 0; i < string.length; i++) {
      e.fill(e.lerpColor(startColor, endColor, i / string.length));
      e.text(string[i], x + e.textWidth(string.slice(0, i)), y);
    }
  } else {
    var _strings = string.split('\n');

    for (var _i15 in _strings) {
      fastGradientText(_strings[_i15], x, y + _i15 * textAscent(), startColor, endColor);
    }
  }

  pop();
};

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
  }).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        key = _ref7[0],
        val = _ref7[1];

    return "".concat(val, " ").concat(key).concat(val !== 1 ? 's' : '');
  }).join(', ');
};

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

ordinalSuffix = function (n) {
  var int = parseInt(n, 10),
      digits = [int % 10, int % 100],
      oPattern = [1, 2, 3, 4],
      ordinals = ['st', 'nd', 'rd', 'th'],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? int + ordinals[digits[0] - 1] : int + ordinals[3];
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

String.prototype.removeNonASCII = function () {
  return this.replace(/[^\x20-\x7E]/g, '');
};

String.prototype.toCamelCase = function () {
  var s = this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
  }).join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

String.prototype.toKebabCase = function () {
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('-');
};

String.prototype.toSnakeCase = function () {
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.toLowerCase();
  }).join('_');
};

String.prototype.toTitleCase = function () {
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
  }).join(' ');
};

wordWrap = function (str, max) {
  var br = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';
  return str.replace(new RegExp("(?![^\\n]{1,".concat(max, "}$)([^\\n]{1,").concat(max, "})\\s"), 'g'), '$1' + br);
};

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

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Shape Essentials depends on the Essentials Core.');
} else {
  SHAPE_ESSENTIALS = true;
  if (!_silent_ && !_shape_initialized_) console.info('%cShape Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

blurRect = function (x, y, width, height, size) {
  if (size <= 0) return;
  size = e.constrain(size, 0, Math.min(width, height));
  e.image(e.get(x, y, width, height), x, y, width / size, height / size);
  e.image(e.get(x, y, width / size, height / size), x, y, width, height);
};

circle = function (x, y, radius) {
  return e.ellipse(x, y, radius, radius);
};

cylinder = function (x, y, width, height) {
  width = Math.abs(width);
  height = Math.abs(height);
  push();
  e.translate(x, y);

  if (height > width) {
    var _TAU = Math.cos(Math.PI) < 0 ? e.TWO_PI : 360;

    e.rotate(_TAU / 4);
    cylinder(0, 0, height, width);
  } else {
    var _r = height / 2;

    var z = (width - height) / 2;

    var central = 4 / 3 * (Math.sqrt(2) - 1) * _r;

    drawShape(function () {
      e.vertex(z, -_r);
      e.bezierVertex(z + central, -_r, z + _r, -central, z + _r, 0);
      e.bezierVertex(z + _r, central, z + central, _r, z, _r);
      e.vertex(-z, _r);
      e.bezierVertex(-z - central, _r, -z - _r, central, -z - _r, 0);
      e.bezierVertex(-z - _r, -central, -z - central, -_r, -z, -_r);
    }, true);
  }

  pop();
};

dashedLine = function (x1, y1, x2, y2) {
  var dashLength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  var spacing = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;
  var endDash = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  var endPoint = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  var length = e.dist(x1, y1, x2, y2);
  var i = 0;

  for (; i <= length - dashLength; i += dashLength + 2 * spacing) {
    e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), e.map(i + dashLength, 0, length, x1, x2), e.map(i + dashLength, 0, length, y1, y2));
  }

  if (endDash && i < length) e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), x2, y2);
  if (endPoint && i >= length) e.point(x2 + 0.5, y2 + 0.5);
};

donut = function (x, y, majorDiameter, minorDiameter) {
  var kappa = 4 / 3 * (Math.sqrt(2) - 1);
  push();
  e.translate(x, y);
  push();
  e.noStroke();
  drawShape(function () {
    var radius = minorDiameter / 2;
    var central = kappa * radius;
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

dottedLine = function (x1, y1, x2, y2) {
  var spacing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  var endPoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var length = e.dist(x1, y1, x2, y2);

  for (var i = 0; i < length; i += spacing) {
    e.point(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2));
  }

  if (endPoint) e.point(x2, y2);
};

drawShape = function (fn, close, mode) {
  close = close && e.CLOSE;
  e.beginShape(mode);
  fn();
  e.endShape(close);
};

edge = function (x, y, length, angle) {
  if (angleMode == 'degrees') angle = e.radians(angle);
  var x2 = x + length * Math.cos(angle);
  var y2 = y + length * Math.sin(angle);
  line(x, y, x2, y2);
};

heart = function (x, y, radius) {
  var ay = y - 2 * radius / 5,
      by = y + radius,
      c1y = y - 6 * radius / 5,
      c2y = y - 2 * radius / 5;
  var c1x = x + radius / 2,
      c2x = x + 9 * radius / 5;
  drawShape(function () {
    e.vertex(x, ay);
    e.bezierVertex(c1x, c1y, c2x, c2y, x, by);
    c1x = 2 * x - c1x;
    c2x = 2 * x - c2x;
    e.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
  }, true);
};

parallelogram = function (ax, ay, bx, by, cx, cy) {
  var dx = bx - ax;
  var dy = by - ay;
  e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

polygon = function (x, y, sides, radius, rotation) {
  var _TAU = Math.cos(Math.PI) < 0 ? 2 * Math.PI : 360;

  push();
  e.translate(x, y);
  e.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    for (var theta = 0; theta < _TAU; theta += _TAU / sides) {
      e.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
    }
  }, true);
  pop();
};

rectangle = function (x, y, width) {
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : width;
  var tl = arguments.length > 4 ? arguments[4] : undefined;
  var tr = arguments.length > 5 ? arguments[5] : undefined;
  var br = arguments.length > 6 ? arguments[6] : undefined;
  var bl = arguments.length > 7 ? arguments[7] : undefined;
  if (tl == undefined) e.rect(x, y, width, height);else if (tr == undefined) e.rect(x, y, width, height, tl);else if (br == undefined) e.rect(x, y, width, height, tl, tl, tr, tr);else if (bl == undefined) e.rect(x, y, width, height, tl, tr, br, 0);else e.rect(x, y, width, height, tl, tr, br, bl);
};

rhombus = function (ax, ay, bx, by, cx, cy) {
  var r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
  cx = ax + r * (cx - ax);
  cy = ay + r * (cy - ay);
  parallelogram(ax, ay, bx, by, cx, cy);
};

square = function (x, y, side, tl, tr, br, bl) {
  if (tl == undefined) e.rect(x, y, side, side);else if (tr == undefined) e.rect(x, y, side, side, tl);else if (br == undefined) e.rect(x, y, side, side, tl, tl, tr, tr);else if (bl == undefined) e.rect(x, y, side, side, tl, tr, br, 0);else e.rect(x, y, side, side, tl, tr, br, bl);
};

star = function (x, y, externalRadius) {
  var spikes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var rotation = arguments.length > 4 ? arguments[4] : undefined;

  var _TAU = Math.cos(Math.PI) < 0 ? e.TWO_PI : 360;

  var interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
  push();
  e.translate(x, y);
  e.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    var internalRadius;

    for (var theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
      internalRadius = internalRadius === externalRadius ? interior : externalRadius;
      e.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
    }
  }, true);
  pop();
};

trapezoid = function (x, y, height, topBase, bottomBase) {
  var maxBase = Math.max(topBase, bottomBase);
  e.quad(x + (maxBase - topBase) / 2, y, x + (maxBase - topBase) / 2 + topBase - 1, y, x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1, x + (maxBase - bottomBase) / 2, y + height - 1);
};
