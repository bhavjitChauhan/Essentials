/**
 * Converts a number to a more readable format.
 * 
 * @category Text
 * 
 * @param {number} n
 * @param {string|Array} [locales='en']
 * @param {Object} [options]
 * 
 * @returns {string}
 * 
 * @example
 * const n = 123456789;
 * printf('%', formatNumber(n));
 * // expected output: '123,456,789'
 * 
 * @example
 * const n = 1234.56789;
 * printf('%', formatNumber(n));
 * // expected output: '1,234.568'
 * printf('%', formatNumber(n, 'en', { minimumFractionDigits: 5 }));
 * // expected output: '1,234.56789'
 * 
 * @example
 * const n = 123456789;
 * printf('%', formatNumber(n, 'uk'));
 * // expected output: '123 456 789'
 * 
 * @example
 * const n = 1000;
 * printf('%', formatNumber(n, 'en', { style: 'currency', currency: 'usd' }));
 * // expected output: '$1,000.00'
 * 
 */
formatNumber = (n, locales = 'en', options = {}) => n.toLocaleString(locales, options);
