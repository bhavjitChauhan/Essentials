module.exports = config => {
    config.set({
        frameworks: ['mocha'],
        preprocessors: {
            './test/fixtures/**/*.json': ['json_fixtures']
        },
        jsonFixturesPreprocessor: {
            stripPrefix: 'test/fixtures/',
            camelizeFilenames: true,
            transformPath: path => {
                return `${path}.js`;
            }
        },
        files: [
            './test/lib/underscore.min.js',
            './test/lib/processing.min.js',
            './node_modules/chai/chai.js',

            './test/fixtures/**/*.json',
            './test/prepare.js',
            './essentials.js',
            './test/**/*.test.js'],
        exclude: [],
        reporters: ['progress'],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    });
};
