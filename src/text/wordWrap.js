/**
 * Wraps a string to a given number of characters using a string break
 * character.
 *
 * @link https://www.30secondsofcode.org/js/s/word-wrap
 *
 * @param {string} str String to be wrapped
 * @param {number} max Maximum number of characters per line
 * @param {string} [br='\n'] Custom break character
 *
 * @example
 * let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus.';
 * let wrappedStr = wordWrap(str, 32);
 * println(wrappedStr);
 * // expected output: 
 * // 'Lorem ipsum dolor sit amet,
 * // consectetur adipiscing elit.
 * // Fusce tempus.'
 * let customWrappedStr = wordWrap(str, 32, '<br>');
 * println(customWrappedStr);
 * // expected output: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.<br>Fusce tempus.'
 */
wordWrap = (str, max, br = '\n') => str.replace(
    new RegExp(`(?![^\\n]{1,${max}}$)([^\\n]{1,${max}})\\s`, 'g'), '$1' + br
);
