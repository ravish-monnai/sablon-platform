
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { DATA_SOURCES, FEATURE_TYPES, TRANSFORMATIONS } from "./constants";

interface NewFeatureDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  newFeature: {
    name: string;
    description: string;
    source: string;
    type: string;
    transformation: string;
    formula: string;
  };
  setNewFeature: React.Dispatch<React.SetStateAction<{
    name: string;
    description: string;
    source: string;
    type: string;
    transformation: string;
    formula: string;
  }>>;
  handleAddFeature: () => void;
}

const NewFeatureDialog: React.FC<NewFeatureDialogProps> = ({
  isOpen,
  setIsOpen,
  newFeature,
  setNewFeature,
  handleAddFeature
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Feature
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Feature</DialogTitle>
          <DialogDescription>
            Create a new feature using available data sources. 
            Feature engineering is crucial for improving model performance.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="feature-name" className="text-sm font-medium">Feature Name</label>
              <Input
                id="feature-name"
                value={newFeature.name}
                onChange={(e) => setNewFeature({...newFeature, name: e.target.value})}
                placeholder="e.g., account_age_days"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Source</label>
              <Select 
                value={newFeature.source}
                onValueChange={(value) => setNewFeature({...newFeature, source: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select data source" />
                </SelectTrigger>
                <SelectContent>
                  {DATA_SOURCES.map((source) => (
                    <SelectItem key={source.id} value={source.id}>
                      <div className="flex items-center">
                        {source.icon}
                        <span>{source.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feature-description" className="text-sm font-medium">Description</label>
            <Textarea
              id="feature-description"
              value={newFeature.description}
              onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
              placeholder="Describe what this feature represents and why it's useful"
              className="w-full"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Feature Type</label>
              <Select 
                value={newFeature.type}
                onValueChange={(value) => setNewFeature({...newFeature, type: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {FEATURE_TYPES.map((type) => (
                    <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Transformation</label>
              <Select 
                value={newFeature.transformation}
                onValueChange={(value) => setNewFeature({...newFeature, transformation: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select transformation" />
                </SelectTrigger>
                <SelectContent>
                  {TRANSFORMATIONS.map((transform) => (
                    <SelectItem key={transform.id} value={transform.id}>{transform.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="feature-formula" className="text-sm font-medium">Formula / Logic</label>
            <Textarea
              id="feature-formula"
              value={newFeature.formula}
              onChange={(e) => setNewFeature({...newFeature, formula: e.target.value})}
              placeholder="e.g., IF(transaction_amount > avg_transaction * 3, 1, 0)"
              className="w-full font-mono text-sm"
            />
            <p className="text-xs text-gray-500">
              Define how this feature should be calculated from the raw data.
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleAddFeature}>
            Add Feature
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewFeatureDialog;
