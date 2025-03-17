
import React, { useState, useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState, 
  addEdge,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Eye, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowPreview from './WorkflowPreview';

// Initial nodes for the fraud detection workflow
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: 'Customer Data Collection',
      description: 'Collect phone, email, IP address' 
    },
    position: { x: 250, y: 0 },
    style: { 
      width: 200, 
      padding: '10px',
      borderColor: '#5100ff',
      borderWidth: '2px' 
    }
  },
  {
    id: '2',
    data: { 
      label: 'Fraud Risk Model',
      description: 'Calculate risk score' 
    },
    position: { x: 250, y: 100 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '3',
    data: { 
      label: 'Decision Engine',
      description: 'Auto-approve, auto-reject, or route to review' 
    },
    position: { x: 250, y: 200 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: 'AI-Assisted Review',
      description: 'Manual review by fraud agents' 
    },
    position: { x: 250, y: 300 },
    style: { 
      width: 200, 
      padding: '10px',
      backgroundColor: '#f5f5f5' 
    }
  },
  {
    id: 'datasource-1',
    data: { 
      label: 'Email Database',
      icon: '📧',
      type: 'datasource'
    },
    position: { x: 0, y: 50 },
    style: { backgroundColor: '#e6f7ff', padding: '10px' }
  },
  {
    id: 'model-1',
    data: { 
      label: 'Fraud Detection Model v2.4',
      icon: '🤖',
      type: 'model'
    },
    position: { x: 0, y: 150 },
    style: { backgroundColor: '#f0f0ff', padding: '10px' }
  },
  {
    id: 'agent-1',
    data: { 
      label: 'Fraud Risk Agent Team',
      icon: '👥',
      type: 'agent'
    },
    position: { x: 0, y: 250 },
    style: { backgroundColor: '#fff0f0', padding: '10px' }
  }
];

// Initial edges for the fraud detection workflow
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#5100ff' }
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#5100ff' }
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#5100ff' }
  }
];

const WorkflowEditor = () => {
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

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: 'default',
        position,
        data: { 
          label: `New ${type}`,
          icon: type === 'datasource' ? '📊' : type === 'model' ? '🧠' : '👤',
          type
        },
        style: { 
          backgroundColor: type === 'datasource' 
            ? '#e6f7ff' 
            : type === 'model' 
              ? '#f0f0ff' 
              : '#fff0f0',
          padding: '10px'
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
        <div className="flex justify-end mb-2">
          <Button variant="outline" size="sm" onClick={togglePreviewMode}>
            <Edit2 className="mr-2 h-4 w-4" /> Edit Workflow
          </Button>
        </div>
        <WorkflowPreview nodes={nodes} edges={edges} />
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex justify-between mb-2">
        <div className="flex flex-row space-x-2">
          <div 
            className="border rounded-md p-2 bg-blue-50 cursor-grab"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'datasource');
            }}
          >
            📊 Data Source
          </div>
          <div 
            className="border rounded-md p-2 bg-purple-50 cursor-grab"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'model');
            }}
          >
            🧠 Model
          </div>
          <div 
            className="border rounded-md p-2 bg-red-50 cursor-grab"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'agent');
            }}
          >
            👤 Agent
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={togglePreviewMode}>
          <Eye className="mr-2 h-4 w-4" /> Preview
        </Button>
      </div>
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
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
          <Panel position="top-left">
            <div className="bg-white p-2 rounded shadow-sm text-xs">
              Drag and drop elements to create your workflow
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowEditor;
