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
 *
 * @returns {Object} Index of function which performed fastest and times
 *  recorded
 *
 * @example
 * let testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * let test = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[test.winner] + ' performed faster.');
 * // possible output: 'console.log performed faster.'
 */
mostPerformant = (fns, iterations = 1e4) => {
    const times = fns.map(fn => {
        const before = performance.now();
        for (let i = 0; i < iterations; i++) fn();
        return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
};
