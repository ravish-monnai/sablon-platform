
import React from 'react';
import { NodeData } from '../../types';

interface NodeBackgroundProps {
  children?: React.ReactNode;
  type?: string;
  selected?: boolean;
  status?: string;
}

// Export as a standalone component
const NodeBackground: React.FC<NodeBackgroundProps> = ({ 
  children, 
  type = 'process', 
  selected = false, 
  status 
}) => {
  // Determine background color based on type
  const getBgColor = () => {
    switch (type) {
      case 'datasource':
        return 'bg-yellow-50';
      case 'model':
        return 'bg-purple-50';
      case 'rule':
        return 'bg-blue-50';
      case 'notification':
        return 'bg-green-50';
      case 'agent':
        return 'bg-indigo-50';
      case 'alert':
        return 'bg-red-50';
      case 'decision':
        return 'bg-emerald-50';
      default:
        return 'bg-slate-50';
    }
  };

  // Determine border color based on selection and status
  const getBorderColor = () => {
    if (selected) return 'border-blue-500';
    if (status === 'error') return 'border-red-500';
    if (status === 'warning') return 'border-yellow-500';
    if (status === 'success') return 'border-green-500';
    return 'border-gray-200';
  };

  return (
    <div className={`p-3 rounded-md border-2 ${getBgColor()} ${getBorderColor()} transition-colors`}>
      {children}
    </div>
  );
};

// Return utility style hook for other components
export const useNodeBackground = ({ 
  type = 'process', 
  selected = false, 
  status 
}: { 
  type?: string, 
  selected?: boolean, 
  status?: string 
}): { 
  backgroundColor: string, 
  borderColor: string 
} => {
  // Same logic as the component but returns style values
  const getBgColor = () => {
    switch (type) {
      case 'datasource':
        return '#FEF9C3'; // Yellow
      case 'model':
        return '#F3E8FF'; // Purple
      case 'rule':
        return '#DBEAFE'; // Blue
      case 'notification':
        return '#DCFCE7'; // Green
      case 'agent':
        return '#E0E7FF'; // Indigo
      case 'alert':
        return '#FEE2E2'; // Red
      default:
        return '#F1F5F9'; // Default slate
    }
  };

  // Determine border color based on selection and status
  const getBorderColor = () => {
    if (selected) return 'border-blue-500';
    if (status === 'error') return 'border-red-500';
    if (status === 'warning') return 'border-yellow-500';
    if (status === 'success') return 'border-green-500';
    return 'border-gray-200';
  };

  return { backgroundColor: getBgColor(), borderColor: getBorderColor() };
};

export default NodeBackground;
