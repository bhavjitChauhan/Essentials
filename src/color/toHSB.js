/**
 * Converts hex or RGB to HSB color value.
 * 
 * @param {(string|color)} x Hex, red or HSB color value
 * @param {number} [g] Green value
 * @param {number} [b] Blue value
 * 
 * @returns {color|array}  RGB color value or RGB values array
 * 
 * @example
 * colorMode(HSB);
 * background(toHSB('fff'));
 * // expected outcome: white background
 * 
 * @example
 * colorMode(HSB);
 * background(toHSB(255, 0, 0));
 * // expected outcome: red background
 * 
 * @example
 * println(toHSB(-1))
 * // expected output: [0, 0, 255]
 */
toHSB = function() {
    const args = arguments;
    if (args.length == 1) {
        const c = args[0];
        if (typeof c == 'number') {
            return [e.hue(c), e.saturation(c), e.brightness(c)];
        } else {
            return RGBToHSB.apply(e, toRGB(hexToRGB(c)));
        }
    } else if (args.length == 3) {
        return RGBToHSB.apply(e, args);
    }
};
