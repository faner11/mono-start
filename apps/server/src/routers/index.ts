import type { RouterClient } from '@orpc/server'

import { authedOrpc } from '#comm'

import { usersRouter } from './user'

export const orpcAppRouter = authedOrpc.router({
  user: usersRouter,
})

export type OrpcAppRouter = RouterClient<typeof orpcAppRouter>
