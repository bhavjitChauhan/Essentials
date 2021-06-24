/**
 * Converts RGB(A) to CSS hexadecimal values.
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 *
 * @example
 * console.log(RGBToHex(0, 111, 222));
 * // expected output: '#006FDE'
 *
 * @example
 * const col = GREEN;
 * console.log(RGBToHex(col));
 * // expected output: '#008000'
 * 
 * @example
 * const col = color(RED, 100);
 * console.log(RGBToHex(col));
 * // expected output: '#FF000064'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col), false);
 * // expected output: '#FF0000'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col));
 * // expected output: '#F00'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col, false, false));
 * // expected output: 'FF0000'
 */
RGBToHex = (...args) => {
    let hexadecimal, shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    switch (args.length) {
        case 1: {
            const a = p.alpha(args[0]);
            hexadecimal = p.hex(args[0], 6) + (a != 255 ? a.toString(16).padStart(2, '0') : '');
            break;
        }
        case 3:
        case 4:
            hexadecimal = ((1 << 24) + (args[0] << 16) + (args[1] << 8) + args[2]).toString(16).slice(1);
            if (args.length == 4) hexadecimal += args[3].toString(16).padStart(2, '0');
    }
    if (shorthand) {
        if (hexadecimal.length == 8) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3(\w)\4/, '$1$2$3$4');
        if (hexadecimal.length == 6) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3/, '$1$2$3');
    }
    return (octothorpe ? '#' : '') + hexadecimal.toUpperCase();
};
