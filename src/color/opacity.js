/**
 * Applies transparency to the canvas image.
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * opacity(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% opacity
 */
opacity = amount => _appendFilter(`opacity(${amount}%)`);
