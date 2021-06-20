/**
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 *
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 *
 */
circle = (x, y, radius) => p.ellipse(x, y, radius, radius);
