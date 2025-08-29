import { defineConfig } from 'drizzle-kit'
if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL is not defined')
}
export default defineConfig({
  out: './drizzle',
  schema: ['./src/schema.ts', './src/enum.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
})
