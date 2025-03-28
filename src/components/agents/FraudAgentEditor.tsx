
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import ProcessDialog from "./ProcessDialog";
import DataSourcesTab from "./fraud-agent/DataSourcesTab";
import LLMSettingsTab from "./fraud-agent/LLMSettingsTab";
import AgentEditorTabs from "./fraud-agent/AgentEditorTabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface FraudAgentEditorProps {
  onClose: () => void;
}

const FraudAgentEditor: React.FC<FraudAgentEditorProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("agent-details");
  const [processDialogOpen, setProcessDialogOpen] = useState<boolean>(false);
  const [currentProcessTitle, setCurrentProcessTitle] = useState<string>("");

  const handleOpenProcessDialog = (title: string) => {
    setCurrentProcessTitle(title);
    setProcessDialogOpen(true);
  };

  const currentDate = new Date();
  const formattedDate = format(currentDate, "MM/dd/yyyy, h:mm:ss a");

  return (
    <div className="space-y-6 pt-6">
      <AgentEditorTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "agent-details" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Agent Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Agent Name</h3>
                <p className="text-sm">Fraud Review Agent</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Last Update</h3>
                <p className="text-sm">{formattedDate}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Mission</h3>
                <p className="text-sm">
                  El Agente de Revisión de Fraude detecta y analiza actividades sospechosas durante el procesamiento de transacciones. 
                  Utiliza análisis de datos avanzado para identificar patrones anómalos y reducir falsos positivos.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Fraud Review Manual Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-md border">
                  <h3 className="font-medium text-sm mb-2 text-blue-700">Intake & Assessment</h3>
                  <ul className="text-xs space-y-1.5">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">1.</span>
                      <span>Receive flagged transaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">2.</span>
                      <span>Verify case completeness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">3.</span>
                      <span>Assess initial risk score</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md border">
                  <h3 className="font-medium text-sm mb-2 text-blue-700">Investigation</h3>
                  <ul className="text-xs space-y-1.5">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">4.</span>
                      <span>Verify identity documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">5.</span>
                      <span>Analyze digital footprint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">6.</span>
                      <span>Check customer network</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-md border">
                  <h3 className="font-medium text-sm mb-2 text-blue-700">Decision</h3>
                  <ul className="text-xs space-y-1.5">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">7.</span>
                      <span>Determine final risk level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">8.</span>
                      <span>Apply decision rules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">9.</span>
                      <span>Document justification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center">
              <CardTitle className="text-lg font-medium">Process Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-3xl bg-white p-6 rounded-lg border mx-auto">
                <div className="flex flex-col items-center">
                  {/* Start Node */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Case Intake
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Initial Assessment */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Initial Assessment
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Identity Verification */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Identity Verification
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Data Source Analysis */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Data Source Analysis
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Network Analysis */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Network Analysis
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Risk Determination */}
                  <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                    Risk Determination
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  
                  {/* Decision Branch */}
                  <div className="p-3 border rounded-md bg-amber-50 border-amber-200 text-amber-800 font-medium mb-2 w-48 text-center">
                    Decision Point
                  </div>
                  
                  {/* Decision Branches */}
                  <div className="flex justify-between w-full my-4">
                    <div className="flex flex-col items-center w-1/3">
                      <div className="h-6 w-px bg-gray-300"></div>
                      <div className="p-3 border rounded-md bg-green-50 border-green-200 text-green-800 font-medium mb-2 w-32 text-center">
                        Approve
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <div className="h-6 w-px bg-gray-300"></div>
                      <div className="p-3 border rounded-md bg-amber-50 border-amber-200 text-amber-800 font-medium mb-2 w-32 text-center">
                        Review Required
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                      <div className="h-6 w-px bg-gray-300"></div>
                      <div className="p-3 border rounded-md bg-red-50 border-red-200 text-red-800 font-medium mb-2 w-32 text-center">
                        Reject
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "data-sources" && (
        <DataSourcesTab onOpenSOPDialog={handleOpenProcessDialog} />
      )}

      {activeTab === "llm-settings" && (
        <LLMSettingsTab />
      )}

      <div className="flex justify-end space-x-2 pt-6 border-t">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
          <Save className="mr-2 h-4 w-4" /> Save Configuration
        </Button>
      </div>

      {/* Process Dialog */}
      <ProcessDialog 
        isOpen={processDialogOpen}
        onClose={() => setProcessDialogOpen(false)}
        title={`${currentProcessTitle} Diagram`}
        description="Review the process flow and workflow for this component"
      />
    </div>
  );
};

export default FraudAgentEditor;
