/**
 * Sets shadow offset.
 * 
 * @category Color
 * 
 * @param {number} x
 * @param {number} [y=x]
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * shadowOffset(10);
 * square(100, 100, 100);
 * // expected outcome: square with black shadow offset by 10px in both directions
 */
shadowOffset = (x, y = x) => {
    if (_.isNumber(x)) ctx.shadowOffsetX = x;
    ctx.shadowOffsetY = y;
};
