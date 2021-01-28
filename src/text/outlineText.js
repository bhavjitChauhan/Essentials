/**
 * Draws text with an outline.
 * 
 * @param {string} string String to be outlined
 * @param {number} x x-coordinate value
 * @param {number} y y-coordinate value
 * @param {number} [outlineColor=BLACK] Color of outline
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
