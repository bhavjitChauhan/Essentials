/**
 * @summary
 * Cleanly restarts the program.
 * 
 * @description
 * Calls functions that interact with the Canvas if the appropriate Essentials
 * component is present. Automatically called when the program is restarted.
 * 
 * @category Core
 * 
 * @todo Add other functions that alter the Canvas
 */
restart = () => {
    if (_interval_ids_.length > 0) _interval_ids_.forEach(intervalID => clearInterval(intervalID));
    if (_request_ids_.length > 0) _request_ids_.forEach(requestID => cancelAnimationFrame(requestID));
    if (typeof COLOR_ESSENTIALS != 'undefined') {
        noShadow();
        shadowBlur(0);
        shadowOffset(0, 0);
    }
    if (typeof SHAPE_ESSENTIALS != 'undefined') {
        noStrokeDash();
        strokeDashOffset(0);
    }
    if (typeof EXTERNAL_ESSENTIALS != 'undefined') {
        clearElements();
        closeLog();
        exitPointerLock();
        forceAllowScroll();
    }
    p.colorMode(p.RGB, 255);
    p.draw = noop;
    p.Program.restart();
};
