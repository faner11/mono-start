import { defineConfig } from 'drizzle-kit'
if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL is not defined')
}
export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  dialect: 'postgresql',
  out: './drizzle',
  schema: ['./src/schema.ts', './src/enum.ts'],
})
