/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '*.js'],
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': ['error', { extendDefaults: true, types: { '{}': false } }],
    '@typescript-eslint/consistent-type-exports': ['warn'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': [
      'off',
      {
        fixToUnknown: true,
        ignoreRestArgs: true
      }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true, varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/restrict-template-expressions': ['warn', { allowAny: true, allowBoolean: true }],
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
    complexity: ['warn', 15],
    eqeqeq: ['warn', 'smart'],
    'no-useless-concat': 'error',
    'prefer-template': 'warn',
    'prettier/prettier': 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: false, avoidEscape: true }]
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 0
      }
    }
  ]
};
