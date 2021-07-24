/**
 * @summary
 * Gets current fill color.
 * 
 * @description
 * Processing will only update the current fill if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the fill value.
 * 
 * @category Color
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getFill = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.fillStyle);
};
