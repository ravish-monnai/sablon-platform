
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrainCircuit, ShieldCheck, BarChart3, Cpu, Watch } from "lucide-react";
import ModelPerformanceStats from "./model-management/ModelPerformanceStats";
import ModelConfigForm from "./model-management/ModelConfigForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LLMSettingsTab: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("gpt-4o");
  const [activeSubTab, setActiveSubTab] = useState<string>("configuration");

  const llmModels = [
    { id: "gpt-4o", name: "GPT-4o", description: "Best model for general purpose AI tasks with vision capabilities" },
    { id: "gpt-4o-mini", name: "GPT-4o Mini", description: "Efficient model for most AI tasks with vision capabilities" },
    { id: "llama-3.1-70b", name: "Llama 3.1 70B", description: "Open source model with excellent performance" },
    { id: "claude-3-opus", name: "Claude 3 Opus", description: "Anthropic's most powerful model" },
    { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance and efficiency" },
    { id: "mixtral-8x7b", name: "Mixtral 8x7B", description: "Open source mixture of experts model" }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Language Model Settings</h3>
      <p className="text-sm text-muted-foreground">
        Configure the language model and related parameters for the Fraud Review Agent.
      </p>
      
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="mt-4">
        <TabsList className="mb-4">
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="configuration" className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Language Model</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Select the language model that powers this agent
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ModelConfigForm 
                  models={llmModels}
                  selectedModel={selectedModel}
                  onModelChange={setSelectedModel}
                />
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Agent Instructions</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Define how the agent should behave when reviewing fraud cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">System Prompt</label>
                  <textarea 
                    className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="You are a Fraud Review Agent for a financial institution. Your task is to review cases flagged as potentially fraudulent and make recommendations based on the evidence. Be thorough in your analysis and consider all available data sources."
                  />
                  <p className="text-xs text-muted-foreground">Instructions for how the agent should behave</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-medium">Advanced Settings</h4>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">Configure Advanced Settings</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Advanced LLM Settings</DialogTitle>
                    <DialogDescription>
                      Fine-tune the model parameters for optimal performance.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Top P</label>
                        <Input type="number" min="0" max="1" step="0.05" defaultValue="0.95" className="h-9" />
                        <p className="text-xs text-muted-foreground">Token selection threshold</p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Frequency Penalty</label>
                        <Input type="number" min="-2" max="2" step="0.1" defaultValue="0" className="h-9" />
                        <p className="text-xs text-muted-foreground">Repetition reduction</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Presence Penalty</label>
                        <Input type="number" min="-2" max="2" step="0.1" defaultValue="0" className="h-9" />
                        <p className="text-xs text-muted-foreground">Topic diversity control</p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Stop Sequences</label>
                        <Input type="text" placeholder="Enter sequences separated by comma" className="h-9" />
                        <p className="text-xs text-muted-foreground">Custom stop tokens</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-6">
          <ModelPerformanceStats selectedModel={selectedModel} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LLMSettingsTab;
