
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface UnderwriterAgentEditorProps {
  onClose: () => void;
}

const UnderwriterAgentEditor = ({ onClose }: UnderwriterAgentEditorProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    setIsSubmitting(true);
    
    // Simulate saving changes
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Agent configuration saved",
        description: "Your underwriter agent settings have been updated.",
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
              <Select defaultValue="llama-3.1-70b">
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
              defaultValue="Underwriter"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Textarea
              id="description"
              defaultValue="Evaluates and assesses credit risk"
              className="col-span-3"
            />
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Credit Assessment Settings</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="credit-threshold" className="text-right">Credit Score Threshold</Label>
            <Input
              id="credit-threshold"
              type="number"
              defaultValue="650"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="max-dti" className="text-right">Max DTI Ratio</Label>
            <Input
              id="max-dti"
              type="number"
              defaultValue="35"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Risk Tolerance</Label>
            <div className="col-span-3">
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select risk tolerance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Conservative</SelectItem>
                  <SelectItem value="medium">Medium - Balanced</SelectItem>
                  <SelectItem value="high">High - Aggressive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Auto-Approve Low Risk</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="auto-approve" defaultChecked />
              <Label htmlFor="auto-approve">Enable</Label>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Data Sources</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Credit Bureaus</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="experian" defaultChecked />
              <Label htmlFor="experian">Experian</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="transunion" defaultChecked />
              <Label htmlFor="transunion">TransUnion</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="equifax" defaultChecked />
              <Label htmlFor="equifax">Equifax</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Banking Data</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="plaid" defaultChecked />
              <Label htmlFor="plaid">Plaid Integration</Label>
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

export default UnderwriterAgentEditor;
