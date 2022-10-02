module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
    },
    plugins: [
        '@typescript-eslint',
        'import'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    settings: {
        'import/extensions': ['.js', '.css', '.ts'],
    },
    rules: {
        // Typescript
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/camelcase': 0,

        // Overrides
        'import/no-default-export': 2,
        'no-process-env': 0,
        'prefer-const': 1,
        'prefer-destructuring': 1,
        'prefer-spread': 1,

        // Style
        'import/newline-after-import': 1,
        'import/order': [
            'warn',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always-and-inside-groups',
            },
        ],
    },
};
