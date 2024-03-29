/**
 * Draws a line of a given length and at a given angle.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of start point
 * @param {number} y y-coordinate of start point
 * @param {number} length length of line
 * @param {number} [angle=0] rotation of line
 *
 * @example
 * angleMode = 'degrees';
 * edge(50, 50, 300, 0);
 * // expected outcome: horizontal line of length 300
 *
 * @example
 * edge(50, 75, 100, 45);
 * // expected outcome: line of length 100 rotated 45 degrees
 *
 * @example
 * angleMode = 'radians';
 * edge(200, 75, 100, PI / 4);
 * // expected outcome: line of length 100 rotated 45 degrees
 */
edge = (x, y, length, angle = 0) => {
    if (p.angleMode == 'degrees') angle = p.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    p.line(x, y, x2, y2);
};
