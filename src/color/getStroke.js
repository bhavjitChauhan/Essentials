/**
 * Gets current stroke color.
 * 
 * @category Color
 * 
 * @param {boolean} [updateStroke=true]
 * 
 * @returns {color}
 */
getStroke = (updateStroke = true) => {
    updateStroke && _updateStrokeFill();
    return hexToRGB(ctx.strokeStyle);
};
