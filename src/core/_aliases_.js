_eval = eval;
e = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [e.LEFT, e.RIGHT, e.TOP, e.BOTTOM, e.UP, e.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 */
WIDTH = e.width;

/**
 * Alias for `height`.
 */
HEIGHT = e.height;

/**
 * Alias for `WIDTH / 2`.
 */
HALF_WIDTH = WIDTH / 2;

/**
 * Alias for `HEIGHT / 2`.
 */
HALF_HEIGHT = HEIGHT / 2;

/**
 * Alias for `_clearLogs()`.
 *
 * @example
 * println('Hello World');
 * clearLogs();
 * // expected outcome: blank canvas console
 */
clearLogs = () => e._clearLogs();

/**
 * Literally does nothing. Useful as the default for optional callback arguments.
 *
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = function() {};

/**
 * Alias for `Program.restart()`
 */
restart = () => e.Program.restart();
