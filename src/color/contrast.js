/**
 * Adjusts the contrast of the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * contrast(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150%
 */
contrast = amount => _appendFilter(`contrast(${amount}%)`);
