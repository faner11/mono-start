import { drizzle } from 'drizzle-orm/node-postgres'

import * as dbSchema from './schema'

export const drizzleDb = drizzle({
  connection: {
    connectionString: process.env.DB,
  },
  relations: dbSchema.relations,
})
export * from './schema'
export * from './schema/enums'
