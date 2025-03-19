
import React from 'react';
import { ReactFlow, Background, Controls, Node, Edge, NodeProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData } from './types';

// Helper functions for node styling
const getNodeColorByType = (type: string): string => {
  switch(type) {
    case 'rule':
      return '#3b82f6'; // blue
    case 'model':
      return '#e879f9'; // pink
    case 'data':
    case 'datasource':
      return '#ffcc1d'; // yellow - updated to match journey color
    case 'notification':
      return '#22c55e'; // green
    case 'alert':
      return '#ef4444'; // red
    case 'agent':
      return '#8b5cf6'; // purple
    default:
      return '#2bbfe0'; // default blue from journey steps
  }
};

const getStatusBorder = (status?: string): string => {
  switch(status) {
    case 'completed':
      return 'border-green-400';
    case 'active':
      return 'border-blue-400';
    case 'error':
      return 'border-red-400';
    default:
      return 'border-transparent';
  }
};

// Custom Node component to display the icon in preview mode
const PreviewNode = ({ data, id }: NodeProps<NodeData>) => {
  // Default color if not specified
  const backgroundColor = data.color || getNodeColorByType(data.type);
  const statusBorder = getStatusBorder(data.status);
  
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
      {data.icon && (
        <div className="rounded-full bg-white p-2 mb-2 shadow-sm">
          {data.icon}
        </div>
      )}
      <div className="text-sm font-medium text-white">{data.label}</div>
      {data.description && (
        <div className="text-xs text-white opacity-80 mt-1 text-center">{data.description}</div>
      )}
      
      {/* Node identifier badge */}
      <div className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-gray-200 shadow-sm">
        <span className="text-xs font-bold">{id.split('-')[1] || '1'}</span>
      </div>
    </div>
  );
};

interface WorkflowPreviewProps {
  nodes: Array<Node<NodeData>>;
  edges: Array<Edge>;
}

const WorkflowPreview: React.FC<WorkflowPreviewProps> = ({ nodes, edges }) => {
  // Define node types for preview mode
  const nodeTypes = {
    default: PreviewNode
  };

  // Custom edge with labels
  const edgeOptions = {
    style: { strokeWidth: 2, stroke: '#94a3b8' },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 },
    labelStyle: { fill: '#333', fontSize: 12 }
  };

  return (
    <div className="h-[400px] border rounded-md overflow-hidden">
      <ReactFlow
        nodes={nodes as Node[]}
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
