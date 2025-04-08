
import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeBackground } from './components';
import { NodeHeader } from './components';
import { NodeDetails } from './components';
import { renderIcon } from '../utils/iconResolver';
import { NodeProps } from '@xyflow/react';
import { NodeData } from '../types';

// Node component that renders a custom node with icon, label, and description
const CustomNode = memo(({ id, data, selected }: NodeProps) => {
  // Ensure data is not undefined and properly cast to NodeData with defaults
  const nodeData: NodeData = data as NodeData || {
    label: 'Untitled',
    type: 'process',
    description: '',
    iconConfig: undefined,
    status: undefined,
    featureTag: undefined
  };
  
  // Destructure the node data
  const { 
    label = 'Untitled', 
    description = '', 
    type = 'process', 
    iconConfig,
    status,
    featureTag
  } = nodeData;
  
  // Render the icon using our utility
  const renderedIcon = renderIcon(iconConfig);

  return (
    <div className="relative">
      <NodeBackground 
        type={type} 
        selected={!!selected} 
        status={status}
      >
        <NodeHeader 
          icon={renderedIcon} 
          type={type} 
          featureTag={featureTag}
          data={nodeData}
        />
        <NodeDetails 
          label={label} 
          description={description} 
          data={nodeData}
        />
      </NodeBackground>
      
      <Handle 
        type="target" 
        position={Position.Left} 
        className="w-2 h-2 rounded-full bg-blue-500 border-2 border-white" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-2 h-2 rounded-full bg-blue-500 border-2 border-white" 
      />
    </div>
  );
});

CustomNode.displayName = 'CustomNode';

export default CustomNode;
