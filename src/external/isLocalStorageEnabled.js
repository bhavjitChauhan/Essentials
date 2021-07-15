/**
 * Checks if [Local Storage]{https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage} is enabled.
 * 
 * @link https://www.30secondsofcode.org/js/s/is-local-storage-enabled
 * 
 * @category External
 * 
 * @returns {boolean}
 */
isLocalStorageEnabled = () => {
    try {
        const key = generateUUID();
        window.localStorage.setItem(key, null);
        window.localStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
};
