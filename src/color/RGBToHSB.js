/**
 * Converts RGB to HSB.
 * 
 * @link https://stackoverflow.com/a/54070620
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(RGBToHSB(0, 0, 255));
 * // expected outcome: [240, 100, 100, 100]
 * 
 * @example
 * println(RGBToHSB(BLUE));
 * // expected outcome: [240, 100, 100, 100]
 */
RGBToHSB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.HSB ? currentColorRange : HSB_COLOR_RANGE;
    const fns = [
        hue => p.map(hue, 0, 6, 0, mapColorRange[0]),
        saturation => saturation * mapColorRange[1],
        brightness => brightness * mapColorRange[2],
        alpha => alpha * mapColorRange[3]
    ];
    let r, g, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.RGB);
            }
            [r, g, b, a] = toRGB(args[0]).map((value, i) => value /= RGB_COLOR_RANGE[i]);
            notDefaultColorRange && p.popStyle();
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / RGB_COLOR_RANGE[3];
            [r, g, b] = args.map((value, i) => value /= RGB_COLOR_RANGE[i]);
    }
    const max = Math.max(r, g, b),
        chroma = max - Math.min(r, g, b);
    const hue = chroma && ((max == r) ? (g - b) / chroma : ((max == g) ? 2 + (b - r) / chroma : 4 + (r - g) / chroma));
    let arr = [hue < 0 ? hue + 6 : hue, max && chroma / max, max, a || 1];
    arr = arr.map((value, i) => fns[i](value));
    return arr;
};
