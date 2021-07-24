/**
 * Fast gradient by filling each character with a different color as opposed to
 * masking the text with the gradient.
 * 
 * @category Text
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 *
 * @example
 * font('sans-serif', 25);
 * fastGradientText('Hello World', 10, textAscent() * 2, RED, YELLOW);
 * // expected outcome: 'Hello World' with gradient fill from red to yellow
 *
 * @example
 * font('sans-serif', 25, 'bold');
 * fastGradientText('Hello\nWorld', 10, textAscent() * 4, PURPLE, PINK);
 * // expected outcome: 'Hello World', bold, with gradient fill from purple to pink in two lines
 *
 * @see {@link font}
 */
fastGradientText = (string, x, y, startColor, endColor) => {
    p.pushStyle();
    if (!string.includes('\n')) {
        for (let i = 0; i < string.length; i++) {
            p.fill(p.lerpColor(startColor, endColor, i / (string.length)));
            p.text(string[i], x + p.textWidth(string.slice(0, i)), y);
        }
    } else {
        const strings = string.split('\n');
        for (const i in strings) {
            fastGradientText(strings[i], x, y + i * textAscent(), startColor, endColor);
        }
    }
    p.popStyle();
};
