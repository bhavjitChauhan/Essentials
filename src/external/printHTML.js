/**
 * @summary
 * Prints HTML to canvas log.
 * 
 * @description
 * Links must be opened while holding the <kbd>CTRL</kbd> key.
 * 
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
 * 
 * @see {@link printMD}
 */
printHTML = data => {
    data = data.replace(
        /<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g,
        '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>'
    );
    e.println('');
    $(CANVAS_LOG).last().html(data);
};
