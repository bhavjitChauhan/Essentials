/**
 * Sets the color mode to selected preset.
 * 
 * @category Color
 * 
 * @param {number} [mode] `RGB` or `HSB`
 * 
 * @example
 * presetColorMode(HSB);
 * println(getColorRange());
 * // expected output: [360, 100, 100, 100]
 * presetColorMode();
 * println(getColorRange());
 * // expected output: [255, 255, 255, 255]
 * 
 * @see {@link getColorRange}
 */
presetColorMode = mode => {
    if (!mode)
        mode = getColorMode() == p.RGB ? p.HSB : p.RGB;
    switch (mode) {
        case p.RGB:
            p.colorMode(p.RGB, 255);
            break;
        case p.HSB:
            p.colorMode(p.HSB, 360, 100, 100, 100);
    }
};
