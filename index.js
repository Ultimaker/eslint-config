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
        'indent': ['error', 4],
        'no-underscore-dangle': 'off',
        'import/no-unresolved': 'off',
        'jsx-closing-tag-location': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-array-index-key': 'off',
        'class-methods-use-this': 'off',
        'camelcase': 'off',
        'max-len': 'off',
        'no-useless-escape': 'off',
    },
    settings: {
        'import/extensions': ['.js', '.jsx'],
    },
    overrides: [

        // Allow this file to use quotes on all ESLint rules for consistency
        {
            'files': ['./index.js'],
            'rules': {
                'quote-props': 'off',
            },
        },

        // Create some special overrides for TypeScript files
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            rules: {

                // Required for interfaces
                'no-undef': 'off',
                'no-unused-vars': 'off',
                'react/prop-types': 'off',

                // Use .tsx instead of .jsx
                'react/jsx-filename-extension': ['warn', {
                    extensions: ['.tsx'],
                }],

                // Allow using defaultProps at top of class declaration
                'react/static-property-placement': ['error', 'static public field'],

                // Allow prop spreading
                'react/jsx-props-no-spreading': 'off',

                // Not going to worry about keyboard navigation for now
                'jsx-a11y/click-events-have-key-events': 'off',
                'jsx-a11y/no-static-element-interactions': 'off',
                'jsx-a11y/interactive-supports-focus': 'off',

                // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module
                'import/prefer-default-export': 'off',
            },
            settings: {

                // Allow import of .ts and .tsx without specifying extension
                'import/extensions': ['.ts', '.tsx'],
            },
        },
    ],
};
