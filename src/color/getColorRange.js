/**
 * Gets current color range.
 * 
 * @category Color
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * console.log(getColorRange());
 * // expected output: [360, 100, 100, 100]
 */
getColorRange = () => [p.red, p.green, p.blue, p.alpha].map(fn => fn.call(null, WHITE));
