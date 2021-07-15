/**
 * Gets current stroke join.
 * 
 * @category Shape
 * 
 * @returns {string}
 * 
 * @example
 * strokeJoin(SQUARE);
 * println(getStrokeJoin() == SQUARE);
 * // expected output: true
 */
getStrokeJoin = () => ctx.lineJoin;
