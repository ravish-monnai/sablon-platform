import React, { useState, useCallback } from 'react';
import { 
  useNodesState, 
  useEdgesState, 
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Database, Brain, Users, Plus, List } from 'lucide-react';
import WorkflowPreview from './WorkflowPreview';
import WorkflowToolbar from './WorkflowToolbar';
import WorkflowFlow from './WorkflowFlow';
import { initialNodes, initialEdges } from './initialWorkflowData';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ModelConfigDialog from '../models/ModelConfigDialog';
import AIWorkflowHelper from './AIWorkflowHelper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMarket } from '@/contexts/MarketContext';

// Sample data for configured journeys - organized by market
const journeysByMarket = {
  'Global': [
    {
      id: "fraud-detection",
      name: "Fraud Detection",
      description: "Detect fraudulent transactions using ML models",
      status: "active",
      lastModified: "2 days ago",
      nodeCount: 6,
      edgeCount: 5,
    },
    {
      id: "kyc-verification",
      name: "KYC Verification",
      description: "Verify customer identity with multiple data sources",
      status: "draft",
      lastModified: "5 days ago",
      nodeCount: 4,
      edgeCount: 3,
    },
    {
      id: "risk-scoring",
      name: "Risk Scoring",
      description: "Score customer risk based on behavioral patterns",
      status: "draft",
      lastModified: "1 week ago",
      nodeCount: 8,
      edgeCount: 7,
    }
  ],
  'US': [
    {
      id: "us-fraud-detection",
      name: "US Fraud Detection",
      description: "Detect fraudulent transactions for US market",
      status: "active",
      lastModified: "1 day ago",
      nodeCount: 7,
      edgeCount: 6,
    },
    {
      id: "us-credit-scoring",
      name: "US Credit Scoring",
      description: "Score US customers based on credit history",
      status: "active",
      lastModified: "3 days ago",
      nodeCount: 5,
      edgeCount: 4,
    }
  ],
  'India': [
    {
      id: "india-kyc",
      name: "India KYC",
      description: "KYC verification for Indian customers using Aadhaar",
      status: "active",
      lastModified: "12 hours ago",
      nodeCount: 4,
      edgeCount: 3,
    },
    {
      id: "india-upi-fraud",
      name: "UPI Fraud Detection",
      description: "Detect fraudulent UPI transactions in India",
      status: "draft",
      lastModified: "2 days ago",
      nodeCount: 6,
      edgeCount: 5,
    }
  ],
  'Indonesia': [
    {
      id: "indonesia-credit-scoring",
      name: "Indonesia Credit Scoring",
      description: "Credit scoring for Indonesian market",
      status: "active",
      lastModified: "1 day ago",
      nodeCount: 5,
      edgeCount: 4,
    }
  ],
  'Philippines': [
    {
      id: "philippines-remittance",
      name: "Philippines Remittance",
      description: "Secure remittance verification for Philippines",
      status: "active",
      lastModified: "3 days ago",
      nodeCount: 5,
      edgeCount: 4,
    }
  ],
  'Mexico': [
    {
      id: "mexico-loan-assessment",
      name: "Mexico Loan Assessment",
      description: "Assess loan applications for Mexican customers",
      status: "draft",
      lastModified: "4 days ago",
      nodeCount: 6,
      edgeCount: 5,
    }
  ],
  'Brazil': [
    {
      id: "brazil-pix-verification",
      name: "Brazil PIX Verification",
      description: "Verify PIX transactions in Brazil",
      status: "active",
      lastModified: "2 days ago",
      nodeCount: 4,
      edgeCount: 3,
    }
  ]
};

// Custom Node with Model Configuration
const ModelNode = ({ data, isConnectable }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="custom-node flex flex-col bg-white border border-gray-200 shadow-sm rounded-md" style={{ width: 150 }}>
        <div className="p-2 flex items-center">
          {data.icon}
          <div className="ml-1 font-medium text-sm truncate">{data.label}</div>
        </div>
        <div className="p-2 pt-0 text-xs text-gray-500">{data.description}</div>
        {data.type === 'model' && (
          <div className="p-2 pt-0">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full text-xs h-6"
              onClick={() => setIsOpen(true)}
            >
              Configure
            </Button>
          </div>
        )}
      </div>
      
      {data.type === 'model' && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl">
            <ModelConfigDialog 
              open={isOpen} 
              onOpenChange={setIsOpen}
              modelName={data.label}
              modelType={data.modelType || "binary"} 
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

// Custom Node Types
const nodeTypes = {
  default: ModelNode,
};

const WorkflowEditor: React.FC = () => {
  const { selectedMarket } = useMarket();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [activeJourney, setActiveJourney] = useState<string | null>(null);
  const [showJourneyList, setShowJourneyList] = useState(true);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Get journeys for the selected market or show global journeys if market has no specific journeys
  const getJourneysForMarket = () => {
    // If Global is selected, show all journeys from all markets
    if (selectedMarket === 'Global') {
      return journeysByMarket['Global'];
    }
    
    // If selected market has journeys, return them
    if (journeysByMarket[selectedMarket]?.length > 0) {
      return journeysByMarket[selectedMarket];
    }
    
    // Fallback to Global journeys if market has no specific journeys
    return journeysByMarket['Global'];
  };

  const configuredJourneys = getJourneysForMarket();

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
      let modelType = 'binary'; // Default model type for model nodes
      
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
          type,
          modelType: type === 'model' ? modelType : undefined
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

  const handleAddAINodes = (newNodes) => {
    // Add the AI-suggested nodes to the workflow
    setNodes((nds) => [...nds, ...newNodes]);
    
    // Create edges between the nodes (simple linear connection)
    const newEdges = [];
    for (let i = 0; i < newNodes.length - 1; i++) {
      newEdges.push({
        id: `e-${newNodes[i].id}-${newNodes[i+1].id}`,
        source: newNodes[i].id,
        target: newNodes[i+1].id,
        type: 'default',
      });
    }
    
    setEdges((eds) => [...eds, ...newEdges]);
  };

  const handleCreateNewJourney = () => {
    setShowJourneyList(false);
    setActiveJourney("new-journey");
  };

  const handleEditJourney = (journeyId: string) => {
    setShowJourneyList(false);
    setActiveJourney(journeyId);
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
                ? 'Create and manage AI journeys for your business'
                : `Create and manage AI journeys for your business in ${selectedMarket}`}
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
                  Edit Journey
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
        <AIWorkflowHelper onAddNodes={handleAddAINodes} />
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
