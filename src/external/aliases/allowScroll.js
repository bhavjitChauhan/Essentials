/**
 * Allows page scrolling when mouse is over canvas.
 * 
 * @category External
 * 
 * @see {@link forceAllowScroll}
 * @see {@link preventScroll}
 */
allowScroll = () => $(CANVAS).off('wheel', _preventDefault);
