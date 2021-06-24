/**
 * Draws text with an outline.
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
    ctx.strokeStyle = _.isNumber(color) ? RGBToHex(color, false) : color;
    ctx.strokeText(str, x, y);
    ctx.restore();
    pushStyle();
    p.textAlign(p.LEFT, p.TOP);
    p.text(str, x, y);
    popStyle();
};
