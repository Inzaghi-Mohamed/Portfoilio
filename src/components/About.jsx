/**
 * About.jsx - About section component
 * Displays personal information and technical skills with animated icons
 * Uses Framer Motion for animations and React Icons for technology icons
 */

import { motion } from 'framer-motion';
// Import technology-specific icons from react-icons
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaRobot, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiRedux, SiNextdotjs } from 'react-icons/si';

/**
 * Custom SVG component for Shadcn UI icon
 * @param {Object} props - Component props
 * @param {string} props.className - CSS classes to apply to the SVG
 */
const ShadcnIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={className}
    fill="currentColor"
  >
    <path d="M128 24.2c-57.2 0-103.8 46.6-103.8 103.8 0 57.2 46.6 103.8 103.8 103.8 57.2 0 103.8-46.6 103.8-103.8 0-57.2-46.6-103.8-103.8-103.8zm0 24.2c44.1 0 79.6 35.5 79.6 79.6 0 44.1-35.5 79.6-79.6 79.6-44.1 0-79.6-35.5-79.6-79.6 0-44.1 35.5-79.6 79.6-79.6z" />
  </svg>
);

/**
 * About Component
 * Displays personal information and a grid of technical skills
 * Features:
 * - Animated sections using Framer Motion
 * - Responsive grid layout for skills
 * - Dark mode support
 * - Hover animations on skill cards
 */
const About = () => {
  // Array of technical skills with their respective icons and colors
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Material UI', icon: FaCode, color: 'text-blue-400' },
    { name: 'AI Coding', icon: FaRobot, color: 'text-gray-600 dark:text-gray-400' },
    { name: 'Shadcn/ui', icon: ShadcnIcon, color: 'text-gray-700 dark:text-gray-300' },
  ];

  // Animation variants for the container (parent element)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adds a delay between each child animation
      },
    },
  };

  // Animation variants for individual items (children elements)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start 20px below and invisible
    visible: {
      opacity: 1,
      y: 0, // Animate to original position
    },
  };

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        {/* Main container with scroll-triggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Only animate once when scrolled into view
          variants={containerVariants}
        >
          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            About Me
          </motion.h2>

          {/* About me text content */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-12 text-center"
          >
            <p className="mb-4">
              I'm a passionate Fullstack Developer with a passion for building modern web applications.
              I'm a quick learner and I'm always looking to learn new technologies and improve my skills.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving,
              ensuring that every project I work on meets both user needs and business goals.
            </p>
          </motion.div>

          {/* Technical skills section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical Skills
            </h3>
            {/* Responsive grid layout for skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Map through skills array to create skill cards */}
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }} // Slight scale up on hover
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  {/* Skill icon with dynamic color */}
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-2`} />
                  {/* Skill name */}
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
