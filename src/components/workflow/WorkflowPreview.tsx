
import React from 'react';
import { ReactFlow, Background, Controls, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define the expected shape of node data
interface NodeData {
  label: string;
  description: string;
  icon?: React.ReactNode;
  type?: string;
}

interface WorkflowPreviewProps {
  nodes: Array<Node<NodeData>>;
  edges: Array<Edge>;
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
        className="bg-gray-50"
      >
        <Controls showInteractive={false} />
        <Background color="#f0f0f0" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowPreview;
