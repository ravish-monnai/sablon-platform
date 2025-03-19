
import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap,
  Panel,
  EdgeLabelRenderer,
  Node,
  NodeTypes,
  Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData } from './types';

// Custom Node component to display the icon
const CustomNode = ({ data, id, selected }: { data: any; id: string; selected: boolean }) => {
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
        minHeight: '90px',
        transition: 'transform 0.2s ease',
        transform: selected ? 'scale(1.05)' : 'scale(1)'
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

// Helper functions for node styling
const getNodeColorByType = (type: string): string => {
  switch(type) {
    case 'rule':
      return '#3b82f6'; // blue
    case 'model':
      return '#e879f9'; // pink
    case 'data':
    case 'datasource':
      return '#facc15'; // yellow
    case 'notification':
      return '#22c55e'; // green
    case 'alert':
      return '#ef4444'; // red
    case 'agent':
      return '#8b5cf6'; // purple
    default:
      return '#64748b'; // slate
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

interface WorkflowFlowProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: any;
  onEdgesChange: any;
  onConnect: any;
  onDrop: any;
  onDragOver: any;
  onNodeDragStart: any;
  nodeTypes: NodeTypes;
}

const WorkflowFlow: React.FC<WorkflowFlowProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onDrop,
  onDragOver,
  onNodeDragStart,
  nodeTypes
}) => {
  // Custom edge with labels
  const edgeOptions = {
    style: { strokeWidth: 2, stroke: '#94a3b8' },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 },
    labelStyle: { fill: '#333', fontSize: 12 }
  };

  // Combine custom nodeTypes with our default node
  const combinedNodeTypes = {
    ...nodeTypes,
    default: CustomNode
  };

  return (
    <div className="h-[400px] border rounded-md overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeDragStart={onNodeDragStart}
        nodeTypes={combinedNodeTypes}
        defaultEdgeOptions={edgeOptions}
        fitView
        className="bg-gray-50"
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.data.type === 'datasource' || node.data.type === 'data') return '#facc15';
            if (node.data.type === 'model') return '#e879f9';
            if (node.data.type === 'agent') return '#8b5cf6';
            if (node.data.type === 'rule') return '#3b82f6';
            if (node.data.type === 'notification') return '#22c55e';
            if (node.data.type === 'alert') return '#ef4444';
            if (node.type === 'input') return '#3b82f6';
            if (node.type === 'output') return '#f5f5f5';
            return '#64748b';
          }}
          zoomable 
          pannable
        />
        <Panel position="top-left">
          <div className="bg-white p-3 rounded shadow-sm text-xs">
            <span className="text-monnai-blue font-medium">Monnai</span> Journey Builder
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default WorkflowFlow;
