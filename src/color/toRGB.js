/**
 * Converts color integers, hex or HSB values to RGB.
 * 
 * @category Color
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * background(toRGB('fff'));
 * // expected outcome: white background
 *
 * @example
 * background(toRGB(0, 255, 255));
 * // expected outcome: red background
 *
 * @example
 * println(toRGB(-1))
 * // expected output: [255, 255, 255]
 */
toRGB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isHSB = getColorMode() == p.HSB;
                if (isHSB) {
                    p.pushStyle();
                    presetColorMode(p.RGB);
                }
                const arr = [p.red(col), p.green(col), p.blue(col), p.alpha(col)];
                isHSB && p.popStyle();
                return arr;
            }
            return hexToRGB(col);
        }
        case 3:
        case 4:
            return HSBToRGB.apply(p, args);
    }
};
