/**
 * Converts hex to RGB color type.
 *
 * @param {string} hex Hex color value, optional `#`; can be shorthand
 *
 * @returns {color} RGB color value
 *
 * @example
 * const col = hexToRGB('#fff');
 * println(col);
 * // expected output: -1
 * background(col);
 * // expected outcome: white background
 */
hexToRGB = hex => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? result.splice(1).map(function (i) {
        return parseInt(i, 16);
    }) : null;
    push();
    p.colorMode(p.RGB);
    result = p.color.apply(p, result);
    pop();
    return result;
};
