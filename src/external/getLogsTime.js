/**
 * Gets canvas log times.
 * 
 * @param number [i] index of log
 * 
 * @returns {Date[]|Date}
 * 
 * @example
 * println('Hello');
 * println('World');
 * console.log(getLogsTime());
 * // expected output: [Date, Date]
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * console.log(getLogsTime(0));
 * // expected output: Date
 * console.log(getLogsTime(-1));
 * // expected output: Date
 */
getLogsTime = i => {
    const logs = $(CANVAS_LOG);
    if (Number.isInteger(i)) {
        if (logs.length <= i) return;
        const el = logs.eq(i);
        const date = (new Date).toLocaleDateString();
        const time = el.parent().attr('title');
        return new Date(`${date}, ${time}`);
    }
    return logs
        .toArray()
        .map((_el, i) => getLogsTime(i));
};
