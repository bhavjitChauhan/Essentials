/** @module Color */

_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Color Essentials depends on the Essentials Core.');
} else {
    COLOR_ESSENTIALS = true;
    if (!_silent_ && !_color_initialized_) console.info(
        '%cColor Essentials',
        'font-family:system-ui;font-size:0.75rem;color:lightgray;'
    );
}
