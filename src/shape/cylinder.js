/**
 * Draws a 2D cylinder.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @see {@link https://www.khanacademy.org/cs/-/5157537806548992}
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of cylinder
 * @param {number} y y-coordinate of cylinder
 * @param {number} width
 * @param {number} height
 *
 * @example
 * cylinder(100, 100, 100, 50);
 */
cylinder = (x, y, width, height) => {
    width = Math.abs(width);
    height = Math.abs(height);
    p.pushMatrix();
    p.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
        p.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const central = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            p.vertex(z, -r);
            p.bezierVertex(z + central, -r, z + r, -central, z + r, 0);
            p.bezierVertex(z + r, central, z + central, r, z, r);
            p.vertex(-z, r);
            p.bezierVertex(-z - central, r, -z - r, central, -z - r, 0);
            p.bezierVertex(-z - r, -central, -z - central, -r, -z, -r);
        }, true);
    }
    p.popMatrix();
};
