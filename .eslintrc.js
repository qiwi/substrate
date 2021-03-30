module.exports = {
  extends: [
    'eslint-config-qiwi',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-unused-expressions': 'off',
    'no-void': 'off',
    'unicorn/no-null': 'off',
  },
}
