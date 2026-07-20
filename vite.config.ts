import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@newtab': resolve(__dirname, 'src/newtab'),
      '@popup': resolve(__dirname, 'src/popup'),
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      input: {
        newtab: resolve(__dirname, 'newtab.html'),
        popup: resolve(__dirname, 'popup.html')
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // Keep bundle small and fast
    minify: 'esbuild',
    cssMinify: true
  }
});
