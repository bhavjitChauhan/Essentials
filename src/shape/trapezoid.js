/**
 * Draws a trapezoid.
 * 
 * @param {number} x x-coordinate of trapezoid
 * @param {number} y y-coordinate of trapezoid
 * @param {number} height height of trapezoid
 * @param {number} topBase width of top base
 * @param {number} bottomBase width of bottom base
 * 
 * @example
 * trapezoid(100, 100, 100, 150, 200);
 * // expected outcome: trapezoid 
 */
trapezoid = (x, y, height, topBase, bottomBase) => {
    const maxBase = Math.max(topBase, bottomBase);
    p.quad(x + (maxBase - topBase) / 2, y,
        x + (maxBase - topBase) / 2 + topBase - 1, y,
        x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1,
        x + (maxBase - bottomBase) / 2, y + height - 1);
};
