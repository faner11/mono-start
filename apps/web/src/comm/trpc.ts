import type { TrpcAppRouter } from '@repo/api'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCContext } from '@trpc/tanstack-react-query'

export const trpcClient = createTRPCClient<TrpcAppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
})

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<TrpcAppRouter>()
