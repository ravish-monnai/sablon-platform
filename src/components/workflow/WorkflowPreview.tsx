
import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface WorkflowPreviewProps {
  nodes: any[];
  edges: any[];
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
