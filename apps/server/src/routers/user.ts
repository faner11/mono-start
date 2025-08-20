import { GenderEnum, prisma } from '@repo/db'
import { z } from 'zod/v4'

import { authedOrpc } from '#comm'

export const usersRouter = {
  findUsers: authedOrpc
    .route({
      method: 'GET',
    })
    .handler(async () => {
      return await prisma.user.findMany()
    }),
  addUser: authedOrpc
    .input(
      z.object({
        email: z.string(),
        gender: z.enum(GenderEnum),
      }),
    )
    .handler(async ({ input }) => {
      const { email, gender } = input
      return await prisma.user.create({
        data: {
          email,
          gender,
        },
      })
    }),
}
