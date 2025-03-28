
import React from 'react';

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  src, 
  alt = "Icon", 
  className = "h-5 w-5" 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} object-contain`} 
    />
  );
};

// Helper function to create a custom icon component without using JSX
export const createCustomIcon = (src: string, className: string = "h-5 w-5", alt: string = "Icon") => {
  return () => {
    return React.createElement(
      'img',
      {
        src: src,
        alt: alt,
        className: `${className} object-contain`
      }
    );
  };
};
