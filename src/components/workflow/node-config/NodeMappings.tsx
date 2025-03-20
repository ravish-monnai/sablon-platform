
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, ArrowRightLeft } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NodeMappingsProps } from "./types";

const NodeMappings: React.FC<NodeMappingsProps> = ({
  mappings,
  onChange
}) => {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const handleAddMapping = () => {
    if (source.trim() && target.trim()) {
      const updatedMappings = { ...mappings, [source.trim()]: target.trim() };
      onChange(updatedMappings);
      setSource("");
      setTarget("");
    }
  };

  const handleRemoveMapping = (key: string) => {
    const { [key]: removed, ...rest } = mappings;
    onChange(rest);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <ArrowRightLeft className="h-4 w-4 mr-2 text-purple-500" />
        <h3 className="text-sm font-medium">Parameter Mappings</h3>
      </div>
      
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-5">
          <Input
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Source parameter"
          />
        </div>
        
        <div className="flex items-center justify-center col-span-2">
          <ArrowRightLeft className="h-4 w-4 text-gray-400" />
        </div>
        
        <div className="col-span-5">
          <Input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Target parameter"
          />
        </div>
      </div>
      
      <Button 
        size="sm" 
        onClick={handleAddMapping}
        variant="outline"
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Mapping
      </Button>
      
      <div className="space-y-2 mt-4">
        {Object.keys(mappings).length === 0 ? (
          <p className="text-sm text-muted-foreground">No mappings defined</p>
        ) : (
          Object.entries(mappings).map(([sourceKey, targetValue], index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-md bg-gray-50">
              <div className="grid grid-cols-12 gap-2 flex-1">
                <div className="col-span-5 font-medium text-sm truncate">
                  {sourceKey}
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <ArrowRightLeft className="h-4 w-4 text-gray-400" />
                </div>
                <div className="col-span-5 text-sm truncate">
                  {targetValue}
                </div>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={() => handleRemoveMapping(sourceKey)}
                className="h-6 w-6 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NodeMappings;
