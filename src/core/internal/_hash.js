/** 
 * Hashes typed array using the xxHash hash algorithm.
 * 
 * @see {@link https://github.com/Jason3S/xxhash}
 * 
 * @private
 * 
 * @param {Array} buffer byte array
 * @param {number} [seed=0] 32-bit unsigned
 * 
 * @returns {string}
 */
_hash = (buffer, seed = 0) => {
    const PRIME_1 = 2654435761,
        PRIME_2 = 2246822519,
        PRIME_3 = 3266489917,
        PRIME_4 = 668265263,
        PRIME_5 = 374761393;
    const b = buffer;
    let acc = (seed + PRIME_5) & 0xFFFFFFFF;
    let offset = 0;

    if (b.length >= 16) {
        const accN = [
            (seed + PRIME_1 + PRIME_2) & 0xFFFFFFFF,
            (seed + PRIME_2) & 0xFFFFFFFF,
            (seed + 0) & 0xFFFFFFFF,
            (seed - PRIME_1) & 0xFFFFFFFF,
        ];
        const b = buffer;
        const limit = b.length - 16;
        let lane = 0;
        for (offset = 0; (offset & 0xFFFFFFF0) <= limit; offset += 4) {
            const i = offset;
            const laneN0 = b[i + 0] + (b[i + 1] << 8);
            const laneN1 = b[i + 2] + (b[i + 3] << 8);
            const laneNP = laneN0 * PRIME_2 + ((laneN1 * PRIME_2) << 16);
            let acc = (accN[lane] + laneNP) & 0xFFFFFFFF;
            acc = (acc << 13) | (acc >>> 19);
            const acc0 = acc & 0xFFFF;
            const acc1 = acc >>> 16;
            accN[lane] = (acc0 * PRIME_1 + ((acc1 * PRIME_1) << 16)) & 0xFFFFFFFF;
            lane = (lane + 1) & 0x3;
        }
        acc =
            (((accN[0] << 1) | (accN[0] >>> 31)) +
                ((accN[1] << 7) | (accN[1] >>> 25)) +
                ((accN[2] << 12) | (accN[2] >>> 20)) +
                ((accN[3] << 18) | (accN[3] >>> 14))) &
            0xFFFFFFFF;
    }
    acc = (acc + buffer.length) & 0xFFFFFFFF;
    const limit = buffer.length - 4;
    for (; offset <= limit; offset += 4) {
        const i = offset;
        const laneN0 = b[i + 0] + (b[i + 1] << 8);
        const laneN1 = b[i + 2] + (b[i + 3] << 8);
        const laneP = laneN0 * PRIME_3 + ((laneN1 * PRIME_3) << 16);
        acc = (acc + laneP) & 0xFFFFFFFF;
        acc = (acc << 17) | (acc >>> 15);
        acc = ((acc & 0xFFFF) * PRIME_4 + (((acc >>> 16) * PRIME_4) << 16)) & 0xFFFFFFFF;
    }
    for (; offset < b.length; ++offset) {
        const lane = b[offset];
        acc = acc + lane * PRIME_5;
        acc = (acc << 11) | (acc >>> 21);
        acc = ((acc & 0xFFFF) * PRIME_1 + (((acc >>> 16) * PRIME_1) << 16)) & 0xFFFFFFFF;
    }
    acc = acc ^ (acc >>> 15);
    acc = (((acc & 0xFFFF) * PRIME_2) & 0xFFFFFFFF) + (((acc >>> 16) * PRIME_2) << 16);
    acc = acc ^ (acc >>> 13);
    acc = (((acc & 0xFFFF) * PRIME_3) & 0xFFFFFFFF) + (((acc >>> 16) * PRIME_3) << 16);
    return (acc < 0 ? acc + 4294967296 : acc).toString(16);
};
