/**
 * Applies a drop shadow to all objects.
 * 
 * @param {number} x x offset
 * @param {number} [y=x] y offset
 * @param {number} [radius=5] blur radius
 * @param {color|string} [color=BLACK]
 * 
 * @example
 * push();
 * dropShadow(10);
 * printf('%', ctx.filter);
 * image(img, 20, 20, WIDTH - 40, HEIGHT - 40);
 * pop();
 * // expected outcome: a black drop shadow offset by 10 pixels
 */
dropShadow = (x, y = x, radius = 5, color = '#000') => {
    if (_.isNumber(color)) color = RGBToHex(color);
    _appendFilter(`drop-shadow(${x}px ${y}px ${radius}px ${color})`);
};
