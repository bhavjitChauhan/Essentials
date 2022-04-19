/**
 * @summary
 * Convert an image to a data URI.
 * 
 * @category External
 * 
 * @param {Image|PImage} img
 * 
 * @returns {string}
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL}
 */
imgToDataURL = img => {
    if (img instanceof p.PImage) img = img.sourceImg;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL();
    canvas.remove();
    
    return dataURL;
};
