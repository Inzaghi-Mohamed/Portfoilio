/**
 * Hero.jsx - Main landing component of the website
 * This component displays the hero section with a typewriter effect, profile image,
 * and social links. It uses Framer Motion for animations and React Icons for social media icons.
 */

import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaDownload } from 'react-icons/fa';
import heroImage from '../assets/Profl.jpg';
import { useEffect, useState } from 'react';

/**
 * ToggleTypeWriter Component
 * Creates an animated typewriter effect that cycles through multiple texts
 * @param {Object} props
 * @param {string[]} props.texts - Array of texts to cycle through
 * @param {string} props.className - CSS classes to apply to the component
 */
const ToggleTypeWriter = ({ texts, className }) => {
  // Animation controls for Framer Motion
  const controls = useAnimation();
  // State to keep track of which text is currently being displayed
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = texts[currentTextIndex];
  // Split text into lines for multi-line support
  const lines = currentText.split('\n');
  // Calculate total letters for timing animations
  const totalLetters = lines.reduce((acc, line) => acc + line.length, 0);

  useEffect(() => {
    let isMounted = true;

    /**
     * Main animation function that handles the typewriter effect
     * Includes forward typing, pause, backward typing, and text switching
     */
    const animate = async () => {
      if (!isMounted) return;

      // Animate letters appearing one by one
      await controls.start(i => ({
        opacity: 1,
        transition: { delay: i * 0.1 }
      }));
      
      if (!isMounted) return;
      // Pause when text is fully typed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!isMounted) return;
      // Animate letters disappearing from last to first
      await controls.start(i => ({
        opacity: 0,
        transition: { delay: (totalLetters - i - 1) * 0.05 }
      }));
      
      if (!isMounted) return;
      // Pause before next text
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!isMounted) return;
      // Move to next text in the array
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      
      // Continue animation loop
      if (isMounted) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    // Cleanup function to prevent memory leaks
    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, totalLetters, texts.length]);

  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span key={`line-${lineIndex}`} className="block">
          {Array.from(line).map((letter, i) => {
            // Calculate global index for proper animation timing
            const globalIndex = lines
              .slice(0, lineIndex)
              .reduce((acc, line) => acc + line.length, 0) + i;
            return (
              <motion.span
                key={`${currentText}-${lineIndex}-${i}`}
                custom={globalIndex}
                animate={controls}
                initial={{ opacity: 0 }}
                className="inline-block"
                style={{ whiteSpace: 'pre' }}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

/**
 * Hero Component
 * Main landing section of the website featuring:
 * - Animated introduction text with typewriter effect
 * - Profile description
 * - Call-to-action buttons
 * - Social media links
 * - Animated profile image with decorative elements
 */
const Hero = () => {
  // Configuration for social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Inzaghi-Mohamed',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdirizak-mohamed-03b9a4271/',
      icon: FaLinkedin,
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Text and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            {/* Animated heading with typewriter effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <ToggleTypeWriter 
                texts={[
                  "Abdirizak",
                  "Fullstack\nDeveloper"
                ]} 
                className="text-primary dark:text-blue-400" 
              />
            </h1>

            {/* Introduction text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              I build beautiful, responsive, and user-friendly web applications
              using modern technologies and best practices.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* Resume download button */}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary dark:bg-blue-600 text-white hover:bg-white hover:text-primary dark:hover:bg-white dark:hover:text-blue-600 transition-colors"
              >
                View Resume
                <FaDownload className="ml-2 w-4 h-4" />
              </a>
              {/* Contact button */}
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social media links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  <link.icon className="h-8 w-8" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0 w-full max-w-md"
          >
            <div className="relative">
              {/* Decorative blur effects */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
              />

              {/* Profile image container */}
              <div className="relative">
                {/* Decorative geometric shapes */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-lg rotate-12 dark:bg-primary/30" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-lg -rotate-12 dark:bg-secondary/30" />

                {/* Profile image with hover effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800">
                    <img
                      src={heroImage}
                      alt="Abdirizak"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-40" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative code elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-8 top-1/4 hidden lg:block"
              >
                <div className="text-sm font-mono text-gray-600 dark:text-gray-400 transform rotate-12">
                  &lt;code&gt;
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -left-8 bottom-1/4 hidden lg:block"
              >
                <div className="text-sm font-mono text-gray-600 dark:text-gray-400 transform -rotate-12">
                  &lt;/code&gt;
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
