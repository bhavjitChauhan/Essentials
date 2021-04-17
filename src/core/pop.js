/**
 * Equivalent to using
 * [popMatrix]{@link http://processingjs.org/reference/popMatrix_/} and
 * [popStyle]{@link http://processingjs.org/reference/popStyle_/}.
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
    e.popStyle();
    e.popMatrix();
};
