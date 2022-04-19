/**
 * @constant {number} WIDTH
 * 
 * Alias for `canvas.width`.
 * 
 * @category Core
 */
Object.defineProperty(this, 'WIDTH', { get: () => { return canvas.width; } });

/**
 * @constant {number} HEIGHT
 * 
 * Alias for `canvas.height`.
 * 
 * @category Core
 */
Object.defineProperty(this, 'HEIGHT', { get: () => { return canvas.height; } });

/**
 * @constant {number} HALF_WIDTH
 * 
 * Alias for `canvas.width / 2`.
 * 
 * @category Core
 */
Object.defineProperty(this, 'HALF_WIDTH', { get: () => { return canvas.width / 2; } });

/**
 * @constant {number} HALF_HEIGHT
 * 
 * Alias for `canvas.height / 2`.
 * 
 * @category Core
 */
Object.defineProperty(this, 'HALF_HEIGHT', { get: () => { return canvas.height / 2; } });
