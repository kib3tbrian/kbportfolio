// src/components/common/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

/**
 * Navigation component that appears on all pages
 * Features responsive design and dark mode toggle
 */
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Detect scroll for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#projects', label: 'Projects' },
    { path: '/#skills', label: 'Skills' },
    { path: '/#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-800/90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.svg" 
            alt="Kibet Brian Logo" 
            className="w-10 h-10 mr-2 group-hover:rotate-12 transition-transform"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMzQ4N0YxIi8+PHRleHQgeD0iMTIiIHk9IjI4IiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iNzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IiNGRkZGRkYiPkI8L3RleHQ+PC9zdmc+';
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight transition-colors">
              Kibet Brian
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Data Engineer
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-1 md:space-x-4">
          {/* Dark mode toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? 
              <Sun className="w-5 h-5" /> : 
              <Moon className="w-5 h-5" />
            }
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'}
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? 
              <X className="w-5 h-5" /> : 
              <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;