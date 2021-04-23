/** @module External */

_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Essentials X depends on the Essentials Core.');
} else {
    EXTERNAL_ESSENTIALS = true;
    if (!_silent_ && !_external_initialized_) console.info(
        '%cEssentials X',
        _console_style_
    );
}

BabyHint.bannedProperties = {};
