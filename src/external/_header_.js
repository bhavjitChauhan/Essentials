/** @module External */

_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';
_set_code_limit_ = typeof _set_code_limit_ !== 'undefined' ? _set_code_limit_ : 25;

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('External Essentials depends on the Essentials Core.');
} else {
    EXTERNAL_ESSENTIALS = true;
    if (!_silent_ && !_external_initialized_) console.info(
        '%cExternal Essentials',
        _console_style_
    );
}
