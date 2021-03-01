/**
 * Draws a donut.
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
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
    push();
    e.translate(x, y);
    push();
    e.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, central, central, radius, 0, radius);
        e.bezierVertex(-central, radius, -radius, central, -radius, 0);
        e.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        e.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, -central, central, -radius, 0, -radius);
        e.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        e.bezierVertex(-radius, central, -central, radius, 0, radius);
        e.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    pop();

    push();
    e.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    pop();
    pop();
};
