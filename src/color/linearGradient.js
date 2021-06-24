/**
 * @summary
 * Draws a linear gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.angle]
 * @param {number} [settings.x0] x-coordinate of gradient start point
 * @param {number} [settings.y0] y-coordinate of gradient start point
 * @param {number} [settings.x1] x-coordinate of gradient end point
 * @param {number} [settings.y1] y-coordinate of gradient end point
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: linear gradient from red to blue
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: linear gradient from red to to green to blue
 */
linearGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, angle, x0, y0, x1, y1 } = settings;
    height = height || width;
    if (_.isNumber(angle)) {
        if (p.angleMode == 'degrees') angle = p.radians(angle);
        const result = _pointOnRect(width, height, angle);
        x0 = x0 || x + width - result.x;
        y0 = y0 || y + height - result.y;
        x1 = x1 || x + result.x;
        y1 = y1 || y + result.y;
    }
    push();
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};
