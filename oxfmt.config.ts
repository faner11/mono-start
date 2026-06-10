import { defineConfig } from "oxfmt";

export default defineConfig({
  singleQuote: true,
  semi: false,
  ignorePatterns: ["**/src/routeTree.gen.ts"],
  sortImports: true,
  sortTailwindcss: true,
});
