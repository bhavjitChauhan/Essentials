/**
 * Sets shadow blur strength.
 * 
 * @param {number} radius
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * // expected outcome: square with a black shadow
 */
shadowBlur = radius => ctx.shadowBlur = radius;
