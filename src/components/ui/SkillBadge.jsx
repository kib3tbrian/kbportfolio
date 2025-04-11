import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple skill badge component
 */
const SkillBadge = ({ name, color }) => {
  return (
    <div 
      className={`
        inline-flex items-center px-4 py-2 rounded-full m-1 
        ${color} text-white font-medium 
        hover:scale-105 transition-transform duration-300 
        shadow-sm hover:shadow-md
      `}
    >
      {name}
    </div>
  );
};

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default SkillBadge;