/**
 * Contact.jsx - Contact section component
 * Displays social media links and contact information
 * Features animated elements and hover effects using Framer Motion
 * Includes accessibility features with aria-labels
 */

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  /**
   * Social media links configuration
   * Each object contains:
   * - name: Platform name (used for accessibility)
   * - url: Profile/contact URL
   * - icon: React Icon component
   * - color: Tailwind CSS classes for hover color effect
   */
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Inzaghi-Mohamed',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdirizak-mohamed-03b9a4271/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      url: 'mailto:Inzaghi3650@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-primary',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        {/* Main content container with fade-in and slide-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Only animate once when scrolled into view
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Section heading and description */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of these platforms:
          </p>

          {/* Social links container with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} // Slight delay after text animation
            className="flex justify-center space-x-8"
          >
            {/* Map through social links to create icon buttons */}
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.95 }} // Scale down on click
                className={`text-gray-600 dark:text-gray-300 ${link.color} transition-colors`}
                aria-label={link.name} // Accessibility label for screen readers
              >
                <link.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
