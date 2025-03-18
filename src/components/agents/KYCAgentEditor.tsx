
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Database, FileCheck, AlertTriangle, UserCheck, X, Mail, Phone, ShieldCheck, Save, BrainCircuit } from "lucide-react";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";

interface KYCAgentEditorProps {
  onClose: () => void;
}

const KYCAgentEditor: React.FC<KYCAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("document-verification");
  const [selectedModel, setSelectedModel] = useState<string>("gpt-4o");

  const llmModels = [
    { id: "gpt-4o", name: "GPT-4o", description: "Best model for general purpose AI tasks with vision capabilities" },
    { id: "gpt-4o-mini", name: "GPT-4o Mini", description: "Efficient model for most AI tasks with vision capabilities" },
    { id: "llama-3.1-70b", name: "Llama 3.1 70B", description: "Open source model with excellent performance" },
    { id: "claude-3-opus", name: "Claude 3 Opus", description: "Anthropic's most powerful model" }
  ];

  return (
    <div className="space-y-6 pt-6">
      <div className="flex space-x-4 border-b">
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "document-verification" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("document-verification")}
        >
          Document Verification
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "face-verification" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("face-verification")}
        >
          Face Verification
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "compliance-rules" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("compliance-rules")}
        >
          Compliance Rules
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "workflow" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("workflow")}
        >
          Workflow
        </button>
      </div>

      {activeTab === "document-verification" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Document Verification Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure document types and verification settings for KYC.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">ID Document Types</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure acceptable ID document types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="passport" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="passport" className="text-sm">Passport</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="drivers-license" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="drivers-license" className="text-sm">Driver's License</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="national-id" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="national-id" className="text-sm">National ID Card</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="residence-permit" className="rounded border-gray-300" />
                    <label htmlFor="residence-permit" className="text-sm">Residence Permit</label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Document Verification Settings</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure how documents are verified
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Authenticity Check</h4>
                      <p className="text-xs text-muted-foreground">Detect forgeries and tampering</p>
                    </div>
                    <Select defaultValue="high">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Basic</SelectItem>
                        <SelectItem value="medium">Standard</SelectItem>
                        <SelectItem value="high">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">MRZ Verification</h4>
                      <p className="text-xs text-muted-foreground">Machine Readable Zone check</p>
                    </div>
                    <Select defaultValue="enabled">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enabled">Enabled</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">NFC Chip Reading</h4>
                      <p className="text-xs text-muted-foreground">For e-Passports and modern IDs</p>
                    </div>
                    <Select defaultValue="optional">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="required">Required</SelectItem>
                        <SelectItem value="optional">Optional</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "face-verification" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Face Verification Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure facial recognition and liveness detection settings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Facial Recognition</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure facial matching settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Match Confidence</h4>
                      <p className="text-xs text-muted-foreground">Required similarity threshold</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">85%</span>
                      <Input type="range" min="70" max="99" defaultValue="85" className="w-24" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Multiple Attempts</h4>
                      <p className="text-xs text-muted-foreground">Allow retries on failure</p>
                    </div>
                    <Select defaultValue="3">
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Liveness Detection</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure anti-spoofing measures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Detection Level</h4>
                      <p className="text-xs text-muted-foreground">Anti-spoofing strength</p>
                    </div>
                    <Select defaultValue="high">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Basic</SelectItem>
                        <SelectItem value="medium">Standard</SelectItem>
                        <SelectItem value="high">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium">Challenge Type</h4>
                      <p className="text-xs text-muted-foreground">Verification method</p>
                    </div>
                    <Select defaultValue="movement">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="movement">Head Turn</SelectItem>
                        <SelectItem value="blink">Blink</SelectItem>
                        <SelectItem value="smile">Smile</SelectItem>
                        <SelectItem value="passive">Passive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "compliance-rules" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Compliance Rules Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure regulatory compliance checks and watchlist screening.
          </p>
          
          <div className="space-y-4 mt-4">
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Watchlist Screening</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure sanctions and PEP screening
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="sanctions" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="sanctions" className="text-sm">Global Sanctions Lists</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="pep" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="pep" className="text-sm">Politically Exposed Persons</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="adverse-media" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="adverse-media" className="text-sm">Adverse Media Screening</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="law-enforcement" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="law-enforcement" className="text-sm">Law Enforcement Lists</label>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h4 className="text-sm font-medium">Match Threshold</h4>
                      <p className="text-xs text-muted-foreground">Name matching sensitivity</p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Conservative</SelectItem>
                        <SelectItem value="medium">Balanced</SelectItem>
                        <SelectItem value="high">Aggressive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Regulatory Requirements</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Configure compliance with regulatory frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="aml" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="aml" className="text-sm">Anti-Money Laundering (AML)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="kyc" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="kyc" className="text-sm">Know Your Customer (KYC)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="gdpr" className="rounded border-gray-300" defaultChecked />
                    <label htmlFor="gdpr" className="text-sm">GDPR Compliance</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="fatca" className="rounded border-gray-300" />
                    <label htmlFor="fatca" className="text-sm">FATCA/CRS Compliance</label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "workflow" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">KYC Agent Workflow</h3>
          <p className="text-sm text-muted-foreground">
            Configure the workflow and decision-making process for KYC verification.
          </p>
          
          <div className="h-[450px] mt-4">
            <WorkflowEditor />
          </div>
        </div>
      )}

      <div className="flex justify-end space-x-2 pt-6 border-t">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
          <Save className="mr-2 h-4 w-4" /> Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default KYCAgentEditor;
