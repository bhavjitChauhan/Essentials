/**
 * Detects the preferred language of the current user.
 *
 * @see {@link https://www.30secondsofcode.org/js/s/detect-language}
 * 
 * @category External
 *
 * @returns {string} Preferred language as a [language tag]{@link https://en.wikipedia.org/wiki/IETF_language_tag}
 *
 * @example
 * println(detectLanguage());
 * // expected outcome: Language tag
 */
detectLanguage = (defaultLanguage = 'en-US') =>
    navigator.language ||
    (_.isArray(navigator.languages) && navigator.languages[0]) ||
    defaultLanguage;
