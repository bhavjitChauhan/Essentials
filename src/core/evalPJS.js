/**
 * Evaluate Processing.js code represented as a string.
 * 
 * @param {string} str
 * 
 * @returns {*}
 */
evalPJS = str => _eval(`with (e) ${str}`);
