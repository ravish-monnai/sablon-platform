
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
import { toast } from "sonner";

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
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      toast.success("Connected nodes successfully");
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // Get the dropped element type
      const type = event.dataTransfer.getData('application/reactflow/type');
      
      if (!type) return;

      // Get position where the element was dropped
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      // Get any additional data that was passed with the dragged item
      let additionalData = {};
      try {
        const dataString = event.dataTransfer.getData('application/reactflow/data');
        if (dataString) {
          additionalData = JSON.parse(dataString);
        }
      } catch (error) {
        console.error('Error parsing additional data:', error);
      }

      // Generate a unique node ID
      const newNodeId = `${type}-${Date.now()}`;

      // Create the new node
      const newNode = {
        id: newNodeId,
        type: 'default',
        position,
        data: {
          label: getDefaultLabelForType(type),
          type,
          icon: getDefaultIconForType(type),
          description: getDefaultDescriptionForType(type),
          ...additionalData,
        },
      };

      // Add the new node to the canvas
      setNodes((nds) => nds.concat(newNode));
      
      // Show success toast
      toast.success(`Added ${type} node to the journey`);
    },
    [setNodes]
  );

  // Helper functions to get default values based on node type
  const getDefaultLabelForType = (type) => {
    switch (type) {
      case 'datasource':
        return 'Data Source';
      case 'model':
        return 'ML Model';
      case 'rule':
        return 'Decision Rule';
      case 'notification':
        return 'Notification';
      case 'alert':
        return 'Alert';
      case 'agent':
        return 'Agent';
      default:
        return 'New Node';
    }
  };

  const getDefaultDescriptionForType = (type) => {
    switch (type) {
      case 'datasource':
        return 'Source of data for the journey';
      case 'model':
        return 'Machine learning model';
      case 'rule':
        return 'Decision rule logic';
      case 'notification':
        return 'Send notification to user';
      case 'alert':
        return 'Generate alert for review';
      case 'agent':
        return 'Human or AI agent';
      default:
        return 'Description';
    }
  };

  const getDefaultIconForType = (type) => {
    // This will be handled by the CustomNode component
    return null;
  };

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
      toast.info(`Loaded journey: ${journeyConfig.name}`);
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
