/**
 * Converts RGB to hex color type.
 *
 * @param {(number|color)} x Red value or color
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 *
 * @returns {string}  Hex color value
 *
 * @example
 * println(RGBToHex(255, 0, 0));
 * // expected output: #ff0000
 *
 * @example
 * const c = RED;
 * println(RGBToHex(c));
 * // expected output: #ff0000
 */
RGBToHex = function(x, g, b) {
    if (arguments.length == 1) {
        c = x;
        x = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }
    return '#' + ((1 << 24) + (x << 16) + (g << 8) + b).toString(16).slice(1);
};
