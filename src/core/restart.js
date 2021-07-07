/**
 * @summary
 * Cleanly restarts the program.
 * 
 * @description
 * Calls functions that interact with the Canvas if the appropriate Essentials
 * component is present.
 * 
 * @todo Add other functions that alter the Canvas
 */
restart = () => {
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
