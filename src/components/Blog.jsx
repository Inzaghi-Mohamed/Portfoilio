/**
 * Blog.jsx - Blog section component
 * Currently displays a "Coming Soon" message
 * Features animated elements using Framer Motion
 * Includes a commented-out blog link section for future implementation
 */

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon for the future blog link

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        {/* Header section with title and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
          whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
          viewport={{ once: true }} // Only animate once
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out my latest thoughts and insights
          </p>
        </motion.div>

        {/* Content section - currently showing "Coming Soon" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }} // Slight delay after header animation
          className="flex justify-center"
        >
          <h1 className='text-2xl font-bold'>Coming Soon</h1>
          {/* 
            Future blog link implementation (currently commented out)
            Features:
            - External link to blog
            - Hover effect with arrow animation
            - Accessibility attributes
          <a
            href="https://your-blog-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-lg font-semibold">Visit My Blog</span>
            <FaArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
