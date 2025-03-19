
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Database, Brain, Users, Eye, Edit2, 
  ChevronDown, ChevronUp, Phone, Mail, 
  MapPin, Network, IdCard, ChartBar, Bot,
  BarChart, GitBranch, MessageSquare, AlertCircle,
  FileText, Clock, Zap, ShieldCheck
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
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isDataSourceDialogOpen, setIsDataSourceDialogOpen] = useState(false);
  const [selectedDataSourceType, setSelectedDataSourceType] = useState('');

  const dataSources = [
    { type: "phone_data", label: "Phone Data", icon: <Phone className="text-yellow-500" size={16} /> },
    { type: "email_data", label: "Email Data", icon: <Mail className="text-yellow-500" size={16} /> },
    { type: "location_data", label: "Location Data", icon: <MapPin className="text-yellow-500" size={16} /> },
    { type: "network_data", label: "Network Data", icon: <Network className="text-yellow-500" size={16} /> },
    { type: "identity_data", label: "Identity Data", icon: <IdCard className="text-yellow-500" size={16} /> },
    { type: "file_data", label: "Document Data", icon: <FileText className="text-yellow-500" size={16} /> },
  ];

  const models = [
    { type: "binary_model", label: "Binary Classifier", icon: <Brain className="text-pink-600" size={16} /> },
    { type: "multi_model", label: "Multi-class Classifier", icon: <Brain className="text-pink-600" size={16} /> },
    { type: "regression_model", label: "Regression Model", icon: <ChartBar className="text-pink-600" size={16} /> },
    { type: "time_series", label: "Time Series Model", icon: <Clock className="text-pink-600" size={16} /> },
  ];
  
  const rules = [
    { type: "decision_rule", label: "Decision Rule", icon: <GitBranch className="text-blue-600" size={16} /> },
    { type: "threshold_rule", label: "Threshold Rule", icon: <BarChart className="text-blue-600" size={16} /> },
    { type: "conditional_rule", label: "Conditional Rule", icon: <GitBranch className="text-blue-600" size={16} /> },
  ];

  const actions = [
    { type: "notification", label: "Notification", icon: <MessageSquare className="text-green-600" size={16} /> },
    { type: "alert", label: "Alert", icon: <AlertCircle className="text-red-600" size={16} /> },
    { type: "verification", label: "Verification", icon: <ShieldCheck className="text-indigo-600" size={16} /> },
    { type: "automation", label: "Automation", icon: <Zap className="text-amber-600" size={16} /> },
  ];
  
  const agents = [
    { type: "regular_agent", label: "Human Agent", icon: <Users className="text-monnai-blue" size={16} /> },
    { type: "ai_agent", label: "AI Agent", icon: <Bot className="text-purple-600" size={16} /> },
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
                <Database className="text-yellow-500 mr-2" size={16} />
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
                <Brain className="text-pink-600 mr-2" size={16} />
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
                            model.type === "multi_model" ? "multiclass" : 
                            model.type === "time_series" ? "timeseries" : "regression"
                }}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Collapsible 
          open={isRulesOpen} 
          onOpenChange={setIsRulesOpen}
          className="bg-white border rounded-md shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <div className="flex items-center">
                <GitBranch className="text-blue-600 mr-2" size={16} />
                Rules
              </div>
              {isRulesOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2">
            {rules.map((rule) => (
              <DraggableItem 
                key={rule.type}
                type="rule" 
                icon={rule.icon}
                label={rule.label}
                data={{ ruleType: rule.type }}
              />
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Collapsible 
          open={isActionsOpen} 
          onOpenChange={setIsActionsOpen}
          className="bg-white border rounded-md shadow-sm"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex justify-between">
              <div className="flex items-center">
                <Zap className="text-amber-500 mr-2" size={16} />
                Actions
              </div>
              {isActionsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-2 space-y-2">
            {actions.map((action) => (
              <DraggableItem 
                key={action.type}
                type={action.type === "notification" ? "notification" : 
                      action.type === "alert" ? "alert" : action.type} 
                icon={action.icon}
                label={action.label}
                data={{ actionType: action.type }}
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
                <Users className="text-purple-600 mr-2" size={16} />
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
