import { os } from '@orpc/server'

const authMiddleware = os.middleware(async ({ next }) => {
  const result = await next({
    context: {
      user: { id: 1, name: 'bob' },
    },
  })
  return result
})
export const authedOrpc = os.use(authMiddleware)
