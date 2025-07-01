module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json'
  },

  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    // General rules
    'no-console': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unreachable': 'error',
    'no-undefined': 'error',

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // React-specific rules
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

    // Unused import rules
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],

    // Import sorting
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // External libraries and side effects
          ['^@?\\w', '^\\u0000'],
          // Style imports
          ['^.+\\.s?css$'],
          // Libs and hooks
          ['^@/lib', '^@/hooks'],
          // Static data
          ['^@/data'],
          // Components
          ['^@/components', '^@/container'],
          // Zustand store
          ['^@/store'],
          // Other imports
          ['^@/'],
          // Relative paths (up to 3 levels)
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)'
          ],
          // Types
          ['^@/types'],
          // Anything else
          ['^']
        ]
      }
    ]
  },
  globals: {
    React: true,
    JSX: true,
    process: 'readonly'
  }
};
