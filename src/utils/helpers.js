/**
 * Collection of helper utility functions
 */

/**
 * Format date string to localized format 
 * @param {string} dateStr - Date string to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (dateStr, options = {}) => {
    const defaultOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    
    const dateOptions = { ...defaultOptions, ...options };
    
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('en-US', dateOptions).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateStr; // Return original string if formatting fails
    }
  };
  
  /**
   * Truncate text with ellipsis if longer than maxLength
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncation
   * @returns {string} Truncated text
   */
  export const truncateText = (text, maxLength = 100) => {
    if (!text || text.length <= maxLength) return text;
    return `${text.substring(0, maxLength).trim()}...`;
  };
  
  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} Whether email format is valid
   */
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Format number as currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code (default: USD)
   * @returns {string} Formatted currency string
   */
  export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };
  
  /**
   * Debounce function to limit execution rate
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  /**
   * Generate a unique ID
   * @param {string} prefix - Optional prefix for the ID
   * @returns {string} Unique ID
   */
  export const generateId = (prefix = 'id') => {
    return `${prefix}_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
  };
  
  /**
   * Get relative time string (e.g., "2 hours ago")
   * @param {string|Date} date - Date to compare against current time
   * @returns {string} Relative time string
   */
  export const getRelativeTimeString = (date) => {
    try {
      const targetDate = date instanceof Date ? date : new Date(date);
      const now = new Date();
      const diffInMs = now - targetDate;
      const diffInSecs = Math.floor(diffInMs / 1000);
      const diffInMins = Math.floor(diffInSecs / 60);
      const diffInHours = Math.floor(diffInMins / 60);
      const diffInDays = Math.floor(diffInHours / 24);
      const diffInMonths = Math.floor(diffInDays / 30);
      const diffInYears = Math.floor(diffInDays / 365);
      
      if (diffInSecs < 60) return diffInSecs === 1 ? '1 second ago' : `${diffInSecs} seconds ago`;
      if (diffInMins < 60) return diffInMins === 1 ? '1 minute ago' : `${diffInMins} minutes ago`;
      if (diffInHours < 24) return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
      if (diffInDays < 30) return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
      if (diffInMonths < 12) return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
      return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
    } catch (error) {
      console.error('Error calculating relative time:', error);
      return 'some time ago';
    }
  };
  
  /**
   * Safely access nested object properties
   * @param {Object} obj - Object to access
   * @param {string} path - Dot notation path to property
   * @param {*} defaultValue - Default value if property doesn't exist
   * @returns {*} Property value or default value
   */
  export const getNestedValue = (obj, path, defaultValue = null) => {
    if (!obj || !path) return defaultValue;
    
    const properties = path.split('.');
    let value = obj;
    
    for (const prop of properties) {
      if (value === null || value === undefined || typeof value !== 'object') {
        return defaultValue;
      }
      value = value[prop];
    }
    
    return value === undefined ? defaultValue : value;
  };
  
  /**
   * Capitalize first letter of each word in a string
   * @param {string} str - String to capitalize
   * @returns {string} Capitalized string
   */
  export const capitalizeWords = (str) => {
    if (!str) return '';
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  /**
   * Check if device is mobile
   * @returns {boolean} Whether current device is mobile
   */
  export const isMobile = () => {
    return window.innerWidth <= 768;
  };
  
  /**
   * Sanitize HTML string (basic sanitization)
   * @param {string} html - HTML string to sanitize
   * @returns {string} Sanitized HTML
   */
  export const sanitizeHtml = (html) => {
    if (!html) return '';
    
    // Create a new div element
    const tempDiv = document.createElement('div');
    tempDiv.textContent = html;
    
    // Return sanitized HTML
    return tempDiv.innerHTML;
  };