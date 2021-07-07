/**
 * Applies a hue rotation on the canvas image.
 * 
 * @param {number} angle
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(90);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 * 
 * @example
 * angleMode = 'radians';
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(PI / 2);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 */
hueRotate = angle => _appendFilter(`hue-rotate(${angle}${p.angleMode == 'degrees' ? 'deg' : 'rad'})`);
