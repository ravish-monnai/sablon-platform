
import React from 'react';

type MonnaiLogoProps = {
  className?: string;
  showText?: boolean;
  variant?: 'gradient' | 'color' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

const MonnaiLogo: React.FC<MonnaiLogoProps> = ({ 
  className = '',
  showText = true,
  variant = 'gradient',
  size = 'md'
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
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-10 w-10'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo icon */}
      <div className="mr-2">
        <svg 
          viewBox="0 0 512 512" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={iconSizeClasses[size]}
        >
          <defs>
            <linearGradient id="monnaiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fb9400" />
              <stop offset="50%" stopColor="#ff00aa" />
              <stop offset="100%" stopColor="#5100ff" />
            </linearGradient>
          </defs>
          <path 
            d="M30 400L235 200L235 400L30 400Z" 
            fill={variant === 'gradient' ? 'url(#monnaiGradient)' : (variant === 'color' ? '#fb9400' : (variant === 'white' ? '#FFFFFF' : '#000000'))}
          />
          <path 
            d="M235 400L440 200L440 400L235 400Z" 
            fill={variant === 'gradient' ? 'url(#monnaiGradient)' : (variant === 'color' ? '#5100ff' : (variant === 'white' ? '#FFFFFF' : '#000000'))}
          />
        </svg>
      </div>

      {/* Text part of logo */}
      {showText && (
        <span className={`font-extrabold text-2xl ${variantClasses[variant]}`}>
          monnai
        </span>
      )}
    </div>
  );
};

export default MonnaiLogo;
