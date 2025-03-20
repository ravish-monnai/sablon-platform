
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, GitBranch } from "lucide-react";
import { NodeDecisionsProps } from "./types";

const NodeDecisions: React.FC<NodeDecisionsProps> = ({
  decisions,
  onChange
}) => {
  const [condition, setCondition] = useState("");
  const [outcome, setOutcome] = useState("");
  const [nextNode, setNextNode] = useState("");

  const handleAddDecision = () => {
    if (condition.trim() && outcome.trim()) {
      const updatedDecisions = [
        ...decisions,
        {
          condition: condition.trim(),
          outcome: outcome.trim(),
          nextNode: nextNode.trim() || undefined
        }
      ];
      onChange(updatedDecisions);
      setCondition("");
      setOutcome("");
      setNextNode("");
    }
  };

  const handleRemoveDecision = (index: number) => {
    const updatedDecisions = decisions.filter((_, i) => i !== index);
    onChange(updatedDecisions);
  };

  const handleUpdateDecision = (index: number, field: string, value: string) => {
    const updatedDecisions = [...decisions];
    updatedDecisions[index] = {
      ...updatedDecisions[index],
      [field]: value
    };
    onChange(updatedDecisions);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <GitBranch className="h-4 w-4 mr-2 text-amber-500" />
        <h3 className="text-sm font-medium">Decision Paths</h3>
      </div>
      
      <div className="space-y-3">
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Condition</label>
          <Input
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="e.g., score > 80"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Outcome</label>
          <Input
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            placeholder="e.g., Approve"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground">Next Node (optional)</label>
          <Input
            value={nextNode}
            onChange={(e) => setNextNode(e.target.value)}
            placeholder="e.g., notification-node"
          />
        </div>
      </div>
      
      <Button 
        size="sm" 
        onClick={handleAddDecision}
        variant="outline"
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Decision Path
      </Button>
      
      <div className="space-y-3 mt-4">
        {decisions.length === 0 ? (
          <p className="text-sm text-muted-foreground">No decision paths defined</p>
        ) : (
          decisions.map((decision, index) => (
            <div key={index} className="border rounded-md p-3 bg-amber-50 border-amber-200">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-medium">Path #{index + 1}</h4>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => handleRemoveDecision(index)}
                  className="h-6 w-6"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="mt-2 space-y-2">
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-4 text-xs text-muted-foreground">Condition:</div>
                  <div className="col-span-8">
                    <Input
                      value={decision.condition}
                      onChange={(e) => handleUpdateDecision(index, "condition", e.target.value)}
                      className="h-7 text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-4 text-xs text-muted-foreground">Outcome:</div>
                  <div className="col-span-8">
                    <Input
                      value={decision.outcome}
                      onChange={(e) => handleUpdateDecision(index, "outcome", e.target.value)}
                      className="h-7 text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-4 text-xs text-muted-foreground">Next Node:</div>
                  <div className="col-span-8">
                    <Input
                      value={decision.nextNode || ""}
                      onChange={(e) => handleUpdateDecision(index, "nextNode", e.target.value)}
                      className="h-7 text-sm"
                      placeholder="No next node specified"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NodeDecisions;
