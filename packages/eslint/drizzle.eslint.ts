// oxlint-disable-next-line ban-ts-comment
//@ts-expect-error
import * as drizzlePlugin from 'eslint-plugin-drizzle'
import { defineConfig } from 'eslint/config'
export const drizzleEslintConfig = defineConfig({
  plugins: {
    drizzle: drizzlePlugin as never,
  },
  rules: {
    'drizzle/enforce-delete-with-where': [
      'error',
      {
        drizzleObjectName: 'drizzleDb',
      },
    ],
    'drizzle/enforce-update-with-where': [
      'error',
      {
        drizzleObjectName: 'drizzleDb',
      },
    ],
  },
})
