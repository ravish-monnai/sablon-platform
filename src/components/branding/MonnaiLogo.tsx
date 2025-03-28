
import React from 'react';

type MonnaiLogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MonnaiLogo: React.FC<MonnaiLogoProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
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
