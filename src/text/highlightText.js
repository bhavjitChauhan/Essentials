/**
 * Draws a string with a highlight background.
 * 
 * @param {string} string String to be highlighted
 * @param {number} [x=0] x-coordinate value
 * @param {number} [y='text height'] y-coordinate value
 * @param {number} [highlightColor=YELLOW] Color of highlight background
 * 
 * @example
 * let str = 'Highlighted\nText';
 * fill(BLACK);
 * highlightText(str, 25, 25);
 * 
 * @example
 * let str = 'Highlighted\nText';
 * fill(LIGHTGREEN);
 * highlightText(str, 25, 25, BLACK);
 */
highlightText = (string, x = 0, y = e.textAscent(), highlightColor = YELLOW) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
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
};
