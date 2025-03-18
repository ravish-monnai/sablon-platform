
import React from 'react';

type MonnaiLogoProps = {
  className?: string;
  showText?: boolean;
  variant?: 'gradient' | 'color' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  compact?: boolean;
}

const MonnaiLogo: React.FC<MonnaiLogoProps> = ({ 
  className = '',
  showText = true,
  variant = 'gradient',
  size = 'md',
  showSlogan = false,
  compact = false
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

  // Adjusted sizes for compact mode
  const compactIconSizeClasses = {
    sm: 'h-4 w-8',
    md: 'h-5 w-10',
    lg: 'h-8 w-16'
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        {/* New Monnai icon logo */}
        <div className={compact ? "" : "mr-2"}>
          <img 
            src="/lovable-uploads/033f2774-4372-478c-90aa-fa784395fc40.png" 
            alt="Monnai Logo" 
            className={compact ? compactIconSizeClasses[size] : iconSizeClasses[size]}
          />
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
