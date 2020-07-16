module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'global-require': 0,
        'import/no-unresolved': 0,
        'no-console': 0,
        indent: [
            'error', 4,
        ],
    },
};
