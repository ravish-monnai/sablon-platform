
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Settings2, Sliders, GitBranch, FileOutput, CodeXml } from "lucide-react";
import { toast } from "sonner";
import { NodeConfigDialogProps } from "./types";
import NodeFormFields from "./NodeFormFields";
import RulesEditor from "./RulesEditor";
import NodeInputsOutputs from "./NodeInputsOutputs";
import NodeMappings from "./NodeMappings";
import NodeDecisions from "./NodeDecisions";
import { NodeData } from "../types";

const NodeConfigDialog: React.FC<NodeConfigDialogProps> = ({
  isOpen,
  onClose,
  node,
  onUpdateNode
}) => {
  const [formData, setFormData] = useState<NodeData>(() => {
    return node?.data || {};
  });

  // Reset form data when node changes
  React.useEffect(() => {
    if (node) {
      setFormData(node.data || {});
    }
  }, [node]);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (node && node.id) {
      onUpdateNode(node.id, formData);
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData(node?.data || {});
    onClose();
  };

  if (!node) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Configure {formData.label || 'Node'}</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="basic" className="mt-4">
          <TabsList className="grid grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="basic" className="flex items-center gap-1">
              <Settings2 className="h-3.5 w-3.5" />
              <span>Basic</span>
            </TabsTrigger>
            <TabsTrigger value="inputs-outputs" className="flex items-center gap-1">
              <FileOutput className="h-3.5 w-3.5" />
              <span>I/O</span>
            </TabsTrigger>
            <TabsTrigger value="mappings" className="flex items-center gap-1">
              <CodeXml className="h-3.5 w-3.5" />
              <span>Mappings</span>
            </TabsTrigger>
            <TabsTrigger value="decisions" className="flex items-center gap-1">
              <GitBranch className="h-3.5 w-3.5" />
              <span>Decisions</span>
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-1">
              <Sliders className="h-3.5 w-3.5" />
              <span>Rules</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4 mt-4">
            <NodeFormFields 
              node={node} 
              onChange={handleChange} 
            />
          </TabsContent>

          <TabsContent value="inputs-outputs" className="mt-4">
            <NodeInputsOutputs 
              inputs={formData.inputs || []} 
              outputs={formData.outputs || []} 
              onChange={handleChange} 
            />
          </TabsContent>

          <TabsContent value="mappings" className="mt-4">
            <NodeMappings 
              mappings={formData.mappings || {}} 
              onChange={(mappings) => handleChange('mappings', mappings)} 
            />
          </TabsContent>

          <TabsContent value="decisions" className="mt-4">
            <NodeDecisions 
              decisions={formData.decisions || []} 
              onChange={(decisions) => handleChange('decisions', decisions)} 
            />
          </TabsContent>

          <TabsContent value="rules" className="mt-4">
            <RulesEditor 
              rules={formData.rules || []} 
              onChange={(rules) => handleChange('rules', rules)} 
            />
          </TabsContent>
        </Tabs>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NodeConfigDialog;
