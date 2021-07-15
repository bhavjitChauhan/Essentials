/**
 * Converts hex to RGB color type.
 * 
 * @category Color
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
 * 
 * @example
 * const hex = '#F00';
 * colorMode(RGB, 1, 1, 1, 1);
 * println(hexToRGB(hex, false));
 * // expected output: [1, 0, 0, 1]
 */
hexToRGB = (hex, color = true) => {
    const currentColorMode = getColorMode();
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
    let arr = hex
        .match(/.{2}/g)
        .map(x => parseInt(x, 16));
    if (arr.length == 3) arr.push(RGB_COLOR_RANGE[3]);
    if (!isDefaultColorRange() && currentColorMode == p.RGB) {
        arr = mapColorRange(arr);
    }
    let result = arr;
    if (color) result = _createColor(arr, p.RGB, currentColorMode);
    return result;
};
