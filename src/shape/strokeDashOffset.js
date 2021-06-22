/**
 * Sets the line dash offset.
 * 
 * @param {number} offset
 * 
 * @example
 * strokeDashOffset(0);
 * strokeDash(10, 10);
 * line(50, 50, 350, 50);
 * // expected outcome: dashed line
 * strokeDashOffset(5);
 * line(50, 100, 350, 100);
 * // expected outcome: dashed line offset by 5 pixels
 */
strokeDashOffset = offset => ctx.lineDashOffset = offset;
