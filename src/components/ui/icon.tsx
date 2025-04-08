
import React, { forwardRef } from 'react';

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

// Updated createCustomIcon function to return a proper React component
// that's compatible with Lucide icon components
export const createCustomIcon = (src: string, className: string = "h-5 w-5", alt: string = "Icon") => {
  // Create a component that matches the structure expected by Lucide components
  const CustomIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
    return (
      <span className="custom-icon-wrapper" ref={ref as any}>
        <img
          src={src}
          alt={alt}
          className={`${className} ${props.className || ''} object-contain transition-all duration-300 filter hover:brightness-110`}
        />
      </span>
    );
  });
  
  // Add displayName for better debugging
  CustomIcon.displayName = `CustomIcon(${src.split('/').pop()})`;
  
  return CustomIcon;
};
