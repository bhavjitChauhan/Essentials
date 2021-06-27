/**
 * Converts HSB to RGB.
 * 
 * @link https://stackoverflow.com/a/54070620
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(HSBToRGB(0, 100, 100));
 * // expected outcome: [255, 0, 0, 255]
 * @example
 * println(HSBToRGB(BLUE));
 * // expected outcome: [0, 0, 255, 255]
 */
HSBToRGB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.RGB ? currentColorRange : RGB_COLOR_RANGE;
    let h, s, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.HSB);
            }
            [h, s, b, a] = toHSB(args[0]);
            notDefaultColorRange && p.popStyle();
            h /= 60, s /= 100, b /= 100, a /= 100;
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / HSB_COLOR_RANGE[3];
            h = args.shift() / 60;
            [s, b] = args.map((value, i) => value /= HSB_COLOR_RANGE[i + 1]);
    }
    f = (n, k = (n + h) % 6) => b - b * s * Math.max(Math.min(k, 4 - k, 1), 0);
    let arr = [f(5), f(3), f(1), a || 1];
    arr = arr.map((value, i) => value * mapColorRange[i]);
    return arr;
};
