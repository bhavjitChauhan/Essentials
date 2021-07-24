/**
 * Saturates the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * saturate(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150% saturation
 */
saturate = amount => _appendFilter(`saturate(${amount}%)`);
