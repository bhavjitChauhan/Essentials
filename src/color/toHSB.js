/**
 * Converts color intergers, hex or RGB values to HSB.
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * println(toRGB(BLUE));
 * // expected output: [0, 0, 255, 255]
 * 
 * @example
 * const col = toRGB('#F00')
 * println(hex(col, 6));
 * // expected output: 'FF0000'
 * 
 * @example
 * println(toRGB(0, 100, 100));
 * // expected output: [255, 0, 0, 255]
 */
toHSB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isRGB = getColorMode() == p.RGB;
                if (isRGB) {
                    p.pushStyle();
                    presetColorMode(p.HSB);
                }
                const arr = [p.hue(col), p.saturation(col), p.brightness(col), p.alpha(col)];
                isRGB && p.popStyle();
                return arr;
            }
            return hexToHSB(col);
        }
        case 3:
        case 4:
            return RGBToHSB.apply(p, args);
    }
};
