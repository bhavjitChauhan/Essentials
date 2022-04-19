/**
 * Draws a heart.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @see {@link https://www.khanacademy.org/cs/-/2085250861}
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the heart
 * @param {number} y y-coordinate of the heart
 * @param {number} radius
 *
 * @example
 * heart(100, 100, 50);
 */
heart = (x, y, radius) => {
    const ay = y - 2 * radius / 5,
        by = y + radius,
        c1y = y - 6 * radius / 5,
        c2y = y - 2 * radius / 5;
    let c1x = x + radius / 2,
        c2x = x + 9 * radius / 5;

    drawShape(() => {
        p.vertex(x, ay);
        p.bezierVertex(c1x, c1y, c2x, c2y, x, by);
        c1x = 2 * x - c1x;
        c2x = 2 * x - c2x;
        p.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
    }, true);
};
