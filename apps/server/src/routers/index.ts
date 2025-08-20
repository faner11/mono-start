import type { RouterClient } from '@orpc/server'
import { os } from '@orpc/server'

import { usersRouter } from './user'

export const orpcAppRouter = os.router({
  user: usersRouter,
})

export type OrpcAppRouter = RouterClient<typeof orpcAppRouter>
