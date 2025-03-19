
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
  Edge,
  NodeProps
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData, WorkflowNode } from './types';

// Custom Node component to display the icon
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

// Helper functions for node styling - update to match journey-steps/utils.ts
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

// Match the status border styling from journey steps
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
    labelStyle: { fill: '#333', fontSize: 12 },
    animated: true
  };

  // Define nodeTypes properly matching ReactFlow expectations
  const combinedNodeTypes = {
    ...nodeTypes,
    default: CustomNode
  } as NodeTypes;

  return (
    <div className="h-[450px] border rounded-md overflow-hidden">
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
        snapToGrid
        snapGrid={[15, 15]}
        minZoom={0.5}
        maxZoom={1.5}
        className="bg-gray-50"
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls position="bottom-right" showInteractive={false} />
        <MiniMap 
          nodeColor={(node) => {
            const nodeData = node.data as NodeData;
            if (nodeData.type === 'datasource' || nodeData.type === 'data') return '#ffcc1d';
            if (nodeData.type === 'model') return '#e879f9';
            if (nodeData.type === 'agent') return '#8b5cf6';
            if (nodeData.type === 'rule') return '#3b82f6';
            if (nodeData.type === 'notification') return '#22c55e';
            if (nodeData.type === 'alert') return '#ef4444';
            return '#2bbfe0';
          }}
          zoomable 
          pannable
        />
        <Panel position="top-left">
          <div className="bg-white p-3 rounded shadow-sm text-xs">
            <div className="flex items-center">
              <span className="text-blue-600 font-medium mr-1">Monnai</span> 
              <span>Journey Builder</span>
            </div>
            <p className="text-gray-500 text-[10px] mt-1">Drag and drop nodes to create journey</p>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default WorkflowFlow;
