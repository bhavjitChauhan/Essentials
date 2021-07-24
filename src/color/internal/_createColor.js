/**
 * Create color in given color mode.
 * 
 * @private
 * 
 * @param {Array|number} arr
 * @param {number} [colorMode=getColorMode()]
 * @param {number} [currentColorMode=colorMode]
 * 
 * @returns {number}
 */
_createColor = (arr, colorMode = getColorMode(), currentColorMode = colorMode) => {
    const oppositeColorMode = colorMode == p.RGB ? p.HSB : p.RGB;
    const isDifferentColorMode = currentColorMode == oppositeColorMode;
    let defaultAlpha = getAlphaRange();
    if (currentColorMode != colorMode) {
        if (colorMode == p.RGB) defaultAlpha = RGB_COLOR_RANGE[3];
        else defaultAlpha = HSB_COLOR_RANGE[3];
    }
    arr = _parseColorArray(arr, defaultAlpha);
    if (isDifferentColorMode) {
        p.pushStyle();
        presetColorMode(colorMode);
    }
    result = p.color.apply(null, arr);
    isDifferentColorMode && p.popStyle();
    return result;
};
