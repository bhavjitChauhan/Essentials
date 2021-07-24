_eval = eval;
p = Processing.instances[0];

[LEFT, RIGHT, TOP, BOTTOM, UP, DOWN] = [p.LEFT, p.RIGHT, p.TOP, p.BOTTOM, p.UP, p.DOWN];
TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_RIGHT = 3, BOTTOM_LEFT = 4;

/**
 * Alias for `width`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
WIDTH = p.width;

/**
 * Alias for `height`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HEIGHT = p.height;

/**
 * Alias for `WIDTH / 2`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HALF_WIDTH = WIDTH / 2;

/**
 * Alias for `HEIGHT / 2`.
 * 
 * @constant {number}
 * 
 * @category Core
 */
HALF_HEIGHT = HEIGHT / 2;

/**
 * Alias for the
 * [`CanvasRenderingContext2D`]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D}
 * used by Processing.
 * 
 * @constant {CanvasRenderingContext2D}
 * 
 * @category Core
 */
ctx = p.externals.context;
