import * as schema from '@repo/db'
import { drizzle } from 'drizzle-orm/node-postgres'

if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL is not set')
}
export const database = drizzle(process.env.DATABASE_URL, {
  schema,
})
