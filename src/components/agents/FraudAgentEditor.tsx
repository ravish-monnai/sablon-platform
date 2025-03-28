
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import ProcessDialog from "./ProcessDialog";
import DataSourcesTab from "./fraud-agent/DataSourcesTab";
import IdentityVerificationTab from "./fraud-agent/IdentityVerificationTab";
import LLMSettingsTab from "./fraud-agent/LLMSettingsTab";
import WorkflowTab from "./fraud-agent/WorkflowTab";
import DecisionsTab from "./fraud-agent/DecisionsTab";
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
                  Agilizar la detección de fraude y proporcionar análisis rápido de casos sospechosos durante el procesamiento de transacciones.
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-sm">
                  El Agente de Revisión de Fraude está diseñado para automatizar la evaluación de riesgo y la detección de actividades 
                  sospechosas mediante el análisis de datos transaccionales, patrones de comportamiento e información de identidad.
                  Utiliza reglas avanzadas y modelos de aprendizaje automático para identificar anomalías y potenciales casos de fraude.
                </p>
                <p className="text-sm mt-2">
                  El agente incorpora lógica de decisión flexible para minimizar falsos positivos, asegurando que solo los casos 
                  verdaderamente sospechosos sean enviados para revisión manual. Sus decisiones son trazables, 
                  explicables y cumplen con los requisitos regulatorios aplicables.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center">
              <CardTitle className="text-lg font-medium">Process Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => handleOpenProcessDialog("Fraud Review Process")} 
                className="w-full py-8 border-dashed"
              >
                Click to view process diagram
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "data-sources" && (
        <DataSourcesTab onOpenSOPDialog={handleOpenProcessDialog} />
      )}

      {activeTab === "identity-verification" && (
        <IdentityVerificationTab />
      )}

      {activeTab === "llm-settings" && (
        <LLMSettingsTab />
      )}

      {activeTab === "workflow" && (
        <WorkflowTab />
      )}

      {activeTab === "decisions" && (
        <DecisionsTab />
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
