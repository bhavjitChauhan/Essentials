/**
 * Detects the preferred language of the current user.
 *
 * @link https://www.30secondsofcode.org/js/s/detect-language
 *
 * @returns {string} Preferred language as a [language tag]{@link https://en.wikipedia.org/wiki/IETF_language_tag}
 *
 * @example
 * println(detectLanguage());
 * // expected outcome: Language tag
 */
detectLanguage = (defaultLanguage = 'en-US') =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLanguage;
