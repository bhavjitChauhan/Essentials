/**
 * Draws text with an outline.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {color} [outlineColor=BLACK] color of outline
 *
 * @example
 * const str = 'Outlined\nText';
 * outlineText(str, 25, 25);
 *
 * @example
 * const str = 'Outlined\nText';
 * fill(BLACK);
 * outlineText(str, 25, 25, ORANGE);
 */
outlineText = (string, x = 0, y = e.textAscent(), outlineColor = BLACK) => {
    if (!(/\S/).test(string)) {
        return;
    }
    push();
    e.fill(outlineColor);
    for (let i = -2; i < 3; i++) {
        for (let j = -1; j < 3; j++) {
            e.text(string, x + i, y + j);
        }
        e.text(string, x + i, y);
        e.text(string, x, y + i);
    }
    pop();
    e.text(string, x, y);
};
