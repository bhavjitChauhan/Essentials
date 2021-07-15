/**
 * Locks pointer to canvas.
 * 
 * @category External
 * 
 * @see {@link exitPointerLock}
 */
requestPointerLock = () => $(CANVAS)[0].requestPointerLock();
