/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

const assert = chai.assert;

const processing = new Processing();
const _p = processing.createGraphics(400, 400);
Processing.instances.push(_p);

// const getLoggerText = () => {
//     return document.getElementsByClassName('console')[0].innerText;
// };

// const clearLogger = () => {
//     document.getElementsByClassName('console')[0].textContent = '';
//     Processing.logger.BufferArray = [];
// };

const hashImageData = () => {
    const img = _p.get(0, 0, 100, 100);
    return _hash(img.imageData.data);
};

const BabyHint = {
    bannedProperties: {},
    functionParamCount: {}
};

// For creating the `canvas` element
// _p.print('Placeholder');
// clearLogger();

_p.angleMode = 'degrees';

// Essentials environment flag
_silent_ = true;

const prepare = () => {
    beforeEach(() => {
        _p.background(255);
        push();
    });
    afterEach(() => {
        pop();
    });
};
