/**
 * @summary
 * Draws a dotted line.
 *
 * @description
 * If `endPoint` is true, a point will be drawn at (x2, y2). Use the `smooth`
 * function to prevent jagged points.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [spacing=10] gap between points
 * @param {boolean} [endPoint=true] draw point at end point
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
 * @example
 * dottedLine(50, 100, 350, 100, 14, false);
 * // expected outcome: straight dotted line with spacing of 14 and no end point
 *
 * @see dashedLine
 */
dottedLine = (x1, y1, x2, y2, spacing = 10, endPoint = true) => {
    const length = e.dist(x1, y1, x2, y2);
    for (let i = 0; i < length; i += spacing) {
        e.point(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2));
    }
    if (endPoint) e.point(x2, y2);
};
