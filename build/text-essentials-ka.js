function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    for (var _i in _strings) {
      fastGradientText(_strings[_i], x, y + _i * textAscent(), startColor, endColor);
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
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

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
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor);
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
