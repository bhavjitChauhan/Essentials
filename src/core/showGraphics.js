/**
 * Shows image of graphics created with `createGraphics`.
 *
 * @param {number} x x-coordinate of image
 * @param {number} y y-coordinate of image
 * @param {number} width width of image
 * @param {number} height height of image
 * @param {Function} fn draw code
 * @param {P2D|P3D} [renderer=P2D]
 *
 * @example
 * showGraphics(100, 100, 100, 100, function() {
 *     this.background(BLACK);
 *     this.fill(RED);
 *     this.rect(25, 25, 50, 50);
 * });
 * // expected outcome: red square embedded in black square
 */
showGraphics = (x, y, width, height, fn, renderer = p.P2D) => {
    const g = p.createGraphics(width, height, renderer);
    fn.call(g);
    p.image(g, x, y);
};
