const { readFileSync, writeFileSync } = require('fs');
const { performance } = require('perf_hooks');
const { minify } = require('terser');
const { cyan, green, bold } = require('chalk');

const dir = 'build';
const input = ['essentials-core', 'color-essentials', 'text-essentials', 'shape-essentials', 'essentials'];
const options = {
    sourceMap: true,
    compress: {
        // unsafe_undefined: true
    }
};

const header = `/**
 * Essentials.
 *
 * The Essentials library provides utility functions for the Khan Academy
 * Processing Environment.
 *
 * @link https://github.com/bhavjitChauhan/Essentials
 * @file Minified CDN Essentials Build
 * @author Bhavjit Chauhan
 */

//jshint ignore: start
\n`;

process.chdir(dir);

for (const file of input) {
    const minifyStartTime = performance.now();
    const data = readFileSync(file == 'essentials' ? '../essentials.js' : `${file}.js`, 'utf8');
    minify(data, options).then(result => {
        console.log(cyan(`${bold(file + '.js')} minifed in ${bold(Math.round(performance.now() - minifyStartTime) + 'ms')}.`));
        const writeStartTime = performance.now();
        const data = (file == 'essentials-core' || file == 'essentials' ? header : '') + result.code;
        writeFileSync(file == 'essentials' ? '../essentials.min.js' : `${file}.min.js`, data);
        console.log(green(`${bold(file + '.js')} written in ${bold(Math.round(performance.now() - writeStartTime) + 'ms')}.`));
    });
}
