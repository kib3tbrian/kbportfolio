import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, ExternalLink, Calendar, MapPin } from 'lucide-react';
import workExperience from '../../data/workExperience';

/**
 * Experience section component for professional history
 */
const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My career journey and the companies I've had the privilege to work with.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-blue-200 dark:bg-blue-900/50 rounded-full"></div>
          
          {workExperience.map((exp, expIndex) => (
            <div key={expIndex} className="mb-12">
              {exp.roles.map((role, roleIndex) => (
                <motion.div 
                  key={`${expIndex}-${roleIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: roleIndex * 0.1
                  }}
                  className={`relative flex flex-col md:flex-row items-start mb-12 ${
                    expIndex % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute z-10 left-8 md:left-1/2 transform -translate-x-1/2 w-7 h-7 bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 rounded-full"></div>
                  
                  {/* Content */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${
                    expIndex % 2 === 0 
                      ? 'md:pr-16 md:pl-4' 
                      : 'md:pl-16 md:pr-4'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      {/* Role title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Briefcase className="inline-block w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        {role.title}
                      </h3>
                      
                      {/* Company with optional link */}
                      <div className="mt-1 mb-3">
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                        </a>
                      </div>
                      
                      {/* Location and period */}
                      <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        <div className="flex items-center mr-4 mb-2">
                          <MapPin className="w-4 h-4 mr-1 opacity-70" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <Calendar className="w-4 h-4 mr-1 opacity-70" />
                          <span>{role.period}</span>
                        </div>
                        {role.type && (
                          <div className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs mb-2">
                            {role.type}
                          </div>
                        )}
                      </div>
                      
                      {/* Responsibilities */}
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        {role.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5 mr-3">
                              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                            </div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Technologies used */}
                      {role.technologies && role.technologies.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                              >
                                <Code className="w-3 h-3 mr-1" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          ))}
          
          {/* Timeline start */}
          <div className="absolute top-0 left-8 md:left-1/2 transform -translate-x-1/2 -mt-3">
            <div className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400"></div>
          </div>
          
          {/* Timeline end */}
          <div className="absolute bottom-0 left-8 md:left-1/2 transform -translate-x-1/2 -mb-3">
            <div className="w-6 h-6 rounded-full bg-green-500 dark:bg-green-400"></div>
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="font-medium">Let's work together</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;