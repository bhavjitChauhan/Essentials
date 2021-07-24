/**
 * Evaluate Processing.js code represented as a string.
 * 
 * @category Core
 * 
 * @param {string} str
 * 
 * @returns {*}
 */
evalPJS = str => _eval(`with (p) ${str}`);
