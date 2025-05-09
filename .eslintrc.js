module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'import/prefer-default-export': 'off',
      "indent": "off",
      'no-tabs': 'off',
    },
  };