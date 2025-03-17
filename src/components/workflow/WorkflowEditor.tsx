
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
import { Eye, Edit2, Database, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowPreview from './WorkflowPreview';

// Define the node data type to ensure consistency
interface NodeData {
  label: string;
  description: string;
  icon?: React.ReactNode;
  type?: string;
}

// Custom Node Types
const nodeTypes = {};

// Initial nodes for the fraud detection workflow
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: 'Customer Data Collection',
      description: 'Collect phone, email, IP address',
      icon: <Database className="text-monnai-blue" size={20} />
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
      description: 'Calculate risk score',
      icon: <Brain className="text-monnai-pink" size={20} />
    },
    position: { x: 250, y: 100 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '3',
    data: { 
      label: 'Decision Engine',
      description: 'Auto-approve, auto-reject, or route to review',
      icon: <Brain className="text-monnai-blue" size={20} />
    },
    position: { x: 250, y: 200 },
    style: { width: 200, padding: '10px' }
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: 'AI-Assisted Review',
      description: 'Manual review by fraud agents',
      icon: <Users className="text-monnai-yellow" size={20} />
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
      description: 'Email verification data source',
      icon: <Database className="text-monnai-yellow" size={20} />,
      type: 'datasource'
    },
    position: { x: 0, y: 50 },
    style: { width: 150, backgroundColor: '#fffaed', padding: '10px' }
  },
  {
    id: 'model-1',
    data: { 
      label: 'Fraud Detection Model v2.4',
      description: 'Machine learning model for fraud detection',
      icon: <Brain className="text-monnai-pink" size={20} />,
      type: 'model'
    },
    position: { x: 0, y: 150 },
    style: { width: 150, backgroundColor: '#fff0f8', padding: '10px' }
  },
  {
    id: 'agent-1',
    data: { 
      label: 'Fraud Risk Agent Team',
      description: 'Human agents for manual review',
      icon: <Users className="text-monnai-blue" size={20} />,
      type: 'agent'
    },
    position: { x: 0, y: 250 },
    style: { width: 150, backgroundColor: '#f0f0ff', padding: '10px' }
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
            className="border rounded-md p-2 bg-blue-50 cursor-grab flex items-center"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'datasource');
            }}
          >
            <Database className="text-monnai-yellow mr-2" size={16} />
            <span>Data Source</span>
          </div>
          <div 
            className="border rounded-md p-2 bg-purple-50 cursor-grab flex items-center"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'model');
            }}
          >
            <Brain className="text-monnai-pink mr-2" size={16} />
            <span>Model</span>
          </div>
          <div 
            className="border rounded-md p-2 bg-red-50 cursor-grab flex items-center"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow/type', 'agent');
            }}
          >
            <Users className="text-monnai-blue mr-2" size={16} />
            <span>Agent</span>
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
          nodeTypes={nodeTypes}
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
              <span className="text-monnai-blue font-medium">Monnai</span> Fraud Detection Workflow
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
};

export default WorkflowEditor;
