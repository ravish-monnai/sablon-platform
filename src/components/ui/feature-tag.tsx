
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FeatureTagVariant = 'new' | 'beta' | 'updated' | 'ai' | 'premium';

interface FeatureTagProps {
  variant?: FeatureTagVariant;
  className?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<FeatureTagVariant, { bg: string; text: string }> = {
  new: { bg: 'bg-green-100', text: 'text-green-800' },
  beta: { bg: 'bg-purple-100', text: 'text-purple-800' },
  updated: { bg: 'bg-blue-100', text: 'text-blue-800' },
  ai: { bg: 'bg-amber-100', text: 'text-amber-800' },
  premium: { bg: 'bg-indigo-100', text: 'text-indigo-800' },
};

export const FeatureTag: React.FC<FeatureTagProps> = ({ 
  variant = 'new',
  className,
  children
}) => {
  const { bg, text } = variantStyles[variant];
  
  return (
    <Badge 
      variant="outline" 
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        bg,
        text,
        'border-transparent',
        'animate-pulse',
        className
      )}
    >
      <Tag size={12} className="opacity-70" />
      {children || variant.charAt(0).toUpperCase() + variant.slice(1)}
    </Badge>
  );
};

export default FeatureTag;
