/**
 * Converts RGB(A) to CSS hexadecimal values.
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 */
HSBToHex = (...args) => {
    let shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    const notDefaultColorRange = !isDefaultColorRange();
    notDefaultColorRange && p.pushStyle();
    presetColorMode(p.RGB);
    const arr = HSBToRGB(...args).map(value => Math.round(value));
    notDefaultColorRange && p.popStyle();
    return RGBToHex(...arr, shorthand, octothorpe);
};
