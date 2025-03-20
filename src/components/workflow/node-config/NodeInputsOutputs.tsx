
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { NodeInputsOutputsProps } from "./types";

const NodeInputsOutputs: React.FC<NodeInputsOutputsProps> = ({
  inputs,
  outputs,
  onChange
}) => {
  const [newInput, setNewInput] = useState("");
  const [newOutput, setNewOutput] = useState("");

  const handleAddInput = () => {
    if (newInput.trim()) {
      const updatedInputs = [...inputs, newInput.trim()];
      onChange("inputs", updatedInputs);
      setNewInput("");
    }
  };

  const handleAddOutput = () => {
    if (newOutput.trim()) {
      const updatedOutputs = [...outputs, newOutput.trim()];
      onChange("outputs", updatedOutputs);
      setNewOutput("");
    }
  };

  const handleRemoveInput = (index: number) => {
    const updatedInputs = inputs.filter((_, i) => i !== index);
    onChange("inputs", updatedInputs);
  };

  const handleRemoveOutput = (index: number) => {
    const updatedOutputs = outputs.filter((_, i) => i !== index);
    onChange("outputs", updatedOutputs);
  };

  return (
    <div className="space-y-6">
      {/* Inputs Section */}
      <div className="space-y-3">
        <div className="flex items-center">
          <ArrowDownToLine className="h-4 w-4 mr-2 text-blue-500" />
          <h3 className="text-sm font-medium">Input Parameters</h3>
        </div>
        
        <div className="flex space-x-2">
          <Input
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
            placeholder="Add new input parameter"
            className="flex-1"
          />
          <Button 
            size="sm" 
            onClick={handleAddInput}
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {inputs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No input parameters defined</p>
          ) : (
            inputs.map((input, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="flex items-center gap-1 bg-blue-50 hover:bg-blue-100 py-1"
              >
                {input}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleRemoveInput(index)}
                />
              </Badge>
            ))
          )}
        </div>
      </div>
      
      {/* Outputs Section */}
      <div className="space-y-3">
        <div className="flex items-center">
          <ArrowUpFromLine className="h-4 w-4 mr-2 text-green-500" />
          <h3 className="text-sm font-medium">Output Parameters</h3>
        </div>
        
        <div className="flex space-x-2">
          <Input
            value={newOutput}
            onChange={(e) => setNewOutput(e.target.value)}
            placeholder="Add new output parameter"
            className="flex-1"
          />
          <Button 
            size="sm" 
            onClick={handleAddOutput}
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {outputs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No output parameters defined</p>
          ) : (
            outputs.map((output, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="flex items-center gap-1 bg-green-50 hover:bg-green-100 py-1"
              >
                {output}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleRemoveOutput(index)}
                />
              </Badge>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeInputsOutputs;
