/**
 * @summary
 * Update stroke and fill colors in the canvas context.
 * 
 * @description
 * Processing will only update the current fill if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the stroke and fill values.
 * 
 * @private
 */
_updateStrokeFill = () => p.rect('', '', ' ');
