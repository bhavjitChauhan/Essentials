/**
 * Checks if the user color scheme preference is dark.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-dark-color-scheme
 * 
 * @returns {boolean}
 * 
 * @see {@link prefersLightColorScheme}
 */
prefersDarkColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
