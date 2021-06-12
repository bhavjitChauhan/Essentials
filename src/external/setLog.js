/**
 * Set log data.
 * 
 * @param {number} i index of log
 * @param {*} data
 * @param {boolean} [update=true] update log time
 * 
 * @example
 * println('Hello');
 * setLog(0, 'Hey');
 * console.log(getLogsText());
 * // expected output: ['Hey']
 * 
 * @example
 * println('First');
 * println('Second');
 * println('Third');
 * setLog(-1, 'Last');
 * console.log(getLogsText());
 * // expected output: ['First', 'Second', 'Last']
 */
setLog = (i, data, update = true) => {
    const logs = $(CANVAS_LOG);
    if (logs.length <= i) return;
    const el = logs.eq(i);
    el.html(data);
    if (update) el.parent().attr('title', (new Date()).toLocaleTimeString());
};
