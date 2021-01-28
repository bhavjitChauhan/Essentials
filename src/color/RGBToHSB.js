/**
 * Converts RGB to HSB color type
 * 
 * @param {(number|color)} x Red value or color
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 * 
 * @returns {string}  HSB color value
 * 
 * @example
 * let c = RGBToHSB(255, 0, 0);
 * println(c);
 * // expected output: -65536
 * colorMode(HSB);
 * background(c);
 * // expected outcome: red background
 */
RGBToHSB = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }

    x /= 255, g /= 255, b /= 255;

    const maxValue = Math.max(x, g, b);
    const minValue = Math.min(x, g, b);
    const v = maxValue;

    const d = maxValue - minValue;
    const s = maxValue === 0 ? 0 : d / maxValue;

    if (maxValue === minValue) {
        h = 0;
    } else {
        switch (maxValue) {
            case x: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - x) / d + 2; break;
            case b: h = (x - g) / d + 4; break;
        }
        h /= 6;
    }

    let result = [h, s, v].map(function (i) {
        return i * 255;
    });
    push();
    e.colorMode(e.HSB);
    result = e.color.apply(e, result);
    pop();
    return result;
};
