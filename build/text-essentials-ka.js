function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    for (var _i in _strings) {
      fastGradientText(_strings[_i], x, y + _i * textAscent(), startColor, endColor);
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
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

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

wordWrap = function (str, max) {
  var br = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';
  return str.replace(new RegExp("(?![^\\n]{1,".concat(max, "}$)([^\\n]{1,").concat(max, "})\\s"), 'g'), '$1' + br);
};
