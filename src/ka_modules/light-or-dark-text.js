/** @module lightOrDarkText */
/**
 * Determines if text should be black or white based on background color
 * 
 * @param {number} backgroundColor Color of background
 * 
 * @returns {number} Color of text
 */
var lightOrDarkText = function(backgroundColor) {
    var r, g, b;
    if (typeof backgroundColor === 'string') {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor);
        r = parseInt(result[1], 16);
        g = parseInt(result[2], 16);
        b = parseInt(result[3], 16);
    } else {
        r = red(backgroundColor);
        g = green(backgroundColor);
        b = blue(backgroundColor);
    }
    if ((r + b + g) / 3 < 225) {
        return color(255);
    }
    return color(0);
};
var export_module;
if (export_module) {
    export_module(lightOrDarkText);
} else {
    var h = 0,
        s = 0,
        b = 0;
    colorMode(HSB);
    textAlign(CENTER, CENTER);
    textSize(50);
    draw = function() {
        h = frameCount % 255;
        s = frameCount % 255;
        b = frameCount % 255;
        var TEST_COLOR = color(h, s, b);
        background(TEST_COLOR);
        fill(lightOrDarkText(hex(h, 2) + hex(s, 2) + hex(b, 2)));
        text("TEXT", width / 2, height / 2);
    };
}
