import oxcConfig from '@repo/eslint-config/oxlint'
import { defineConfig } from 'oxlint'

export default defineConfig({
  ...oxcConfig,
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
