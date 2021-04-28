/**
 * @summary
 * Disables Khan Academy's loop protector.
 * 
 * @description
 * The program will be restarted for changes to take effect.
 */
disableLoopProtector = () => {
    if (!isEmptyFunction(LoopProtector.prototype.leave)) {
        console.warn('Restarting program to disable loop protector...');
        LoopProtector.prototype.leave = noop;
        restart();
    }
};
