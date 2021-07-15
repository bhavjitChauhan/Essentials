/**
 * @summary
 * Removes all 'wheel' event handlers attached to the canvas.
 * 
 * @description
 * `allowScroll` only removes the event handler that prevents the page from
 * being scrolled, however if the program is edited or restarted this is no
 * longer possible.
 * 
 * This function is not intended for production use.
 * 
 * @category External
 * 
 * @see {@link allowScroll}
 * @see {@link preventScroll}
 */
forceAllowScroll = () => $(CANVAS).off('wheel');
