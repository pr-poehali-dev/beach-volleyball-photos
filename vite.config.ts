import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Настройка для размещения в подкаталоге
  base: '/volleyball/',
  build: {
    // Генерация относительных путей в output
    assetsDir: 'assets',
  },
})