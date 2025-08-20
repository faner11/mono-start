import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import type { OrpcAppRouter } from '@repo/server'

const link = new RPCLink({
  url: `${location.origin}/api/orpc`,
  headers: () => ({
    authorization: 'Bearer token',
  }),
  method: (properties, path) => {
    // Use GET for read-like operations
    if (path.at(-1)?.match(/^(?:get|find|list|search)(?:[A-Z].*)?$/)) {
      return 'GET'
    }
    return 'POST'
  },
})
const originalClient: OrpcAppRouter = createORPCClient(link)

export const orpcClient = createTanstackQueryUtils(originalClient)
