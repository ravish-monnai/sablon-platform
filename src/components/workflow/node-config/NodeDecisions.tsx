
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X } from 'lucide-react';

interface Decision {
  condition: string;
  outcome: string;
  nextNode?: string;
}

interface NodeDecisionsProps {
  decisions: Decision[];
  setDecisions: React.Dispatch<React.SetStateAction<Decision[]>>;
}

const NodeDecisions: React.FC<NodeDecisionsProps> = ({ decisions, setDecisions }) => {
  const handleAddDecision = () => {
    setDecisions([...decisions, { condition: '', outcome: '', nextNode: '' }]);
  };

  const handleRemoveDecision = (index: number) => {
    setDecisions(decisions.filter((_, i) => i !== index));
  };

  const updateDecision = (index: number, field: keyof Decision, value: string) => {
    const newDecisions = [...decisions];
    newDecisions[index] = { ...newDecisions[index], [field]: value };
    setDecisions(newDecisions);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base">Decision Logic</Label>
        <p className="text-sm text-muted-foreground">
          Define conditions that determine the workflow path
        </p>
      </div>
      
      {decisions.length === 0 ? (
        <div className="text-sm text-muted-foreground py-2">
          No decision logic configured. Add decisions to control the flow based on conditions.
        </div>
      ) : (
        <div className="space-y-3">
          {decisions.map((decision, index) => (
            <div key={index} className="p-3 border rounded-md bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm">Decision {index + 1}</Label>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveDecision(index)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid gap-3">
                <div>
                  <Label className="text-xs">If Condition</Label>
                  <Input
                    value={decision.condition}
                    onChange={(e) => updateDecision(index, 'condition', e.target.value)}
                    placeholder="e.g., score > 700"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-xs">Outcome</Label>
                  <Select 
                    value={decision.outcome}
                    onValueChange={(value) => updateDecision(index, 'outcome', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select an outcome" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                      <SelectItem value="review">Manual Review</SelectItem>
                      <SelectItem value="escalate">Escalate</SelectItem>
                      <SelectItem value="continue">Continue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-xs">Next Node (Optional)</Label>
                  <Input
                    value={decision.nextNode || ''}
                    onChange={(e) => updateDecision(index, 'nextNode', e.target.value)}
                    placeholder="Node ID or label of next step"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={handleAddDecision}
        size="sm"
      >
        <Plus className="h-4 w-4 mr-1" /> Add Decision Rule
      </Button>
    </div>
  );
};

export default NodeDecisions;
