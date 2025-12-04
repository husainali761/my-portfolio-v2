import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10" />

      <div className={`card ${
        index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
      } md:w-[calc(50%-2rem)]`}>
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <FiBriefcase className="w-6 h-6 text-primary-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.position}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
              {experience.company}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-2">
                <FiCalendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {experience.description}
            </p>
            {experience.responsibilities && (
              <ul className="space-y-2 mb-4">
                {experience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
            {experience.technologies && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Professional Experience</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
