
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ModelOption {
  id: string;
  name: string;
  description: string;
}

interface ModelConfigFormProps {
  models: ModelOption[];
  selectedModel: string;
  onModelChange: (modelId: string) => void;
}

const ModelConfigForm: React.FC<ModelConfigFormProps> = ({
  models,
  selectedModel,
  onModelChange
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Model</label>
        <Select
          value={selectedModel}
          onValueChange={onModelChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            {models.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground mt-1">
          {models.find(m => m.id === selectedModel)?.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Temperature</label>
          <Input type="number" min="0" max="2" step="0.1" defaultValue="0.7" className="h-9" />
          <p className="text-xs text-muted-foreground">Controls randomness (0-2)</p>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Max Tokens</label>
          <Input type="number" min="100" max="4000" step="100" defaultValue="1000" className="h-9" />
          <p className="text-xs text-muted-foreground">Maximum response length</p>
        </div>
      </div>
    </div>
  );
};

export default ModelConfigForm;
