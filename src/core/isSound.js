/**
 * Checks if object is a Khan Academy sound object.
 *
 * @param {Object} obj
 *
 * @example
 * let s = getSound("retro/boom1");
 * println(isSound(s));
 * // expected output: true
 */
isSound = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isObject(obj.audio);
};
