
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Database, Network, AlertTriangle, UserCheck, X, Mail, Phone, ShieldCheck, Save } from "lucide-react";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";

interface FraudAgentEditorProps {
  onClose: () => void;
}

const FraudAgentEditor: React.FC<FraudAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("data-sources");

  return (
    <div className="space-y-6 pt-6">
      <div className="flex space-x-4 border-b">
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "data-sources" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("data-sources")}
        >
          Data Sources
        </button>
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "identity-verification" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("identity-verification")}
        >
          Identity Verification
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
        <button
          className={`pb-2 text-sm font-medium ${
            activeTab === "decisions" 
              ? "border-b-2 border-[#9b87f5] text-[#9b87f5]" 
              : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("decisions")}
        >
          Decisions
        </button>
      </div>

      {activeTab === "data-sources" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Configure Data Sources</h3>
          <p className="text-sm text-muted-foreground">
            Select which data sources the Fraud Review Agent should access to evaluate cases.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Phone Basic</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Phone number validation, carrier data, line type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Configure</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Phone Social</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Associated social profiles, usage patterns, reputation data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Configure</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Email Basic</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Email validation, domain info, deliverability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Configure</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Email Social</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Linked social accounts, registration info, online reputation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Configure</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#9b87f5]/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <CardTitle className="text-base">Network Graph</CardTitle>
                </div>
                <CardDescription className="text-xs">
                  Connections between users, entities, and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status: <span className="font-medium text-green-600">Active</span></span>
                  <Button variant="outline" size="sm" className="h-7 text-xs">Configure</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "identity-verification" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Identity Document Verification</h3>
          <p className="text-sm text-muted-foreground">
            Configure which identity documents the agent can request and verify.
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="id-passport" className="rounded border-gray-300" defaultChecked />
              <label htmlFor="id-passport" className="text-sm">Passport</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="id-drivers-license" className="rounded border-gray-300" defaultChecked />
              <label htmlFor="id-drivers-license" className="text-sm">Driver's License</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="id-national-id" className="rounded border-gray-300" defaultChecked />
              <label htmlFor="id-national-id" className="text-sm">National ID Card</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="id-residence-permit" className="rounded border-gray-300" />
              <label htmlFor="id-residence-permit" className="text-sm">Residence Permit</label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="id-biometrics" className="rounded border-gray-300" defaultChecked />
              <label htmlFor="id-biometrics" className="text-sm">Biometric Verification (Selfie)</label>
            </div>
          </div>

          <Separator className="my-4" />
          
          <h3 className="text-lg font-medium">Verification Methods</h3>
          <div className="mt-2 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Document Authenticity Check</h4>
                <p className="text-xs text-muted-foreground">Verify security features and detect forgeries</p>
              </div>
              <Select defaultValue="high">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select level" />
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
                <h4 className="text-sm font-medium">Face Matching</h4>
                <p className="text-xs text-muted-foreground">Match selfie to ID document photo</p>
              </div>
              <Select defaultValue="high">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select level" />
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
                <h4 className="text-sm font-medium">Liveness Detection</h4>
                <p className="text-xs text-muted-foreground">Ensure the person is physically present</p>
              </div>
              <Select defaultValue="medium">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Basic</SelectItem>
                  <SelectItem value="medium">Standard</SelectItem>
                  <SelectItem value="high">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}

      {activeTab === "workflow" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Agent Workflow</h3>
          <p className="text-sm text-muted-foreground">
            Configure the decision-making workflow for the Fraud Review Agent.
          </p>
          
          <div className="h-[450px] mt-4">
            <WorkflowEditor />
          </div>
        </div>
      )}

      {activeTab === "decisions" && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Decision Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure how the agent should recommend decisions to close cases.
          </p>
          
          <div className="space-y-4 mt-4">
            <Card className="border-green-500/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-green-500" />
                  <CardTitle className="text-base">Approve</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs" htmlFor="approve-threshold">Risk Score Threshold</label>
                      <Input id="approve-threshold" type="number" defaultValue="30" className="h-8" />
                    </div>
                    <div>
                      <label className="text-xs" htmlFor="approve-confidence">Minimum Confidence</label>
                      <Input id="approve-confidence" type="number" defaultValue="80" className="h-8" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs">Required Verifications</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">ID Document</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Email Verified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                  <CardTitle className="text-base">Review Required</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs" htmlFor="review-lower">Lower Threshold</label>
                      <Input id="review-lower" type="number" defaultValue="30" className="h-8" />
                    </div>
                    <div>
                      <label className="text-xs" htmlFor="review-upper">Upper Threshold</label>
                      <Input id="review-upper" type="number" defaultValue="70" className="h-8" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs">Triggers for Review</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Multiple Attempts</span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Network Flag</span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Document Anomaly</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-500/30">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <X className="h-5 w-5 mr-2 text-red-500" />
                  <CardTitle className="text-base">Reject</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs" htmlFor="reject-threshold">Risk Score Threshold</label>
                      <Input id="reject-threshold" type="number" defaultValue="70" className="h-8" />
                    </div>
                    <div>
                      <label className="text-xs" htmlFor="reject-confidence">Minimum Confidence</label>
                      <Input id="reject-confidence" type="number" defaultValue="85" className="h-8" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs">Automatic Rejection Triggers</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Blacklist Match</span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">ID Fraud Detected</span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Sanction List</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default FraudAgentEditor;
