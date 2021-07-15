/**
 * Gets canvas log strings.
 * 
 * @category External
 * 
 * @param number [i] index of log
 * 
 * @returns {string[]|string}
 * 
 * @example
 * println('Hello');
 * println('World');
 * console.log(getLogsText());
 * // expected output: ['Hello', 'World']
 * 
 * @example
 * printMD('_Markdown_');
 * printHTML('<i>HTML</i>');
 * console.log(getLogsText());
 * // expected output: ['<i>Markdown</i>', '<i>HTML</i>']
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * console.log(getLogsText(0));
 * // expected output: 'First'
 * console.log(getLogsText(-1));
 * // expected output: 'Third'
 */
getLogsText = i => {
    const logs = $(CANVAS_LOG);
    if (Number.isInteger(i)) {
        if (logs.length <= i) return;
        return logs.eq(i).html();
    }
    return logs
        .toArray()
        .map(el => $(el).html());
};
