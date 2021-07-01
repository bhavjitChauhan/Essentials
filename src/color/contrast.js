/**
 * Adjusts the contrast of the canvas image.
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * constrast(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150%
 */
constrast = amount => _appendFilter(`contrast(${amount}%)`);
