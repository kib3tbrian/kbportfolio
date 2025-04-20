// src/components/sections/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, MousePointer, ExternalLink } from 'lucide-react';
import contactInfo from '../../data/contactInfo';
import { getTotalExperienceYears } from '../../data/workExperience';

/**
 * About section component with professional profile
 */
const About = () => {
  const experienceYears = getTotalExperienceYears();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          {/* Image column */}
          <div className="md:col-span-2 flex justify-center order-2 md:order-1">
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80 blur-sm"></div>
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="/brian-dp.png"
                  alt="Kibet Brian Professional Portrait"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMzNDg3RjEiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjUwIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTYwIDE5MEMxMDAgMTUwIDIwMCAxNTAgMjQwIDE5MEMyNDAgMjQwIDYwIDI0MCA2MCAxOTBaIiBmaWxsPSIjRTVFN0VCIi8+PC9zdmc+';
                  }}
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2 flex items-center border border-gray-200 dark:border-gray-700">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-1">
                  {experienceYears}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  years<br/>experience
                </span>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="md:col-span-3 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Profile
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
              <p className="leading-relaxed">
                I'm a results-oriented Software Engineer with expertise in building scalable systems and full-stack applications. 
                With {experienceYears} years of experience, I've developed strong skills across the entire development stack, 
                specializing in backend architecture, API design, and robust software solutions.
              </p>
              <p className="leading-relaxed">
                My approach combines clean code principles with scalable system design, delivering performant applications with well-structured APIs. 
                I thrive on solving complex technical challenges and continuously expanding my skills in this fast-paced industry, 
                from low-level system optimization to intuitive user interfaces.
              </p>
            </div>
            
            {/* Quick actions */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href={contactInfo.resumeUrl}
                download 
                className="flex items-center px-5 py-2.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors group"
              >
                <FileText className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                <span className="font-medium">Download Resume</span>
              </a>
              
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors group"
              >
                <Award className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn Profile</span>
                <ExternalLink className="ml-1 w-4 h-4 opacity-70" />
              </a>
              
              <a 
                href="#projects"
                className="flex items-center px-5 py-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors group"
              >
                <MousePointer className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                <span className="font-medium">View Projects</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
