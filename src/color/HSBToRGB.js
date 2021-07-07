/**
 * Converts HSB to RGB color type.
 *
 * @param {(number|color)} x Hue value or color
 * @param {number} [s] Saturation value
 * @param {number} [v] Brightness value
 *
 * @returns {string}  RGB color value
 *
 * @example
 * const col = HSBToRGB(85, 255, 255);
 * println(col);
 * // expected output: -16711936
 * background(col);
 * // expected outcome: green background
 */
HSBToRGB = function(x, s, v) {
    if (arguments.length == 1) {
        c = x;
        x = p.hue(c), s = p.saturation(c), v = p.brightness(c);
    }
    x /= 255, s /= 255, v /= 255;

    const i = Math.floor(x * 6),
        f = x * 6 - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s);

    let r, g, b;
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    const result = [r, g, b].map(function (i) {
        return i * 255;
    });

    return p.color.apply(p, result);
};
