/**
 * Draws a star with _n_ spikes.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @see {@link https://www.khanacademy.org/cs/-/1171581918}
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of star
 * @param {number} y y-coordinate of star
 * @param {number} externalRadius External radius
 * @param {number} [spikes=5] Number of spikes
 * @param {number} [rotation=0] Rotation of star in degrees or radians
 *
 * @example
 * star(100, 100, 50);
 *
 * @example
 * star(100, 100, 50, 7, 10);
 */
star = (x, y, externalRadius, spikes = 5, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
    const interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            p.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};
