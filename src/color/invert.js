/**
 * Inverts the canvas image.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * invert();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: inverted
 */
invert = (amount = 100) => _appendFilter(`invert(${amount}%)`);
