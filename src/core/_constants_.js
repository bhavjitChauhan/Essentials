_eval = eval;

p = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [p.LEFT, p.RIGHT, p.TOP, p.BOTTOM, p.UP, p.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Literally does nothing. Useful as the default for optional callback arguments.
 * 
 * @category Core
 *
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = function () { };

/**
 * Dummy Processing instance used to access disabled methods.
 * 
 * @category Core
 * 
 * @constant {Processing}
 */
DUMMY_INSTANCE = p.createGraphics(0, 0, p.P2D);
