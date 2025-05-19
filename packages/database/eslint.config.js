import esLintConfig from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 * @see https://eslint.org/docs/user-guide/configuring
 */
const config = [
  ...esLintConfig,
  {
    ignores: ['prisma', 'generated'],
  },
]

export default config
