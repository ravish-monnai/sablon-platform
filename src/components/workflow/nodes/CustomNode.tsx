
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { NodeData } from '../types';
import NodeHeader from './components/NodeHeader';
import NodeDetails from './components/NodeDetails';
import { useNodeBackground } from './components/NodeBackground';

interface CustomNodeProps {
  id: string;
  data: NodeData;
  selected: boolean;
  isConnectable: boolean;
}

const CustomNode: React.FC<CustomNodeProps> = ({ id, data, selected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if this node has any expandable content
  const hasExpandableContent = Boolean(
    data.apiSpecs || 
    data.featureExtraction || 
    data.riskAssessment || 
    data.caseConfiguration || 
    (data.rules && data.rules.length > 0)
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Get styling from useNodeBackground hook
  const { backgroundColor, borderColor } = useNodeBackground({ data, selected });

  return (
    <div 
      className={`p-3 rounded-lg shadow-md border ${borderColor} max-w-xs transition-all duration-200`}
      style={{ backgroundColor }}
    >
      {/* Input handle on the left */}
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={true}
        className="w-3 h-3 bg-gray-400 border-2 border-white"
      />
      
      {/* Output handle on the right */}
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={true}
        className="w-3 h-3 bg-gray-400 border-2 border-white"
      />
      
      {/* Node header with labels and toggle */}
      <NodeHeader 
        data={data}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
        hasExpandableContent={hasExpandableContent}
      />
      
      {/* Expandable section with details */}
      {isExpanded && (
        <div className="mt-2 border-t pt-2 border-gray-200">
          <NodeDetails data={data} />
        </div>
      )}
    </div>
  );
};

export default CustomNode;
