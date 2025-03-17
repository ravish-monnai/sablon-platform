
import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define the expected shape of node data
interface NodeData {
  label: string;
  description: string;
  icon?: string;
  type?: string;
}

interface WorkflowPreviewProps {
  nodes: Array<{
    id: string;
    type?: string;
    data: NodeData;
    position: { x: number; y: number };
    style?: React.CSSProperties;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
    animated?: boolean;
    style?: React.CSSProperties;
  }>;
}

const WorkflowPreview: React.FC<WorkflowPreviewProps> = ({ nodes, edges }) => {
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
        style={{ backgroundColor: '#f9fafb' }}
      >
        <Controls showInteractive={false} />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default WorkflowPreview;
