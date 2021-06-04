/**
 * Checks if object is a Khan Academy sound object.
 *
 * @param {Object} obj
 *
 * @example
 * const s = getSound("retro/boom1");
 * println(isSound(s));
 * // expected output: true
 */
isSound = obj => obj.audio instanceof Audio;
