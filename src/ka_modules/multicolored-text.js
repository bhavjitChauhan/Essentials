/** @module multicoloredText */
/**
 * Displays a string with multiple colors that are passed in using special syntax
 * 
 * @param {string} string Input string
 * @param {number} [x=0] x coordintate value
 * @param {number} [y='text height'] y coordinate value
 */
var multicoloredText = function(string, x, y) {
    if(!(/\S/).test(string)) {
        return;
    }
    x = x || 0;
    y = y || textAscent();
    string = string.split("\n");
    pushStyle();
    textAlign(LEFT, TOP);
    for(var i in string) {
        string[i] = string[i].split(/\[|]/);
        var splits = 0;
        for(var j in string[i]) {
            if(/\d+,\d+,\d+/.test(string[i][j])) {
                var rgb = string[i][j].split(",");
                fill.apply(this, rgb);
                delete string[i][j];
                if(splits === 0) {
                    string[i][j - 1] += " ";
                }
                splits += 1;
            } else {
                var w = textWidth(string[i].slice(0, j));
                text(string[i][j], x + w - (splits * 2 * textWidth(" ")), y + (i * textAscent() * 2));
            }
        }
    }
    popStyle();
};

var export_module;
if(export_module) {
    export_module(multicoloredText);
} else {
    var string = "[0,0,0]This is going to be [255,0,255]pink [0,0,0]and this\nis [0,0,255]all blue [0,0,0]and this is [0,255,0]green.";
    textFont(createFont("Times"), 25);
    multicoloredText(string, (width / 2) - ((textWidth(string) - textWidth("[0,0,0][255,0,255][0,0,0]")) / 2), (height / 2) - (textAscent() * 2));
}
