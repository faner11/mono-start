import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react()],
  server: {
    port: 6300,
    proxy: {
      '/api/': {
        target: 'http://localhost:6301',
      },
    },
  },
})
