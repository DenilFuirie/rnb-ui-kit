module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
    'import/no-named-as-default-member': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/export': 0,
    semi: 2,
    'comma-dangle': 2,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/keyword-spacing': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/no-explicit-any': 2,
    'object-curly-spacing': 2,
    'no-console': 1,
    'max-len': ['off', { code: 100 }],
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
  },
};
