/**
 * @summary
 * Removes Khan Academy's loop protection code from functions.
 *
 * @description
 * Khan Academy adds a few lines of code to every function created to prevent
 * the webpage from freezing. This can be a hinderance when running more
 * resource-intensive code.
 *
 * @link https://khanacademy.org/cs/-/5594326276014080
 *
 * @param {Function} fn Function to be cleaned
 *
 * @returns {Function} Cleaned function.
 *
 * @example
 * const drawEllipses = function() {
 *     for (let i = 0; i < 1e4; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * };
 * // possible error: 'A for loop is taking too long to run.'
 *
 * @example
 * const drawEllipses = clean(function() {
 *     for (let i = 0; i < 1e4; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * });
 */
clean = fn => {
    const string = fn.toString()
        .replace(/__env__\.KAInfiniteLoopCount\+\+;/g, '')
        .replace(/if \(__env__\.KAInfiniteLoopCount > 1000\) {[\s]+__env__\.KAInfiniteLoopProtect\('[^']*'\);[^}]+}/g, '')
        .replace(/__env__\.PJSOutput\.applyInstance\((__env__\.\S+), '\S+'\)/g,
            'new $1');
    return Object.constructor(`return (function(__env__) {return ${string};});`)()(__env__);
};
