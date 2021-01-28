/**
 * Checks if object is a Khan Academy font object.
 * 
 * @param {Object} obj
 * 
 * @example
 * let f = createFont('Arial');
 * println(isFont(f));
 * // expected output: true 
 * 
 * @example
 * let f = font('monospace');
 * println(isFont(f));
 * // expected output: true
 * 
 * @see font
 */
isFont = obj => {
    if (typeof obj != 'object') {
        return false;
    }
    return _.isFunction(obj.getCSSDefinition);
};
