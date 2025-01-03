/**
 * vite.config.js - Vite build configuration
 * Configures the build process for the React application
 * 
 * Features:
 * - React plugin for JSX support
 * - Fast refresh in development
 * - Optimized production builds
 * - Asset handling and optimization
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Enable React support with Fast Refresh
    react()
  ],
  // Add any additional configuration options here:
  // server: { port: 3000 },
  // build: { outDir: 'dist' },
  // optimizeDeps: { include: [] },
});
