import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { personal, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="section-container bg-white dark:bg-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <img
              src={personal.avatar}
              alt={personal.name}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personal.bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">{personal.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            {education && education.length > 0 && (
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-primary-600 dark:text-primary-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.duration}
                    </p>
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            <motion.a
              href={personal.resumeUrl}
              className="inline-block btn-primary mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
