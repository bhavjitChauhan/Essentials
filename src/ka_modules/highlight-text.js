/** @module highlightText */
/**
 * Draws a string with a rectangle in the background, as if it were highlighted
 * 
 * @param {string} string String to be highlighted
 * @param {number} [x=0] x coordinate value
 * @param {number} [y='text height'] y coordinate value
 * @param {number} [highlightColor='yellow'] Color of highlight background
 */
var highlightText = function(string, x, y, highlightColor) {
    if(!(/\S/).test(string)) {
        return;
    }
    x = x || 0;
    y = y || textAscent();
    highlightColor = highlightColor || color(255, 255, 0);
    string = string.split("\n");
    noStroke();
    rectMode(CORNER);
    textAlign(LEFT, TOP);
    for(var i in string) {
        string[i] = " " + string[i] + " ";
        pushStyle();
        fill(highlightColor);
        rect(x, y + (i * textAscent() * 2), textWidth(string[i]), textAscent() * 1.75);
        popStyle();
        text(string[i], x, y + (i * textAscent() * 2));
    }
};

var export_module;
if(export_module) {
    export_module(highlightText);
} else {
    var string = "Highlighted\nText";
    fill(0);
    textFont(createFont("monospace"), 25);
    highlightText(string, (width / 2) - (textWidth(string) / 2), (height / 2) - textAscent() * 2);
}
