module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'arrow-body-style': 'off',
    'react/function-component-definition': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'react/require-default-props': 'off',
    'no-unused-vars': 'off',
  },
};
