
import React from 'react';
import { List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowToolbar from './WorkflowToolbar';
import WorkflowFlow from './WorkflowFlow';
import WorkflowPreview from './WorkflowPreview';

interface JourneyEditorProps {
  activeJourney: string;
  journeyName: string;
  journeyDescription: string;
  nodes: any[];
  edges: any[];
  isPreviewMode: boolean;
  onNodesChange: any;
  onEdgesChange: any;
  onConnect: any;
  onDrop: any;
  onDragOver: any;
  onNodeDragStart: any;
  togglePreviewMode: () => void;
  onBackToList: () => void;
  nodeTypes: Record<string, React.ComponentType<any>>;
}

const JourneyEditor: React.FC<JourneyEditorProps> = ({
  activeJourney,
  journeyName,
  journeyDescription,
  nodes,
  edges,
  isPreviewMode,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onDrop,
  onDragOver,
  onNodeDragStart,
  togglePreviewMode,
  onBackToList,
  nodeTypes
}) => {
  if (isPreviewMode) {
    return (
      <div className="h-full">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0" 
          onClick={onBackToList}
        >
          <List className="mr-1 h-4 w-4" />
          Back to Journeys
        </Button>
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
      <Button 
        variant="ghost" 
        className="mb-4 pl-0" 
        onClick={onBackToList}
      >
        <List className="mr-1 h-4 w-4" />
        Back to Journeys
      </Button>
      <div className="flex justify-between mb-2">
        <WorkflowToolbar
          isPreviewMode={isPreviewMode}
          togglePreviewMode={togglePreviewMode}
        />
      </div>
      <div className="border rounded-md p-4 bg-gray-50 mb-4">
        <h3 className="text-lg font-semibold mb-2">
          {journeyName}
        </h3>
        <p className="text-muted-foreground mb-4">
          {journeyDescription}
        </p>
      </div>
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

export default JourneyEditor;
