import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Success modal component with animation
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls modal visibility 
 * @param {Function} props.onClose - Function to call when modal closes
 * @param {string} props.title - Modal title
 * @param {string} props.message - Message to display
 * @param {number} [props.autoCloseTime=3000] - Auto close time in milliseconds
 */
const SuccessModal = ({ isOpen, onClose, title, message, autoCloseTime = 3000 }) => {
  // Auto close after specified time
  useEffect(() => {
    if (isOpen && autoCloseTime) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseTime]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl flex flex-col items-center"
          >
            {/* Success icon with circular animation */}
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <motion.svg 
                className="w-10 h-10 text-green-600 dark:text-green-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              {message}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-colors"
            >
              Got it!
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

SuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  autoCloseTime: PropTypes.number
};

export default SuccessModal;