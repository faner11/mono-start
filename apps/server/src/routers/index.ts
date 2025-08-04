import { trpcRouter } from '#comm'

import { usersRouter } from './user'

export { fetchRequestHandler } from '@trpc/server/adapters/fetch'

export const trpcAppRouter = trpcRouter({
  user: usersRouter,
})

export type TrpcAppRouter = typeof trpcAppRouter
