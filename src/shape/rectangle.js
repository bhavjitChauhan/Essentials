/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults.
 *
 * @description
 * The rectangle will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * rectangle(50, 50, 100, 50);
 * // expected outcome: Rectangle with side lengths 100 and 50
 * @example
 * rectangle(150, 50, 100, 50, 10);
 * // expected outcome: Rectangle with radius 10 for all corners
 * @example
 * rectangle(250, 50, 100, 50, 10, 0);
 * // expected outcome: Rectangle with radius 10 for top corners
 * @example
 * rectangle(50, 150, 100, 50, 10, 10, 10); 
 * // expected outcome: Rectangle with radius 10 for all but bottom-left corner
 * @example
 * rectangle(150, 150, 100, 50, 10, 10, 0, 10);
 * // expected outcome: Rectangle with radius 10 for all but bottom-right corner
 *
 * @see square
 */
rectangle = (x, y, width, height = width, tl, tr, br, bl) => {
    if (tl == undefined) e.rect(x, y, width, height);
    else if (tr == undefined) e.rect(x, y, width, height, tl);
    else if (br == undefined) e.rect(x, y, width, height, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, width, height, tl, tr, br, 0);
    else e.rect(x, y, width, height, tl, tr, br, bl);
};
