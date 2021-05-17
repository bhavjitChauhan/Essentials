/**
 * Checks if object is a Khan Academy font object.
 * 
 * @param {Object} obj
 * 
 * @example
 * let f = createFont('Arial');
 * println(isFont(f));
 * // expected output: true 
 * 
 * @example
 * let f = font('monospace');
 * println(isFont(f));
 * // expected output: true
 * 
 * @see {@link font}
 */
isFont = obj => obj instanceof e.PFont;
