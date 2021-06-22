/**
 * Gets current stroke color.
 * 
 * @returns {color}
 */
getStroke = () => {
    p.rect(0, 0, '%');
    return hexToRGB(ctx.strokeStyle);
};
