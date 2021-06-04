/**
 * Checks if object is a Khan Academy font object.
 * 
 * @param {Object} obj
 * 
 * @example
 * const arial = createFont('Arial');
 * println(isFont(arial));
 * // expected output: true 
 * 
 * @example
 * const monospace = font('monospace');
 * println(isFont(monospace));
 * // expected output: true
 * 
 * @see {@link font}
 */
isFont = obj => obj instanceof e.PFont;
