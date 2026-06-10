import { GenderEnum, usersTable, drizzleDb } from '@repo/common-server/db'
import { z } from 'zod/v4'

import { authedOrpc } from '#comm'

export const usersRouter = {
  addUser: authedOrpc
    .input(
      z.object({
        age: z.number(),
        email: z.string(),
        gender: z.enum(GenderEnum),
        name: z.string(),
      }),
    )
    .handler(async ({ input }) => {
      const { age, email, gender, name } = input
      await drizzleDb
        .insert(usersTable)
        .values({
          age,
          email,
          gender,
          name,
        })
        .returning()
    }),
  findUsers: authedOrpc
    .route({
      method: 'GET',
    })
    .handler(async () => {
      return await drizzleDb.query.usersTable.findMany({
        limit: 10,
        orderBy(fields, operators) {
          return [operators.desc(fields.id)]
        },
      })
    }),
}
