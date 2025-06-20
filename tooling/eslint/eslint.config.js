import { fileURLToPath, URL } from 'node:url'

import eslint from '@eslint/js'
import oxlint from 'eslint-plugin-oxlint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'object-shorthand': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/consistent-type-specifier-style': 'error',
      'import/no-empty-named-blocks': 'error',
      // 'unicorn/prevent-abbreviations': 'off',
      // 'unicorn/no-useless-promise-resolve-reject': 'off',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts'],
  },
  {
    // To generate oxlint
    rules: {
      'react/no-array-index-key': 'error',
      'react/button-has-type': 'error',
      'react/no-danger': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      // 'react/jsx-fragments': 'error',
      'import/consistent-type-specifier-style': 'error',
      'import/no-empty-named-blocks': 'error',
    },
  },
  ...oxlint.buildFromOxlintConfigFile(fileURLToPath(new URL('oxlintrc.json', import.meta.url))),
)
