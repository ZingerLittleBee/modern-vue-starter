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
        ]
    }
}
