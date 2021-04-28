generateID = (length = 8) => {
    var arr = _eval(`new Uint8Array(${length} / 2)`);
    crypto.getRandomValues(arr);
    return Array.from(arr, i => i.toString(16).padStart(2, '0')).join('');
}
