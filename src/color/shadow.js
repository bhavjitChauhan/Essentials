/**
 * Sets shadow color.
 * 
 * @param {number|string} color
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * // expected outcome: square with a black shadow
 */
shadow = color => {
    if (_.isNumber(color)) color = RGBToHex(color, true, false);
    ctx.shadowColor = color;
};
