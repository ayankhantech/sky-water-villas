import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@redux': '/src/redux', 
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})
