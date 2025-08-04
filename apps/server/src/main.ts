import { serve } from '@hono/node-server'

import app from './app'

const server = serve(
  {
    fetch: app.fetch,
    port: 5174,
  },
  () => {
    console.info('Server is running on http://localhost:5174')
  },
)

// graceful shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close((error) => {
    if (error) {
      console.error(error)
      process.exit(1)
    }
    process.exit(0)
  })
})
