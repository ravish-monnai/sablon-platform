
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { NodeData, AnalysisRule } from '../types';
import { NodeConfigProps } from './types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NodeFormFields from './NodeFormFields';
import RulesEditor from './RulesEditor';
import NodeInputsOutputs from './NodeInputsOutputs';
import NodeMappings from './NodeMappings';
import NodeDecisions from './NodeDecisions';

const NodeConfigDialog: React.FC<NodeConfigProps> = ({ isOpen, onClose, node, onUpdateNode }) => {
  const [label, setLabel] = useState(node?.data?.label || '');
  const [description, setDescription] = useState(node?.data?.description || '');
  const [type, setType] = useState(node?.data?.type || 'datasource');
  const [status, setStatus] = useState(node?.data?.status || 'none');
  const [rules, setRules] = useState<AnalysisRule[]>(node?.data?.rules || []);
  const [inputs, setInputs] = useState<string[]>(node?.data?.inputs || []);
  const [outputs, setOutputs] = useState<string[]>(node?.data?.outputs || []);
  const [mappings, setMappings] = useState(node?.data?.mappings || {});
  const [decisions, setDecisions] = useState(node?.data?.decisions || []);

  // Update form state when the node changes
  useEffect(() => {
    if (node) {
      setLabel(node.data.label || '');
      setDescription(node.data.description || '');
      setType(node.data.type || 'datasource');
      setStatus(node.data.status || 'none');
      setRules(node.data.rules || []);
      setInputs(node.data.inputs || []);
      setOutputs(node.data.outputs || []);
      setMappings(node.data.mappings || {});
      setDecisions(node.data.decisions || []);
    }
  }, [node]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (node) {
      const updatedData: NodeData = {
        ...node.data,
        label,
        description,
        type,
        status,
        rules,
        inputs,
        outputs,
        mappings,
        decisions
      };
      
      onUpdateNode(node.id, updatedData);
      toast.success("Node configuration updated");
      onClose();
    }
  };

  // Don't render if no node is selected
  if (!node) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Configure Node: {label}</DialogTitle>
          <DialogDescription>
            Define the node's properties, inputs, outputs, and behavior
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="io">Inputs/Outputs</TabsTrigger>
              <TabsTrigger value="mappings">Mappings</TabsTrigger>
              <TabsTrigger value="decisions">Decisions</TabsTrigger>
              <TabsTrigger value="rules">Rules</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <NodeFormFields 
                label={label}
                setLabel={setLabel}
                description={description}
                setDescription={setDescription}
                type={type}
                setType={setType}
                status={status}
                setStatus={setStatus}
              />
            </TabsContent>

            <TabsContent value="io" className="space-y-4">
              <NodeInputsOutputs 
                inputs={inputs}
                setInputs={setInputs}
                outputs={outputs}
                setOutputs={setOutputs}
                nodeType={type}
              />
            </TabsContent>

            <TabsContent value="mappings" className="space-y-4">
              <NodeMappings 
                mappings={mappings}
                setMappings={setMappings}
                outputs={outputs}
              />
            </TabsContent>

            <TabsContent value="decisions" className="space-y-4">
              <NodeDecisions
                decisions={decisions}
                setDecisions={setDecisions}
              />
            </TabsContent>

            <TabsContent value="rules" className="space-y-4">
              <RulesEditor rules={rules} setRules={setRules} />
            </TabsContent>
          </Tabs>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NodeConfigDialog;
