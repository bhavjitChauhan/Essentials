/**
 * Sets shadow offset.
 * 
 * @param {number} x
 * @param {number} y
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * shadowOffset(10, 10);
 * square(100, 100, 100);
 * // expected outcome: square with black shadow offset by 10px in both directions
 */
shadowOffset = (x, y) => {
    if (_.isNumber(x)) ctx.shadowOffsetX = x;
    if (_.isNumber(y)) ctx.shadowOffsetY = y;
};
