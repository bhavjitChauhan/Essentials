/**
 * @summary
 * Draws a dashed line of a given length and at a given angle.
 *
 * @description
 * If `endDash` is true, a dash will be drawn of smaller length than defined by
 * `dashLength` to finish the line. If `endPoint` is true, a point will be drawn
 * at the end point. Use the `smooth` function to prevent jagged dashes.
 *
 * @param {number} x x-coordinate of the start point
 * @param {number} y y-coordinate of the start point
 * @param {number} length length of line
 * @param {number} [angle=0] angle of line
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 * @param {boolean} [endDash=true] draw dash at end
 * @param {boolean} [endPoint=true] draw point at end point
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
 * @example
 * dashedEdge(50, 100, 300, 0, 5, 10, false, false);
 * // expected outcome: straight dashed edge and no end point
 * 
 * @example
 * dashedEdge(50, 125, 302.5, 0, 10, 5);
 * // expected outcome: straight dashed edge and an end dash
 * 
 * @example
 * dashedEdge(50, 150, 302.5, 0, 10, 5, false);
 * // expected outcome: straight dashed edge and no end dash
 *
 * @see {@link dottedEdge}
 * @see {@link edge}
 */
dashedEdge = (x, y, length, angle = 0, dashLength = 10, spacing = 10, endDash = true, endPoint = true) => {
    if (angleMode == 'degrees') angle = e.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    dashedLine(x, y, x2, y2, dashLength, spacing, endDash, endPoint);
};
