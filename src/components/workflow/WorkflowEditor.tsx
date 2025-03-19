
import React, { useState, useCallback } from 'react';
import { 
  useNodesState, 
  useEdgesState, 
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useMarket } from '@/contexts/MarketContext';
import { journeyWorkflowConfigurations } from '../ai-journeys/data';
import JourneyList from './JourneyList';
import JourneyEditor from './JourneyEditor';

// Custom Node Types
const nodeTypes = {};

const WorkflowEditor: React.FC = () => {
  const { selectedMarket } = useMarket();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [activeJourney, setActiveJourney] = useState<string | null>(null);
  const [showJourneyList, setShowJourneyList] = useState(true);

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

  // Determine journey name and description
  const journeyName = activeJourney && journeyWorkflowConfigurations[activeJourney] 
    ? journeyWorkflowConfigurations[activeJourney].name 
    : "New Journey";
    
  const journeyDescription = activeJourney && journeyWorkflowConfigurations[activeJourney] 
    ? journeyWorkflowConfigurations[activeJourney].description 
    : "Configure your new journey";

  // Show either the journey list or the editor
  if (showJourneyList) {
    return (
      <JourneyList 
        journeys={configuredJourneys}
        onCreateNewJourney={handleCreateNewJourney}
        onEditJourney={handleEditJourney}
      />
    );
  }

  // Show the editor
  return (
    <JourneyEditor
      activeJourney={activeJourney || ""}
      journeyName={journeyName}
      journeyDescription={journeyDescription}
      nodes={nodes}
      edges={edges}
      isPreviewMode={isPreviewMode}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onNodeDragStart={onNodeDragStart}
      togglePreviewMode={togglePreviewMode}
      onBackToList={handleBackToList}
      nodeTypes={nodeTypes}
    />
  );
};

export default WorkflowEditor;
