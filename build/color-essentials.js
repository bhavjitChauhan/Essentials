/** @module Color */

_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Color Essentials depends on the Essentials Core.');
} else {
    COLOR_ESSENTIALS = true;
    if (!_silent_ && !_color_initialized_) console.info(
        '%cColor Essentials',
        'font-family:system-ui;font-size:0.75rem;'
    );
}

/**
 * @summary
 * Draws an angular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * angularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: angular gradient from red to yellow
 *
 * @example
 * angularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: angular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * angularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: angular gradient from green to light blue in strips of thickness 25
 */
angularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    angle -= 90;
    // `atan` could be `asin`. See https://jsbench.me/mmklrhzgra/1 & https://www.khanacademy.org/cs/-/4713637410717696
    const dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    push();
    if (step == 1) {
        e.strokeWeight(1.5);
        for (let i = angle; i < angle + 359; i += dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, (i - angle) / 360));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        e.strokeWeight(1);
        for (let i = angle; i < angle + 359; i += dTheta) {
            const c = e.lerpColor(startColor, endColor, (i - angle) / 360);
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    pop();
};

/**
 * @summary
 * Draws an circular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * circularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: circular gradient from red to yellow
 *
 * @example
 * circularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: circular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * circularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: circular gradient from green to light blue in strips of thickness 25
 */
circularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    const dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    push();
    if (step == 1) {
        e.strokeWeight(1.5);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        e.strokeWeight(1);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
        // Temporary fix for missing triangle
        r1 = e.radians(angle - 180);
        r2 = e.radians(angle - 180 - dTheta);
        e.stroke(endColor);
        e.fill(endColor);
        e.triangle(x + width / 2, y + height / 2,
            e.map(Math.cos(r1), -1, 1, x, x + width),
            e.map(Math.sin(r1), -1, 1, y, y + height),
            e.map(Math.cos(r2), -1, 1, x, x + width),
            e.map(Math.sin(r2), -1, 1, y, y + height));
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    pop();
};

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
hexToRGB = hex => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
 * @summary
 * Alias for `color(255, 0, 0)`.
 *
 * @description
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
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
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
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
 * Essentials includes the [CSS color
 * names]{@link w3schools.com/colors/colors_names.asp} in the format
 * `COLORNAME`.
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
LIGHTSALMON = e.color(255, 160, 122),
SALMON = e.color(250, 128, 114);
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
HSBToRGB = function(x, s, v) {
    if (arguments.length == 1) {
        c = x;
        x = e.hue(c), s = e.saturation(c), v = e.brightness(c);
    }
    x /= 255, s /= 255, v /= 255;

    const i = Math.floor(x * 6),
        f = x * 6 - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s);

    let r, g, b;
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    const result = [r, g, b].map(function (i) {
        return i * 255;
    });

    return e.color.apply(e, result);
};

/**
 * @summary
 * Draws a linear gradient from `startColor` to `endColor` in the form of a rectangle.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
 *
 * @param {number} x x-coordinate of the gradient
 * @param {number} y y-coordinate of the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param
 * {LEFT|RIGHT|TOP|UP|BOTTOM|DOWN|TOP_LEFT|TOP_RIGHT|BOTTOM_RIGHT|BOTTOM_LEFT}
 * [direction=RIGHT] direction of gradient
 * @param {number} [step=5] step size
 *
 * @example
 * linearGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: linear gradient from left to right; red to yellow
 *
 * @example
 * linearGradient(150, 25, 100, 100, PURPLE, PINK, TOP_RIGHT);
 * // expected outcome: linear gradient from bottom-left to top-right; purple to pink
 *
 * @example
 * linearGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, BOTTOM_RIGHT, 10);
 * // expected outcome: linear gradient from top-left to bottom-right; green to light blue in strips of thickness 10
 */
linearGradient = (x, y, width, height, startColor, endColor, direction = RIGHT, step = 5) => {
    push();
    e.strokeWeight(1);
    switch (direction) {
        case LEFT:
        case RIGHT:
            if (direction == LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width));
                    e.line(x + i, y, x + i, y + height);
                }
            } else {
                for (let i = 0; i < width; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / width);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x + i, y, width - i, height); }
                    else { e.rect(x + i, y, step, height); }
                }
            }
            break;
        case TOP:
        case UP:
        case BOTTOM:
        case DOWN:
            if (direction == TOP || direction == UP) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < height; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / height));
                    e.line(x, y + i, x + width, y + i);
                }
            } else {
                for (let i = 0; i < height; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / height);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x, y + i, width, height - i); }
                    else { e.rect(x, y + i, width, step); }
                }
            }
            break;
        case TOP_LEFT:
        case BOTTOM_RIGHT:
            if (direction == TOP_LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + i, y, x, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + i, y + height, x + width, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(-45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(-side / 2, i, side, side - i); }
                        else { this.rect(-side / 2, i, side, step); }
                    }
                });
            }
            break;
        case TOP_RIGHT:
        case BOTTOM_LEFT:
            if (direction == TOP_RIGHT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + width - i, y, x + width, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + width - i, y + height, x, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(0, i - side / 2, side, side - i); }
                        else { this.rect(0, i - side / 2, side, step); }
                    }
                });
            }
    }
    pop();
};

/**
 * @summary
 * Draws a radial gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 *
 * @param {number} x x-coordinate of center of the gradient
 * @param {number} y y-coordinate of center the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [step=5] step size
 *
 * @example
 * radialGradient(100, 100, 100, 100, RED, YELLOW);
 * // expected outcome: radial gradient from red to yellow
 *
 * @example
 * radialGradient(250, 100, 100, 100, PURPLE, PINK, 10);
 * // expected outcome: radial gradient from purple to pink with step size 10
 */
radialGradient = (x, y, width, height, startColor, endColor, step = 5) => {
    push();
    e.strokeWeight(1);
    const maxRadius = Math.max(width, height);
    if (step == 1) {
        e.noFill();
        for (let i = 0; i < maxRadius; i++) {
            e.stroke(e.lerpColor(endColor, startColor, i / maxRadius));
            e.arc(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height),
                0, 360);
        }
    } else {
        for (let i = 0; i < maxRadius; i += step) {
            const c = e.lerpColor(endColor, startColor, i / maxRadius);
            e.stroke(c);
            e.fill(c);
            e.ellipse(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height));
        }
    }
    pop();
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
RGBToHex = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }
    return '#' + ((1 << 24) + (x << 16) + (g << 8) + b).toString(16).slice(1);
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
RGBToHSB = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }

    x /= 255, g /= 255, b /= 255;

    const maxValue = Math.max(x, g, b);
    const minValue = Math.min(x, g, b);
    const v = maxValue;

    const d = maxValue - minValue;
    const s = maxValue === 0 ? 0 : d / maxValue;

    if (maxValue === minValue) {
        h = 0;
    } else {
        switch (maxValue) {
            case x: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - x) / d + 2; break;
            case b: h = (x - g) / d + 4; break;
        }
        h /= 6;
    }

    let result = [h, s, v].map(function (i) {
        return i * 255;
    });
    push();
    e.colorMode(e.HSB);
    result = e.color.apply(e, result);
    pop();
    return result;
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
toHSB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.hue(c), e.saturation(c), e.brightness(c)];
        } else {
            return RGBToHSB.apply(e, toRGB(hexToRGB(c)));
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
toRGB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.red(c), e.green(c), e.blue(c)];
        } else {
            return hexToRGB(c);
        }
    } else if (args.length == 3) {
        return HSBToRGB.apply(e, args);
    }
};
