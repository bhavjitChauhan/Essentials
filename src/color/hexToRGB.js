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
    hex = hex.replace('#', '');
    switch (hex.length) {
        case 3:
        case 6:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => r + r + g + g + b + b);
            break;
        case 4:
        case 8:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b, a) => r + r + g + g + b + b + a + a);
            break;
    }
    const arr = hex
        .match(/.{2}/g)
        .map(x => parseInt(x, 16));
    return color ? p.color.apply(null, arr) : arr;
};
