/**
 * Gets current code in editor.
 * 
 * @returns {string}
 */
getCode = function () {
    let obj = arguments.callee;
    while (!(obj.arguments[0] instanceof Processing)) {
        obj = obj.caller;
        if (obj.arguments[0] instanceof MouseEvent || obj.arguments[0] instanceof KeyboardEvent) return console.warn('`getCode` is not supported in Proccessing event functions.');
    }
    return obj.caller.arguments[0];
};
