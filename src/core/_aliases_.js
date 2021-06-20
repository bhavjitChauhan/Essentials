_eval = eval;
p = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [p.LEFT, p.RIGHT, p.TOP, p.BOTTOM, p.UP, p.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 * 
 * @constant {number}
 */
WIDTH = p.width;

/**
 * Alias for `height`.
 * 
 * @constant {number}
 */
HEIGHT = p.height;

/**
 * Alias for `WIDTH / 2`.
 * 
 * @constant {number}
 */
HALF_WIDTH = WIDTH / 2;

/**
 * Alias for `HEIGHT / 2`.
 * 
 * @constant {number}
 */
HALF_HEIGHT = HEIGHT / 2;

/**
 * Alias for the
 * [`CanvasRenderingContext2D`]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D}
 * used by Processing.
 * 
 * @constant {CanvasRenderingContext2D}
 */
ctx = p.externals.context;

/**
 * Alias for `_clearLogs()`.
 *
 * @example
 * println('Hello World');
 * clearLogs();
 * // expected outcome: blank canvas console
 */
clearLogs = () => p._clearLogs();

/**
 * Literally does nothing. Useful as the default for optional callback arguments.
 *
 * @example
 * // Prevents an error if an unneeded method is called
 * Element.init = noop;
 */
noop = function () { };
