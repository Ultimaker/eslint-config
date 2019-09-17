// Copyright (c) 2019 Ultimaker B.V.

module.exports = {
    extends: 'airbnb',
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
    },
    plugins: ['import'],
    rules: {
        indent: ['error', 4],
        'no-underscore-dangle': 0,
        'import/no-unresolved': 0,
        'jsx-closing-tag-location': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-array-index-key': 0,
        'class-methods-use-this': 0,
        camelcase: 0,
        'max-len': 0,
        'no-useless-escape': 0,
    },
    settings: {
        'import/extensions': ['.js', '.jsx'],
    },

    // Create some special overrides for TypeScript files
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: 'typescript-eslint-parser',
            rules: {

                // Required for interfaces
                'no-undef': 0,
                'no-unused-vars': 0,
                'react/prop-types': 0,

                // Use .tsx instead of .jsx
                'react/jsx-filename-extension': [1, {
                    extensions: ['.tsx'],
                }],

                // Not going to worry about keyboard navigation for now
                'jsx-a11y/click-events-have-key-events': 0,
                'jsx-a11y/no-static-element-interactions': 0,
                'jsx-a11y/interactive-supports-focus': 0,
            },
            settings: {

                // Allow import of .ts and .tsx without specifying extension
                'import/extensions': ['.ts', '.tsx'],
            },
        },
    ],
};
