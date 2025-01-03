/**
 * Footer.jsx - Website footer component
 * Displays copyright information and technology stack
 * Features a simple fade-in and slide-up animation
 * Supports dark mode through Tailwind CSS classes
 */

import { motion } from 'framer-motion';

const Footer = () => {
  // Get current year for dynamic copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900">
      <div className="section-container">
        {/* Animated container with fade-in and slide-up effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
          transition={{ duration: 0.5 }} // Animation duration
          className="text-center"
        >
          {/* Copyright notice */}
          <p className="text-gray-600 dark:text-gray-300">
            © {currentYear} Abdirizak. All rights reserved.
          </p>
          {/* Technology stack information */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Built with React and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
