
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
              <CardTitle className="text-lg font-medium">Fraud Review SOP</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-4">
                  {/* SOP Process Flow */}
                  <div className="w-full bg-slate-50 rounded-lg border p-4">
                    <h3 className="font-medium text-sm mb-3 text-blue-700">Manual Fraud Review Process</h3>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">1</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Transaction Queue Management</h4>
                          <p className="text-xs text-gray-600">Prioritize by risk score, amount, age, and customer tier</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">2</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Initial Assessment</h4>
                          <p className="text-xs text-gray-600">Review transaction details, flags, and customer profile</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">3</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Detailed Investigation</h4>
                          <p className="text-xs text-gray-600">Check fraud patterns, velocity, device info, and known indicators</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">4</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Customer Contact (if necessary)</h4>
                          <p className="text-xs text-gray-600">Verify identity and inquire about suspicious transactions</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">5</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Decision Making</h4>
                          <p className="text-xs text-gray-600">Approve, deny, or hold with documented rationale</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">6</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Action Implementation</h4>
                          <p className="text-xs text-gray-600">Process approvals, denials, or hold actions accordingly</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">7</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Post-Decision Actions</h4>
                          <p className="text-xs text-gray-600">Update notes, fraud database, and notify relevant parties</p>
                        </div>
                      </div>
                      <div className="w-0.5 h-4 bg-gray-300 ml-4"></div>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">8</div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">Quality Assurance</h4>
                          <p className="text-xs text-gray-600">Record metrics and review for continuous improvement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decision Flow */}
                  <div className="w-full bg-slate-50 rounded-lg border p-4">
                    <h3 className="font-medium text-sm mb-3 text-blue-700">Decision Flow</h3>
                    <div className="flex flex-col items-center">
                      <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                        Flagged Transaction
                      </div>
                      <div className="h-6 w-px bg-gray-300"></div>
                      
                      <div className="p-3 border rounded-md bg-blue-50 border-blue-200 text-blue-800 font-medium mb-2 w-48 text-center">
                        Risk Assessment
                      </div>
                      <div className="h-6 w-px bg-gray-300"></div>
                      
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
                          <div className="text-xs text-center mt-1 text-gray-500">Release holds<br/>Update status</div>
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                          <div className="h-6 w-px bg-gray-300"></div>
                          <div className="p-3 border rounded-md bg-amber-50 border-amber-200 text-amber-800 font-medium mb-2 w-32 text-center">
                            Hold
                          </div>
                          <div className="text-xs text-center mt-1 text-gray-500">Temporary hold<br/>Gather more info</div>
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                          <div className="h-6 w-px bg-gray-300"></div>
                          <div className="p-3 border rounded-md bg-red-50 border-red-200 text-red-800 font-medium mb-2 w-32 text-center">
                            Deny
                          </div>
                          <div className="text-xs text-center mt-1 text-gray-500">Block transaction<br/>Flag account</div>
                        </div>
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
