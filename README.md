# Mono Start
A streamlined full-stack template with traditional SPA + API architecture built on Tanstack, engineered for accelerated development

Not everyone needs SSR, this template is dedicated to developers who only need SAP

Clone and start coding - batteries included.

This project is built using the following technology stack:

- [@tanstack/router](https://tanstack.com/router/latest).
- [orpc](https://orpc.unnoq.com/)
- [drizzle orm](https://orm.drizzle.team/)
- [zod](https://zod.dev/)
- [react](https://reactjs.org/)

## Getting Started
### env
```
cp .env.example .env
```
Set your DATABASE_URL, default is postgresql

### install

```bash
pnpm i
```

```bash
# Create the postgresql database
pnpm run db:push

### DEV
```bash
pnpm dev
```
### BUILD
```bash
pnpm build
```