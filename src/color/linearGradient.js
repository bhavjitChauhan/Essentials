/**
 * @summary
 * Draws a linear gradient from `startColor` to `endColor` in the form of a rectangle.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
 *
 * @param {number} x x-coordinate of the gradient
 * @param {number} y y-coordinate of the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param
 * {LEFT|RIGHT|TOP|UP|BOTTOM|DOWN|TOP_LEFT|TOP_RIGHT|BOTTOM_RIGHT|BOTTOM_LEFT}
 * [direction=RIGHT] direction of gradient
 * @param {number} [step=1] step size
 *
 * @example
 * linearGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: linear gradient from left to right; red to yellow
 *
 * @example
 * linearGradient(150, 25, 100, 100, PURPLE, PINK, TOP_RIGHT);
 * // expected outcome: linear gradient from bottom-left to top-right; purple to pink
 *
 * @example
 * linearGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, BOTTOM_RIGHT, 10);
 * // expected outcome: linear gradient from top-left to bottom-right; green to light blue in strips of thickness 10
 */
linearGradient = (x, y, width, height, startColor, endColor, direction = RIGHT, step = 1) => {
    push();
    e.strokeWeight(1);
    switch (direction) {
        case LEFT:
        case RIGHT:
            if (direction == LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width));
                    e.line(x + i, y, x + i, y + height);
                }
            } else {
                for (let i = 0; i < width; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / width);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x + i, y, width - i, height); }
                    else { e.rect(x + i, y, step, height); }
                }
            }
            break;
        case TOP:
        case UP:
        case BOTTOM:
        case DOWN:
            if (direction == TOP || direction == UP) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < height; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / height));
                    e.line(x, y + i, x + width, y + i);
                }
            } else {
                for (let i = 0; i < height; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / height);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x, y + i, width, height - i); }
                    else { e.rect(x, y + i, width, step); }
                }
            }
            break;
        case TOP_LEFT:
        case BOTTOM_RIGHT:
            if (direction == TOP_LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + i, y, x, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + i, y + height, x + width, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(-45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(-side / 2, i, side, side - i); }
                        else { this.rect(-side / 2, i, side, step); }
                    }
                });
            }
            break;
        case TOP_RIGHT:
        case BOTTOM_LEFT:
            if (direction == TOP_RIGHT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + width - i, y, x + width, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + width - i, y + height, x, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(0, i - side / 2, side, side - i); }
                        else { this.rect(0, i - side / 2, side, step); }
                    }
                });
            }
    }
    pop();
};
