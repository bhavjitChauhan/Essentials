// jshint ignore: start

// For enabling the 'Restart' button
random();
/* The current environnment the program is in. To be utilized by modules and Essentials to determine wether verbose debugging and experimental features should be enabled. 

Environment should be set to 'production', 'development' or 'canary' */
const ENV = 'canary';
// Clear any console logs created by Khan Academy or extensions
console.clear();

// Tests {
var run = function(Essentials) {
    try {
        textFont(createFont('monospace'));
        // Demonstrating `chainAsync` by executing tests asynchronously
        chainAsync([function(next) {
            fill(0);
            // Demonstrating `toTitleCase` method
            text('Essentials library tests'.toTitleCase(), 25, 50);
            fill(255);
            // Demonstrating `outlineText` function
            outlineText('v' + Essentials.VERSION, 35 + textWidth('Essentials Library Tests'), 50);
            next(); 
        }, function(next) {
            fill(0);
            // Demonstrating `highlightText`
            // Demonstrating formatted duration from milliseconds with `formatDuration`
            highlightText(formatDuration(millis()), 25, 100, color(255, 255, 0));
            next();
        }, function(next) {
            // Libraries to display
            let libraries = {
                'jQuery version': $().jquery,
                'underscore.js version': _.VERSION,
                'Backbone.js version': Backbone.VERSION
            };
            // Demonstrating `centeredObjectText` by displaying library name and version
            text(centeredObjectText(libraries), 25, 150);
            next();
        }, function(next) {
            // Demonstrating `mostPerformant` by testing which method of printint to browser console is more efficient
            let test = mostPerformant([debug, console.log]);
            let winner = test.winner;
            let times = test.times;
            // Demonstrating text with colors based on results from performance test with `multiColoredText`
            fill(150);
            multiColoredText('[0,0,255]debug() [0,0,0]performed ' + (winner === 0 ? '[0,255,0]faster' : '[255,0,0]slower') + ' [0,0,0]than [0,0,255]console.log()', 25, 250);
            let w = textWidth('debug() performed slo');
            pushStyle();
            textAlign(CENTER, TOP);
            textSize(10);
            text('TIMES: ' + times.map(function(time) {
                return time.toFixed(2);
            }), 25 + w, 250 + (textAscent() * 3));
            popStyle();
            next();
        }, function() {
            // Demonstrating `attempt` by executing `printHTML`
            // Demonstrating `printHTML` by printing link to my KA profile
            attempt(printHTML, '<a target="_blank" href="ttps://www.khanacademy.org/profile/AIiquis/">My Profile</a> [Ctrl + Click]');
        }]);
        keyReleased = function() {
            // Demonstrating `copyToClipboard` by copying my KA profile link on key release
            copyToClipboard('https://www.khanacademy.org/profile/AIiquis/');
            println('Copied to clipboard');
        };
    } catch(error) {
        println('\n\nError loading library, try restarting.\n\n' + error);
    }
};
// }
// Importing {
const bootstrapper = function(callback) {
    let doc = Object.constructor('return this.document')();
    let jsonp = doc[['createElement']]('script');
    doc.BMS_bootstrap_loader = function(data) {
        delete doc.BMS_bootstrap_loader; jsonp.parentNode.removeChild(jsonp);
        Object.constructor('importer_context', 'export_module', data.revision.code)(this, callback);
    }.bind(this);
    jsonp.setAttribute('src', 'https://www.khanacademy.org/api/labs/scratchpads/5522928629252096?callback=document.BMS_bootstrap_loader');
    doc.head.appendChild(jsonp);
};

const __requirements__ = {
    'Essentials': 'library'
}

// Import library
bootstrapper({
    done: function(BMS, modules) {
        background(255);
        textAlign(LEFT, TOP);
        textSize(12);
        scale(1.25);
        run(modules.Essentials);
    },
    progress: function() {
        fill(0);
        textAlign(CENTER);
        textFont(createFont('monospace'));
        text('Importing library...', width / 2, height / 2);   
    }
})
// }
