/**
 * Attempts to invoke a function with the provided arguments, returning either
 * the result or an error.
 *
 * @see {@link https://www.30secondsofcode.org/js/s/attempt}
 * 
 * @category Core
 *
 * @param {} fn Function to attempt.
 * @param {...*} args Functions arguments.
 */
attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (err) {
        return err instanceof Error ? err : new Error(err);
    }
};
