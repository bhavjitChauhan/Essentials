/** @module Text */

_text_initialized_ = typeof TEXT_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Text Essentials depends on the Essentials Core.');
} else if (typeof COLOR_ESSENTIALS === 'undefined') {
    console.error('Text Essentials depends on Color Essentials.');
} else {
    TEXT_ESSENTIALS = true;
    if (!_silent_ && !_text_initialized_) console.info(
        '%cText Essentials',
        _console_style_
    );
}
