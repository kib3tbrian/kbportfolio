import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Code, Search } from 'lucide-react';
import certifications from '../../data/certifications';
import Modal from '../common/Modal';

/**
 * Certifications section component
 */
const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Filter certifications based on search term
  const filteredCerts = searchTerm.trim() === '' 
    ? certifications 
    : certifications.filter(cert => 
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  
  const openCertModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  // Animation variants for staggered animations
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Certifications & Credentials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise and ongoing commitment to learning.
            </p>
          </motion.div>
        </div>
        
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search certifications or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Certificates grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCerts.map((cert, index) => (
            <motion.div 
              key={cert.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Certificate image/header */}
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20">
                  <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none"
                    className="text-white fill-current"
                  >
                    {[...Array(5)].map((_, i) => (
                      <path 
                        key={i} 
                        d={`M${20*i} 0 L${10+20*i} 100 L${20+20*i} 0`} 
                        fillOpacity={(i+1)/10}
                      />
                    ))}
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-flex mb-3">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-white/90 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              {/* Certificate details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Issued: {cert.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                  <a 
                    href={cert.verificationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
                    aria-label={`Verify ${cert.title} certification`}
                  >
                    <span className="text-sm">Verify</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 5).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                      >
                        <Code className="w-3 h-3 mr-1" />
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 5 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        +{cert.skills.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* View details button */}
                <button 
                  onClick={() => openCertModal(cert)}
                  className="w-full py-2 px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex items-center justify-center group"
                >
                  <Award className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  View Certificate Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No certifications found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or check back later for new certifications.
            </p>
          </div>
        )}
      </div>
      
      {/* Certificate details modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal}
        title={selectedCert?.title}
        size="lg"
      >
        {selectedCert && (
          <div>
            {/* Certificate header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 -mx-6 -mt-6 mb-6 rounded-t-xl flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                <p className="text-white/90 text-lg">Issued by {selectedCert.issuer}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Certificate details */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Certificate Details</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Issued Date:</span>
                    <span className="font-medium">{selectedCert.date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                    <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {selectedCert.credentialId}
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Verification:</span>
                    <a 
                      href={selectedCert.verificationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      Verify Certificate
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedCert.description || 'Professional certification validating expertise and skills in relevant domain areas.'}
                </p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Skills & Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href={selectedCert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                Verify Certificate
              </a>
              <button
                onClick={closeModal}
                className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;