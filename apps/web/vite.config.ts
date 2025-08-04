import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-oxc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react()],
  server: {
    port: 5173,
    proxy: {
      '/api/': {
        target: 'http://localhost:5174',
      },
    },
  },
})
