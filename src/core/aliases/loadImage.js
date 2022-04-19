/**
 * @function loadImage
 * 
 * @summary
 * Load an image from a URL.
 * 
 * @description
 * See the
 * [loadImage]{@link https://bhavjitchauhan.github.io/Essentials/processing/global.html#loadImage}
 * documentation for more information. Image URLs are restricted to those
 * listed in the CSP:
 * ```*.kastatic.org www.khanacademy.org *.kasandbox.org chart.googleapis.com upload.wikimedia.org ka-perseus-images.s3.amazonaws.com```
 * 
 * The program cannot be saved if an external image has been drawn as Khan
 * Academy tries to convert the canvas into an image using the `toDataURL`
 * method which does not support tainted canvases for security reasons. To
 * bypass this, do not draw any external images immediately. This can be
 * achieved by drawing after the user performs some sort of interaction.
 * Images can still be preloaded without any issues.
 * 
 * @see {@link https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image}
 * 
 * @category Core
 * 
 * @param {string} filename
 * @param {string} extension
 * @param {function} callback
 * 
 * @example
 * const URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17';
 * loadImage(URL, 'jpg', function(img) {
 *     image(img, 0, 0, WIDTH, HEIGHT); 
 * });
 * // expected output: image drawn to canvas
 */
p.loadImage = (filename, extension, callback) => {
    filename = filename.replace(/\.(png|gif|jpg|tga|svg)$/, '');
    const img = DUMMY_INSTANCE.loadImage(filename, extension, () => {
        return callback(img);
    });
};
