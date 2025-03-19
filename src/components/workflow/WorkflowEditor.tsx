
import React, { useState, useCallback } from 'react';
import { 
  useNodesState, 
  useEdgesState, 
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { List, Plus } from 'lucide-react';
import WorkflowPreview from './WorkflowPreview';
import WorkflowToolbar from './WorkflowToolbar';
import WorkflowFlow from './WorkflowFlow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMarket } from '@/contexts/MarketContext';
import { journeyWorkflowConfigurations } from '../ai-journeys/data';

// Custom Node Types
const nodeTypes = {};

const WorkflowEditor: React.FC = () => {
  const { selectedMarket } = useMarket();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [activeJourney, setActiveJourney] = useState<string | null>(null);
  const [showJourneyList, setShowJourneyList] = useState(true);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Convert journeyWorkflowConfigurations to array for display
  const configuredJourneys = Object.entries(journeyWorkflowConfigurations).map(([id, journey]) => ({
    id,
    name: journey.name,
    description: journey.description,
    status: journey.status,
    nodeCount: journey.nodeCount,
    edgeCount: journey.edgeCount,
    lastModified: journey.lastModified
  }));

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
    },
    [setNodes]
  );

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const onNodeDragStart = (_, node) => {
    // Handle node drag start if needed
  };

  const handleCreateNewJourney = () => {
    setShowJourneyList(false);
    setActiveJourney("new-journey");
    setNodes([]);
    setEdges([]);
  };

  const handleEditJourney = (journeyId: string) => {
    setShowJourneyList(false);
    setActiveJourney(journeyId);
    
    // Load the journey configuration if it exists
    const journeyConfig = journeyWorkflowConfigurations[journeyId];
    if (journeyConfig) {
      setNodes(journeyConfig.nodes);
      setEdges(journeyConfig.edges);
    } else {
      setNodes([]);
      setEdges([]);
    }
  };

  const handleBackToList = () => {
    setShowJourneyList(true);
    setActiveJourney(null);
    setIsPreviewMode(false);
  };

  // If showing journey list
  if (showJourneyList) {
    return (
      <div className="h-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Journey Builder</h2>
            <p className="text-muted-foreground">
              {selectedMarket === 'Global' 
                ? 'View and manage AI journey configurations'
                : `View and manage AI journey configurations for ${selectedMarket}`}
            </p>
          </div>
          <Button onClick={handleCreateNewJourney}>
            <Plus className="mr-2 h-4 w-4" /> Create New Journey
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {configuredJourneys.map((journey) => (
            <Card key={journey.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={journey.status === "active" ? "default" : "outline"}>
                    {journey.status === "active" ? "Active" : "Draft"}
                  </Badge>
                </div>
                <CardTitle>{journey.name}</CardTitle>
                <CardDescription>{journey.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Nodes</span>
                    <span className="text-xl font-semibold">{journey.nodeCount}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Connections</span>
                    <span className="text-xl font-semibold">{journey.edgeCount}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <span className="text-xs text-muted-foreground">
                  Last modified: {journey.lastModified}
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEditJourney(journey.id)}
                >
                  View Journey
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // If in workflow editor mode
  if (isPreviewMode) {
    return (
      <div className="h-full">
        <Button 
          variant="ghost" 
          className="mb-4 pl-0" 
          onClick={handleBackToList}
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
        onClick={handleBackToList}
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
          {activeJourney && journeyWorkflowConfigurations[activeJourney] 
            ? journeyWorkflowConfigurations[activeJourney].name 
            : "New Journey"}
        </h3>
        <p className="text-muted-foreground mb-4">
          {activeJourney && journeyWorkflowConfigurations[activeJourney] 
            ? journeyWorkflowConfigurations[activeJourney].description 
            : "Configure your new journey"}
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

export default WorkflowEditor;
