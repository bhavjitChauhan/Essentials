var outlineText = function(string, x, y, outlineColor) {
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

var export_module;
if(export_module) {
    export_module(outlineText);
} else {
    textAlign(CENTER);
    textSize(50);
    outlineText("Outlined\nText", width / 2, height / 2);
}
