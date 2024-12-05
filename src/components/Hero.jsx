import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import heroImage from '../assets/Profl.jpg';
import { useEffect, useState } from 'react';

const ToggleTypeWriter = ({ texts, className }) => {
  const controls = useAnimation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = texts[currentTextIndex];
  const lines = currentText.split('\n');
  const totalLetters = lines.reduce((acc, line) => acc + line.length, 0);

  useEffect(() => {
    let isMounted = true;

    const animate = async () => {
      if (!isMounted) return;

      // Type forward
      await controls.start(i => ({
        opacity: 1,
        transition: { delay: i * 0.1 }
      }));
      
      if (!isMounted) return;
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!isMounted) return;
      // Type backward
      await controls.start(i => ({
        opacity: 0,
        transition: { delay: (totalLetters - i - 1) * 0.05 }
      }));
      
      if (!isMounted) return;
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!isMounted) return;
      // Switch to next text
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      
      // Continue the loop
      if (isMounted) {
        requestAnimationFrame(animate);
      }
    };

    animate();

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

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YourGitHubUsername',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/YourLinkedInUsername',
      icon: FaLinkedin,
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@YourYouTubeChannel',
      icon: FaYoutube,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-20 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <ToggleTypeWriter 
                texts={[
                  "Abdirizak",
                  "Fullstack\nDeveloper"
                ]} 
                className="text-primary dark:text-blue-400" 
              />
            </h1>
            {/* <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              Fullstack Developer
            </h2> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              I build beautiful, responsive, and user-friendly web applications
              using modern technologies and best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary dark:bg-blue-600 text-white hover:bg-primary/90 dark:hover:bg-blue-700 transition-colors"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary/10 dark:hover:bg-blue-900/30 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

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

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0 w-full max-w-md"
          >
            <div className="relative">
              {/* Decorative Elements */}
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

              {/* Image Container */}
              <div className="relative">
                {/* Geometric Shapes */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-lg rotate-12 dark:bg-primary/30" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-lg -rotate-12 dark:bg-secondary/30" />

                {/* Main Image */}
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
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-40" />
                  </div>
                </motion.div>
              </div>

              {/* Code-like decoration */}
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
