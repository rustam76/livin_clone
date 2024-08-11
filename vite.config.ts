import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Jika Anda perlu menggunakan plugin khusus Vercel, pastikan plugin tersebut diimpor dengan benar
// import vercel from 'vite-plugin-vercel' 

export default defineConfig({
  plugins: [
    react(),
    // vercel(), // Uncomment this line if you have a valid `vercel()` plugin
  ],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
