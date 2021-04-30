const { writeFile } = require('fs');
const { performance } = require('perf_hooks');
const { transformFile } = require('@babel/core');
const { cyan, green, bold } = require('chalk');

const dir = 'build';
const input = ['essentials-core.js', 'color-essentials.js', 'text-essentials.js', 'shape-essentials.js', 'external-essentials.js', '../essentials.js', 'essentials-x.js'];
const header = `/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file KA Essentials Build
 * @author Bhavjit Chauhan
 */

//jshint ignore: start
\n\n`;

process.chdir(dir);

for (const file of input) {
    const transformStartTime = performance.now();
    transformFile(file, {
        rootMode: 'upward'
    }, (err, result) => {
        if (err) return console.error(err);
        let filename;
        if (file == '../essentials.js') {
            filename = 'essentials-ka.js';
        } else {
            filename = `${file.slice(0, -3)}-ka.js`;
        }
        console.log(cyan(`${bold(filename)} transformed at ${bold(Math.round(performance.now() - transformStartTime) + 'ms')}`));
        let data = (file == 'essentials-core.js' || file == '../essentials.js' || file == 'essentials-x.js' ? header : '') + result.code + '\n';
        data = data.replace(/\/\n{3}/g, '/\n')
            .replace(/\/\n{2}/g, '/\n')
            .replace(/\n\//g, '\n\n/');
            if (file == 'essentials-x.js') data = data.replace('Essentials.', 'Essentials X.');
        const writeStartTime = performance.now();
        writeFile(filename, data, err => {
            if (err) return console.error(err);
            console.log(green(`${bold(filename)} written in ${bold(Math.round(performance.now() - writeStartTime) + 'ms')}`));
        });
    });
    const minifyStartTime = performance.now();
    transformFile(file, {
        rootMode: 'upward',
        minified: true
    }, (err, result) => {
        if (err) return console.error(err);
        let filename;
        if (file == '../essentials.js') {
            filename = 'essentials-ka.min.js';
        } else {
            filename = `${file.slice(0, -3)}-ka.min.js`;
        }
        console.log(cyan(`${bold(filename)} minified at ${bold(Math.round(performance.now() - minifyStartTime) + 'ms')}`));
        let data = (file == 'essentials-core.js' || file == '../essentials.js' || file == 'essentials-x.js' ? header.slice(0, -2) : '') + result.code + '\n';
        data = data.replace('KA Essentials Build', 'Minified KA Essentials Build');
        if (file == 'essentials-x.js') data = data.replace('Essentials.', 'Essentials X.');
        const writeStartTime = performance.now();
        writeFile(filename, data, err => {
            if (err) return console.error(err);
            console.log(green(`${bold(filename)} written in ${bold(Math.round(performance.now() - writeStartTime) + 'ms')}`));
        });
    });
}
