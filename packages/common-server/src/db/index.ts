import { drizzle } from 'drizzle-orm/node-postgres'

import { relations } from './schema'

export const drizzleDb = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
  relations,
})

export { relations as tableRelations } from './schema'
export * from './schema/enums'
