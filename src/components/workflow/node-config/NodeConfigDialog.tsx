
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { NodeData, AnalysisRule } from '../types';
import { NodeConfigProps } from './types';
import NodeFormFields from './NodeFormFields';
import RulesEditor from './RulesEditor';

const NodeConfigDialog: React.FC<NodeConfigProps> = ({ isOpen, onClose, node, onUpdateNode }) => {
  const [label, setLabel] = useState(node?.data?.label || '');
  const [description, setDescription] = useState(node?.data?.description || '');
  const [type, setType] = useState(node?.data?.type || 'datasource');
  const [status, setStatus] = useState(node?.data?.status || 'none');
  const [rules, setRules] = useState<AnalysisRule[]>(node?.data?.rules || []);

  // Update form state when the node changes
  useEffect(() => {
    if (node) {
      setLabel(node.data.label || '');
      setDescription(node.data.description || '');
      setType(node.data.type || 'datasource');
      setStatus(node.data.status || 'none');
      setRules(node.data.rules || []);
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
        rules
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
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Configure Node</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Node basic fields */}
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
          
          {/* Rules editor */}
          <RulesEditor rules={rules} setRules={setRules} />
          
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
