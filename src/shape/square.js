/**
 * Alias for `rect()` without the seperate `width` and `height` parameters.
 * 
 * @param {number} x x-coordinate of the square
 * @param {number} y y-coordinate of the square
 * @param {number} side side size of the square
 * @param {number} [radius=0] radius of corners
 * 
 */
square = (x, y, side, radius = 0) => e.rect(x, y, side, side, radius);
