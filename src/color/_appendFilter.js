/**
 * Appends Canvas filter.
 * 
 * @private
 * 
 * @param {string} filter
 */
_appendFilter = filter => {
    if (ctx.filter == 'none') return ctx.filter = filter;
    ctx.filter += filter;
};
