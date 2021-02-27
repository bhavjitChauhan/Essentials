/**
 * The Khan Academy utility library.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file Khan Academy utility JavaScript library
 * @author Bhavjit Chauhan
 */

_core_initialized_ = typeof ESSENTIALS_CORE !== 'undefined';

ESSENTIALS_CORE = true;
ESSENTIALS_VERSION = '1.0.1';
ESSENTIALS_ASCII = `/\\\\\\\\\\\\\\\\  /\\\\ \\\\    /\\\\ \\\\  /\\\\\\\\\\\\\\\\/\\\\\\     /\\\\/\\\\\\ /\\\\\\\\\\\\/\\\\      /\\       /\\\\        /\\\\ \\\\  
/\\\\      /\\\\    /\\\\/\\\\    /\\\\/\\\\      /\\ /\\\\   /\\\\     /\\\\    /\\\\     /\\ \\\\     /\\\\      /\\\\    /\\\\
/\\\\       /\\\\       /\\\\      /\\\\      /\\\\ /\\\\  /\\\\     /\\\\    /\\\\    /\\  /\\\\    /\\\\       /\\\\      
/\\\\\\\\\\\\     /\\\\       /\\\\    /\\\\\\\\\\\\  /\\\\  /\\\\ /\\\\     /\\\\    /\\\\   /\\\\   /\\\\   /\\\\         /\\\\    
/\\\\            /\\\\       /\\\\ /\\\\      /\\\\   /\\ /\\\\     /\\\\    /\\\\  /\\\\\\\\\\\\ /\\\\  /\\\\            /\\\\ 
/\\\\      /\\\\    /\\\\/\\\\    /\\\\/\\\\      /\\\\    /\\ \\\\     /\\\\    /\\\\ /\\\\       /\\\\ /\\\\      /\\\\    /\\\\
/\\\\\\\\\\\\\\\\  /\\\\ \\\\    /\\\\ \\\\  /\\\\\\\\\\\\\\\\/\\\\      /\\\\     /\\\\    /\\\\/\\\\         /\\\\/\\\\\\\\\\\\\\\\  /\\\\ \\\\`;

_silent_ = typeof _silent_ !== 'undefined' && _silent_;
if (!_silent_ && !_core_initialized_) console.info(
    `%cEssentials Library
%cThe Khan Academy utility library.

Version ${ESSENTIALS_VERSION}
Copyright \xa9 2021 Bhavjit Chauhan
https://github.com/bhavjitChauhan/Essentials`,
    'font-family:system-ui;font-size:1rem;',
    'font-family:system-ui;font-size:0.75rem;'
);
