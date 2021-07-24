/**
 * Converts milliseconds to a readable format of duration.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/format-duration
 *
 * @param {number} ms duration in milliseconds
 * @param {number} [precision=1e-3] nearest number to round to in terms of milliseconds
 * @param {boolean} [raw=false] return raw values
 *
 * @returns {string|Array} Readable format of duration.
 *
 * @example
 * const martianDay = 88775244;
 * console.log(formatDuration(martianDay));
 * // expected output: '1 day, 39 minutes, 35 seconds, 244 milliseconds'
 * 
 * @example
 * const earthDay = 86399999.9466;
 * console.log(formatDuration(earthDay, 1e3 * 60 * 60 * 24));
 * // expected output: '1 day'
 * 
 * @example
 * const moonRotation = 27.322 * 24 * 60 * 60 * 1000;
 * console.log(formatDuration(moonRotation, 1e3, true));
 * // expected output: [0, 0, 27, 7, 43, 41, 0, 0]
 */
formatDuration = (ms, precision, raw = false) => {
    if (!ms) return '0';
    if (ms < 0) ms = -ms;
    if (precision) ms = roundTo(ms, precision);
    if (ms < 1e-3) return '0';
    const time = {
        year: Math.floor(ms / 3.1536e10),
        month: Math.floor(ms / 2.592e9),
        day: Math.floor(ms / 8.64e7),
        hour: Math.floor(ms / 3.6e6) % 24,
        minute: Math.floor(ms / 6e4) % 60,
        second: Math.floor(ms / 1e3) % 60,
        millisecond: Math.floor(ms) % 1e3,
        microsecond: Math.floor(ms * 1e3) % 1e3
    };
    if (raw) return Object.values(time);
    return Object.entries(time)
        .filter(val => val[1] !== 0)
        .map(([key, val]) => `${val} ${pluralize(val, key)}`)
        .join(', ');
};
