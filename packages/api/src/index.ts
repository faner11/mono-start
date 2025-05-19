// import { prisma } from '@repo/db'
import { prisma } from '@repo/db'
import { initTRPC } from '@trpc/server'
import { z } from 'zod'
export { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const t = initTRPC.create()

export const trpcAppRouter = t.router({
  users: t.procedure.query(async () => {
    return await prisma.user.findMany()
  }),
  addUser: t.procedure
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
})
export type TrpcAppRouter = typeof trpcAppRouter
