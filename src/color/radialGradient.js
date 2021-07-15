/**
 * @summary
 * Draws a radial gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
 * 
 * @category Color
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.x0=x + width / 2] x-coordinate of gradient start circle
 * @param {number} [settings.y0=y + height / 2] y-coordinate of gradient start circle
 * @param {number} [settings.r0=0] radius of gradient start circle
 * @param {number} [settings.x1=x + width / 2] x-coordinate of gradient end circle
 * @param {number} [settings.y1=y + height / 2] y-coordinate of gradient end circle
 * @param {number} [settings.r1=width / 2] radius of gradient end circle
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: radial gradient from red to blue
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: radial gradient from red to to green to blue
 */
radialGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, x0, y0, r0, x1, y1, r1 } = settings;
    height = height || width;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    if (!_.isNumber(x0)) x0 = centerX;
    if (!_.isNumber(y0)) y0 = centerY;
    r0 = r0 || 0;
    if (!_.isNumber(x1)) x1 = centerX;
    if (!_.isNumber(y1)) y1 = centerY;
    r1 = r1 || width / 2;
    push();
    const gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};
