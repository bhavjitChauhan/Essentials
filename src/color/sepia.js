/**
 * Converts the canvas image to sepia.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * sepia();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% sepia
 */
sepia = (amount = 100) => _appendFilter(`sepia(${amount}%)`);
