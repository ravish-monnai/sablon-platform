import React from 'react';
import { NodeData } from '../../types';

interface NodeBackgroundProps {
  data: NodeData;
  selected: boolean;
}

// Instead of returning an object, we'll make this a hook that returns style values
export const useNodeBackground = ({ data, selected }: NodeBackgroundProps): { backgroundColor: string, borderColor: string } => {
  // Determine background color based on type or explicit color
  const getBgColor = () => {
    if (data.color) return data.color;
    
    switch (data.type) {
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
    if (data.status === 'error') return 'border-red-500';
    if (data.status === 'warning') return 'border-yellow-500';
    if (data.status === 'success') return 'border-green-500';
    return 'border-gray-200';
  };

  return { backgroundColor: getBgColor(), borderColor: getBorderColor() };
};

// We'll keep the component for compatibility but it's just a wrapper around the hook
const NodeBackground: React.FC<NodeBackgroundProps> = (props) => {
  // The component doesn't actually render anything visible
  // It's just a helper to compute styles
  const styles = useNodeBackground(props);
  return null;
};

export default NodeBackground;
