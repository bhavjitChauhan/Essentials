/**
 * @summary
 * Applies CSS effect on the canvas.
 * 
 * @description
 * The `effect` function is much more efficient than the Processing version.
 * Since Processing by default does not clear Canvas filters, wrap `effect`
 * calls in `push`/`pop`, or use the `clearEffects` function.
 * 
 * Unlike their Processing counterparts, effects are applied to everything
 * drawn _after_ the `effect` function is called.
 * 
 * To use CSS properties directly, see the MDN documentation on
 * [CanvasRenderingContext2D.filter]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter#browser_compatibility}.
 * 
 * @category Color
 * 
 * @param {string} filter Either `BLUR`, `BRIGHTNESS`, `LUMINANCE`, `CONTRAST`, `DROP_SHADOW`, `GRAY`, `GRAY_SCALE`, `HUE_ROTATE`, `INVERT`, `OPACITY`, `SATURATE` or `SEPIA`.
 * @param {...*} args
 */
effect = (filter, ...args) => {
    switch(filter) {
        case p.BLUR:
            return p.blur(...args);
        case BRIGHTNESS:
        case LUMINANCE:
            return luminance(...args);
        case CONTRAST:
            return contrast(...args);
        case DROP_SHADOW:
            return dropShadow(...args);
        case p.GRAY:
        case GRAYSCALE:
            return grayscale(...args);
        case HUE_ROTATE:
            return hueRotate(...args);
        case p.INVERT:
            return invert(...args);
        case OPACITY:
            return opacity(...args);
        case SATURATE:
            return saturate(...args);
        case SEPIA:
            return sepia(...args);
    }
    _appendFilter(filter);
};
