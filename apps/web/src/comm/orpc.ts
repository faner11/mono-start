import type { OrpcAppRouter } from '@repo/server'

import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'

const link = new RPCLink({
  headers: () => ({
    authorization: 'Bearer token',
  }),
  method: (_properties, path) => {
    // Use GET for read-like operations
    if (path.at(-1)?.match(/^(?:get|find|list|search)(?:[A-Z].*)?$/)) {
      return 'GET'
    }
    return 'POST'
  },
  url: `${location.origin}/api/orpc`,
})
const originalClient: OrpcAppRouter = createORPCClient(link)

export const orpcClient = createTanstackQueryUtils(originalClient)
