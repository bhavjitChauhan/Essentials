import multi from '@rollup/plugin-multi-entry';

export default [{
    input: ['src/core/_header_.js', 'src/core/_aliases_.js', 'src/core/*.js'],
    output: {
        file: 'essentials-core.js',
    },
    plugins: [multi()]
}, {
    input: ['src/color/_header_.js', 'src/color/*.js'],
    output: {
        file: 'color-essentials.js'
    },
    plugins: [multi()]
}, {
    input: ['src/text/_header_.js', 'src/text/*.js'],
    output: {
        file: 'text-essentials.js'
    },
    plugins: [multi()]
}, {
    input: ['src/shape/_header_.js', 'src/shape/*.js'],
    output: {
        file: 'shape-essentials.js'
    },
    plugins: [multi()]
}, {
    input: ['essentials-core.js', 'color-essentials.js', 'text-essentials.js', 'shape-essentials.js'],
    output: {
        file: 'essentials.js'
    },
    plugins: [multi()]
}];
