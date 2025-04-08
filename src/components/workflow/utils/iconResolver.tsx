
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconConfig {
  name: string;
  className?: string;
  size?: number;
}

// This function renders the icon component based on its name
export const renderIcon = (iconConfig: IconConfig | undefined) => {
  if (!iconConfig || !iconConfig.name) return null;
  
  // Get the icon component from Lucide
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[iconConfig.name];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconConfig.name}" not found in Lucide icons`);
    return null;
  }
  
  // Return the icon with the specified props
  return <IconComponent 
    className={iconConfig.className} 
    size={iconConfig.size || 24} 
  />;
};
