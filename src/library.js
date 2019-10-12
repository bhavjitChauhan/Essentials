/**
 * Documentation:
 * https://bhavjitchauhan.github.io/Essentials/index.html
 * Repository:
 * https://github.com/bhavjitChauhan/Essentials
 * Library Tests:
 * https://khanacademy.org/cs/i/5508859300511744
 */

// jshint ignore: start

const VERSION = '0.1.3';

// Variables {
// Fonts
/**
 * Object containing basic fonts.
 * 
 * @constant
 * @type {object}
 * 
 * @example
 * textFont(MONO_FONT);
 */
const fonts = {
    'PRIMARY_FONT': createFont('sans-serif'),
    'SECONDARY_FONT': createFont('sans-serif'),
    'MONO_FONT': createFont('Consolas')
};
// }
// Functions {
/**
 * @summary
 * The `toUpperCase()` method returns the calling string value converted to title case.
 * 
 * @description
 * The `toUpperCase()` method returns the value of the string converted to title case. This method does not affect the value of the string itself since JavaScript strings are immutable.
 * 
 * @param {string}  str  String to be converted
 * 
 * @returns {string}  A new string representing the calling string converted to title case.
 * 
 * @example
 * let title = 'essentials library';
 * console.log(title.toTitleCase());
 * // expected output: "Essentials Library"
 */
String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(word) {
        // For every word, set the beginning letter to upper case and the rest to lower case
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
};
/**
 * Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
 * 
 * @param {boolean}  assertion                          Any boolean expression
 * @param {string}   [message='Assertion failed']       If the assertion is false, this message is written to the console
 * 
 * @throws An error is the assertion is false.
 * 
 * @example
 * const assertPrime = function(number) {
 *     for(let i = 2, root = Math.sqrt(number); i <= root; i++) {
 *         assert(number % i !== 0, number + ' is not a prime.');
 *     }
 * }
 * assertPrime(36);
 * // expected error: "36 is not a prime."
 */
var assert = function(assertion, message) {
    if (!assertion) {
        throw message || 'Assertion failed';
    }
}
/**
 * @summary
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error.
 * 
 * @description
 * A more convinient alternative to a `try`/`catch` block. Silently logs error to browser console, should an exception be thrown.
 * 
 * @param {function}  fn  Function to be invoked
 * 
 * @returns {any} Return value of function.
 */
const attempt = function(fn) {
    try {
        let args = _.rest(Array.from(arguments));
        return fn.apply(null, args);
    } catch (error) {
        console.error(error);
    }
};
/**
 * Calls multiple functions asynchronously.
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#chainasync
 * 
 * @param {array}  fns  Array containing functions to call
 * 
 * @example
 * let array;
 * chainAsync([
 *     function(next) {
 *         console.log('Generating array...');
 *         array = [];
 *         for (let i = 0; i < 10000; i++) {
 *             array.push(Math.random(0, 100));
 *         }
 *         next();
 *     }, function(next) {
 *         console.log('Sorting array...');
 *         array.sort();
 *         next();
 *     }, function() {
 *         console.log(array);
 *     }
 * ]);
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
 * @summary
 * Removes Khan Academy's loop protection code from functions.
 * 
 * @description
 * Khan Academy adds a few lines of code to every function created to prevent the webpage from freezing. This can be a hinderance when running more resource-intensive code.
 * 
 * @link https://khanacademy.org/cs/i/5594326276014080
 * 
 * @param {function}  fn  Function to be cleaned
 * 
 * @returns {function}  Cleaned function.
 * 
 * @example
 * const drawEllipses = function() {
 *     for (let i = 0; i < 10000; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * };
 * // expected error: "A for loop is taking too long to run."
 * 
 * @example
 * const drawEllipses = clean(function() {
 *     for (let i = 0; i < 10000; i++) {
 *         ellipse(Math.random(0, width), Math.random(0, height), 10, 10);
 *     }
 * });
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
 * Copies text to clipboard.
 * 
 * @param {string}  data  String to be copied
 * 
 * @example
 * mouseReleased = function() {
 *     copyToClipboard('https://github.com/bhavjitChauhan/Essentials');
 * };
 * 
 * @todo Fix issue where canvas is shifted up when function is called.
 */
