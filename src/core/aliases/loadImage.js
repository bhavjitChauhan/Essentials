/**
 * @function loadImage
 * 
 * @summary
 * Load an image from a URL.
 * 
 * @description
 * See the
 * [loadImage]{@link https://bhavjitchauhan.github.io/Essentials/processing/global.html#loadImage}
 * documentation for more information. Image URLs are restricted to those listed
 * in the CSP:
 * ```*.kastatic.org www.khanacademy.org *.kasandbox.org chart.googleapis.com upload.wikimedia.org ka-perseus-images.s3.amazonaws.com```
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
    var img = DUMMY_INSTANCE.loadImage(filename, extension, () => {
        return callback(img);
    });
};
