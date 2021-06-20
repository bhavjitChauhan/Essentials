/**
 * Faster blur effect on a rectangular selection.
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} size intensity of blur
 */
blurRect = (x, y, width, height, size) => {
    if (size <= 0) return;
    size = p.constrain(size, 0, Math.min(width, height));
    p.image(p.get(x, y, width, height), x, y, width / size, height / size);
    p.image(p.get(x, y, width / size, height / size), x, y, width, height);
};
