
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface DataAnalysisAgentEditorProps {
  onClose: () => void;
}

const DataAnalysisAgentEditor = ({ onClose }: DataAnalysisAgentEditorProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    setIsSubmitting(true);
    
    // Simulate saving changes
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Agent configuration saved",
        description: "Your data analysis agent settings have been updated.",
      });
      onClose();
    }, 1500);
  };

  return (
    <div className="space-y-6 py-6">
      <div>
        <h3 className="text-md font-medium">Agent Settings</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model" className="text-right">Model</Label>
            <div className="col-span-3">
              <Select defaultValue="claude-3-opus">
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                  <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                  <SelectItem value="llama-3.1-70b">Llama 3.1 70B</SelectItem>
                  <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                  <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="agent-name" className="text-right">Agent Name</Label>
            <Input
              id="agent-name"
              defaultValue="Data Analysis Agent"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Textarea
              id="description"
              defaultValue="Analyzes large datasets to extract insights and patterns"
              className="col-span-3"
            />
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Analysis Settings</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Data Sources</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="database" defaultChecked />
              <Label htmlFor="database">Database</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="csv" defaultChecked />
              <Label htmlFor="csv">CSV Files</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="api" defaultChecked />
              <Label htmlFor="api">API Endpoints</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Analysis Types</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="pattern-recognition" defaultChecked />
              <Label htmlFor="pattern-recognition">Pattern Recognition</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="anomaly-detection" defaultChecked />
              <Label htmlFor="anomaly-detection">Anomaly Detection</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="predictive-analysis" defaultChecked />
              <Label htmlFor="predictive-analysis">Predictive Analysis</Label>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Output Settings</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Output Formats</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="json" defaultChecked />
              <Label htmlFor="json">JSON</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="csv-output" defaultChecked />
              <Label htmlFor="csv-output">CSV</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="dashboard" defaultChecked />
              <Label htmlFor="dashboard">Dashboard Integration</Label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSaveChanges} disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default DataAnalysisAgentEditor;
