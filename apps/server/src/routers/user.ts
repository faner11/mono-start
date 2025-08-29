import { genderEnum, usersTable } from '@repo/db'
import { z } from 'zod/v4'

import { authedOrpc, database } from '#comm'

export const usersRouter = {
  findUsers: authedOrpc
    .route({
      method: 'GET',
    })
    .handler(async () => {
      return await database.query.usersTable.findMany({
        limit: 10,
        orderBy(fields, operators) {
          return [operators.desc(fields.id)]
        },
      })
    }),
  addUser: authedOrpc
    .input(
      z.object({
        email: z.string(),
        gender: z.enum(genderEnum.enumValues),
        name: z.string(),
        age: z.number(),
      }),
    )
    .handler(async ({ input }) => {
      const { email, gender, name, age } = input
      await database.insert(usersTable).values({
        email,
        name,
        age,
        gender,
      })
    }),
}
