import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/main.ts'],
  dts: false,
  noExternal: [/^@repo\/.*/],
  sourcemap: true,
})
