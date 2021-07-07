/**
* Restores Processing and Canvas state.
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
* @see {@link push}
*/
pop = () => {
    p.popStyle();
    ctx.restore();
};
