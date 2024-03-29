/**
 * Checks if object is a Khan Academy image object.
 * 
 * @category Core
 *
 * @param {Object} obj
 * 
 * @returns {boolean}
 *
 * @example
 * const i = getImage("avatars/leaf-green");
 * println(isImage(i));
 * // expected output: true
 */
isImage = obj => obj instanceof p.PImage;
