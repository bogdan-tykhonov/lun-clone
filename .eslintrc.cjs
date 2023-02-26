/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    indent: ['error', 2],
    'no-console': ['error', { allow: ['error'] }],
    quotes: ['error', 'single'],
    'array-callback-return': 'error',
    eqeqeq: ['error', 'always'],
    'no-multi-spaces': 'error',
    'keyword-spacing': 'error',
    'space-before-function-paren': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': 'error',
    'no-multiple-empty-lines': 'error',
    'operator-linebreak': 'error',
    'one-var': ['error', 'never'],
    'block-spacing': 'error',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'comma-dangle': 'error',
    'comma-style': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': 'error',
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'vue/script-setup-uses-vars': 1,
    'object-curly-spacing': ['error', 'always'],
    'no-prototype-builtins': 'off',
    'vue/html-indent': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'max-len': ['error', { 'ignoreStrings': true, 'code': 120 }],
    'vue/max-len': ['error', { 'ignoreStrings': true, 'ignoreHTMLAttributeValues': true, 'code': 120 }],
    'vue/multi-word-component-names': 'warn'
  }
}
