import { defineConfig } from 'oxlint'

import { notDefaultInOxlint } from './scripts/eslint-not-oxlint-default.ts'

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'react', 'import', 'react-perf', 'oxc', 'promise'],
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
    es2025: true,
  },
  options: {
    typeCheck: true,
    typeAware: true,
  },
  ignorePatterns: ['routeTree.gen.ts', 'types', 'packages/ui/**'],
  rules: {
    'import/consistent-type-specifier-style': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/self-closing-comp': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'zod',
            importNames: ['default'],
            message: 'Please use { z } instead of importing from zod directly.',
          },
        ],
      },
    ],
    ...notDefaultInOxlint,
    'unicorn/no-null': 'off',
  },
})
