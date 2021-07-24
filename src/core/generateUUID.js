/**
 * Generates a
 * [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}.
 * 
 * @category Core
 *
 * @returns {string}
 * 
 * @see {@link generateID}
 */
generateUUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
            c ^
            (crypto.getRandomValues(_eval('new Uint8Array(1)'))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
