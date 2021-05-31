/**
 * @summary
 * Calculates fastest function in terms of iterations.
 *
 * @description
 * The functions will be called _n_ number of times. Their times will be how
 * long they took to run _n_ number of times. The more iterations, the more
 * accurate the result.
 *
 * Running resource-intensive function may result in an infinite loop error.
 * This can be can bypassed using the {@link clean} function.
 *
 * @link https://www.30secondsofcode.org/js/s/most-performant
 *
 * @param {Array} fns Functions to be compared
 * @param {number} [iterations=1e4] Number of times function should be called
 * @param {boolean} [timings=false] Return array of timings
 *
 * @returns {number|Array} Index of fastest function or array of timings
 *
 * @example
 * const testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * const result = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[result] + ' performed faster.');
 * // possible output: 'console.log performed faster.'
 * 
 * @example
 * const testees = {
 *     'ellipse': function() {
 *         ellipse(100, 100, 100, 100);
 *     },
 *     'rect': function() {
 *         rect(100, 100, 100, 100);
 *     }
 * }
 * const results = mostPerformant(Object.values(testees), 1e3, true)
 * results.forEach(function(result, i) {
 *     printf('%: %ms', Object.keys(testees)[i].padEnd(8), result)
 * });
 * // example output: `
 * // ellipse : 3.0350000597536564ms
 * // rect    : 3.325000172480941ms
 * // `
 */
mostPerformant = (fns, iterations = 1e4, timings = false) => {
    const times = fns.map(fn => {
        const startTime = performance.now();
        for (let i = 0; i < iterations; i++) fn();
        return performance.now() - startTime;
    });
    if (timings) return times;
    return times.indexOf(Math.min(...times));
};
