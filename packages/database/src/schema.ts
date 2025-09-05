import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { pgEnum } from 'drizzle-orm/pg-core'

import { GenderEnumValues } from './enums'

const genderEnum = pgEnum('genderEnum', GenderEnumValues)

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: genderEnum().notNull(),
})
