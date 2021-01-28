/**
 * Checks if object is a Khan Academy image object.
 * 
 * @param {Object} obj
 * 
 * @example
 * let i = getImage("avatars/leaf-green");
 * println(isImage(i));
 * // expected output: true
 */
isImage = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isObject(obj.sourceImg);
};
