/**
 * Draws a string with a highlight background.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {number} [highlightColor=YELLOW] color of highlight background
 *
 * @example
 * const str = 'Highlighted\nText';
 * fill(BLACK);
 * highlightText(str, 25, 25);
 *
 * @example
 * const str = 'Highlighted\nText';
 * fill(LIGHTGREEN);
 * highlightText(str, 25, 25, BLACK);
 */
highlightText = (string, x = 0, y = p.textAscent(), highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    push();
    p.noStroke();
    p.rectMode(p.CORNER);
    p.textAlign(p.LEFT, p.TOP);
    for (const i in string) {
        string[i] = ` ${string[i]} `;
        push();
        p.fill(highlightColor);
        p.rect(x, y + (i * p.textAscent() * 2), p.textWidth(string[i]), p.textAscent() * 1.75);
        pop();
        p.text(string[i], x, y + (i * p.textAscent() * 2));
    }
    pop();
};
