const { namingConvention } = require('./.eslint.naming.js');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
    'jest/globals': true,
  },
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: 'readonly',
  },
  ignorePatterns: ['jest.setup.js', 'mock-server'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'import', 'jest'],
  rules: {
  
  },
};
