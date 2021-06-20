/**
 * Draws text with multiple colors that are passed in using special syntax.
 *
 * @param {string} string
 * @param {number} x x-coordinate of text
 * @param {number} y y-coordinate of text
 *
 * @example
 * const str = 'Multi-[255,0,0]Colored\n[0,255,0]Text';
 * fill(BLUE);
 * multicoloredText(str, 25, 25);
 */
multicoloredText = (string, x = 0, y = p.textAscent()) => {
    if (!(/\S/).test(string)) {
        return;
    }
    string = string.split('\n');
    push();
    p.textAlign(p.LEFT, p.CORNER);
    for (const i in string) {
        string[i] = string[i].split(/\[|]/);
        let splits = 0;
        for (const j in string[i]) {
            if (/\d+,\d+,\d+/.test(string[i][j])) {
                const rgb = string[i][j].split(',');
                p.fill.apply(p, rgb);
                delete string[i][j];
                if (splits === 0) {
                    string[i][j - 1] += ' ';
                }
                splits += 1;
            } else {
                const w = p.textWidth(string[i].slice(0, j));
                p.text(string[i][j], x + w - (splits * 2 * p.textWidth(' ')), y + (i * p.textAscent() * 2));
            }
        }
    }
    pop();
};
