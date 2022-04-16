/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws text with an outline.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {color} [outlineColor=BLACK] color of outline
 *
 * @example
 * let str = 'Outlined\nText';
 * outlineText(str, 25, 25);
 *
 * @example
 * let str = 'Outlined\nText';
 * fill(BLACK);
 * outlineText(str, 25, 25, ORANGE);
 */
 outlineTextOld = (string, x = 0, y = p.textAscent(), outlineColor = BLACK) => {
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
