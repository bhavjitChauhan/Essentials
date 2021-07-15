/**
 * Draws a string with a highlight background.
 * 
 * @category Text
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
 * fill(LIGHT_GREEN);
 * highlightText(str, 25, 25, BLACK);
 */
highlightText = (string, x, y, highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    p.pushStyle();
    p.noStroke();
    p.rectMode(p.CORNER);
    p.textAlign(p.LEFT, p.TOP);
    for (const i in string) {
        string[i] = ` ${string[i]} `;
        p.pushStyle();
        p.fill(highlightColor);
        p.rect(x, y + (i * p.textAscent() * 2), p.textWidth(string[i]), p.textAscent() * 1.75);
        p.popStyle();
        p.text(string[i], x, y + (i * p.textAscent() * 2));
    }
    p.popStyle();
};
