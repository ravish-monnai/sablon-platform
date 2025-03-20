
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X } from 'lucide-react';
import { toast } from "sonner";
import { NodeData, AnalysisRule } from './types';

interface NodeConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  node: any | null;
  onUpdateNode: (nodeId: string, data: NodeData) => void;
}

const NodeConfigDialog: React.FC<NodeConfigDialogProps> = ({ isOpen, onClose, node, onUpdateNode }) => {
  const [label, setLabel] = useState(node?.data?.label || '');
  const [description, setDescription] = useState(node?.data?.description || '');
  const [type, setType] = useState(node?.data?.type || 'datasource');
  const [status, setStatus] = useState(node?.data?.status || '');
  const [rules, setRules] = useState<AnalysisRule[]>(node?.data?.rules || []);

  React.useEffect(() => {
    if (node) {
      setLabel(node.data.label || '');
      setDescription(node.data.description || '');
      setType(node.data.type || 'datasource');
      setStatus(node.data.status || '');
      setRules(node.data.rules || []);
    }
  }, [node]);

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

  const addRule = () => {
    const newRule: AnalysisRule = {
      id: `rule-${Date.now()}`,
      condition: 'amount',
      operator: '>',
      value: '1000',
      action: 'flag'
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, field: keyof AnalysisRule, value: string) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  if (!node) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Configure Node</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="node-label">Label</Label>
            <Input
              id="node-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Enter node label"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="node-description">Description</Label>
            <Textarea
              id="node-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter node description"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="node-type">Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Select node type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="datasource">Data Source</SelectItem>
                <SelectItem value="model">ML Model</SelectItem>
                <SelectItem value="rule">Decision Rule</SelectItem>
                <SelectItem value="notification">Notification</SelectItem>
                <SelectItem value="alert">Alert</SelectItem>
                <SelectItem value="agent">Agent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="node-status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Analysis Rules Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>If-Then Analysis Rules</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={addRule}
                className="flex items-center gap-1"
              >
                <Plus size={14} />
                Add Rule
              </Button>
            </div>
            
            <div className="space-y-3 mt-3">
              {rules.length === 0 ? (
                <p className="text-sm text-muted-foreground">No rules configured. Add rules to define node behavior.</p>
              ) : (
                rules.map((rule) => (
                  <div key={rule.id} className="flex flex-wrap items-start gap-2 p-3 border border-gray-200 rounded-md bg-gray-50">
                    <div className="flex-1 min-w-[110px]">
                      <Label className="text-xs mb-1 block">If</Label>
                      <Select 
                        value={rule.condition} 
                        onValueChange={(value) => updateRule(rule.id, 'condition', value)}
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="amount">Amount</SelectItem>
                          <SelectItem value="balance">Balance</SelectItem>
                          <SelectItem value="transactions">Transaction Count</SelectItem>
                          <SelectItem value="age">Account Age</SelectItem>
                          <SelectItem value="score">Risk Score</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="w-20">
                      <Label className="text-xs mb-1 block">Operator</Label>
                      <Select 
                        value={rule.operator} 
                        onValueChange={(value) => updateRule(rule.id, 'operator', value)}
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Op" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=">">{'>'}</SelectItem>
                          <SelectItem value="<">{'<'}</SelectItem>
                          <SelectItem value="=">{'='}</SelectItem>
                          <SelectItem value="!=">{'!='}</SelectItem>
                          <SelectItem value=">=">{'>='}</SelectItem>
                          <SelectItem value="<=">{'<='}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="w-24">
                      <Label className="text-xs mb-1 block">Value</Label>
                      <Input
                        className="h-8"
                        value={rule.value}
                        onChange={(e) => updateRule(rule.id, 'value', e.target.value)}
                        placeholder="Value"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-[110px]">
                      <Label className="text-xs mb-1 block">Then</Label>
                      <Select 
                        value={rule.action} 
                        onValueChange={(value) => updateRule(rule.id, 'action', value)}
                      >
                        <SelectTrigger className="h-8">
                          <SelectValue placeholder="Action" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flag">Flag for Review</SelectItem>
                          <SelectItem value="reject">Auto Reject</SelectItem>
                          <SelectItem value="approve">Auto Approve</SelectItem>
                          <SelectItem value="escalate">Escalate</SelectItem>
                          <SelectItem value="notify">Send Notification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 mt-5"
                      onClick={() => removeRule(rule.id)}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
          
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
