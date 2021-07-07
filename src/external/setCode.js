__setCodeCallCount = typeof __setCodeCallCount !== 'undefined' ? __setCodeCallCount : 0;
__setCodeLastCall = typeof __setCodeLastCall !== 'undefined' ? __setCodeLastCall : 0;
/**
 * @summary
 * Sets editor code.
 * 
 * @description
 * To prevent a "rague" `setCode` function, if the function is called 25 times
 * in a row it stops itself. Set the `_set_code_limit_` variable to `false` to
 * disable this functionality.
 * 
 * @param {*} code
 */
setCode = code => {
    if (_.isNumber(_set_code_limit_)) {
        if (Date.now() - __setCodeLastCall < 75) __setCodeCallCount++;
        else __setCodeCallCount = 0;
        __setCodeLastCall = Date.now();
    }
    if (__setCodeCallCount > _set_code_limit_) return console.warn('`setCode` limit reached. Set the `_set_code_limit_` flag to `false` to disable this functionality.');
    window.top.postMessage(JSON.stringify({ code: code }));
};
