import { prisma } from '@repo/db'
import { z } from 'zod/v4'

import { publicProcedure } from '@/comm/trpc'

export const usersRouter = {
  users: publicProcedure.query(async () => {
    return await prisma.user.findMany()
  }),
  addUser: publicProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input
      return await prisma.user.create({
        data: {
          email,
        },
      })
    }),
}
