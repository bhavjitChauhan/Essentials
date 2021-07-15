/**
 * Gets canvas log text and time.
 * 
 * @category External
 * 
 * @param {number} i index of log
 * 
 * @returns {Object} obj
 * @returns {string} obj.text
 * @returns {Date} obj.time
 * 
 * @example
 * println('Hello');
 * println('World');
 * const log = getLogs(0);
 * console.log(log.text);
 * // expected output: 'Hello'
 * console.log(log.time);
 * // expected output: Date
 */
getLog = i => {
    if (!Number.isInteger(i)) return;
    const keys = ['text', 'time'];
    const pair = [getLogsText(i), getLogsTime(i)];
    return _.object(keys, pair);
};
