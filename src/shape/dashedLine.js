/**
 * Draws a dashed line.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 *
 * @example
 * strokeWeight(3);
 * dashedLine(50, 50, 350, 50);
 * // expected outcome: straight dashed line
 *
 * @example
 * dashedLine(50, 75, 350, 75, 5, 10);
 * // expected outcome: straight dashed line with a dash length of 5 and spacing of 10
 *
 * @see {@link dottedLine}
 */
dashedLine = (x1, y1, x2, y2, dashLength = 10, spacing = 10) => {
    push();
    ctx.beginPath();
    ctx.setLineDash([dashLength, spacing]);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    pop();
};
