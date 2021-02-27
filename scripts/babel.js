const { writeFile } = require('fs');
const { transformFile } = require('@babel/core');

const dir = 'build';
const input = ['essentials-core.js', 'color-essentials.js', 'text-essentials.js', 'shape-essentials.js', '../essentials.js'];
const header = `/**
 * The Khan Academy utility library.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file Local Khan Academy utility JavaScript library
 * @author Bhavjit Chauhan
 */

//jshint ignore: start
var e = eval('__env__');
\n\n`;
// const oldHeader = header.replace(/(\/\*\*[\s\S]*?\*\/)[\s\S]*/g, '$1')
//     .replace('Local ', '');

process.chdir(dir);

for (const file of input) {
    transformFile(file, {
        rootMode: 'upward'
    }, (err, result) => {
        if (err) return console.error(err);
        let data = (file == 'essentials-core.js' || file == '../essentials.js' ? header : '') + result.code + '\n';
        data = data.replace(/\/\n{3}/g, '/\n')
            .replace(/\/\n{2}/g, '/\n')
            .replace(/\n\//g, '\n\n/');
        // if (file == 'essentials-core.js' || file == 'essentials.js') {
        //     data = data.replace(oldHeader, '');
        // }
        let filename;
        if (file == '../essentials.js') {
            filename = 'essentials-ka.js';
        } else {
            filename = `${file.slice(0, -3)}-ka.js`;
        }
        writeFile(filename, data, err => {
            if (err) return console.error(err);
        });
    });
}
