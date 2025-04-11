import React, { useState, useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Store promotion banner with auto-display and dismiss functionality
 */
const StoreBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Check if banner was dismissed before
  useEffect(() => {
    const bannerDismissed = localStorage.getItem('storeBannerDismissed');
    const lastShownTime = localStorage.getItem('storeBannerLastShown');
    const currentTime = new Date().getTime();
    
    // Show banner if not dismissed in the last 3 days
    if (!bannerDismissed || (currentTime - parseInt(lastShownTime)) > 3 * 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('storeBannerLastShown', currentTime.toString());
      }, 3000); // Show banner after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const dismissBanner = () => {
    setIsVisible(false);
    
    // Record dismissal in localStorage
    localStorage.setItem('storeBannerDismissed', 'true');
    localStorage.setItem('storeBannerLastShown', new Date().getTime().toString());
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
          <div className="bg-black/50 fixed inset-0 backdrop-blur-sm pointer-events-auto" onClick={dismissBanner}></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md pointer-events-auto relative"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-2xl">
              {/* Close button */}
              <button
                onClick={dismissBanner}
                className="absolute top-3 right-3 p-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white z-10"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Content */}
              <div className="p-6 text-center text-white">
                <div className="bg-white/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  Visit My Store! 🎉
                </h3>
                
                <p className="text-white/90 mb-6">
                  Check out my exclusive premium merch: Bold tech tees and sleek coder caps!
                </p>
                
                <a 
                  href="https://www.jkapp.pro/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismissBanner}
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:text-blue-700 px-6 py-3 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Browse Store</span>
                  <ShoppingCart className="w-5 h-5" />
                </a>
              </div>
              
              {/* Decorative elements */}
              <svg className="absolute top-0 right-0 text-white/10" width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 9h-2.5c.3-.8.5-1.6.5-2.5 0-3.6-2.9-6.5-6.5-6.5-.7 0-1.4.1-2 .3V0h-.8v.4C5.5.7 2 4.7 2 9.5c0 3.5 2 6.5 5 8v1H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zM10 1.9c.2 0 .5-.1.7-.1 2.8 0 5 2.2 5 5 0 2.3-1.5 4.3-3.7 4.9V5c0-.6-.3-1.1-.8-1.4v-2c2 .6 3 2.9 2.3 4.9-.2.7-.8 1.3-1.5 1.5v.1c.9 0 1.7.5 2 1.3V20H8v-5h2V1.9zm-8 15.6c0-1.1.9-2 2-2h4v4H4c-1.1 0-2-.9-2-2z" />
              </svg>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StoreBanner;