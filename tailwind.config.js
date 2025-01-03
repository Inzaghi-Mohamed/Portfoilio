/**
 * tailwind.config.js - Tailwind CSS Configuration
 * Configures the styling framework for the application
 * 
 * Features:
 * - Dark mode support using class strategy
 * - Custom color palette
 * - Custom font configuration
 * - Content path configuration for purging unused styles
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Configure files to scan for utility classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS files in src
  ],
  
  // Enable class-based dark mode strategy
  // This allows for more control over dark mode implementation
  darkMode: 'class',
  
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: '#1e40af',   // Main brand color (blue-700)
        secondary: '#15803d', // Secondary color (green-700)
        accent: '#dc2626',    // Accent color for highlights (red-600)
      },
      
      // Typography configuration
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Primary font family
      },
    },
  },
  
  // Add any Tailwind plugins here
  plugins: [],
};
