/**
 * Cleanly restarts the program.
 */
restart = () => {
    e.draw = noop;
    e.Program.restart();
};
