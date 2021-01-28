/**
 * Converts hex or HSB to RGB color value
 * 
 * @param {(string|color)} x Hex, hue or RGB color value
 * @param {number} [s] Saturation value
 * @param {number} [v] Brightness value
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
toRGB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.red(c), e.green(c), e.blue(c)];
        } else {
            return hexToRGB(c);
        }
    } else if (args.length == 3) {
        return HSBToRGB.apply(e, args);
    }
};
