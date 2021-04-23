/**
 * Prints HTML to canvas log.
 * 
 * @param {string} data Text to be printed to canvas log
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
 * 
 * @see $canvasLog
 */
printHTML = data => {
    const previousData = $(CANVAS_LOG).html();
    if (!previousData) e.println('');
    $(CANVAS_LOG).html((previousData && (previousData + '<br>') || '') + data);
};
