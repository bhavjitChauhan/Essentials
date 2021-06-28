/**
 * Gets current code in editor.
 * 
 * @returns {string}
 */
getCode = function () {
    let obj = arguments.callee;
    while (!(obj.arguments[0] instanceof Processing)) {
        obj = obj.caller;
    }
    return obj.caller.arguments[0];
};
