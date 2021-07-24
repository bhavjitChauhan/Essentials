/**
 * Takes a number and returns it as a string with the correct ordinal indicator
 * suffix.
 * 
 * @category Text
 *
 * @link https://www.30secondsofcode.org/js/s/to-ordinal-suffix
 *
 * @param {(number|string)} n Number
 *
 * @returns {string} Number with ordinal suffix.
 *
 * @example
 * println(ordinalSuffix(123));
 * // expected output: '123rd'
 */
ordinalSuffix = n => {
    const int = parseInt(n, 10),
        digits = [int % 10, int % 100],
        oPattern = [1, 2, 3, 4],
        ordinals = ['st', 'nd', 'rd', 'th'],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + ordinals[digits[0] - 1]
        : int + ordinals[3];
};
