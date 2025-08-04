import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  notFoundComponent: () => <div>Not Found</div>,
  component: RootComponent,
})

function RootComponent() {
  return <Outlet />
}
