/**
 * Gets current fill color.
 * 
 * @category Color
 * 
 * @param {boolean} [updateFill=true]
 * 
 * @returns {color}
 */
getFill = (updateFill = true) => {
    updateFill && _updateStrokeFill();
    return hexToRGB(ctx.fillStyle);
};
