/**
 * @summary
 * Draws a dashed line.
 *
 * @description
 * If `endDash` is true, a dash will be drawn of smaller length than defined by
 * `dashLength` to finish the line. If `endPoint` is true, a point will be drawn
 * at (x2, y2). Use the `smooth` function to prevent jagged dashes.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 * @param {boolean} [endDash=true] draw dash at end
 * @param {boolean} [endPoint=true] draw point at end point
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
 * @example
 * dashedLine(50, 100, 350, 100, 5, 10, false, false);
 * // expected outcome: straight dashed line and no end point
 *
 * @example
 * dashedLine(50, 125, 352.5, 125, 10, 5);
 * // expected outcome: straight dashed line and an end dash
 *
 * @example
 * dashedLine(50, 150, 352.5, 150, 10, 5, false);
 * // expected outcome: straight dashed line and no end dash
 *
 * @see {@link dottedLine}
 */
dashedLine = (x1, y1, x2, y2, dashLength = 10, spacing = 10, endDash = true, endPoint = true) => {
    const length = p.dist(x1, y1, x2, y2);
    let i = 0;
    for (; i <= length - dashLength; i += dashLength + 2 * spacing) {
        p.line(p.map(i, 0, length, x1, x2), p.map(i, 0, length, y1, y2), p.map(i + dashLength, 0, length, x1, x2), p.map(i + dashLength, 0, length, y1, y2));
    }
    if (endDash && i < length) p.line(p.map(i, 0, length, x1, x2), p.map(i, 0, length, y1, y2), x2, y2);
    if (endPoint && i >= length) p.point(x2 + 0.5, y2 + 0.5);
};
