import oxlint from 'eslint-plugin-oxlint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

import myOxlintConfig from './oxlint-config'

export default defineConfig(
  eslintPluginUnicorn.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
  },
  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    ignores: ['dist/', 'src/routeTree.gen.ts', 'types'],
  },
  ...oxlint.buildFromOxlintConfig(myOxlintConfig),
)
