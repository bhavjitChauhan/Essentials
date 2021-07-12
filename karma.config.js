module.exports = config => {
    config.set({
        frameworks: ['mocha'],
        preprocessors: {
            './test/fixtures/**/*.json': ['json_fixtures']
        },
        jsonFixturesPreprocessor: {
            stripPrefix: 'test/fixtures/',
            transformPath: path => `${path}.js`
        },
        files: [
            './test/lib/jquery.min.js',
            './test/lib/underscore.min.js',
            './test/lib/processing.min.js',
            './node_modules/chai/chai.js',

            './test/fixtures/**/*.json',
            './test/prepare.js',
            './build/essentials-x.js',
            './test/**/*.test.js'],
        exclude: [],
        reporters: ['progress'],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    });
};
