import { drizzleAdapter } from '@better-auth/drizzle-adapter'
import { betterAuth } from 'better-auth/minimal'

import { drizzleDb } from '../db'
export const auth = betterAuth({
  database: drizzleAdapter(drizzleDb, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
  experimental: {
    joins: true,
  },
})
