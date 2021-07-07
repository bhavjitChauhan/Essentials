/**
 * Converts hex to RGB color type.
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 */
hexToHSB = (hex, color = true) => {
    if (color) return hexToRGB(hex);
    return RGBToHSB.apply(p, hexToRGB(hex, false));
};
