/**
 * Draws a donut.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the donut
 * @param {number} y y-coordinate of the donut
 * @param {number} majorDiameter Diameter of outer circle
 * @param {number} minorDiameter Diameter of inner circle
 *
 * @example
 * donut(100, 100, 100, 50);
 */
donut = (x, y, majorDiameter, minorDiameter) => {
    const kappa = 4 / 3 * (Math.sqrt(2) - 1);
    p.pushMatrix();
    p.translate(x, y);
    p.pushStyle();
    p.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, central, central, radius, 0, radius);
        p.bezierVertex(-central, radius, -radius, central, -radius, 0);
        p.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        p.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, -central, central, -radius, 0, -radius);
        p.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        p.bezierVertex(-radius, central, -central, radius, 0, radius);
        p.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    p.popStyle();

    p.pushStyle();
    p.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    p.popStyle();
    p.popMatrix();
};
