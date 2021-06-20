/**
 * @summary
 * Cleanly restarts the program.
 * 
 * @description
 * If External Essentials is present, the following functions are called:
 * `clearElements`, `closeLog`, `exitPointerLock`, and `forceAllowScroll`.
 */
restart = () => {
    if (typeof EXTERNAL_ESSENTIALS != 'undefined') {
        clearElements();
        closeLog();
        exitPointerLock();
        forceAllowScroll();
    }
    p.draw = noop;
    p.Program.restart();
};
