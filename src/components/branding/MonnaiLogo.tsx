
import React from 'react';

type MonnaiLogoProps = {
  className?: string;
  showText?: boolean;
  variant?: 'gradient' | 'color' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
}

const MonnaiLogo: React.FC<MonnaiLogoProps> = ({ 
  className = '',
  showText = true,
  variant = 'gradient',
  size = 'md',
  showSlogan = false
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  // Logo color variants
  const variantClasses = {
    gradient: 'monnai-gradient-text',
    color: 'text-monnai-pink',
    white: 'text-white',
    black: 'text-black'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-8',
    md: 'h-6 w-12',
    lg: 'h-10 w-20'
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        {/* Original logo icon - triangles */}
        <div className="mr-2">
          <svg 
            viewBox="0 0 100 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={iconSizeClasses[size]}
          >
            <path 
              d="M0 50L25 0L50 50H0Z" 
              fill={variant === 'gradient' ? '#fb9400' : (variant === 'color' ? '#fb9400' : (variant === 'white' ? '#FFFFFF' : '#000000'))}
            />
            <path 
              d="M50 50L75 0L100 50H50Z" 
              fill={variant === 'gradient' ? '#fb9400' : (variant === 'color' ? '#fb9400' : (variant === 'white' ? '#FFFFFF' : '#000000'))}
            />
          </svg>
        </div>

        {/* Text part of logo */}
        {showText && (
          <span className={`font-extrabold text-2xl tracking-tight ${variantClasses[variant]}`}>
            monnai
          </span>
        )}
      </div>
      
      {/* Optional slogan */}
      {showSlogan && (
        <span className={`text-sm mt-1 ${variantClasses[variant]}`}>
          Tapping Into Global Potential
        </span>
      )}
    </div>
  );
};

export default MonnaiLogo;
