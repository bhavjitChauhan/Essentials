const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { performance } = require('perf_hooks');
const { resolveConfig, format } = require('prettier');
const { cyan, green, bold } = require('chalk');

let files = readdirSync('./docs');
files = files.filter(file => file.match(new RegExp('.*.(html)', 'ig')));
files = files.map(file => './docs/' + file);
files.push('./internal/Essentials-Documentation.html');

resolveConfig('./prettier.config.js').then((options) => {
    for (const file of files) {
        const formatStartTime = performance.now();
        const data = readFileSync(file, 'utf8');
        let formatted = data.replace(/<p class="([a-z ]*)"><p>/g, '<p class="$1">');
        formatted = data.replace(/<\/p><\/p>/g, '</p>');
        formatted = format(formatted, options);
        console.log(cyan(`Formatted ${bold(file)} in ${bold(Math.round(performance.now() - formatStartTime) + 'ms')}.`));
        const writeStartTime = performance.now();
        writeFileSync(file, formatted);
        console.log(green(`${bold(file)} written in ${bold(Math.round(performance.now() - writeStartTime) + 'ms')}.`));
    }
});
