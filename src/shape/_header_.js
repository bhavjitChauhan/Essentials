/** @module Shape */

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Shape Essentials depends on the Essentials Core.');
} else {
    SHAPE_ESSENTIALS = true;
    if (!_silent_ && !_shape_initialized_) console.info(
        '%cShape Essentials',
        'font-family:system-ui;font-size:0.75rem;color:lightgray;'
    );
}
