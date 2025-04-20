// src/components/sections/Hero.jsx

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Send, ChevronDown } from 'lucide-react';
import Typed from 'typed.js';
import { getCurrentPosition } from '../../data/workExperience';

/**
 * Hero section component with animated typing effect
 */
const Hero = () => {
  const typedRef = useRef(null);
  const currentPosition = getCurrentPosition();

  // Initialize typing animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Engineer', 
        'Full Stack Developer', 
        'Backend Engineer',
        'API Developer'
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      smartBackspace: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-[92vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Kibet Brian
            </h1>
            
            <div className="flex justify-center items-center mb-8">
              <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mx-4 min-h-[40px]">
                <span ref={typedRef} className="font-medium"></span>
              </div>
              <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-blue-500/20 flex items-center justify-center group"
            >
              <Database className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="font-medium">My Projects</span>
            </a>
            
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center group dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              <Send className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="font-medium">Get In Touch</span>
            </a>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
                <motion.div 
                  animate={{ 
                    y: [0, 12, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut" 
                  }}
                  className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
