module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-console': 'warn',
    'no-alert': 'error',
    'no-unused-vars': 'error'
  },
};
