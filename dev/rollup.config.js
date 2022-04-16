import multi from '@rollup/plugin-multi-entry';

export default [{
    context: 'this',
    input: [
        'src/core/_header_.js',
        'src/core/_aliases_.js',
        'src/core/**/*.js',
        'src/color/_header_.js',
        'src/color/_aliases_.js',
        'src/text/_header_.js',
        'src/text/_aliases_.js',
        'src/shape/_header_.js',
        'src/external/_header_.js',
        'src/external/_aliases_.js',
        'src/**/*.js'
    ],
    output: {
        file: 'dev/essentials-proto.js'
    },
    plugins: [multi()]
}];
