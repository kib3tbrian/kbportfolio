import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

/**
 * Theme provider component that manages dark/light mode
 * Persists theme preference in localStorage
 * Defaults to system preference if no saved preference
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme based on localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // Fallback to time-based preference if system preference not available
      if (prefersDark === undefined) {
        const hours = new Date().getHours();
        return hours < 6 || hours >= 18; // Dark mode from 6 PM to 6 AM
      }
      return prefersDark;
    }
  });

  // Apply theme class to document
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle theme function
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};