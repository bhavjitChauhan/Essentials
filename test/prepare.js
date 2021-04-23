/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

const assert = chai.assert;

// Essentials environment flag
_silent_ = true;
// For unit tests that draw on canvas
let cellIndex = 0;

const processing = new Processing();
const _e = processing.createGraphics(100 * 5, 100);
Processing.instances.push(_e);

const BabyHint = {
    bannedProperties: {},
    functionParamCount: {}
};

// For creating the `canvas` element
_e.print('Placeholder');
const getLoggerText = () => {
    return document.getElementsByClassName('console')[0].innerText;
};
const clearLogger = () => {
    document.getElementsByClassName('console')[0].textContent = '';
    Processing.logger.BufferArray = [];
};
clearLogger();

// Default background is transparent
_e.background(255);
