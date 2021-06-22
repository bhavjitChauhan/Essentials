/**
 * Gets current fill color.
 * 
 * @returns {color}
 */
getFill = () => {
    p.rect(0, 0, '%');
    return hexToRGB(ctx.fillStyle);
};
