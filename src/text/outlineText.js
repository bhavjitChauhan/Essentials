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
outlineText = (string, x, y, outlineColor = BLACK) => {
    if (!(/\S/).test(string)) {
        return;
    }
    push();
    p.fill(outlineColor);
    for (let i = -2; i < 3; i++) {
        for (let j = -1; j < 3; j++) {
            p.text(string, x + i, y + j);
        }
        p.text(string, x + i, y);
        p.text(string, x, y + i);
    }
    pop();
    p.text(string, x, y);
};
