/**
 * Draws text underlined.
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
underlineText = (string, x = 0, y = e.textAscent(), underlineColor = BLACK, underlineWeight = e.externals.context.font.match(/\d+/)[0] / 12) => {
    if (!(/\S/).test(string)) {
        return;
    }
    strings = string.split('\n');
    push();
    e.strokeCap(e.SQUARE);
    e.strokeWeight(underlineWeight);
    e.stroke(underlineColor);
    for (const i in strings) {
        e.line(x, y + (e.textAscent() / 4) + (e.textAscent() * i * 1.55), x + e.textWidth(strings[i]), y + (e.textAscent() / 4) + (e.textAscent() * i * 1.55));
    }
    e.textAlign(e.LEFT, e.CORNER);
    e.text(string, x, y);
    pop();
};
