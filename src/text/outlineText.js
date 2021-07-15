/**
 * @summary
 * Draws text with an outline.
 * 
 * @description
 * If Color Essentials is not present, outlines cannot be translucent.
 * 
 * @category Text
 *
 * @param {string} str
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 * @param {number} weight
 * @param {color|string} [color=BLACK] color of outline
 *
 * @example
 * const str = 'Outlined Text';
 * outlineText(str, 25, 25);
 *
 * @example
 * const str = 'Outlined Text';
 * fill(BLACK);
 * outlineText(str, 25, 25, 10, ORANGE);
 * 
 * @todo Fix multiline strings
 * @todo Mimic `text$4` and `text$6`
 */
outlineText = (str, x, y, weight = 5, color = BLACK) => {
    str = str.replace('\n', '');
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.lineWidth = weight;
    if (_.isNumber(color))
        color = typeof COLOR_ESSENTIALS != 'undefined' ? RGBToHex(color, false) : '#' + hex(color, 6);
    ctx.strokeStyle = color;
    ctx.strokeText(str, x, y);
    ctx.restore();
    pushStyle();
    p.textAlign(p.LEFT, p.TOP);
    p.text(str, x, y);
    popStyle();
};
