/**
 * Gets canvas log text and times.
 * 
 * @category External
 * 
 * @returns {Array.<{string: string, time: Date}>}
 * 
 * @example
 * println('Hello');
 * println('World');
 * const logs = getLogs();
 * console.log(logs[0].text);
 * // expected output: 'Hello'
 * console.log(logs[1].time);
 * // expected output: Date
 */
getLogs = () => {
    const keys = ['text', 'time'], arr = [];
    const pairs = _.zip(getLogsText(), getLogsTime());
    pairs.forEach(pair => {
        arr.push(_.object(keys, pair));
    });
    return arr;
};
