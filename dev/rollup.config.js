import multi from '@rollup/plugin-multi-entry';

export default [{
    context: 'this',
    input: [
        'src/core/_header_.js',
        'src/core/_constants_.js',
        'src/core/internal/*.js',
        'src/core/aliases/*.js',
        'src/core/injections/*.js',
        'src/core/**/*.js',
        'src/color/_header_.js',
        'src/color/aliases/*.js',
        'src/text/_header_.js',
        'src/text/aliases/*.js',
        'src/shape/_header_.js',
        'src/external/_header_.js',
        'src/external/aliases/*.js',
        'src/**/*.js'
    ],
    output: {
        file: 'dev/essentials-proto.js'
    },
    plugins: [multi()]
}];
