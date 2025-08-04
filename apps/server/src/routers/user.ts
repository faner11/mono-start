import { GenderEnum, prisma } from '@repo/db'
import { z } from 'zod/v4'

import { publicProcedure } from '#comm'

export const usersRouter = {
  users: publicProcedure.query(async () => {
    return await prisma.user.findMany()
  }),
  addUser: publicProcedure
    .input(
      z.object({
        email: z.string(),
        gender: z.enum(GenderEnum),
      }),
    )
    .mutation(async ({ input }) => {
      const { email, gender } = input
      return await prisma.user.create({
        data: {
          email,
          gender,
        },
      })
    }),
}
