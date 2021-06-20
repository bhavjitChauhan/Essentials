/**
 * Draws a dotted line of a given length and at a given angle.
 *
 * @param {number} x x-coordinate of the start point
 * @param {number} y y-coordinate of the start point
 * @param {number} length length of line
 * @param {number} [angle=0] angle of line
 * @param {number} [spacing=10] gap between points
 *
 * @example
 * strokeWeight(4);
 * dottedEdge(50, 50, 300, 0);
 * // expected outcome: straight dotted edge
 *
 * @example
 * dottedEdge(50, 75, 300, 0, 14);
 * // expected outcome: straight dotted edge with spacing of 14
 *
 * @see {@link dashedEdge}
 * @see {@link edge}
 */
dottedEdge = (x, y, length, angle = 0, spacing = 10) => {    
    if (p.angleMode == 'degrees') angle = p.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    dottedLine(x, y, x2, y2, spacing);
};
