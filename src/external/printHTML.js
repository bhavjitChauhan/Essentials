/**
 * @summary
 * Prints HTML to canvas log.
 * 
 * @description
 * Links must be opening while holding the CTRL key.
 * 
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
 * 
 * @see printMD
 */
printHTML = data => {
    data = data.replace(/<a href="([\w+:/.]+)">(?<=\>)(.+?)(?=\<)<\/a>/g, `<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>`);
    const previousData = $(CANVAS_LOG).html();
    if (!previousData) e.println('');
    $(CANVAS_LOG).html((previousData && (previousData + '<br>') || '') + data);
};
