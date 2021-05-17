/**
 * Complementory function of `prefersDarkColorScheme`.
 * 
 * @link https://www.30secondsofcode.org/js/s/prefers-light-color-scheme
 * 
 * @returns {boolean}
 * 
 * @see {@link prefersDarkColorScheme}
 */
prefersLightColorScheme = () =>
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
