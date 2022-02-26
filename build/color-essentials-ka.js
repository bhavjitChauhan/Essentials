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

_appendFilter = function (filter) {
  if (ctx.filter == 'none') return ctx.filter = filter;
  ctx.filter += filter;
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

getAlphaRange = function () {
  return p.alpha(WHITE);
};

getBlueRange = function () {
  return p.blue(WHITE);
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

getShadow = function () {
  return hexToRGB(ctx.shadowColor);
};

getShadowBlur = function () {
  return ctx.shadowBlur;
};

isDefaultColorRange = function () {
  return getColorRange() == RGB_COLOR_RANGE;
};

noShadow = function () {
  return shadow(TRANSPARENT);
};

getShadowOffset = function () {
  return [ctx.shadowOffsetX, ctx.shadowOffsetY];
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

    for (var _i = angle; _i < angle + 359; _i += dTheta) {
      var c = p.lerpColor(startColor, endColor, (_i - angle) / 360);
      p.stroke(c);
      p.fill(c);
      r1 = p.radians(_i);
      r2 = p.radians(_i - dTheta);
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

    for (var _i2 = angle - 1; _i2 > angle - 180; _i2 -= dTheta) {
      p.stroke(p.lerpColor(startColor, endColor, Math.abs((_i2 - angle) / 180)));
      r = p.radians(_i2);
      p.line(x + width / 2, y + height / 2, p.map(Math.cos(r), -1, 1, x, x + width), p.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    p.strokeWeight(1);

    for (var _i3 = angle - 1; _i3 < angle + 180; _i3 += dTheta) {
      var c = p.lerpColor(startColor, endColor, Math.abs((_i3 - angle) / 180));
      p.stroke(c);
      p.fill(c);
      r1 = p.radians(_i3);
      r2 = p.radians(_i3 - dTheta);
      p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));
    }

    r1 = p.radians(angle - 180);
    r2 = p.radians(angle - 180 - dTheta);
    p.stroke(endColor);
    p.fill(endColor);
    p.triangle(x + width / 2, y + height / 2, p.map(Math.cos(r1), -1, 1, x, x + width), p.map(Math.sin(r1), -1, 1, y, y + height), p.map(Math.cos(r2), -1, 1, x, x + width), p.map(Math.sin(r2), -1, 1, y, y + height));

    for (var _i4 = angle - 1; _i4 > angle - 180; _i4 -= dTheta) {
      var _c = p.lerpColor(startColor, endColor, Math.abs((_i4 - angle) / 180));

      p.stroke(_c);
      p.fill(_c);
      r1 = p.radians(_i4);
      r2 = p.radians(_i4 - dTheta);
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

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
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

getStroke = function () {
  var draw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  draw && p.rect(0, 0, '%');
  return hexToRGB(ctx.strokeStyle);
};

grayscale = function () {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return _appendFilter("grayscale(".concat(amount, "%)"));
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

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
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

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
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

  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
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

  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
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
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
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
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
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
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
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
        var _ref = [endColor, startColor];
        startColor = _ref[0];
        endColor = _ref[1];
      }

      if (step == 1) {
        for (var i = 0; i < width; i++) {
          e.stroke(e.lerpColor(startColor, endColor, i / width));
          e.line(x + i, y, x + i, y + height);
        }
      } else {
        for (var _i5 = 0; _i5 < width; _i5 += step) {
          var c = e.lerpColor(startColor, endColor, _i5 / width);
          e.stroke(c);
          e.fill(c);

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
        var _ref2 = [endColor, startColor];
        startColor = _ref2[0];
        endColor = _ref2[1];
      }

      if (step == 1) {
        for (var _i6 = 0; _i6 < height; _i6++) {
          e.stroke(e.lerpColor(startColor, endColor, _i6 / height));
          e.line(x, y + _i6, x + width, y + _i6);
        }
      } else {
        for (var _i7 = 0; _i7 < height; _i7 += step) {
          var _c2 = e.lerpColor(startColor, endColor, _i7 / height);

          e.stroke(_c2);
          e.fill(_c2);

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
        var _ref3 = [endColor, startColor];
        startColor = _ref3[0];
        endColor = _ref3[1];
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
            var _c3 = this.lerpColor(startColor, endColor, _i10 / side);

            this.stroke(_c3);
            this.fill(_c3);

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
        var _ref4 = [endColor, startColor];
        startColor = _ref4[0];
        endColor = _ref4[1];
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
            var _c4 = this.lerpColor(startColor, endColor, _i13 / _side);

            this.stroke(_c4);
            this.fill(_c4);

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
    for (var _i14 = 0; _i14 < maxRadius; _i14 += step) {
      var c = e.lerpColor(endColor, startColor, _i14 / maxRadius);
      e.stroke(c);
      e.fill(c);
      e.ellipse(x, y, width - e.map(_i14, 0, maxRadius, 0, width), height - e.map(_i14, 0, maxRadius, 0, height));
    }
  }

  pop();
};
