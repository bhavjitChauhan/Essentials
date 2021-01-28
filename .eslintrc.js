module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'arrow-spacing': 'error',
        'eol-last': 'error',
        'no-tabs': 'error',
        'no-undef': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quotes': ['error', 'single'],
        'semi': 'error'
    }
};
