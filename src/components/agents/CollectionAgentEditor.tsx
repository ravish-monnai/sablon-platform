
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";

interface CollectionAgentEditorProps {
  onClose: () => void;
}

const CollectionAgentEditor = ({ onClose }: CollectionAgentEditorProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toneValue, setToneValue] = useState([50]);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    setIsSubmitting(true);
    
    // Simulate saving changes
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Agent configuration saved",
        description: "Your collection agent settings have been updated.",
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
              <Select defaultValue="gpt-4o-mini">
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
              defaultValue="Collection Agent"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Description</Label>
            <Textarea
              id="description"
              defaultValue="Manages past-due accounts and recovery"
              className="col-span-3"
            />
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Communication Settings</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Communication Channels</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="email" defaultChecked />
              <Label htmlFor="email">Email</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="sms" defaultChecked />
              <Label htmlFor="sms">SMS</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-1"></div>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="call" />
              <Label htmlFor="call">Phone Call</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Message Tone</Label>
            <div className="col-span-3 space-y-2">
              <Slider
                value={toneValue}
                onValueChange={setToneValue}
                max={100}
                step={1}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Friendly</span>
                <span>Neutral</span>
                <span>Formal</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="frequency" className="text-right">Contact Frequency</Label>
            <div className="col-span-3">
              <Select defaultValue="weekly">
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="text-md font-medium">Collection Strategy</h3>
        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Escalation Thresholds</Label>
            <div className="col-span-3">
              <Select defaultValue="60days">
                <SelectTrigger>
                  <SelectValue placeholder="Select threshold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30days">30 days past due</SelectItem>
                  <SelectItem value="60days">60 days past due</SelectItem>
                  <SelectItem value="90days">90 days past due</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Payment Plans</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="payment-plans" defaultChecked />
              <Label htmlFor="payment-plans">Offer payment plans</Label>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Debt Forgiveness</Label>
            <div className="flex items-center space-x-2 col-span-3">
              <Switch id="debt-forgiveness" />
              <Label htmlFor="debt-forgiveness">Offer partial forgiveness</Label>
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

export default CollectionAgentEditor;
