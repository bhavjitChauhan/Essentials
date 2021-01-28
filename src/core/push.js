/**
 * Equivalent to using
 * [pushMatrix]{@link http://processingjs.org/reference/pushMatrix_/} and
 * [pushStyle]{@link http://processingjs.org/reference/pushStyle_/}.
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
 * @see pop
 */
push = () => {
    e.pushMatrix();
    e.pushStyle();
};
