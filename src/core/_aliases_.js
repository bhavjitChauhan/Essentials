_eval = eval;
e = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [e.LEFT, e.RIGHT, e.TOP, e.BOTTOM, e.UP, e.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 * 
 * @constant {number}
 */
WIDTH = e.width;

/**
 * Alias for `height`.
 * 
 * @constant {number}
 */
HEIGHT = e.height;

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
ctx = e.externals.context;

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
noop = function () { };

/**
 * Alias for `Program.restart()`
 */
restart = () => e.Program.restart();

/**
 * Alias for `pushSyle`.
 *
 * @example
 * push();
 * stroke(WHITE);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 *
 * @see {@link pop}
 */
push = () => e.pushStyle();

/**
* Alias for `popStyle`.
*
* @example
* push();
* stroke(WHITE);
* rotate(90);
* rect(10, 10, 15, 15);
* pop();
* // This rectangle will not display the stroke or rotation
* rect(10, 10, 15, 15);
*
* @see {@link push}
*/
pop = () => e.popStyle();
