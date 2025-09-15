import esLintConfig from '@repo/eslint-config'

export default [
  ...esLintConfig,
  {
    ignores: ['.output'],
  },
]
