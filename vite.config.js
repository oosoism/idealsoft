import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext', // Ensure modern JavaScript features are used
    polyfillDynamicImport: false, // Use Vite's built-in polyfill only when necessary

    // Specify browser and device targets
    browsers: ['chrome >= 58', 'firefox >= 57', 'safari >= 11', 'edge >= 16', 'ios >= 11', 'android >= 67'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/sass/main.scss";`
      },
    },
  },
  optimizeDeps: {
    include: ['jquery'],
  },
  rollupOptions: {
    // Make sure to include 'nomodule' in the script tag
    output: {
      entryFileNames: '[name]-[hash].js',
      chunkFileNames: '[name]-[hash].js',
      assetFileNames: '[name]-[hash].[ext]',
      // Legacy format for older scripts
      legacy: true,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});

