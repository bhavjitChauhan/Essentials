/**
 * Maps color range array to current or a custom color range.
 * 
 * @category Color
 * 
 * @param {Array.<number>|number} values
 * @param {Array.<number>|number} [colorRange] custom color range
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * println(mapColorRange([255, 0, 0]));
 * // expected output: [360, 0, 0, 100]
 * 
 * @example
 * println(mapColorRange([255, 0, 0], [360, 100, 100, 100]));
 * // expected output: [360, 0, 0, 100]
 */
mapColorRange = (values, colorRange) => {
    const currentColorRange = getColorRange();
    if (colorRange) {
        colorRange = _parseColorArray(colorRange, currentColorRange[3], true);
        values = _parseColorArray(values, currentColorRange[3])
            .map((value, i) => p.map(value, 0, currentColorRange[i], 0, colorRange[i]));
    } else {
        values = _parseColorArray(values, 255)
            .map((value, i) => p.map(value, 0, 255, 0, currentColorRange[i]));
    }
    return values;
};
