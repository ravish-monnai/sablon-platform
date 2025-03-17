
import React, { useState, useCallback } from 'react';
import { 
  useNodesState, 
  useEdgesState, 
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Database, Brain, Users } from 'lucide-react';
import WorkflowPreview from './WorkflowPreview';
import WorkflowToolbar from './WorkflowToolbar';
import WorkflowFlow from './WorkflowFlow';
import { initialNodes, initialEdges } from './initialWorkflowData';
import { NodeData } from './types';

// Custom Node Types
const nodeTypes = {};

const WorkflowEditor: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow/type');
      
      if (!type) return;

      const position = {
        x: event.clientX - event.target.getBoundingClientRect().left,
        y: event.clientY - event.target.getBoundingClientRect().top,
      };

      // Create a description based on the node type
      let description = '';
      let icon;
      
      switch (type) {
        case 'datasource':
          description = 'External data source for verification';
          icon = <Database className="text-monnai-yellow" size={20} />;
          break;
        case 'model':
          description = 'AI/ML model for analysis';
          icon = <Brain className="text-monnai-pink" size={20} />;
          break;
        case 'agent':
          description = 'Human agent or team for review';
          icon = <Users className="text-monnai-blue" size={20} />;
          break;
        default:
          description = 'Custom workflow component';
          icon = null;
      }

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: 'default',
        position,
        data: { 
          label: `New ${type}`,
          description,
          icon,
          type
        },
        style: { 
          width: 150,
          backgroundColor: type === 'datasource' 
            ? '#fffaed' 
            : type === 'model' 
              ? '#fff0f8' 
              : '#f0f0ff',
          padding: '10px',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const onNodeDragStart = (_, node) => {
    // Handle node drag start if needed
  };

  if (isPreviewMode) {
    return (
      <div className="h-full">
        <WorkflowToolbar
          isPreviewMode={isPreviewMode}
          togglePreviewMode={togglePreviewMode}
        />
        <WorkflowPreview nodes={nodes} edges={edges} />
      </div>
    );
  }

  return (
    <div className="h-full">
      <WorkflowToolbar
        isPreviewMode={isPreviewMode}
        togglePreviewMode={togglePreviewMode}
      />
      <WorkflowFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeDragStart={onNodeDragStart}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default WorkflowEditor;
