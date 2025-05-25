import { fetchRequestHandler, trpcAppRouter } from '@repo/api'
import { createAPIFileRoute } from '@tanstack/react-start/api'

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    req: request,
    router: trpcAppRouter,
    endpoint: '/api/trpc',
  })
}
export const APIRoute = createAPIFileRoute('/api/trpc/$')({
  GET: handler,
  POST: handler,
})
