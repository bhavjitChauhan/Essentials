/**
 * Calls multiple functions asynchronously.
 *
 * @link https://www.30secondsofcode.org/js/s/chain-async
 *
 * @param {Array}  fns  Array containing functions to call
 *
 * @example
 * let array;
 * chainAsync([
 *     function(next) {
 *         console.log('Generating array...');
 *         array = [];
 *         for (let i = 0; i < 10000; i++) {
 *             array.push(Math.random(0, 100));
 *         }
 *         next();
 *     }, function(next) {
 *         console.log('Sorting array...');
 *         array.sort();
 *         next();
 *     }, function() {
 *         console.log(array);
 *     }
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
