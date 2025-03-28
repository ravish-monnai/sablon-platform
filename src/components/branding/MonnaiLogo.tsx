
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
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-10 w-auto'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/2fa77d6d-4e71-4a25-8545-fc77747c5cf6.png" 
        alt="Monnai Logo" 
        className={`${iconSizeClasses[size]}`}
        style={{ 
          filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1))',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default MonnaiLogo;
