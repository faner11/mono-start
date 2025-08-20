import { RPCHandler } from '@orpc/server/fetch'
import { Hono } from 'hono'

import { orpcAppRouter } from './routers'

const app = new Hono()
const handler = new RPCHandler(orpcAppRouter)
app.use('/api/orpc/**', async (c, next) => {
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: '/api/orpc',
  })
  if (matched) {
    return c.newResponse(response.body, response)
  }
  await next()
})
export default app
