import { RPCHandler } from '@orpc/server/fetch'
import { H3, serve } from 'h3'

import { orpcAppRouter } from './routers'

export const app = new H3()

const handler = new RPCHandler(orpcAppRouter)

app.use('/api/orpc/**', async (event) => {
  const { matched, response } = await handler.handle(event.req, {
    prefix: '/api/orpc',
  })

  if (matched) {
    return response
  }
})

serve(app, { port: 5174 })
