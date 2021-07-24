/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws a radial gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of center of the gradient
 * @param {number} y y-coordinate of center the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [step=5] step size
 *
 * @example
 * radialGradient(100, 100, 100, 100, RED, YELLOW);
 * // expected outcome: radial gradient from red to yellow
 *
 * @example
 * radialGradient(250, 100, 100, 100, PURPLE, PINK, 10);
 * // expected outcome: radial gradient from purple to pink with step size 10
 */
 radialGradientOld = (x, y, width, height, startColor, endColor, step = 5) => {
    push();
    e.strokeWeight(1);
    const maxRadius = Math.max(width, height);
    if (step == 1) {
        e.noFill();
        for (let i = 0; i < maxRadius; i++) {
            e.stroke(e.lerpColor(endColor, startColor, i / maxRadius));
            e.arc(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height),
                0, 360);
        }
    } else {
        for (let i = 0; i < maxRadius; i += step) {
            const c = e.lerpColor(endColor, startColor, i / maxRadius);
            e.stroke(c);
            e.fill(c);
            e.ellipse(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height));
        }
    }
    pop();
};
