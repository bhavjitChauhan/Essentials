/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults and one `side`
 * parameter.
 *
 * @description
 * The square will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 *
 * @param {number} x x-coordinate of the square
 * @param {number} y y-coordinate of the square
 * @param {number} side side length of the square
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * square(50, 50, 50);
 * // expected outcome: Square with side length 50
 * @example
 * square(150, 50, 50, 10);
 * // expected outcome: Square with radius 10 for all corners
 * @example
 * square(250, 50, 50, 10, 0);
 * // expected outcome: Square with radius 10 for top corners
 * @example
 * square(50, 150, 50, 10, 10, 10);
 * // expected outcome: Square with radius 10 for all but bottom-left corner
 * @example
 * square(150, 150, 50, 10, 10, 0, 10);
 * // expected outcome: Square with radius 10 for all but bottom-right corner
 *
 * @see rectangle
 */
square = (x, y, side, tl, tr, br, bl) => {
    if (tl == undefined) e.rect(x, y, side, side);
    else if (tr == undefined) e.rect(x, y, side, side, tl);
    else if (br == undefined) e.rect(x, y, side, side, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, side, side, tl, tr, br, 0);
    else e.rect(x, y, side, side, tl, tr, br, bl);
};
