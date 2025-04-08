
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NodeData } from '../../types';
import FeatureTag from '@/components/ui/feature-tag';

interface NodeHeaderProps {
  icon?: React.ReactNode;
  type?: string;
  featureTag?: 'new' | 'beta' | 'updated' | 'ai' | 'premium';
  isExpanded?: boolean;
  toggleExpand?: () => void;
  hasExpandableContent?: boolean;
  data?: NodeData;
}

const NodeHeader: React.FC<NodeHeaderProps> = ({ 
  icon, 
  type, 
  featureTag,
  isExpanded, 
  toggleExpand,
  hasExpandableContent,
  data
}) => {
  return (
    <div className="flex items-center">
      {icon && <div className="mr-2">{icon}</div>}
      <div className="flex-1">
        <div className="font-medium text-gray-800 text-sm flex items-center gap-1.5">
          {data?.label || ''}
          {featureTag && (
            <FeatureTag variant={featureTag} />
          )}
        </div>
        <div className="text-xs text-gray-600">{data?.description || ''}</div>
      </div>
      
      {/* Show expand button only if we have additional details */}
      {hasExpandableContent && toggleExpand && (
        <button 
          className="ml-1 text-gray-500 hover:text-gray-700"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>
      )}
    </div>
  );
};

export default NodeHeader;
