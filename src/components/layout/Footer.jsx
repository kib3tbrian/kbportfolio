// src/components/layout/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import contactInfo from '../../data/contactInfo';

/**
 * Minimalist footer component with essential info and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and title */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <img 
                src="/logo.svg" 
                alt="Kibet Brian Logo" 
                className="w-10 h-10 mr-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMzQ4N0YxIi8+PHRleHQgeD0iMTIiIHk9IjI4IiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iNzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IiNGRkZGRkYiPkI8L3RleHQ+PC9zdmc+';
                }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 dark:text-white">Kibet Brian</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</span>
              </div>
            </Link>
          </div>
          
          {/* Middle section - Contact */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
          
          {/* Connect links */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-center md:text-right">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Kibet Brian. All rights reserved.
          </p>
          <a 
            href="https://github.com/code-eine" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-500 hover:text-blue-500 text-xs mt-2 transition-colors"
          >
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Portfolio Source Code</span> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
