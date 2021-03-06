/**
 * Fast gradient by filling each character with a different color as opposed to
 * masking the text with the gradient.
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
 * @see font
 */
fastGradientText = (string, x = 0, y = e.textAscent(), startColor, endColor) => {
    push();
    if (!string.includes('\n')) {
        for (let i = 0; i < string.length; i++) {
            e.fill(e.lerpColor(startColor, endColor, i / (string.length)));
            e.text(string[i], x + e.textWidth(string.slice(0, i)), y);
        }
    } else {
        const strings = string.split('\n');
        for (const i in strings) {
            fastGradientText(strings[i], x, y + i * textAscent(), startColor, endColor);
        }
    }
    pop();
};
