const { readFile, writeFile } = require('fs');
const pretty = require('pretty');

readFile('internal/Essentials-Documentation.html', 'utf8', (err, data) => {
    if (err) console.error(err);
    html = pretty(data);
    writeFile('internal/Essentials-Documentation.html', html, err => {
        if (err) return console.error(err);
    });
});
