/** @module centeredObjectText */
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

var export_module;
if(export_module) {
    export_module(centeredObjectText);
} else {
    fill(0);
    textFont(createFont("monospace"));
    text(centeredObjectText({
        "alpha": "bravo",
        "charlie": "delta",
        "echo": ["one", "two"],
        "foxtrot": "gamma"
    }), 100, 100);
    println(centeredObjectText({
        "alpha": "bravo",
        "charlie": "delta",
        "echo": ["one", "two"],
        "foxtrot": "gamma"
    }));
}
