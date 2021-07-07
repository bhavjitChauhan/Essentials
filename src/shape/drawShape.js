/**
 * Alias for `beginShape()`/`endShape()`.
 *
 * @param {Function} fn Shape function
 * @param {CLOSE|boolean} [close] Whether to close the shape
 * @param {POINTS|LINES|TRIANGLES|TRIANGLE_FAN|TRIANGLE_STRIP|QUADS|QUAD_STRIP}
 * [mode] Shape mode
 *
 * @example
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, CLOSE);
 * // expected outcome: square
 *
 * @example
 * strokeWeight(5);
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, false, POINTS);
 * // expected outcome: points in a square formation
 */
drawShape = (fn, close, mode) => {
    close = close && p.CLOSE;
    p.beginShape(mode);
    fn();
    p.endShape(close);
};
