
import React, { useCallback, useState } from 'react';
import { useJourneyState } from './hooks/useJourneyState';
import { useWorkflowDragDrop } from './hooks/useWorkflowDragDrop';
import JourneyList from './JourneyList';
import JourneyEditor from './JourneyEditor';
import CustomNode from './nodes/CustomNode';
import JourneyAgentAssistant from './JourneyAgentAssistant';

// Custom Node Types
const nodeTypes = {
  default: CustomNode
};

const WorkflowEditor: React.FC = () => {
  const { 
    nodes, 
    edges, 
    onNodesChange, 
    onEdgesChange, 
    isPreviewMode, 
    activeJourney, 
    showJourneyList,
    configuredJourneys,
    journeyName,
    journeyDescription,
    onConnect,
    togglePreviewMode,
    handleCreateNewJourney,
    handleEditJourney,
    handleBackToList,
    handleUpdateNode,
    saveJourney,
    setNodes,
    setEdges
  } = useJourneyState();

  // State for the node configuration dialog
  const [configNode, setConfigNode] = useState<any>(null);
  const [isConfigDialogOpen, setIsConfigDialogOpen] = useState(false);
  
  // Function to open the node configuration dialog
  const openNodeConfig = useCallback((node: any) => {
    setConfigNode(node);
    setIsConfigDialogOpen(true);
  }, []);
  
  const closeNodeConfig = useCallback(() => {
    setConfigNode(null);
    setIsConfigDialogOpen(false);
  }, []);

  const { onDragOver, onDrop, onNodeDragStart } = useWorkflowDragDrop(setNodes, openNodeConfig);

  // Handler for creating a journey template from the assistant
  const handleCreateTemplate = (templateType: string, description: string) => {
    if (showJourneyList) {
      handleCreateNewJourney();
    }
    
    // In a real implementation, this would generate a specific template
    // based on the templateType. For now, we'll just create a new journey.
    console.log(`Creating ${templateType} template: ${description}`);
  };

  // Show either the journey list or the editor
  if (showJourneyList) {
    return (
      <>
        <JourneyList 
          journeys={configuredJourneys}
          onCreateNewJourney={handleCreateNewJourney}
          onEditJourney={handleEditJourney}
        />
        <JourneyAgentAssistant type="journey" onCreateTemplate={handleCreateTemplate} />
      </>
    );
  }

  // Show the editor
  return (
    <>
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
        onSaveJourney={saveJourney}
        nodeTypes={nodeTypes}
        onUpdateNode={handleUpdateNode}
        configNode={configNode}
        isConfigDialogOpen={isConfigDialogOpen}
        openNodeConfig={openNodeConfig}
        closeNodeConfig={closeNodeConfig}
      />
      <JourneyAgentAssistant type="journey" onCreateTemplate={handleCreateTemplate} />
    </>
  );
};

export default WorkflowEditor;
