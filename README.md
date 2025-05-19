# Mono Start
A streamlined full-stack template with traditional SPA + API architecture built on Tanstack, engineered for accelerated development

Clone and start coding - batteries included.

This project is built using the following technology stack:

- [@tanstack/start](https://tanstack.com/start/latest).
- [trpc](https://trpc.io/)
- [prisma](https://www.prisma.io/)
- [zod](https://zod.dev/)
- [React](https://reactjs.org/)

## React or Vue or Other
Because this project is based on [@tanstack/start](https://tanstack.com/start/latest), it only supports the front-end frameworks supported by `@tanstack/start`.
## Getting Started
### env
```
cp .env.example .env
```
### prisma db provider
To facilitate quick start, SQLite is used by default. You need to initialize the SQLite database before starting.

```bash
# Create the SQLite database
pnpm run db:push
# Generate the Prisma client
pnpm run db:generate
```
If you want to use another database, you can modify the database connection string in `prisma/schema.prisma`.
```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgres" 
  url      = env("DATABASE_URL")
}
```

### DEV
```bash
pnpm dev
```
### BUILD
```bash
pnpm build
```