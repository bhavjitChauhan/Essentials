/**
 * Checks if [Session Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-session-storage-enabled
 * 
 * @category External
 * 
 * @returns {boolean}
 */
isSessionStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.sessionStorage.setItem(key, null);
        window.sessionStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};
