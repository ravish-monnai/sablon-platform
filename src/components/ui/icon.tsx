
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

