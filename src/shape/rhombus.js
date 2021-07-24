/**
 * Draws a rhombus.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://khanacademy.org/cs/-/4747962019348480
 * 
 * @category Shape
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
 * @see {@link parallelogram}
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = p.dist(ax, ay, bx, by) / p.dist(ax, ay, cx, cy);
    cx = ax + r * (cx - ax);
    cy = ay + r * (cy - ay);
    parallelogram(ax, ay, bx, by, cx, cy);
};
