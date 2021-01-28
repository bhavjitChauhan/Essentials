/**
 * Draws a 2D cylinder.
 * 
 * @link https://www.khanacademy.org/cs/-/5157537806548992
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
    push();
    e.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? e.TWO_PI : 360;
        e.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const centeral = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            e.vertex(z, -r);
            e.bezierVertex(z + centeral, -r, z + r, -centeral, z + r, 0);
            e.bezierVertex(z + r, centeral, z + centeral, r, z, r);
            e.vertex(-z, r);
            e.bezierVertex(-z - centeral, r, -z - r, centeral, -z - r, 0);
            e.bezierVertex(-z - r, -centeral, -z - centeral, -r, -z, -r);
        }, true);
    }
    pop();
};
