/**
 * Checks if touch events are supported.
 * 
 * @see {@link https://www.30secondsofcode.org/js/s/supports-touch-events}
 * 
 * @category External
 * 
 * @returns {boolean}
 * 
 * @see {@link detectDeviceType}
 */
supportsTouchEvents = () => 'ontouchstart' in window;
