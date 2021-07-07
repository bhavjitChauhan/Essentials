/**
 * Gets the color mode.
 * 
 * @example
 * colorMode(RGB);
 * println(getColorMode() == RGB);
 * // expected output: true
 */
getColorMode = () => p.color(getRedRange(), 0, 0) == -0x10000 ? p.RGB : p.HSB;
