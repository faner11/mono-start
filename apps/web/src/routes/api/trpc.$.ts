import { fetchRequestHandler, trpcAppRouter } from '@repo/api'
import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/trpc/$')({
  GET: ({ request }) => {
    return fetchRequestHandler({
      endpoint: '/api/trpc',
      req: request,
      router: trpcAppRouter,
      createContext() {
        return {}
      },
    })
  },
  POST: ({ request }) => {
    return fetchRequestHandler({
      endpoint: '/api/trpc',
      req: request,
      router: trpcAppRouter,
      createContext() {
        return {}
      },
    })
  },
})
