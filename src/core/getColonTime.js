/**
 * Returns a string of the form `HH:MM:SS`.
 *
 * @see {@link https://www.30secondsofcode.org/js/s/get-colon-time-from-date}
 * 
 * @category Core
 *
 * @returns {string} Formatted time
 *
 * @example
 * println(getColorTime());
 * // expected outcome: Time in the form of `HH:MM:SS`
 */
getColonTime = function () {
    return (new Date()).toTimeString().slice(0, 8);
};
