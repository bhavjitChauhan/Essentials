/**
 * Converts to canvas image to grayscale.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% grayscale
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% grayscale
 */
grayscale = (amount = 100) => _appendFilter(`grayscale(${amount}%)`);
