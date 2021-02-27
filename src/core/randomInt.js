/**
 * Generates a random integer in a given range.
 * 
 * @param {number} [min=0] Minimum value
 * @param {number} max Maximum value
 * 
 * @returns {number} Generated integer
 * 
 * @example
 * printf('Random integer between 1 and 5 (inclusive): %', randomInt(1, 5));
 * 
 * @example
 * printf('Random integer between 0 and 5 (inclusive): %', randomInt(5));
 */
randomInt = (min, max) => _.random(min, max);
