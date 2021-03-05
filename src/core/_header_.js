/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file CDN Essentials Build
 * @author Bhavjit Chauhan
 */

_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';
_env_ = typeof PI == 'undefined' ? 'CDN' : 'KA';

ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.1.0beta';
ESSENTIALS_ASCII = `
    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/
   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/
  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/
 _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/
_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/

`;

_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info(
    `%cEssentials
%cThe Khan Academy utility library.

${_env_} Build
Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    'font-family:system-ui;font-size:1rem;',
    'font-family:system-ui;font-size:0.75rem;'
);
