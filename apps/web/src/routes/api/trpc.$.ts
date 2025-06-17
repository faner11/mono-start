import { fetchRequestHandler, trpcAppRouter } from '@repo/api'
import { createServerFileRoute } from '@tanstack/react-start/server'

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    req: request,
    router: trpcAppRouter,
    endpoint: '/api/trpc',
  })
}
export const ServerRoute = createServerFileRoute('/api/trpc/$').methods({
  GET: handler,
  POST: handler,
})
