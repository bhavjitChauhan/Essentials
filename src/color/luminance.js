/**
 * Adjusts brightness of the canvas image by applying a linear multiplier.
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * luminance(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: brightness increased to 150%
 */
luminance = amount => _appendFilter(`brightness(${amount}%)`);
