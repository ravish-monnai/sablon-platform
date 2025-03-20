
import React from 'react';
import { useJourneyState } from './hooks/useJourneyState';
import { useWorkflowDragDrop } from './hooks/useWorkflowDragDrop';
import JourneyList from './JourneyList';
import JourneyEditor from './JourneyEditor';
import CustomNode from './nodes/CustomNode';

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

  const { onDragOver, onDrop, onNodeDragStart } = useWorkflowDragDrop(setNodes);

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
      onSaveJourney={saveJourney}
      nodeTypes={nodeTypes}
      onUpdateNode={handleUpdateNode}
    />
  );
};

export default WorkflowEditor;
