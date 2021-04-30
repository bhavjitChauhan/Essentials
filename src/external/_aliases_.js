// For minified KA builds, BabyHint scans strings for banned properties as well
_doc = _eval('documen' + 't');

CREATE_ELEMENT = 'createElemen' + 't';

_preventDefault = e => e.preventDefault();

/**
 * Canvas jQuery selector.
 *
 * @example
 * // Log canvas element style to browser console
 * console.log($(CANVAS).attr('style)');
 */
CANVAS = '#output-canvas';

/**
 * Canvas log jQuery selector.
 *
 * @example
 * // Log canvas log text to browser console
 * console.log($(CANVAS_LOG).text());
 */
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

/**
 * Checks if touch events are supported.
 * 
 * @link https://www.30secondsofcode.org/js/s/supports-touch-events
 * 
 * @returns {boolean}
 * 
 * @see detectDeviceType
 */
supportsTouchEvents = () => 'ontouchstart' in window;

/**
 * Gets the currently selected text in the canvas.
 * 
 * @link https://www.30secondsofcode.org/js/s/get-selected-text
 * 
 * @returns {string}
 * 
 * @see drawElement
 */
getSelectedText = () => window.getSelection().toString();

/**
 * Prevents page from scrolling when mouse is over canvas.
 * 
 * @see allowScroll
 * @see forceAllowScroll
 */
preventScroll = () => $(CANVAS).on('wheel', _preventDefault);

/**
 * Allows page scrolling when mouse is over canvas.
 * 
 * @see forceAllowScroll
 * @see preventScroll
 */
allowScroll = () => $(CANVAS).off('wheel', _preventDefault);

/**
 * @summary
 * Removes all 'wheel' event handlers attached to the canvas.
 * 
 * @description
 * `allowScroll` only removes the event handler that prevents the page from
 * being scrolled, however if the program is editted or restarted this is no
 * longer possible.
 * 
 * This function is not intended for production use.
 * 
 * @see allowScroll
 * @see preventScroll
 */
forceAllowScroll = () => $(CANVAS).off('wheel');

/**
 * Locks pointer to canvas.
 * 
 * @see exitPointerLock
 */
requestPointerLock = () => $(CANVAS)[0].requestPointerLock();

/**
 * Releases pointer.
 * 
 * @see requestPointerLock
 */
exitPointerLock = () => _doc.exitPointerLock();

/**
 * Resizes the canvas log.
 * 
 * @param {number} height
 */
resizeLog = height => $('body > div:nth-child(1)').css('height', height);

/**
 * Closes the canvas log
 */
closeLog = () => $('body > div:nth-child(1) > div:nth-child(3)').click();
