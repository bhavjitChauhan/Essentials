/**
 * Applies a Gaussian blur of the canvas image.
 * 
 * @param {number} [radius=5]
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * blur();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a Gaussian blur of radius 5 pixels
 */
p.blur = (radius = 5) => {
    if (_.isNumber(radius)) radius = `${radius}px`;
    _appendFilter(`blur(${radius})`);
};
