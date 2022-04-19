/**
 * Calls multiple functions asynchronously.
 *
 * @see {@link https://www.30secondsofcode.org/js/s/chain-async}
 * 
 * @category Core
 *
 * @param {Array}  fns  Array containing functions to call
 *
 * @example
 * chainAsync([
 *     function(next) {
 *         $.getScript('. . .', next);
 *     },
 *     function(next) {
 *         $.getScript('. . .', next);
 *     },
 *     main
 * ]);
 */
chainAsync = fns => {
    let i = 0;
    const last = _.last(fns);
    const next = () => {
        const fn = fns[i++];
        fn === last ? fn() : fn(next);
    };
    next();
};
