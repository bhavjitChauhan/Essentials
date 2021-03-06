/**
 * Draws text with multiple colors that are passed in using special syntax.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 *
 * @example
 * let str = 'Multi-[255,0,0]Colored\n[0,255,0]Text';
 * fill(BLUE);
 * multicoloredText(str, 25, 25);
 */
multicoloredText = (string, x = 0, y = e.textAscent()) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    push();
    e.textAlign(e.LEFT, e.CORNER);
    for (const i in string) {
        string[i] = string[i].split(/\[|]/);
        let splits = 0;
        for (const j in string[i]) {
            if (/\d+,\d+,\d+/.test(string[i][j])) {
                const rgb = string[i][j].split(',');
                e.fill.apply(e, rgb);
                delete string[i][j];
                if (splits === 0) {
                    string[i][j - 1] += ' ';
                }
                splits += 1;
            } else {
                const w = e.textWidth(string[i].slice(0, j));
                e.text(string[i][j], x + w - (splits * 2 * e.textWidth(' ')), y + (i * e.textAscent() * 2));
            }
        }
    }
    pop();
};
