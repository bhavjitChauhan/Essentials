/**
 * @summary
 * Load a program thumbnail from an ID.
 * 
 * @description
 * Scratchpads can have more than one thumbnail associated with them. Use the
 * `imageID` parameter to specify which thumbnail to use. If left blank, the
 * latest thumbnail is loaded. The `latest` endpoint does not always show the
 * latest image, so the API is used to fetch scratchpad data.
 * 
 * Custom thumbnails can be uploaded using the internal API. Thumbnails are
 * limited in size to 768,000 characters or 1,048,487 bytes; the same limit
 * is applied to programs.
 * 
 * @see {@link https://ka-hearth.learnerpages.com/posts/script-to-upload-screenshots}
 * @see {@link https://khanacademy.org/cs/-/5461749680619520}
 * 
 * @category Core
 * 
 * @param {string} programID
 * @param {function} callback
 * @param {string} [imageID]
 * 
 * @example
 * loadThumbnail('5835557262376960', function(img) {
 *     image(img, 0, 0, WIDTH, HEIGHT);
 * });
 * // expected output: thumbnail drawn to canvas
 * 
 * @see {@link loadImage}
 */
loadThumbnail = (programID, callback, imageID) => {
    if (!imageID) {
        return $.getJSON('https://www.khanacademy.org/api/labs/scratchpads/' + programID + '?callback=?', data => {
            const imageID = data.imagePath.split('/')[4].slice(0, -4);
            return loadThumbnail(programID, callback, imageID);
        });
    }
    p.loadImage('https://www.khanacademy.org/cs/-/' + programID + '/' + imageID, 'png', callback);
};
