
import React from 'react';
import { ReactFlow, Background, Controls, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define the expected shape of node data with index signature
interface NodeData {
  label: string;
  description: string;
  icon?: React.ReactNode;
  type?: string;
  [key: string]: unknown; // Add index signature to satisfy Record<string, unknown>
}

// Custom Node component to display the icon in preview mode
const PreviewNode = ({ data }: { data: NodeData }) => (
  <div className="flex flex-col items-center p-2">
    {data.icon && (
      <div className="mb-2">
        {data.icon}
      </div>
    )}
    <div className="text-sm font-medium">{data.label}</div>
    {data.description && (
      <div className="text-xs text-muted-foreground mt-1">{data.description}</div>
    )}
  </div>
);

interface WorkflowPreviewProps {
  nodes: Array<Node<NodeData>>;
  edges: Array<Edge>;
}

const WorkflowPreview: React.FC<WorkflowPreviewProps> = ({ nodes, edges }) => {
  // Define node types for preview mode
  const nodeTypes = {
    default: PreviewNode
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
        className="bg-gray-50"
      >
        <Controls showInteractive={false} />
        <Background color="#f0f0f0" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowPreview;
