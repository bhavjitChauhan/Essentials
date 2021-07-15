/**
 * Generates an ID.
 * 
 * @category Core
 * 
 * @param {number} [length=8]
 *
 * @returns {string}
 * 
 * @see {@link generateUUID}
 */
generateID = (length = 8) => {
    const odd = length % 2 != 0;
    const arr = _eval(`new Uint8Array(Math.ceil(${length} / 2))`);
    crypto.getRandomValues(arr);
    const id = Array.from(arr, i => i.toString(16).padStart(2, '0')).join('');
    return odd ? id.slice(0, -1) : id;
};
