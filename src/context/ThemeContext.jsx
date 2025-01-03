/**
 * ThemeContext.jsx - Theme management context
 * Provides dark/light theme functionality throughout the application
 * Features:
 * - Theme persistence using localStorage
 * - System theme preference detection
 * - Smooth theme switching
 * - Custom hook for easy theme access
 */

import { createContext, useContext, useEffect, useState } from 'react';

// Create context for theme management
const ThemeContext = createContext();

/**
 * ThemeProvider Component
 * Manages theme state and provides theme-related functionality to child components
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 */
export const ThemeProvider = ({ children }) => {
  /**
   * Initialize dark mode state
   * Priority:
   * 1. Check localStorage for saved preference
   * 2. Fall back to system color scheme preference
   * 3. Default to light mode if neither exists
   */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // If no saved theme, check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode
  });

  /**
   * Effect to apply theme changes
   * - Updates DOM root element classes
   * - Persists theme choice in localStorage
   */
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  /**
   * Toggle theme function
   * Switches between dark and light mode
   */
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Provide theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook for accessing theme context
 * Provides easy access to theme state and toggle function
 * Must be used within a ThemeProvider
 * 
 * @returns {Object} Theme context object
 * @property {boolean} isDarkMode - Current theme state
 * @property {Function} toggleTheme - Function to toggle theme
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
