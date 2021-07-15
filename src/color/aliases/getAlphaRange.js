/**
 * Gets the color range for alpha.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 255, 255, 255, 1);
 * println(getAlphaRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getAlphaRange = () => p.alpha(WHITE);
