/**
 * Draws a parallelogram.
 *
 * @link https://www.khanacademy.org/cs/-/4747962019348480
 *
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 *
 * @example
 * parallelogram(50, 50, 200, 50, 100, 100);
 *
 * @see rhombus
 */
parallelogram = (ax, ay, bx, by, cx, cy) => {
    const dx = bx - ax;
    const dy = by - ay;
    e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};
