
import React from 'react';
import { ReactFlow, Background, Controls, Node, Edge, NodeProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData } from './types';
import { getNodeColorByType, getStatusBorder, getEdgeOptions } from './utils/nodeStyles';
import { renderIcon } from './utils/iconResolver';

// Custom Node component to display the icon in preview mode
const PreviewNode = ({ data, id }: NodeProps) => {
  // Type assertion for the data prop
  const nodeData = data as NodeData;
  
  // Default color if not specified
  const backgroundColor = nodeData.color || getNodeColorByType(nodeData.type);
  const statusBorder = getStatusBorder(nodeData.status);
  
  // Render the icon using our utility
  const renderedIcon = renderIcon(nodeData.iconConfig);
  
  return (
    <div 
      className={`flex flex-col items-center rounded-md shadow-md p-3 ${statusBorder}`}
      style={{ 
        backgroundColor: backgroundColor,
        borderWidth: '2px',
        minWidth: '130px',
        minHeight: '90px'
      }}
    >
      {renderedIcon && (
        <div className="rounded-full bg-white p-2 mb-2 shadow-sm">
          {renderedIcon}
        </div>
      )}
      <div className="text-sm font-medium text-white">{nodeData.label}</div>
      {nodeData.description && (
        <div className="text-xs text-white opacity-80 mt-1 text-center">{nodeData.description}</div>
      )}
      
      {/* Node identifier badge */}
      <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 shadow-sm">
        <span className="text-xs font-bold">{id && typeof id === 'string' ? id.split('-')[1] || '1' : '1'}</span>
      </div>
    </div>
  );
};

interface WorkflowPreviewProps {
  nodes: Array<Node>;
  edges: Array<Edge>;
}

const WorkflowPreview: React.FC<WorkflowPreviewProps> = ({ nodes, edges }) => {
  // Define node types for preview mode, properly typed for ReactFlow
  const nodeTypes = {
    default: PreviewNode
  } as const;

  // Custom edge with labels
  const edgeOptions = getEdgeOptions();

  return (
    <div className="h-[400px] border rounded-md overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        className="bg-gray-50"
      >
        <Controls showInteractive={false} />
        <Background color="#f0f0f0" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowPreview;
