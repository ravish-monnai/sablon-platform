
import React from 'react';
import { NodeProps } from '@xyflow/react';
import { NodeData } from '../types';
import { getNodeColorByType, getStatusBorder } from '../utils/nodeStyles';

const CustomNode = ({ data, id, selected }: NodeProps) => {
  // Type assertion to ensure TypeScript understands this is NodeData
  const nodeData = data as NodeData;
  
  // Use the same styling as in the journey steps tab
  const backgroundColor = nodeData.color || getNodeColorByType(nodeData.type);
  const statusBorder = getStatusBorder(nodeData.status);
  
  return (
    <div 
      className={`flex flex-col items-center rounded-md shadow-md p-3 ${statusBorder} transition-all duration-200`}
      style={{ 
        backgroundColor: backgroundColor,
        borderWidth: '2px',
        minWidth: '130px',
        minHeight: '90px',
        transform: selected ? 'scale(1.05)' : 'scale(1)'
      }}
    >
      {nodeData.icon && (
        <div className="rounded-full bg-white p-2 mb-2 shadow-sm">
          {nodeData.icon}
        </div>
      )}
      <div className="text-sm font-medium text-white">{nodeData.label}</div>
      {nodeData.description && (
        <div className="text-xs text-white opacity-80 mt-1 text-center line-clamp-2">{nodeData.description}</div>
      )}
      
      {/* Node identifier badge */}
      <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 shadow-sm">
        <span className="text-xs font-bold">{id && typeof id === 'string' ? id.split('-')[1] || '1' : '1'}</span>
      </div>
    </div>
  );
};

export default CustomNode;
