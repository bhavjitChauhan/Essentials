/**
 * Faster blur on a rectangular selection.
 *
 * @param {number} [strength=10]
 * @param {number} [x=0] x-coordinate of the rectangle
 * @param {number} [y=0] y-coordinate of the rectangle
 * @param {number} [width=WIDTH] width of the rectangle
 * @param {number} [height=width || HEIGHT] height of the rectangle
 */
fastBlur = (strength = 10, x = 0, y = 0, width = WIDTH, height = width || HEIGHT) => {
    if (x < 0) {
        width += x;
        x = 0;
    }
    if (y < 0) {
        height += y;
        y = 0;
    }
    strength = p.constrain(strength, 0, Math.min(width, height));
    p.image(p.get(x, y, width, height), x, y, width / strength, height / strength);
    p.image(p.get(x, y, width / strength, height / strength), x, y, width, height);
};
