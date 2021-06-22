/**
 * Gets color range.
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * // expected output: [360, 100, 100, 100]
 */
getColorRange = () => {
    const colorMode = getColorMode(),
        color = colorMode - 1 ? 0xFFFF0001 : WHITE;
    let arr;
    if (colorMode == p.RGB) {
        arr = [p.red, p.green, p.blue, p.alpha];
    } else if (colorMode == p.HSB) {
        arr = [color => Math.round(p.hue(color)), p.saturation, p.brightness, p.alpha];
    }
    return arr.map(fn => fn.call(null, color));
};
