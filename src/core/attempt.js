/**
 * Attempts to invoke a function with the provided arguments, returning either
 *      the result or an error.
 *
 * @link https://www.30secondsofcode.org/js/s/attempt
 *
 * @param {} fn Function to attempt.
 * @param {...*} args Functions arguments.
 */
attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};
