/**
 * Converts hex to RGB color type.
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 *
 * @example
 * const col = hexToRGB('#006FDE');
 * println(hex(col, 6));
 * // expected output: '006FDE'
 * 
 * @example
 * println(hexToRGB('#AAAA', false));
 * // expected output: [170, 170, 170, 170]
 */
hexToRGB = (hex, color = true) => {
    const length = hex.replace('#', '').length;
    let arr;
    if (length == 3 || length == 6) {
        arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1)
            .match(/.{2}/g)
            .map(x => parseInt(x, 16));
    } else if (length == 4 || length == 8) {
        arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b, a) => '#' + r + r + g + g + b + b + a + a)
            .substring(1)
            .match(/.{2}/g)
            .map(x => parseInt(x, 16));
    }
    return color ? p.color.apply(null, arr) : arr;
};
