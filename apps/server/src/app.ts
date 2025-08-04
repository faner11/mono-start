import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'

import { trpcAppRouter } from './routers'

const app = new Hono()

app.use(
  '/api/trpc/*',
  trpcServer({
    endpoint: '/api/trpc',
    router: trpcAppRouter,
    onError: ({ error }) => {
      console.error(error)
    },
  }),
)

export default app
