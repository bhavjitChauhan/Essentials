/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @see {@link https://github.com/bhavjitChauhan/Essentials}
 * @file CDN Essentials Build
 * @author Bhavjit Chauhan
 */

/**
 * A Processing color integer.
 * @typedef {number} color
 */

_environment_ = this instanceof Window ? 'CDN' : 'KA';
_console_style_ = 'font-family:system-ui;font-size:0.75rem;';
_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';

ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '2.0.0';
ESSENTIALS_ASCII = `
    _/_/_/_/    _/_/_/    _/_/_/  _/_/_/_/  _/      _/  _/_/_/_/_/  _/_/_/    _/_/    _/          _/_/_/
   _/        _/        _/        _/        _/_/    _/      _/        _/    _/    _/  _/        _/
  _/_/_/      _/_/      _/_/    _/_/_/    _/  _/  _/      _/        _/    _/_/_/_/  _/          _/_/
 _/              _/        _/  _/        _/    _/_/      _/        _/    _/    _/  _/              _/
_/_/_/_/  _/_/_/    _/_/_/    _/_/_/_/  _/      _/      _/      _/_/_/  _/    _/  _/_/_/_/  _/_/_/

`;

_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info(
    `%cESSENTIALS
%cThe Khan Academy utility library.

${_environment_} Build
Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    `color:transparent;
font-size:3rem;
background-image: url('https://github.com/bhavjitChauhan/Essentials/blob/master/logo.png?raw=true');
background-position:center;
background-repeat: no-repeat;
background-size:contain;`,
    _console_style_
);
