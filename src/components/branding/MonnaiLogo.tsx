
import React from 'react';

type MonnaiLogoProps = {
  className?: string;
  variant?: 'gradient' | 'color' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

const MonnaiLogo: React.FC<MonnaiLogoProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const iconSizeClasses = {
    sm: 'h-4 w-8',
    md: 'h-6 w-12',
    lg: 'h-10 w-20'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/033f2774-4372-478c-90aa-fa784395fc40.png" 
        alt="Monnai Logo" 
        className={iconSizeClasses[size]}
      />
    </div>
  );
};

export default MonnaiLogo;
