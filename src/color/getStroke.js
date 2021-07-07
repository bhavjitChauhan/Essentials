/**
 * @summary
 * Gets current stroke color.
 * 
 * @description
 * Provessing will only update the current stroke if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the stroke value.
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getStroke = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.strokeStyle);
};
