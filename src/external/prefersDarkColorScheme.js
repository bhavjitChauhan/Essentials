/**
 * Checks if the user color scheme preference is dark.
 * 
 * @see {@link https://www.30secondsofcode.org/js/s/prefers-dark-color-scheme}
 * 
 * @category External
 * 
 * @returns {boolean}
 * 
 * @see {@link prefersLightColorScheme}
 */
prefersDarkColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
