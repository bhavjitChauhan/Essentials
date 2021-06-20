/**
 * Draws a dashed line of a given length and at a given angle.
 *
 * @param {number} x x-coordinate of the start point
 * @param {number} y y-coordinate of the start point
 * @param {number} length length of line
 * @param {number} [angle=0] angle of line
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 *
 * @example
 * strokeWeight(3);
 * dashedEdge(50, 50, 300, 0);
 * // expected outcome: straight dashed edge
 * 
 * @example
 * dashedEdge(50, 75, 300, 0, 5, 10);
 * // expected outcome: straight dashed edge with a dash length of 5 and spacing of 10
 *
 * @see {@link dottedEdge}
 * @see {@link edge}
 */
dashedEdge = (x, y, length, angle = 0, dashLength = 10, spacing = 10) => {
    if (p.angleMode == 'degrees') angle = p.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    dashedLine(x, y, x2, y2, dashLength, spacing);
};
