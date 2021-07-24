import multi from '@rollup/plugin-multi-entry';

const dir = 'build';

export default [{
    context: 'this',
    input: ['src/core/_header_.js', 'src/core/_constants_.js', 'src/core/_colors_.js', 'src/core/internal/*.js', 'src/core/aliases/*.js', 'src/core/**/*.js'],
    output: {
        file: `${dir}/essentials-core.js`,
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: ['src/color/_header_.js', 'src/color/_constants_.js', 'src/color/_colors_.js', 'src/color/internal/*.js', 'src/color/aliases/*.js', 'src/color/**/*.js'],
    output: {
        file: `${dir}/color-essentials.js`
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: ['src/text/_header_.js', 'src/text/aliases/*.js', 'src/text/**/*.js'],
    output: {
        file: `${dir}/text-essentials.js`
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: ['src/shape/_header_.js', 'src/shape/aliases/*.js', 'src/shape/**/*.js'],
    output: {
        file: `${dir}/shape-essentials.js`
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: ['src/external/_header_.js', 'src/external/_constants_.js', 'src/external/internal/*.js', 'src/external/aliases/*.js', 'src/external/**/*.js'],
    output: {
        file: `${dir}/external-essentials.js`
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: [`${dir}/essentials-core.js`, `${dir}/color-essentials.js`, `${dir}/text-essentials.js`, `${dir}/shape-essentials.js`],
    output: {
        file: 'essentials.js'
    },
    plugins: [multi()]
}, {
    context: 'this',
    input: ['essentials.js', `${dir}/external-essentials.js`],
    output: {
        file: `${dir}/essentials-x.js`
    },
    plugins: [multi()]
}];
