import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

/**
 * Services banner component to highlight professional services
 */
const ServicesBanner = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Need Professional Web/App Development?
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Explore my full range of web & app development services.
              From responsive websites to complex applications, I can bring your vision to life.
            </p>
            
            <a 
              href="https://www.jkapp.pro/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 font-medium"
            >
              <span className="mr-2">View My Services</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500/30 dark:border-blue-400/30 rounded-tl-xl -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500/30 dark:border-purple-400/30 rounded-br-xl translate-x-2 translate-y-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBanner;