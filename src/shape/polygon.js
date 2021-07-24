/**
 * Draws a polygon with _n_ sides.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/1304459398
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of polygon's circumcircle
 * @param {number} y y-coordinate of polygon's circumcircle
 * @param {number} sides Number of sides
 * @param {number} radius Radius of circumcircle
 * @param {number} [rotation=0] Rotation of polygon in degrees or radians
 *
 * @example
 * polygon(100, 100, 5, 100);
 *
 * @example
 * polygon(100, 100, 5, 100, 180);
 *
 * // Alternative method
 * angleMode = 'radians';
 * polygon(100, 100, 5, 100, PI);
 */
polygon = (x, y, sides, radius, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? 2 * Math.PI : 360;
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            p.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};
