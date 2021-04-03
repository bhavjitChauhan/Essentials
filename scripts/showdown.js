const { readFile, writeFile } = require('fs');
const { Converter } = require('showdown');

const header = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Essentials Library Documentation</title>
</head>`;

const body = `<body>
<h1>Essentials Documentation</h1>
<p>The Essentials library provides utility functions for the Khan Academy Processing Environment. Information
    regarding usage and the source code can be found at the project's <a
        href="https://github.com/bhavjitChauhan/Essentials">GitHub repository</a>.</p>
<p>A cleaner version of the documentation can be viewed on <a
        href="https://bhavjitchauhan.github.io/Essentials">GitHub Pages</a>.</p>`;

readFile('internal/Essentials-Documentation.md', 'utf8', (err, data) => {
    if (err) console.error(err);
    const converter = new Converter({ tables: true });
    let html = converter.makeHtml(data);

    readFile('docs/styles/jsdoc-default.css', 'utf8', (err, data) => {
        const css = data;
        html = header + '\n<style>\n' + css + '</style>\n' + body + html + '\n</body>\n</html>';
        writeFile('internal/Essentials-Documentation.html', html, err => {
            if (err) return console.error(err);
        });
    });
});
