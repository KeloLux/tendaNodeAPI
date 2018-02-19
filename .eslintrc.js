module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
    ecmaFeatures: {
        arrowFunctions: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ['standard'],
    // required to lint *.vue files
    plugins: ['html', 'import'],
    globals: {
        cordova: false,
        DEV: true,
        PROD: true,
        __THEME: true
    },
    // add your custom rules here
    rules: {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        'arrow-parens': 0,
        'one-var': 0,
        'import/first': 0,
        'import/named': 2,
        'import/namespace': 2,
        'import/default': 2,
        'import/export': 2,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'brace-style': [2, 'stroustrup', { allowSingleLine: true }]
    }
}