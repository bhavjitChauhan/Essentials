/**
 * Cancels all animation frame requests.
 * 
 * @param {number} [requestID] The id of the animation frame request to cancel.
 */
cancelAllAnimationFrames = (requestID = requestAnimationFrame(noop)) => {
    while (requestID--) {
        cancelAnimationFrame(requestID);
    }
};
