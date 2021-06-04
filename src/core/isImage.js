/**
 * Checks if object is a Khan Academy image object.
 *
 * @param {Object} obj
 *
 * @example
 * const i = getImage("avatars/leaf-green");
 * println(isImage(i));
 * // expected output: true
 */
isImage = obj => obj instanceof e.PImage;
