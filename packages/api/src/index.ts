import { router } from './comm/trpc'
import { usersRouter } from './user'
export { fetchRequestHandler } from '@trpc/server/adapters/fetch'

export const trpcAppRouter = router({
  user: usersRouter,
})
export type TrpcAppRouter = typeof trpcAppRouter
