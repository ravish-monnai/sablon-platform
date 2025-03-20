
import { useState } from 'react';
import { 
  useNodesState, 
  useEdgesState, 
  addEdge,
  Node,
  Edge
} from '@xyflow/react';
import { journeyWorkflowConfigurations } from '../../ai-journeys/data';
import { toast } from "sonner";
import { NodeData } from '../types';

export function useJourneyState() {
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

  const onConnect = (params: any) => {
    setEdges((eds) => addEdge(params, eds));
    toast.success("Connected nodes successfully");
  };

  const handleUpdateNode = (nodeId: string, newData: NodeData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          // Update the node data
          return {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          };
        }
        return node;
      })
    );
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
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

  const saveJourney = () => {
    if (!activeJourney) {
      toast.error("No active journey to save");
      return;
    }

    // In a real application, this would save to the backend
    // For now, just show a toast
    toast.success(`Journey saved with ${nodes.length} nodes and ${edges.length} edges`);
    
    // Log the full configuration for debugging
    console.log("Journey saved:", {
      nodes,
      edges,
      activeJourney
    });
  };

  // Determine journey name and description
  const journeyName = activeJourney && journeyWorkflowConfigurations[activeJourney] 
    ? journeyWorkflowConfigurations[activeJourney].name 
    : "New Journey";
    
  const journeyDescription = activeJourney && journeyWorkflowConfigurations[activeJourney] 
    ? journeyWorkflowConfigurations[activeJourney].description 
    : "Configure your new journey";

  return {
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
  };
}
