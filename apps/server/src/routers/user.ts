import { authedOrpc, database } from '#comm'
import { GenderEnum } from '@repo/db/enums'
import { usersTable } from '@repo/db/schema'
import { z } from 'zod/v4'

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
      await database.insert(usersTable).values({
        age,
        email,
        gender,
        name,
      })
    }),
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
}
