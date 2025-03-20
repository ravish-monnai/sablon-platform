
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X } from 'lucide-react';

interface NodeMappingsProps {
  mappings: Record<string, string>;
  setMappings: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  outputs: string[];
}

const NodeMappings: React.FC<NodeMappingsProps> = ({ mappings, setMappings, outputs }) => {
  const handleAddMapping = () => {
    // Find a default output name that doesn't have a mapping yet
    const availableOutput = outputs.find(output => !Object.keys(mappings).includes(output)) || '';
    if (availableOutput) {
      setMappings({ ...mappings, [availableOutput]: '' });
    } else {
      setMappings({ ...mappings, ['newMapping']: '' });
    }
  };

  const handleRemoveMapping = (key: string) => {
    const newMappings = { ...mappings };
    delete newMappings[key];
    setMappings(newMappings);
  };

  const handleSourceChange = (key: string, value: string) => {
    setMappings({ ...mappings, [key]: value });
  };

  const handleKeyChange = (oldKey: string, newKey: string) => {
    const newMappings = { ...mappings };
    const value = newMappings[oldKey];
    delete newMappings[oldKey];
    newMappings[newKey] = value;
    setMappings(newMappings);
  };

  const availableOutputs = outputs.filter(output => !Object.keys(mappings).includes(output));

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base">Data Mappings</Label>
        <p className="text-sm text-muted-foreground">
          Map output fields to their destination in the workflow
        </p>
      </div>
      
      {Object.keys(mappings).length === 0 ? (
        <div className="text-sm text-muted-foreground py-2">
          No mappings configured. Add mappings to connect this node's outputs to other nodes.
        </div>
      ) : (
        <div className="space-y-3">
          {Object.entries(mappings).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex-1 grid grid-cols-5 gap-2">
                <div className="col-span-2">
                  <Input
                    value={key}
                    onChange={(e) => handleKeyChange(key, e.target.value)}
                    placeholder="Output field"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-500">→</span>
                </div>
                <div className="col-span-2">
                  <Input
                    value={value}
                    onChange={(e) => handleSourceChange(key, e.target.value)}
                    placeholder="Destination field"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveMapping(key)}
                type="button"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={handleAddMapping}
        size="sm"
        disabled={outputs.length === 0 && Object.keys(mappings).length === 0}
      >
        <Plus className="h-4 w-4 mr-1" /> Add Mapping
      </Button>
      
      {outputs.length === 0 && (
        <p className="text-xs text-amber-600">
          Define outputs in the Inputs/Outputs tab before creating mappings
        </p>
      )}
    </div>
  );
};

export default NodeMappings;
