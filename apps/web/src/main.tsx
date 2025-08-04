import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { queryClient, trpcClient, TRPCProvider } from '#comm'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
// Create a new router instance
const router = createRouter({
  routeTree,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.querySelector('#root')
if (!rootElement) {
  throw new Error('Root element not found')
}
const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <RouterProvider router={router} />
      </TRPCProvider>
    </QueryClientProvider>
  </StrictMode>,
)
