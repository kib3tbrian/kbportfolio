import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic badge component for displaying status, tags, etc.
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Badge content
 * @param {string} [props.variant='primary'] - Badge style variant
 * @param {string} [props.size='md'] - Badge size
 * @param {boolean} [props.rounded=true] - Whether badge has pill/rounded shape
 * @param {ReactNode} [props.icon] - Optional icon to display before text
 * @param {string} [props.className] - Additional CSS classes
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = true,
  icon,
  className = '',
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center font-medium';
  
  // Get variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'secondary':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'danger':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'info':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'purple':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'pink':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'orange':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'teal':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    }
  };
  
  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs px-1.5 py-0.5';
      case 'sm':
        return 'text-xs px-2 py-0.5';
      case 'md':
        return 'text-sm px-2.5 py-0.5';
      case 'lg':
        return 'text-sm px-3 py-1';
      case 'xl':
        return 'text-base px-3.5 py-1.5';
      default:
        return 'text-sm px-2.5 py-0.5';
    }
  };
  
  // Shape classes
  const shapeClasses = rounded ? 'rounded-full' : 'rounded';
  
  // Combine all classes
  const classes = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${shapeClasses} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 
    'warning', 'info', 'purple', 'pink', 'orange', 'teal'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  rounded: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string
};

export default Badge;