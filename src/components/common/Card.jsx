import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable card component with flexible props
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Card content
 * @param {string} [props.title] - Card title
 * @param {ReactNode} [props.subtitle] - Card subtitle
 * @param {ReactNode} [props.icon] - Icon to display in card header
 * @param {ReactNode} [props.action] - Action element to display in card header
 * @param {string} [props.footer] - Footer content
 * @param {boolean} [props.hoverable=false] - Whether card should have hover effects
 * @param {string} [props.className] - Additional CSS classes 
 */
const Card = ({
  children,
  title,
  subtitle,
  icon,
  action,
  footer,
  hoverable = false,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden';
  
  // Hover effect classes
  const hoverClasses = hoverable 
    ? 'hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform duration-300' 
    : '';
  
  // Combine all classes  
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {/* Card header - only rendered if title, subtitle, icon or action exists */}
      {(title || subtitle || icon || action) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className="flex-shrink-0">
                {icon}
              </div>
            )}
            
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              )}
              
              {subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {action && (
            <div className="flex-shrink-0">
              {action}
            </div>
          )}
        </div>
      )}
      
      {/* Card body */}
      <div className="px-6 py-5">
        {children}
      </div>
      
      {/* Card footer - only rendered if footer exists */}
      {footer && (
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
  action: PropTypes.node,
  footer: PropTypes.node,
  hoverable: PropTypes.bool,
  className: PropTypes.string
};

export default Card;