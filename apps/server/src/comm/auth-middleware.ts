import { auth } from '@repo/common-server/auth'
import { Hono } from 'hono'
import { createMiddleware } from 'hono/factory'
import { HTTPException } from 'hono/http-exception'
export interface AuthVariablesType {
  user: typeof auth.$Infer.Session.user
  session: typeof auth.$Infer.Session.session
}
const authMiddleware = createMiddleware<{
  Variables: AuthVariablesType
}>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) {
    throw new HTTPException(401, {
      message: 'No permission',
    })
  }
  c.set('user', session.user)
  c.set('session', session.session)
  await next()
})

export const authHonoRouter = new Hono().use(authMiddleware)
