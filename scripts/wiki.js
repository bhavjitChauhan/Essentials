const { readdir, writeFile } = require('fs');

const tree = {};

readdir('src', (err, dirs) => {
    if (err) console.error(err);
    for (const dir of dirs) {
        readdir(`src/${dir}`, (err, files) => {
            if (err) console.error(err);
            files = files
                .filter(file => file[0] !== '_')
                .map(file => file.slice(0, -3));
            tree[dir] = files;
            if (dirs.indexOf(dir) == dirs.length - 1) write();
        });
    }
});

function write() {
    let data = '';
    data += '- **Essentials Core**\n';
    data += `    - ${tree['core'].length} subcomponents: `;
    for (const subcomponent of tree['core']) data += `[\`${subcomponent}\`](${generateURL('core', subcomponent)}), `;
    data = data.slice(0, -2);
    data += '.\n';
    for (const component in tree) {
        if (component == 'core') continue;
        const componentName = component.charAt(0).toUpperCase() + component.slice(1);
        data += `- **${componentName} Essentials**\n`;
        data += `    - ${tree[component].length} subcomponents: `;
        for (const subcomponent of tree[component]) data += `[\`${subcomponent}\`](${generateURL(component, subcomponent)}), `;
        data = data.slice(0, -2);
        data += '.\n';
    }
    writeFile('Essentials.wiki/Custom Builds Tree.md', data, err => {
        if (err) console.error(err);
    });
}

function generateURL(component, subcomponent) {
    const baseURL = 'https://bhavjitchauhan.github.io/Essentials/';
    if (component == 'core') {
        return `${baseURL}global.html#${subcomponent}`;
    } else {
        return `${baseURL}module-${component.charAt(0).toUpperCase() + component.slice(1)}.html#~${subcomponent}`;
    }
}
