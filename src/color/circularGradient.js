/**
 * @summary
 * Draws an circular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * circularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: circular gradient from red to yellow
 *
 * @example
 * circularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: circular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * circularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: circular gradient from green to light blue in strips of thickness 25
 */
circularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    const dTheta = Math.ceil(e.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    push();
    if (step == 1) {
        e.strokeWeight(1.5);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            e.stroke(e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = e.radians(i);
            e.line(x + width / 2, y + height / 2,
                e.map(Math.cos(r), -1, 1, x, x + width),
                e.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        e.strokeWeight(1);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
        // Temporary fix for missing triangle
        r1 = e.radians(angle - 180);
        r2 = e.radians(angle - 180 - dTheta);
        e.stroke(endColor);
        e.fill(endColor);
        e.triangle(x + width / 2, y + height / 2,
            e.map(Math.cos(r1), -1, 1, x, x + width),
            e.map(Math.sin(r1), -1, 1, y, y + height),
            e.map(Math.cos(r2), -1, 1, x, x + width),
            e.map(Math.sin(r2), -1, 1, y, y + height));
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            const c = e.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            e.stroke(c);
            e.fill(c);
            r1 = e.radians(i);
            r2 = e.radians(i - dTheta);
            e.triangle(x + width / 2, y + height / 2,
                e.map(Math.cos(r1), -1, 1, x, x + width),
                e.map(Math.sin(r1), -1, 1, y, y + height),
                e.map(Math.cos(r2), -1, 1, x, x + width),
                e.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    pop();
};
