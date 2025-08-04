import esLintConfig from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 * @see https://eslint.org/docs/user-guide/configuring
 */
export default [
  ...esLintConfig,
  {
    ignores: ['.vinxi', '.output'],
  },
]
