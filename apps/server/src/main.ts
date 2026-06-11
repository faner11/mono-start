import { serve } from '@hono/node-server'
import { RPCHandler } from '@orpc/server/fetch'
import { Hono } from 'hono'

import { orpcAppRouter } from './routers'

const handler = new RPCHandler(orpcAppRouter)
const app = new Hono()
app.use('/api/orpc/**', async (c, next) => {
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: '/api/orpc',
  })

  if (matched) {
    return c.newResponse(response.body, response)
  }
  await next()
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
