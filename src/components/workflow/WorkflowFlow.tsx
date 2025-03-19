
import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap,
  Panel,
  EdgeLabelRenderer
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface WorkflowFlowProps {
  nodes: any[];
  edges: any[];
  onNodesChange: any;
  onEdgesChange: any;
  onConnect: any;
  onDrop: any;
  onDragOver: any;
  onNodeDragStart: any;
  nodeTypes: Record<string, React.ComponentType<any>>;
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
    style: { strokeWidth: 2 },
    labelBgStyle: { fill: 'white', fillOpacity: 0.8 },
    labelStyle: { fill: '#333', fontSize: 12 }
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
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
        fitView
        className="bg-gray-50"
      >
        <Background color="#f0f0f0" gap={16} />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.data.type === 'datasource') return '#fffaed';
            if (node.data.type === 'model') return '#fff0f8';
            if (node.data.type === 'agent') return '#f0f0ff';
            if (node.type === 'input') return '#e6f0ff';
            if (node.type === 'output') return '#f5f5f5';
            return '#ffffff';
          }}
          zoomable 
          pannable
        />
        <Panel position="top-left">
          <div className="bg-white p-3 rounded shadow-sm text-xs">
            <span className="text-monnai-blue font-medium">Monnai</span> Bank Statement Analysis Journey
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default WorkflowFlow;
