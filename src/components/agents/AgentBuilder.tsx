
import React, { useState, useCallback } from 'react';
import { useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Brain, Database, MessageSquare, GitBranch, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import WorkflowFlow from '../workflow/WorkflowFlow';
import DraggableItem from '../workflow/DraggableItem';
import { NodeData } from '../workflow/types';

interface AgentBuilderProps {
  agentType: string;
  onSave: (config: any) => void;
}

const AgentBuilder: React.FC<AgentBuilderProps> = ({ agentType, onSave }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
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

      // Create a properly typed NodeData object
      const data: NodeData = {
        label: `New ${type}`,
        type,
        description: '',
        icon: undefined,
      };

      // Customize node appearance based on type
      switch (type) {
        case 'rule':
          data.icon = <GitBranch className="text-monnai-blue" size={20} />;
          data.description = 'Decision rule';
          break;
        case 'model':
          data.icon = <Brain className="text-monnai-pink" size={20} />;
          data.description = 'AI/ML model';
          break;
        case 'data':
          data.icon = <Database className="text-monnai-yellow" size={20} />;
          data.description = 'Data source';
          break;
        case 'notification':
          data.icon = <MessageSquare className="text-green-500" size={20} />;
          data.description = 'Notification action';
          break;
        case 'alert':
          data.icon = <AlertCircle className="text-red-500" size={20} />;
          data.description = 'Alert trigger';
          break;
      }

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: 'default',
        position,
        data,
        style: {
          padding: '10px',
          borderWidth: '1px',
          borderRadius: '8px'
        }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Agent Visual Builder</h3>
        <Button onClick={() => onSave({ nodes, edges })}>Save Configuration</Button>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-48">
          <div className="text-sm font-medium mb-2">Components</div>
          <DraggableItem
            type="rule"
            icon={<GitBranch className="text-monnai-blue" size={16} />}
            label="Decision Rule"
          />
          <DraggableItem
            type="model"
            icon={<Brain className="text-monnai-pink" size={16} />}
            label="AI Model"
          />
          <DraggableItem
            type="data"
            icon={<Database className="text-monnai-yellow" size={16} />}
            label="Data Source"
          />
          <DraggableItem
            type="notification"
            icon={<MessageSquare className="text-green-500" size={16} />}
            label="Notification"
          />
          <DraggableItem
            type="alert"
            icon={<AlertCircle className="text-red-500" size={16} />}
            label="Alert"
          />
        </div>

        <div className="flex-1 border rounded-lg bg-gray-50">
          <WorkflowFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={{}}
            onNodeDragStart={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;
