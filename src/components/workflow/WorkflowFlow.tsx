
import React, { useCallback, useState, useRef } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap,
  Panel,
  Node,
  NodeTypes,
  Edge,
  ConnectionLineType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData } from './types';
import { toast } from "sonner";
import CustomNode from './nodes/CustomNode';
import { getEdgeOptions, getMinimapNodeColor } from './utils/nodeStyles';

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
  onUpdateNode: (nodeId: string, data: NodeData) => void;
  onNodeClick?: (node: Node) => void;
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
  nodeTypes,
  onUpdateNode,
  onNodeClick
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const edgeOptions = getEdgeOptions();

  const combinedNodeTypes = {
    ...nodeTypes,
    default: CustomNode
  } as NodeTypes;

  // Explicitly handle drag over to show visual feedback
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setIsDraggingOver(true);
    if (onDragOver) onDragOver(event);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  // Handle drop with visual feedback
  const handleDrop = (event: React.DragEvent) => {
    setIsDraggingOver(false);
    if (onDrop) onDrop(event);
  };

  // Pass the clicked node to the parent component
  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    console.log("Node clicked:", node);
    if (onNodeClick) {
      onNodeClick(node);
    }
  }, [onNodeClick]);

  return (
    <div 
      className={`h-[450px] border rounded-md overflow-hidden transition-colors duration-200 ${
        isDraggingOver ? 'bg-blue-50 border-blue-300 shadow-inner' : 'bg-white'
      }`}
      ref={reactFlowWrapper}
    >
      {isDraggingOver && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-white/90 py-2 px-4 rounded-md shadow-md">
            <span className="text-blue-600 font-medium">Drop to add node</span>
          </div>
        </div>
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onNodeDragStart={onNodeDragStart}
        onNodeClick={handleNodeClick}
        nodeTypes={combinedNodeTypes}
        defaultEdgeOptions={edgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
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
          nodeColor={getMinimapNodeColor}
          zoomable 
          pannable
        />
        <Panel position="top-left">
          <div className="bg-white p-3 rounded shadow-sm text-xs">
            <div className="flex items-center">
              <span className="text-blue-600 font-medium mr-1">Monnai</span> 
              <span>Journey Builder</span>
            </div>
            <p className="text-gray-500 text-[10px] mt-1">
              Drag items from toolbar & drop here. Click on nodes to configure.
            </p>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default WorkflowFlow;
