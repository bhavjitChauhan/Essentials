/**
 * Draws a rhombus.
 * 
 * @link khanacademy.org/cs/-/4747962019348480
 * 
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 * 
 * @example
 * rhombus(50, 100, 100, 50, 100, 100);
 * 
 * @see parallelogram
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
    cx = ax + r * (cx - ax);
    cy = ay + r * (cy - ay);
    parallelogram(ax, ay, bx, by, cx, cy);
};
