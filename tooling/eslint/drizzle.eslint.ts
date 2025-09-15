import { defineConfig } from 'eslint/config'
// oxlint-disable-next-line ban-ts-comment
//@ts-expect-error
import * as drizzlePlugin from 'eslint-plugin-drizzle'
export const drizzleEslintConfig = defineConfig({
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    drizzle: drizzlePlugin,
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
