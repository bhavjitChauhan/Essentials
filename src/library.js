// jshint ignore: start

const VERSION = '0.1.1';

// Variables {
// Colors
/**
 * Object containing common color values
 * 
 * @constant
 * @type {object}
 */
const colors = {
    'TRANSPARENT': color(0, 0),
    'BLACK': color(0),
    'WHITE': color(255),
    'RED': color(255, 0, 0),
    'GREEN': color(0, 255, 0),
    'BLUE': color(0, 0, 255)
};
// Fonts
/**
 * Object containing basic fonts
 * 
 * @constant
 * @type {object}
 */
const fonts = {
    'PRIMARY_FONT': createFont('sans-serif'),
    'SECONDARY_FONT': createFont('sans-serif'),
    'MONO_FONT': createFont('Consolas')
};
// }
// Functions {
/**
 * Capitalizes the first letter of each word of string
 * 
 * @param {string}  str  String to be converted
 * 
 * @returns {string}  String in title case convention
 */
String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(word) {
        // For every word, set the beginning letter to upper case and the rest to lower case
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
};
/**
 * Checks if condition passes is true or false
 * 
 * @param {boolean}  condition  Condition to be tested
 * @param {string}   [message]    Error message to be thrown
 * 
 * @throws Will throw error is assertion is false
 */
var assert = function(condition, message) {
    if (!condition) {
        throw message || 'Assertion failed';
    }
}
/**
 * Tries to invoke function with arguments
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#attempt
 * 
 * @param {function}  fn  Function to be invoked
 */
const attempt = function(fn) {
    try {
        let args = _.rest(Array.from(arguments));
        fn.apply(null, args);
    } catch (error) {
        console.error(error);
    }
};
/**
 * Runs multiple functions asynchronously
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#chainasync
 * 
 * @param {array}  fns  Contains functions
 */
const chainAsync = function(fns) {
    let current = 0;
    let last = _.last(fns);
    let next = function() {
        let fn = fns[current++];
        fn === last ? fn() : fn(next);
    };
    next();
};
/**
 * Removes Khan Academy's loop protection from functions
 * 
 * @link https://khanacademy.org/cs/i/5594326276014080
 * 
 * @param {function}  fn  Function to be cleaned
 * 
 * @returns {function}  Cleaned function
 */
