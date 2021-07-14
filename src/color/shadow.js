/**
 * Sets shadow color.
 * 
 * @param {...number|color|string} args
 * 
 * @example
 * push();
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * pop();
 * // expected outcome: square with a black shadow
 * 
 * @example
 * push();
 * shadow(255, 0, 0);
 * shadowBlur(10);
 * circle(100, 100, 100);
 * pop();
 * // expected outcome: circle with a red shadow
 */
shadow = (...args) => {
    let color = args[0];
    if (args.length > 1) color = p.color.apply(null, args);
    if (_.isNumber(args[0])) color = RGBToHex(color, false);
    ctx.shadowColor = color;
};
