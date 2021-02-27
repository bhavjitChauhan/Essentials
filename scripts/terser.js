const { readFile, writeFile } = require('fs');
const { minify } = require('terser');

const dir = 'build';
const input = ['essentials-core-ka.js', 'color-essentials-ka.js', 'text-essentials-ka.js', 'shape-essentials-ka.js', 'essentials-ka.js'];
const options = {};

process.chdir(dir);

for (const file of input) {
    readFile(file, 'utf8', (err, data) => {
        if (err) console.error(err);
        minify(data, options).then(result => {
            writeFile(`${file.slice(0, -3)}.min.js`, result.code, err => {
                if (err) return console.error(err);
            });
        });
    });
}
