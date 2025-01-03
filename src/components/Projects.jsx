/**
 * Projects.jsx - Portfolio projects showcase component
 * Features a responsive carousel/grid of projects with animations
 * Includes project cards with images, descriptions, and links
 * Uses Framer Motion for animations and responsive design for mobile/desktop
 */

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
// Import project images
import youfocusImage from '../assets/Youfocus.png';
import Profl from '../assets/Profl.jpg';  
import Portfolio from '../assets/Portfolio.png';

const Projects = () => {
  // State for carousel functionality
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Effect hook to handle responsive design
   * Checks window width and updates isMobile state accordingly
   */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile breakpoint at 768px
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /**
   * Project data array
   * Each project contains:
   * - title: Project name
   * - description: Brief project overview
   * - image: Screenshot or preview image
   * - technologies: Array of tech stack used
   * - liveUrl: Deployed project link
   * - githubUrl: Source code repository link
   */
  const projects = [
    {
      title: 'YouFocus',
      description:
        'A full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.',
      image: youfocusImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://youfocus.techscripted.info/',
      githubUrl: 'https://github.com/Inzaghi-Mohamed/YouFocus',
    },
    {
      title: 'Porfolio',
      description:
        'A simple portfolio website built with React, Tailwind CSS, and Framer Motion.',
      image: Portfolio,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Node.js'],
      liveUrl: 'https://portfolio.techscripted.info/',
      githubUrl: 'https://github.com/Inzaghi-Mohamed/Portfolio',
    }
  ];

  /**
   * Animation variants for container (parent element)
   * Controls the staggered animation of child elements
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  /**
   * Animation variants for individual items
   * Defines how each project card animates
   */
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start position: invisible and 20px down
    visible: {
      opacity: 1,
      y: 0, // End position: fully visible at original position
    },
  };

  /**
   * Handles carousel navigation
   * @param {number} newDirection - Direction to move (-1 for left, 1 for right)
   */
  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      // Handle circular navigation
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  /**
   * Determines which projects to display based on screen size
   * Mobile: Shows single project
   * Desktop: Shows up to 3 projects
   * @returns {Array} Array of visible projects
   */
  const getVisibleProjects = () => {
    if (isMobile) {
      return [projects[currentIndex]];
    } else {
      let visibleProjects = [];
      for (let i = 0; i < Math.min(3, projects.length); i++) {
        const index = (currentIndex + i) % projects.length;
        visibleProjects.push(projects[index]);
      }
      return visibleProjects;
    }
  };

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        {/* Main container with scroll-triggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>

          {/* Projects grid/carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* AnimatePresence enables exit animations */}
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleProjects().map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500"
                >
                  {/* Project image container with overlay */}
                  <div className="relative pb-[60%] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  {/* Project details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Project links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      >
                        <FaGithub className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              className="absolute -left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors z-20"
              onClick={() => paginate(-1)}
            >
              <FaChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
            <button
              className="absolute -right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors z-20"
              onClick={() => paginate(1)}
            >
              <FaChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>

            {/* Dots Indicator for current project */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
