/**
 * Draws a dotted line.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [spacing=10] gap between points
 *
 * @example
 * strokeWeight(4);
 * dottedLine(50, 50, 350, 50);
 * // expected outcome: straight dotted line
 *
 * @example
 * dottedLine(50, 75, 350, 75, 14);
 * // expected outcome: straight dotted line with spacing of 14
 *
 * @see {@link dashedLine}
 */
dottedLine = (x1, y1, x2, y2, spacing = 10) => {
    push();
    ctx.beginPath();
    ctx.setLineDash([1, spacing]);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    pop();
};
