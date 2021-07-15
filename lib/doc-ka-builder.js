const { existsSync, readFileSync, writeFileSync } = require('fs');
const { exec } = require('child_process');

if (!existsSync('docs/builder.html')) {
    console.warn('builder.html does not exists.');
    process.exit();
}

const header = '<a class="navbar-brand" href="#">Essentials Builder</a>';
const copyButton = '<i class="bi bi-clipboard"></i> Copy';
const rawButtonIcon = '<i class="bi bi-arrow-up-right"></i>';

exec('npx inline-remote-assets "docs/builder.html" -m 100000 -o out', (err, stdout) => {
    if (err) console.err(err);
    console.log(stdout);

    const data = readFileSync('out/builder.html', 'utf8');
    const formatted = data.toString()
        .replace('@charset "UTF-8";', '')
        .replaceAll('<script>', '<script type>')
        .replace(header, header.replace('#', 'https://bhavjitchauhan.github.io/Essentials/builder'))
        .replace(copyButton, '')
        .replace(rawButtonIcon, '🔗');
    writeFileSync('out/builder.html', formatted);
});
