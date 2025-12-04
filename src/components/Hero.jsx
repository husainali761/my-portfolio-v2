import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <motion.div
        className="section-container text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <img
            src={personal.avatar}
            alt={personal.name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-primary-500 shadow-xl"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 mb-6 font-medium"
        >
          {personal.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 mb-8"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href={social.email}
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 animate-bounce"
        >
          <a href="#about" className="inline-block text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <FiArrowDown className="w-8 h-8 mx-auto" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
