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
    _handleRestart();
    p.Program.restart();
};
