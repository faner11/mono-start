import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

import { genderEnum } from './enum'

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: genderEnum().notNull(),
})
