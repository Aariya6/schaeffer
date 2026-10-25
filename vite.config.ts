import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/schaeffer/',   // 👈 IMPORTANT: tells Vite the site will be served at /schaeffer/
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:4174',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