const copyToClipboard = function(data) {
    if (ENV != 'development') println('The copy to clipboard function is in development and may result in unintended behaviour.');
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
 * Converts milliseconds to a readable format of duration.
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#attempt
 * 
 * @param {number}  ms  Duration in milliseconds
 * 
 * @returns {string}  Readable format of duration.
 * 
 * @example
 * let martianDay = 88775244;
 * console.log(formatDuration(martianDay));
 * // expected output: "1 day, 39 minutes, 35 seconds, 244 milliseconds"
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
 * Calculates number of times function can run per second.
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#hz
 * 
 * @param {function}   fn               Function to be measured
 * @param {number}     [iterations=1e4] Number of times function should be invoked
 * 
 * @returns {number}  Function performance in hertz - cycles per second.
 * 
 * @example
 * // In this case we want to check if it is feasible to run a function inside 
 * // a `draw` loop with minimal impact on the frame rate
 * const letterB = '### \n#  #\n### \n#  #\n### ';
 * const drawGrid = function(grid) {
 *     grid = grid.split('\n');
 *     for (let i in grid) {
 *         for (let j in grid[i]) {
 *             if (grid[i][j] == '#') rect(j * 10, i * 10, 10, 10);
 *        }
 *     }
 * };
 * 
 * console.log(hertz(drawGrid));
 * // expected output ≈ 6000
 * // We can conclude from that it is feasible to run this function in a `draw`
 * // loop because it can easily run 6000+ times per second
 * 
 * @see mostPerformant
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
 * Efficiently inherts properties from parent class to child class.
 * 
 * @param {function}    subClass    Class to be inherited to
 * @param {function}    superClass  Class to inherit from
 * 
 * @example
 * const Element = function(x, y, w, h) {
 *     this.x = x;
 *     this.y = y;
 *     this.w = w;
 *     this.h = h;
 * };
 * Element.prototype.draw = function() {
 *     rect(this.x, this.y, this.w, this.h);
 * };
 * const Button = function(x, y, w, h) {
 *     Element.call(this, x, y, w, h);
 * };
 * inherit(Button, Element);
 * 
 * let b = new Button(100, 100, 150, 50);
 * b.draw();
 * // expected image: rectangle with (100, 100, 150, 50) arguments
 */
const inherit = function (subClass, superClass) {
    Object.setPrototypeOf(subClass.prototype, superClass.prototype);
    subClass.prototype.constructor = subClass;
    if (superClass.prototype.constructor === Object)
        superClass.prototype.constructor = superClass;
};
/**
 * @summary
 * Calculates fastest function in terms of iterations.
 * 
 * @description
 * The functions will be called x amount of times. Their times will be how long they took to run x amount of times. The more iterations, the more accurate the result.
 * 
 * Running resource-intensive function may result in a infinite loop error. You can bypass this using the {@link clean} function.
 * 
 * @link https://github.com/30-seconds/30-seconds-of-code#mostperformant
 * 
 * @param {array}      fns              Funtions to be compared
 * @param {number}     [iterations=1e4] Number of times function should be invoked
 * 
 * @returns {Object}  Index of function which performed fastest and times recorded.
 * 
 * @example
 * let testees = {
 *     'debug': debug,
 *     'console.log': console.log
 * };
 * let test = mostPerformant(Object.values(testees));
 * console.log(Object.keys(testees)[test.winner] + ' performed faster.');
 * // expected output: "console.log performed faster."
 * 
 * @see hertz
 * @see clean
 */
const mostPerformant = function(fns, iterations) {
    iterations = iterations || 1e4;
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
 * Literally does nothing.
 */
const noop = function() {};
/**
 * Equivalent to using [popMatrix]{@link http://processingjs.org/reference/popMatrix_/} and [popStyle]{@link http://processingjs.org/reference/popStyle_/}.
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
 * Prints HTML to canvas console.
 * 
 * @param {string}  data  Text to be printed to canvas console
 * 
 * @example
 * printHTML('<marquee>Hello World!</marquee>');
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
 * Equivalent to using [pushMatrix]{@link http://processingjs.org/reference/pushMatrix_/} and [pushStyle]{@link http://processingjs.org/reference/pushStyle_/}.
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
    'textEssentials': '#5025014050684928',
    'colorEssentials': '#6017416019017728'
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
            // We don't need to define modules as we can just assign them to one object
            // // Dynamically define imported functions
            // for(module in modules) {
            //     window[module] = modules[module];
            // }
            // Global variables
            let variables = Object.assign(fonts);
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
                'assert': assert,
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
            }, modules.textEssentials, modules.colorEssentials, variables, functions);
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
