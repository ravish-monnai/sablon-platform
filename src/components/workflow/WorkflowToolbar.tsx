
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Database, Brain, Users, Eye, Edit2, 
  ChevronDown, ChevronUp, Phone, Mail, 
  MapPin, Network, IdCard, ChartBar, Bot
} from 'lucide-react';
import DraggableItem from './DraggableItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface WorkflowToolbarProps {
  isPreviewMode: boolean;
  togglePreviewMode: () => void;
}

const WorkflowToolbar: React.FC<WorkflowToolbarProps> = ({ 
  isPreviewMode, 
  togglePreviewMode 
}) => {
  const [isDataSourcesOpen, setIsDataSourcesOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isDataSourceDialogOpen, setIsDataSourceDialogOpen] = useState(false);
  const [selectedDataSourceType, setSelectedDataSourceType] = useState('');

  const dataSources = [
    { type: "phone_data", label: "Phone Data", icon: <Phone className="text-blue-500" size={16} /> },
    { type: "email_data", label: "Email Data", icon: <Mail className="text-indigo-500" size={16} /> },
    { type: "location_data", label: "Location Data", icon: <MapPin className="text-red-500" size={16} /> },
    { type: "network_data", label: "Network Data", icon: <Network className="text-green-500" size={16} /> },
    { type: "identity_data", label: "Identity Data", icon: <IdCard className="text-amber-500" size={16} /> },
  ];

  const models = [
    { type: "binary_model", label: "Binary Classifier", icon: <Brain className="text-pink-500" size={16} /> },
    { type: "multi_model", label: "Multi-class Classifier", icon: <Brain className="text-purple-500" size={16} /> },
    { type: "regression_model", label: "Regression Model", icon: <ChartBar className="text-blue-500" size={16} /> },
  ];
  
  const agents = [
    { type: "regular_agent", label: "Human Agent", icon: <Users className="text-monnai-blue" size={16} /> },
    { type: "ai_agent", label: "AI Agent", icon: <Bot className="text-monnai-blue" size={16} /> },
  ];

  return (
    <div className="flex justify-between mb-2">
      <div className="flex flex-row space-x-2">
        <Collapsible 
          open={isDataSourcesOpen} 
          onOpenChange={setIsDataSourcesOpen}
          className="bg-white border rounded-md shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <div className="flex items-center">
                <Database className="text-monnai-yellow mr-2" size={16} />
                Data Sources
              </div>
              {isDataSourcesOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2">
            {dataSources.map((source) => (
              <DraggableItem 
                key={source.type}
                type="datasource" 
                icon={source.icon}
                label={source.label}
                data={{ subtype: source.type }}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible 
          open={isModelsOpen} 
          onOpenChange={setIsModelsOpen}
          className="bg-white border rounded-md shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <div className="flex items-center">
                <Brain className="text-monnai-pink mr-2" size={16} />
                Models
              </div>
              {isModelsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2">
            {models.map((model) => (
              <DraggableItem 
                key={model.type}
                type="model" 
                icon={model.icon}
                label={model.label}
                data={{ 
                  modelType: model.type === "binary_model" ? "binary" : 
                            model.type === "multi_model" ? "multiclass" : "regression"
                }}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible 
          open={isAgentsOpen} 
          onOpenChange={setIsAgentsOpen}
          className="bg-white border rounded-md shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <div className="flex items-center">
                <Users className="text-monnai-blue mr-2" size={16} />
                Agents
              </div>
              {isAgentsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2">
            {agents.map((agent) => (
              <DraggableItem 
                key={agent.type}
                type="agent" 
                icon={agent.icon}
                label={agent.label}
                data={{ agentType: agent.type }}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
      <Button variant="outline" size="sm" onClick={togglePreviewMode}>
        {isPreviewMode ? (
          <>
            <Edit2 className="mr-2 h-4 w-4" /> Edit
          </>
        ) : (
          <>
            <Eye className="mr-2 h-4 w-4" /> Preview
          </>
        )}
      </Button>

      <Dialog open={isDataSourceDialogOpen} onOpenChange={setIsDataSourceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configure Data Source</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Configure your {selectedDataSourceType} data source here.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkflowToolbar;
