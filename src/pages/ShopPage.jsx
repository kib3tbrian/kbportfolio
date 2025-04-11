import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, AlertCircle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';

/**
 * Shop page component for merchandise
 */
const ShopPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Tech Enthusiast T-Shirt',
      description: 'Premium cotton t-shirt with minimalist code design',
      price: 24.99,
      image: '/products/tshirt.webp',
      availableSizes: ['S', 'M', 'L', 'XL'],
      inStock: true
    },
    {
      id: 2,
      name: 'Developer Cap',
      description: 'Sleek baseball cap with embroidered code symbol',
      price: 19.99,
      image: '/products/cap.webp',
      availableSizes: ['One Size'],
      inStock: true
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <SEO 
        title="Store - Kimutai Joel"
        description="Shop exclusive merchandise including tech t-shirts and coder caps"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mr-4">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Shop
              </h1>
            </div>
            
            {/* Featured banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Exclusive Merchandise
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Show your love for coding with our premium collection. 
                  Limited items available, perfect for tech enthusiasts.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span className="font-medium">Just 2 items in our collection</span>
                </div>
              </div>
            </div>
            
            {/* Loading state */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              // Products grid
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {products.map(product => (
                  <motion.div 
                    key={product.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                  >
                    {/* Product image */}
                    <div className="relative h-80 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMDAiIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPiR7cHJvZHVjdC5uYW1lfTwvdGV4dD48L3N2Zz4=`;
                        }}
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {product.description}
                      </p>
                      
                      {/* Price and sizes */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>
                        <div className="flex space-x-2">
                          {product.availableSizes.map(size => (
                            <span key={size} className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Call to action */}
                      <a 
                        href="mailto:hey@jkapp.pro?subject=Merchandise%20Inquiry&body=I'm%20interested%20in%20purchasing%20merchandise%20from%20your%20store."
                        className="w-full block py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Contact to Purchase
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Info notice */}
            <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start">
              <AlertCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-1">Limited Collection</h3>
                <p className="text-amber-700 dark:text-amber-400 text-sm">
                  Our merchandise is currently available through direct inquiry only. 
                  Please email for purchasing, pricing details, and shipping information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;