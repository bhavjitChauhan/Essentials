import multi from '@rollup/plugin-multi-entry';

const dir = 'build';

export default [{
    input: ['src/core/_header_.js', 'src/core/_aliases_.js', 'src/core/*.js'],
    output: {
        file: `${dir}/essentials-core.js`,
    },
    plugins: [multi()]
}, {
    input: ['src/color/_header_.js', 'src/color/*.js'],
    output: {
        file: `${dir}/color-essentials.js`
    },
    plugins: [multi()]
}, {
    input: ['src/text/_header_.js', 'src/text/*.js'],
    output: {
        file: `${dir}/text-essentials.js`
    },
    plugins: [multi()]
}, {
    input: ['src/shape/_header_.js', 'src/shape/*.js'],
    output: {
        file: `${dir}/shape-essentials.js`
    },
    plugins: [multi()]
}, {
    input: [`${dir}/essentials-core.js`, `${dir}/color-essentials.js`, `${dir}/text-essentials.js`, `${dir}/shape-essentials.js`],
    output: {
        file: 'essentials.js'
    },
    plugins: [multi()]
}];
