
import React, { useCallback, useState } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap,
  Panel,
  Node,
  NodeTypes,
  Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { NodeData } from './types';
import NodeConfigDialog from './NodeConfigDialog';
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
  onUpdateNode
}) => {
  // State for node configuration dialog
  const [configNode, setConfigNode] = useState<Node | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get edge styling options
  const edgeOptions = getEdgeOptions();

  // Define nodeTypes properly matching ReactFlow expectations
  const combinedNodeTypes = {
    ...nodeTypes,
    default: CustomNode
  } as NodeTypes;

  // Handle node double click
  const onNodeDoubleClick = useCallback((event: React.MouseEvent, node: Node) => {
    setConfigNode(node);
    setIsDialogOpen(true);
  }, []);

  // Handle dialog close
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setConfigNode(null);
  };

  // Handle node update
  const handleUpdateNode = (nodeId: string, newData: NodeData) => {
    onUpdateNode(nodeId, newData);
    toast.success("Node configuration updated");
  };

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
        onNodeDoubleClick={onNodeDoubleClick}
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
            <p className="text-gray-500 text-[10px] mt-1">Double-click on nodes to configure</p>
          </div>
        </Panel>
      </ReactFlow>

      {/* Node configuration dialog */}
      <NodeConfigDialog 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        node={configNode}
        onUpdateNode={handleUpdateNode}
      />
    </div>
  );
};

export default WorkflowFlow;
