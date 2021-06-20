/**
 * @summary
 * Draws an angular gradient from `startColor` to `endColor` in the form of an
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
 * angularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: angular gradient from red to yellow
 *
 * @example
 * angularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: angular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * angularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: angular gradient from green to light blue in strips of thickness 25
 */
angularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    angle -= 90;
    // `atan` could be `asin`. See https://jsbench.me/mmklrhzgra/1 & https://www.khanacademy.org/cs/-/4713637410717696
    const dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    p.pushStyle();
    if (step == 1) {
        p.strokeWeight(1.5);
        for (let i = angle; i < angle + 359; i += dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, (i - angle) / 360));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        p.strokeWeight(1);
        for (let i = angle; i < angle + 359; i += dTheta) {
            const c = p.lerpColor(startColor, endColor, (i - angle) / 360);
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    p.popStyle();
};
