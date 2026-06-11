import { serve } from '@hono/node-server'
import { RPCHandler } from '@orpc/server/fetch'
import { auth } from '@repo/common-server/auth'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'

import { authHonoRouter } from '#comm'

import { orpcAppRouter } from './routers'

const handler = new RPCHandler(orpcAppRouter)
const app = new Hono()

app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw))

authHonoRouter.use('/api/rpc/*', async (c, next) => {
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: '/api/rpc',
    context: {
      session: c.get('session'),
      user: c.get('user'),
    },
  })

  if (matched) {
    return c.newResponse(response.body, response)
  }
  await next()
})

app.route('/api/rpc', authHonoRouter)

app.onError((err, c) => {
  console.error(err)
  if (err instanceof HTTPException) {
    return c.json(
      {
        message: err.message,
      },
      err.status,
    )
  }
  return c.text('Internal Server Error', 500)
})
const server = serve(
  {
    fetch: app.fetch,
    port: 6301,
    hostname: '0.0.0.0',
  },
  () => {
    console.info('Server is running on http://localhost:6301')
  },
)

// graceful shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
})
