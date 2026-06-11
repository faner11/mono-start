import { os } from '@orpc/server'

import type { AuthVariablesType } from './auth-middleware'

export const authedOrpc = os.$context<AuthVariablesType>()
