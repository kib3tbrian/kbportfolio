import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import skillsData from '../../data/skills';
import SkillBadge from '../ui/SkillBadge';

/**
 * Simplified skills section with accordion on mobile
 */
const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  
  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  if (!skillsData || !Array.isArray(skillsData)) {
    return (
      <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Loading skills...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </motion.div>
        </div>
        
        {/* Mobile view - Accordion */}
        <div className="md:hidden space-y-3">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <button 
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full p-3 flex justify-between items-center text-left"
                aria-expanded={expandedCategory === categoryIndex}
              >
                <h3 className="font-medium">
                  {category.category}
                </h3>
                {expandedCategory === categoryIndex ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </button>
              
              {expandedCategory === categoryIndex && (
                <div className="p-3 pt-0">
                  <div className="flex flex-wrap">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge 
                        key={skillIndex}
                        name={skill.name}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 text-center">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skillIndex}
                    name={skill.name}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Show all skills together in a more visually appealing way */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 rounded-xl"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;