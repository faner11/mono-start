import { defineRelations } from 'drizzle-orm'
import { integer, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core'

import { GenderEnum } from './enums'

export const genderEnum = pgEnum('genderEnum', GenderEnum)

export const usersTable = pgTable('users', {
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: genderEnum().notNull(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
})

export const relations = defineRelations({ usersTable })
