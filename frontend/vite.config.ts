/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/BANCAT/' : '/',
  plugins: [
    react(),
    // Bundle size analysis - run 'npm run build' to generate stats.html
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'vendor-forms': ['react-hook-form', '@hookform/resolvers', 'yup'],
          'vendor-query': ['@tanstack/react-query', '@tanstack/react-query-devtools'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: command === 'serve',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
  server: {
    host: true, // Listen on all addresses
    allowedHosts: ['.ngrok-free.app', '.loca.lt', '.trycloudflare.com'], // Allow tunnel services
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
