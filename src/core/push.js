/**
 * Saves Processing and Canvas state.
 * 
 * @category Core
 *
 * @example
 * push();
 * stroke(WHITE);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 *
 * @see {@link pop}
 */
push = () => {
    p.pushStyle();
    ctx.save();
};
