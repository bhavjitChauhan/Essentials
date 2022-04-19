/**
 * Detects whether the page is being viewed on a mobile device or a desktop.
 *
 * @see {@link https://www.30secondsofcode.org/js/s/detect-device-type}
 * 
 * @category External
 *
 * @returns {string} 'Mobile' or 'Desktop'
 *
 * @example
 * println(detectDeviceType());
 * // expected outcome: 'Mobile' or 'Desktop'
 */
detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? 'Mobile'
        : 'Desktop';
