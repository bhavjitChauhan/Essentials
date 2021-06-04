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
highlightText = (string, x = 0, y = e.textAscent(), highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    push();
    e.noStroke();
    e.rectMode(e.CORNER);
    e.textAlign(e.LEFT, e.TOP);
    for (const i in string) {
        string[i] = ` ${string[i]} `;
        push();
        e.fill(highlightColor);
        e.rect(x, y + (i * e.textAscent() * 2), e.textWidth(string[i]), e.textAscent() * 1.75);
        pop();
        e.text(string[i], x, y + (i * e.textAscent() * 2));
    }
    pop();
};
