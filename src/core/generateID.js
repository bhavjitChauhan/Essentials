/**
 * Generates an ID.
 * 
 * @param {number} [length=8]
 *
 * @returns {string}
 * 
 * @see {@link generateUUID}
 */
generateID = (length = 8) => {
    const arr = _eval(`new Uint8Array(${length} / 2)`);
    crypto.getRandomValues(arr);
    return Array.from(arr, i => i.toString(16).padStart(2, '0')).join('');
};
