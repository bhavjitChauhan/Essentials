/**
 * Gets current rotation transformation.
 * 
 * @param {boolena} [degrees=p.angleMode == 'degrees'] convert to degrees
 * @param {DOMMatrix} [matrix=ctx.getTransform()]
 * 
 * @returns {number}
 */
getRotation = (degrees = p.angleMode == 'degrees', matrix = ctx.getTransform()) => {
    let angle = Math.atan2(matrix.b, matrix.a);
    if (angle < 0) angle += Math.PI * 2;
    return degrees ? p.degrees(angle) : angle;
};
