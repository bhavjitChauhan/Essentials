/**
 * @summary
 * Sets program title.
 * 
 * @category External
 * 
 * @param {string} title
 */
setTitle = title =>
    window.top.postMessage(JSON.stringify({
        action: 'page-info',
        title
    }), '*');
