/**
 * Gets the color range for red.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getRedRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getRedRange = () => p.red(WHITE);

/**
 * Gets the color range for green.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getGreenRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getGreenRange = () => p.green(WHITE);

/**
 * Gets the color range for blue.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getBlueRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getBlueRange = () => p.blue(WHITE);

/**
 * Gets the color range for alpha.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 255, 255, 255, 1);
 * println(getAlphaRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getAlphaRange = () => p.alpha(WHITE);

/**
 * Gets the rounded color range for hue.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getHueRange());
 * // expected output: 360
 * 
 * @see {@link getColorRange}
 */
getHueRange = () => Math.round(p.hue(0xFFFF0001));

/**
 * Gets the color range for saturation.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getSaturationRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getSaturationRange = () => p.saturation(RED);

/**
 * Gets the color range for brightness.
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getBrightnessRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getBrightnessRange = () => p.brightness(RED);

/**
 * @summary
 * Alias for `linearGradient` that draws a linear gradient from `startColor` to
 * `endColor` in the form of a rectangle filling the entire canvas.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
 *
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param
 * {LEFT|RIGHT|TOP|UP|BOTTOM|DOWN|TOP_LEFT|TOP_RIGHT|BOTTOM_RIGHT|BOTTOM_LEFT}
 * [direction=RIGHT] direction of gradient
 * @param {number} [step=5] step size
 *
 * @see {@link linearGradient}
 */
linearGradientBackground = (startColor, endColor, direction = RIGHT, step = 5) => linearGradient(0, 0, WIDTH, HEIGHT, startColor, endColor, direction, step);

/**
 * @summary
 * Alias for `radialGradient` that draws a radial gradient from `startColor` to
 * `endColor` in the form of an ellipse filling the entire canvas.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 *
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [step=5] step size
 *
 * @see {@link radialGradient}
 */
radialGradientBackground = (startColor, endColor, step = 5) => {
    const DIAGONAL = Math.sqrt(Math.max(WIDTH, HEIGHT) ** 2 * 2);
    radialGradient(HALF_WIDTH, HALF_HEIGHT, DIAGONAL, DIAGONAL, startColor, endColor, step);
};

/**
 * @summary
 * Alias for `angularGradient` that draws an angular gradient from `startColor`
 * to `endColor` in the form of an ellipse filling the entire canvas.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 *
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @see {@link angularGradient}
 */
angularGradientBackground = (startColor, endColor, angle = 0, step = 5) => {
    const DIAGONAL = Math.sqrt(Math.max(WIDTH, HEIGHT) ** 2 * 2);
    angularGradient(
        (WIDTH - DIAGONAL) / 2,
        (HEIGHT - DIAGONAL) / 2,
        DIAGONAL,
        DIAGONAL,
        startColor, endColor, angle, step
    );
};

/**
 * @summary
 * Alias for `circularGradient` that draws an circular gradient from
 * `startColor` to `endColor` in the form of an ellipse filling the entire
 * canvas.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 *
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 * 
 * @see {@link circularGradient}
 */
circularGradientBackground = (startColor, endColor, angle = 0, step = 5) => {
    const DIAGONAL = Math.sqrt(Math.max(WIDTH, HEIGHT) ** 2 * 2);
    circularGradient(
        (WIDTH - DIAGONAL) / 2,
        (HEIGHT - DIAGONAL) / 2,
        DIAGONAL,
        DIAGONAL,
        startColor, endColor, angle, step
    );
};
