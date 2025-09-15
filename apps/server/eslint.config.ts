import esLintConfig from '@repo/eslint-config'
import { drizzleEslintConfig } from '@repo/eslint-config/drizzle'

export default [
  ...esLintConfig,
  ...drizzleEslintConfig,
  {
    ignores: ['.vinxi', '.output'],
  },
]
