module.exports = {
    plugins: ['stylelint-prettier'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
        'stylelint-prettier/recommended',
        'stylelint-config-recommended-vue'
    ],
    rules: {
        'prettier/prettier': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
            }
        ],
        /**
         * https://stylelint.io/user-guide/rules/list/selector-class-pattern
         * kebab-case: ^([a-z][a-z0-9]*)(-[a-z0-9]+)*$
         * lowerCamelCase: ^[a-z][a-zA-Z0-9]+$
         * snake_case: ^([a-z][a-z0-9]*)(_[a-z0-9]+)*$
         * UpperCamelCase: ^[A-Z][a-zA-Z0-9]+$
         * install plugin to support BEM, https://github.com/simonsmith/stylelint-selector-bem-pattern
         */
        'selector-class-pattern': null,
        // https://stylelint.io/user-guide/rules/list/no-empty-source
        'no-empty-source': null
    }
}
