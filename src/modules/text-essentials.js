/** @module textEssentials */

// jshint ignore: start

const VERSION = '0.0.2';

// Functions {
/**
 * Returns string containing object values centered in a readable format
 * 
 * @param {object} object Object to be formatted
 * @param {number} [margin='length of longest string'] Minimum number of characters per line
 * 
 * @returns {string} Formatted object
 */
var centeredObjectText = function(object, margin) {
	if(typeof object !== "object") {
		return;
	}
	if(!margin) {
		margin = Object.keys(object).sort(function (a, b) {
			return b.length - a.length;
		})[0].length;
	}
	var result = "";
	for(var key in object) {
		if(typeof object[key] === "object") {
			result += "\n" + (" ".repeat(margin - key.length) + key + " : " + object[key][0]);
			for(var i = 1; i < object[key].length; i++) {
				result += "\n" + " ".repeat(margin + 3) + object[key][i];
			}
		} else {
			result += "\n" + (" ".repeat(margin - key.length) + key + " : " + object[key]);
		}
	}
	return result;
};
/**
 * Draws a string with a highlight background
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
	highlightColor = highlightColor || YELLOW;
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
		return WHITE;
	}
	return BLACK;
};
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
/**
 * Draws text with an outline
 * 
 * @param {string} string String to be outlined
 * @param {number} [x=0] x coordinate value
 * @param {number} [y='text height'] y coordinate value
 * @param {number} [outlineColor=0] Color of outline
 */
var outlineText = function(string, x, y, outlineColor) {
    rgb();
    if(!(/\S/).test(string)) {
		return;
	}
	x = x || 0;
	y = y || textAscent();
	outlineColor = outlineColor || (0);
    pushStyle();
    fill(outlineColor);
    for(var i = -2; i < 3; i++){
        for(var j = -1; j < 3; j++){
            text(string, x + i, y + j);
        }
        text(string, x + i, y);
        text(string, x, y + i);
    }
    popStyle();
    text(string, x, y);
};
// }
// Exporting {
var export_module;
if (export_module) {
	export_module({
	    'centeredObjectText': centeredObjectText,
	    'highlightText': highlightText,
	    'multicoloredText': multicoloredText,
	    'outlineText': outlineText,
	    'lightOrDarkText': lightOrDarkText
	});
} else {
    background(255);
    fill(0);
    textAlign(CENTER);
    textFont(createFont('monospace'), 15);
    text('Text Essentials' + '\nv' + VERSION, width / 2, height / 2);
}
// }
