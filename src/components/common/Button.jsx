import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Reusable button component that can render as a button or link
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Button content
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='md'] - Button size
 * @param {string} [props.href] - URL if button should be a link
 * @param {string} [props.to] - Route path if button should be a React Router link
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.isLoading=false] - Whether to show loading state
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  disabled = false,
  isLoading = false,
  className = '',
  onClick,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900';
  
  // Get variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm';
      case 'secondary':
        return 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700';
      case 'outline':
        return 'border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'ghost':
        return 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };
  
  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs px-2.5 py-1.5 rounded';
      case 'sm':
        return 'text-sm px-3 py-2 rounded-md';
      case 'md':
        return 'text-sm px-4 py-2 rounded-md';
      case 'lg':
        return 'text-base px-6 py-3 rounded-lg';
      case 'xl':
        return 'text-lg px-8 py-4 rounded-lg';
      case 'icon':
        return 'p-2 rounded-full';
      default:
        return 'text-sm px-4 py-2 rounded-md';
    }
  };
  
  // Disabled and loading states
  const stateClasses = disabled || isLoading
    ? 'opacity-60 cursor-not-allowed'
    : 'cursor-pointer';
  
  // Combine all classes
  const classes = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${stateClasses} ${className}`;
  
  // Loading spinner
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  // Content with optional loading spinner
  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
  
  // Render as Link component
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }
  
  // Render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }
  
  // Render as button
  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={props.type || 'button'}
      {...props}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger', 'success']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'icon']),
  href: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;