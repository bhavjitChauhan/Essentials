/**
 * Measures the time it takes for a function to execute and logs to browser
 * console.
 *
 * @link https://www.30secondsofcode.org/js/s/time-taken
 *
 * @param {Function} callback Function to be measured
 * @param {string} [id] Custom ID for multiple consecutive tests
 *
 * @example
 * timeTaken(function() {
 *     for(let i = 0; i < 1e3; i++) { println(i); }
 * });
 * // possible output: 'timeTaken#default: 1000.000000000000 ms'
 * 
 * @example
 * timeTaken(function() {
 *     for(let i = 0; i < 1e3; i++) { println(i); }
 * }, '1000');
 * // possible output: 'timeTaken#1000: 1000.000000000000 ms'
 * timeTaken(function() {
 *     for(let i = 0; i < 1e2; i++) { println(i); }
 * }, '100');
 * // possible output: 'timeTaken#100: 100.000000000000 ms'
 * 
 */
timeTaken = (callback, id = 'default') => {
    console.time(`timeTaken#${id}`);
    const r = callback();
    console.timeEnd(`timeTaken#${id}`);
    return r;
};
