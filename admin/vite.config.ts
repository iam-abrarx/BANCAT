import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => ({
  base: '/admin/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
}));