const clean = function(fn) {
    let string = fn.toString()
        .replace(/__env__\.KAInfiniteLoopCount\+\+;/g, '')
        .replace(/if \(__env__\.KAInfiniteLoopCount > 1000\) {[\s]+__env__\.KAInfiniteLoopProtect\(\'[^']*'\);[^}]+}/g,'')
        .replace(/__env__\.PJSOutput\.applyInstance\((__env__\.\S+), '\S+'\)/g,
        'new $1');
    return Object.constructor('return (function(__env__) {return ' + string +
        ';});')()(this);
};
/**
 * Copies data to clipboard
 * 
 * @param {string}  data  Data to be copied
 * 
 * @todo Fix issue where canvas is shifted up when function is called
 */
const copyToClipboard = function(data) {
    try {
        if (ENV != 'development') throw 'error';
    } catch (error) {
        println('The copy to clipboard function is in development and may result in unintended behaviour.');
    }
    let doc = eval('document');
    let textArea = doc['createElement']('textarea');
    textArea.value = data;
    textArea.setAttribute('style', 'height:0px');
    doc.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        doc.execCommand('copy');
    } catch (error) {
        println('Error copying data to clipboard.\n\n' + error);
    }
    doc.body.removeChild(textArea);
};
/**
 * Converts milliseconds to readable format
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#attempt
 * 
 * @param {number}  ms  Duration in milliseconds
 * 
 * @returns {string}  Readable format of duration
 */
const formatDuration = function(ms) {
    let time = {
        day: Math.floor(ms / 86400000),
        hour: Math.floor(ms / 3600000) % 24,
        minute: Math.floor(ms / 60000) % 60,
        second: Math.floor(ms / 1000) % 60,
        millisecond: Math.floor(ms) % 1000
    };
    return Object.entries(time).filter(function(value) {
        return value[1] !== 0;
    }).map(function(entry) {
        let key = entry[0],
            value = entry[1];
        return value + ' ' + key + (value !== 1 ? 's' : '');
    }).join(', ');
};
/**
 * Calculates number of times function can run per second
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#hz
 * 
 * @param {function}   fn               Function to be measured
 * @param {number}     [iterations=1e4] Number of times function should be invoked
 * 
 * @returns {number}  Function performance in hertz - cycles per second
 */
const hertz = function(fn, iterations) {
    iterations = iterations || 10000;
    let before = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    return Math.round(1000 * iterations / (performance.now() - before));
};
/**
 * Efficiently inherts properties from parent class to child class
 * 
 * @param {function}    subClass    Class to be inherited to
 * @param {function}    superClass  Class to inherit from
 */
const inherit = function (subClass, superClass) {
    Object.setPrototypeOf(subClass.prototype, superClass.prototype);
    subClass.prototype.constructor = subClass;
    if (superClass.prototype.constructor === Object)
        superClass.prototype.constructor = superClass;
};
/**
 * Calculates fastest function
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#mostperformant
 * 
 * @param {array}      fns              Funtions to be compared
 * @param {number}     [iterations=1e4] Number of times function should be invoked
 * 
 * @returns {Object}  Index of function which performed fastest and times recorded
 */
const mostPerformant = function(fns, iterations) {
    iterations = iterations || 10000;
    let times = fns.map(function(fn) {
        let before = performance.now();
        for (let i = 0; i < iterations; i++) {
            fn();
        }
        return performance.now() - before;
    });
    return {
        winner: times.indexOf(min.apply(Math, times)),
        times: times
    };
};
/**
 * Literally does nothing
 */
const noop = function() {};
/**
 * Equivalent to using [popMatrix]{@link http://processingjs.org/reference/popMatrix_/} and [popStyle]{@link http://processingjs.org/reference/popStyle_/}
 * 
 * @example
 * push();
 * stroke(255);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 * 
 * @see push
 */ 
const pop = function() {
    popStyle();
    popMatrix();
};
/**
 * Prints HTML to canvas console
 * 
 * @param {string}  data  Text to be printed to canvas console
 */
const printHTML = function(data) {
    println(data);
    let latestLog = _.last(eval('document')
        .body
        .childNodes[0]
        .childNodes[1]
        .childNodes)
        .childNodes[0];
    latestLog.innerHTML = data;
};
/**
 * Equivalent to using [pushMatrix]{@link http://processingjs.org/reference/pushMatrix_/} and [pushStyle]{@link http://processingjs.org/reference/pushStyle_/}
 * 
 * @example
 * push();
 * stroke(255);
 * rotate(90);
 * rect(10, 10, 15, 15);
 * pop();
 * // This rectangle will not display the stroke or rotation
 * rect(10, 10, 15, 15);
 * 
 * @see pop
 */
const push = function() {
    pushMatrix();
    pushStyle();
};
// }
// Events {
const Mouse = {
    pressed: false,
    released: false,
    dragged: false,
    update: function() {
        this.pressed = false;
        this.released = false;
    }
};
_.extend(Mouse, Backbone.Events);
Mouse.off();

mousePressed = function() {
    Mouse.trigger('mousepress');
    Mouse.pressed = true;
};
mouseDragged = function() {
    Mouse.trigger('mousedrag');
    Mouse.dragged = true;
};
mouseReleased = function() {
    Mouse.trigger('mouserelease');
    Mouse.released = true;
    Mouse.dragged = false;
};
const Key = {
    pressed: false,
    released: true,
    code: null,
    update: function() {
        this.pressed = false;
        this.released = false;
    }
};
_.extend(Key, Backbone.Events);
Key.off();
keyPressed = function() {
    Key.trigger('keypress');
    Key.pressed = true;
    Key.code = keyCode;
}
keyReleased = function() {
    Key.trigger('keyrelease');
    Key.released = true;
}
// }
// Exporting {
// Using BMS, see www.khanacademy.org/cs/i/6070976254115840
const bootstrapper = function(callback) {
    let doc = Object.constructor('return this.document')();
    let jsonp = doc[['createElement']]('script');
    doc.BMS_bootstrap_loader = function(data) {
        delete doc.BMS_bootstrap_loader;
        jsonp.parentNode.removeChild(jsonp);
        Object.constructor('importer_context', 'export_module', data.revision.code)
            (this, callback);
    }.bind(this);
    jsonp.setAttribute('src',
        'https://www.khanacademy.org/api/labs/scratchpads/5522928629252096?callback=document.BMS_bootstrap_loader'
    );
    doc.head.appendChild(jsonp);
};
// Functions to be imported from other programs
const __requirements__ = {
    'centeredObjectText': '#5244695642996736',
    'highlightText': '#6710182776242176',
    'lightOrDarkText': '#4647647695962112',
    'multiColoredText': '#6037261762265088',
    'outlineText': '#4933300921925632'
};
// Check if program is being imported or running by itself
let importer_context;
let standalone = !importer_context;
if (!standalone) !module_context.NO_CONSOLE_OUTPUT && console.time('Import Essentials Library');
bootstrapper({
    done: function(BMS, modules) {
        // Only create export objects if program is being imported
        if (standalone) {
            background(255);
            fill(0);
            textAlign(CENTER);
            textFont(createFont('monospace'), 15);
            text('Essentials Library' + '\nv' + VERSION, width / 2, height / 2);
        } else {
            // We don't need to define modules as we can just assign them to one object .
            // // Dynamically define imported functions
            // for(module in modules) {
            //     window[module] = modules[module];
            // }
            // Global variables
            let variables = Object.assign(colors, fonts);
            // Functions
            let functions = {
                'Mouse': Mouse,
                'mousePressed': mousePressed,
                'mouseDragged': mouseDragged,
                'mouseReleased': mouseReleased,
                'Key': Key,
                'keyPressed': keyPressed,
                'keyReleased': keyReleased,
                'String.prototype.toTitleCase': String.prototype.toTitleCase,
                'attempt': attempt,
                'chainAsync': chainAsync,
                'clean': clean,
                'copyToClipboard': copyToClipboard,
                'formatDuration': formatDuration,
                'hertz': hertz,
                'inherit': inherit,
                'mostPerformant': mostPerformant,
                'noop': noop,
                'pop': pop,
                'printHTML': printHTML,
                'push': push
            };
            // All exports
            let exports = Object.assign({
                // For testing if variables were defined properly in importer's context
                'IMPORTED_ESSENTIALS': true,
            }, modules, variables, functions);
            !module_context.NO_CONSOLE_OUTPUT && console.log('Defining library functions...');
            for (let i in exports) {
                // Dynamically define functions in importer's context
                importer_context[i] = exports[i];
            }
            // Add library information in exports module
            exports.VERSION = VERSION;
            !module_context.NO_CONSOLE_OUTPUT && console.log('Importing library object...')
            export_module(exports);
            !module_context.NO_CONSOLE_OUTPUT && console.timeEnd('Import Essentials Library');
        }
    },
    progress: function(progress) {
        if (standalone) {
            background(255);
            fill(0);
            textAlign(CENTER);
            textFont(createFont('monospace'), 15);
            text((progress.completed / progress.total) * 100 + '%', width / 2, height /
                2);
        } else {
            !module_context.NO_CONSOLE_OUTPUT && console.log('Fetching module ' + Object.keys(__requirements__)[progress.completed] +
                '...');
        }
    }
});
// }
