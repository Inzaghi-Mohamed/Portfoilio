import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YourGitHubUsername',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/YourLinkedInUsername',
      icon: FaLinkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@YourYouTubeChannel',
      icon: FaYoutube,
      color: 'hover:text-red-600',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FaEnvelope,
      color: 'hover:text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of these platforms:
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-600 dark:text-gray-300 ${link.color} transition-colors`}
                aria-label={link.name}
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
