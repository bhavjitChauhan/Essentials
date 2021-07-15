/**
 * Parses color array.
 * 
 * @private
 * 
 * @param {Array} arr
 * @param {number} [defaultAlpha=getAlphaRange()]
 * @param {boolean} [range=false]
 */
_parseColorArray = (arr, defaultAlpha = getAlphaRange(), range = false) => {
    if (_.isNumber(arr)) arr = [arr];
    switch (arr.length) {
        case 1:
            arr = [arr[0], arr[0], arr[0], range ? arr[0] : defaultAlpha];
            break;
        case 2:
            arr = [arr[0], arr[0], arr[0], arr[1]];
            break;
        case 3:
            arr.push(defaultAlpha);
    }
    return arr;
};
