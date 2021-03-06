_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Color Essentials depends on the Essentials Core.');
} else {
  COLOR_ESSENTIALS = true;
  if (!_silent_ && !_color_initialized_) console.info('%cColor Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

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

    for (var _i = angle - 1; _i > angle - 180; _i -= dTheta) {
      e.stroke(e.lerpColor(startColor, endColor, Math.abs((_i - angle) / 180)));
      r = e.radians(_i);
      e.line(x + width / 2, y + height / 2, e.map(Math.cos(r), -1, 1, x, x + width), e.map(Math.sin(r), -1, 1, y, y + height));
    }
  } else {
    e.strokeWeight(1);

    for (var _i2 = angle - 1; _i2 < angle + 180; _i2 += dTheta) {
      var _c = e.lerpColor(startColor, endColor, Math.abs((_i2 - angle) / 180));

      e.stroke(_c);
      e.fill(_c);
      r1 = e.radians(_i2);
      r2 = e.radians(_i2 - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }

    r1 = e.radians(angle - 180);
    r2 = e.radians(angle - 180 - dTheta);
    e.stroke(endColor);
    e.fill(endColor);
    e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));

    for (var _i3 = angle - 1; _i3 > angle - 180; _i3 -= dTheta) {
      var _c2 = e.lerpColor(startColor, endColor, Math.abs((_i3 - angle) / 180));

      e.stroke(_c2);
      e.fill(_c2);
      r1 = e.radians(_i3);
      r2 = e.radians(_i3 - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  pop();
};

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

    for (var _i4 = angle; _i4 < angle + 359; _i4 += dTheta) {
      var _c3 = e.lerpColor(startColor, endColor, (_i4 - angle) / 360);

      e.stroke(_c3);
      e.fill(_c3);
      r1 = e.radians(_i4);
      r2 = e.radians(_i4 - dTheta);
      e.triangle(x + width / 2, y + height / 2, e.map(Math.cos(r1), -1, 1, x, x + width), e.map(Math.sin(r1), -1, 1, y, y + height), e.map(Math.cos(r2), -1, 1, x, x + width), e.map(Math.sin(r2), -1, 1, y, y + height));
    }
  }

  pop();
};

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
    for (var _i5 = 0; _i5 < maxRadius; _i5 += step) {
      var _c4 = e.lerpColor(endColor, startColor, _i5 / maxRadius);

      e.stroke(_c4);
      e.fill(_c4);
      e.ellipse(x, y, width - e.map(_i5, 0, maxRadius, 0, width), height - e.map(_i5, 0, maxRadius, 0, height));
    }
  }

  pop();
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
        for (var _i6 = 0; _i6 < width; _i6 += step) {
          var _c5 = e.lerpColor(startColor, endColor, _i6 / width);

          e.stroke(_c5);
          e.fill(_c5);

          if (_i6 + step > width) {
            e.rect(x + _i6, y, width - _i6, height);
          } else {
            e.rect(x + _i6, y, step, height);
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
        for (var _i7 = 0; _i7 < height; _i7++) {
          e.stroke(e.lerpColor(startColor, endColor, _i7 / height));
          e.line(x, y + _i7, x + width, y + _i7);
        }
      } else {
        for (var _i8 = 0; _i8 < height; _i8 += step) {
          var _c6 = e.lerpColor(startColor, endColor, _i8 / height);

          e.stroke(_c6);
          e.fill(_c6);

          if (_i8 + step > width) {
            e.rect(x, y + _i8, width, height - _i8);
          } else {
            e.rect(x, y + _i8, width, step);
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
        for (var _i9 = 0; _i9 < width; _i9++) {
          e.stroke(e.lerpColor(startColor, endColor, _i9 / width / 2));
          e.line(x + _i9, y, x, y + e.map(_i9, 0, width, 0, height));
        }

        for (var _i10 = 0; _i10 < width; _i10++) {
          e.stroke(e.lerpColor(startColor, endColor, _i10 / width / 2 + 0.5));
          e.line(x + _i10, y + height, x + width, y + e.map(_i10, 0, width, 0, height));
        }
      } else {
        var side = Math.max(width, height) * Math.sqrt(2);
        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(-45);

          for (var _i11 = 0; _i11 < side; _i11 += step) {
            var _c7 = this.lerpColor(startColor, endColor, _i11 / side);

            this.stroke(_c7);
            this.fill(_c7);

            if (_i11 + step > side) {
              this.rect(-side / 2, _i11, side, side - _i11);
            } else {
              this.rect(-side / 2, _i11, side, step);
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
        for (var _i12 = 0; _i12 < width; _i12++) {
          e.stroke(e.lerpColor(startColor, endColor, _i12 / width / 2));
          e.line(x + width - _i12, y, x + width, y + e.map(_i12, 0, width, 0, height));
        }

        for (var _i13 = 0; _i13 < width; _i13++) {
          e.stroke(e.lerpColor(startColor, endColor, _i13 / width / 2 + 0.5));
          e.line(x + width - _i13, y + height, x, y + e.map(_i13, 0, width, 0, height));
        }
      } else {
        var _side = Math.max(width, height) * Math.sqrt(2);

        showGraphics(x, y, width, height, function () {
          this.angleMode = 'degrees';
          this.rotate(45);

          for (var _i14 = 0; _i14 < _side; _i14 += step) {
            var _c8 = this.lerpColor(startColor, endColor, _i14 / _side);

            this.stroke(_c8);
            this.fill(_c8);

            if (_i14 + step > _side) {
              this.rect(0, _i14 - _side / 2, _side, _side - _i14);
            } else {
              this.rect(0, _i14 - _side / 2, _side, step);
            }
          }
        });
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
