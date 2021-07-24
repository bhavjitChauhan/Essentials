/**
 * Prevents page from scrolling when mouse is over canvas.
 * 
 * @category External
 * 
 * @see {@link allowScroll}
 * @see {@link forceAllowScroll}
 */
preventScroll = () => $(CANVAS).on('wheel', _preventDefault);
