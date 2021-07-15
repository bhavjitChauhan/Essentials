/**
 * Draws text underlined.
 * 
 * @category Text
 *
 * @param {string} string Text to be underlined
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * @param {color} [underlineColor=BLACK] Color of underline
 * @param {number} [underlineWeight] Weight of underline
 *
 * @example
 * const str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25);
 *
 * @example
 * const str = 'Underlined\nText';
 * fill(BLACK);
 * underlineText(str, 25, 25, RED, 5);
 */
underlineText = (string, x, y, underlineColor = BLACK, underlineWeight = p.externals.context.font.match(/\d+/)[0] / 12) => {
    if (!(/\S/).test(string)) {
        return;
    }
    strings = string.split('\n');
    p.pushStyle();
    p.strokeCap(p.SQUARE);
    p.strokeWeight(underlineWeight);
    p.stroke(underlineColor);
    for (const i in strings) {
        p.line(x, y + (p.textAscent() / 4) + (p.textAscent() * i * 1.55), x + p.textWidth(strings[i]), y + (p.textAscent() / 4) + (p.textAscent() * i * 1.55));
    }
    p.textAlign(p.LEFT, p.CORNER);
    p.text(string, x, y);
    p.popStyle();
};
