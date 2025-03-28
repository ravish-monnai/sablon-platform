
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import ProcessDialog from "./ProcessDialog";
import DataSourcesTab from "./fraud-agent/DataSourcesTab";
import LLMSettingsTab from "./fraud-agent/LLMSettingsTab";
import AgentEditorTabs from "./fraud-agent/AgentEditorTabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

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
              <CardTitle className="text-lg font-medium">Fraud Review Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="transaction-queue-management">
                  <AccordionTrigger className="text-sm font-medium">4.1 Transaction Queue Management</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>Log into the fraud review platform at the beginning of each shift</li>
                      <li>
                        Review the queue of flagged transactions, prioritizing by:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Risk score (highest first)</li>
                          <li>Transaction amount (largest first)</li>
                          <li>Age of flag (oldest first)</li>
                          <li>Customer tier (premium customers may receive priority)</li>
                        </ul>
                      </li>
                      <li>Claim transactions for review according to workload capacity</li>
                      <li>Document the start time of review for each transaction</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="initial-assessment">
                  <AccordionTrigger className="text-sm font-medium">4.2 Initial Assessment</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        Review the transaction details:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Transaction amount</li>
                          <li>Merchant information</li>
                          <li>Transaction type</li>
                          <li>Payment method</li>
                          <li>Time and date</li>
                          <li>Device/channel used</li>
                        </ul>
                      </li>
                      <li>Review the automated system's reason for flagging the transaction</li>
                      <li>
                        Check customer profile:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Account age</li>
                          <li>Transaction history</li>
                          <li>Previous fraud alerts or investigations</li>
                          <li>Recent account changes</li>
                          <li>Typical spending patterns</li>
                        </ul>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="detailed-investigation">
                  <AccordionTrigger className="text-sm font-medium">4.3 Detailed Investigation</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        Compare the transaction against established fraud patterns:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Unusual transaction location</li>
                          <li>Deviation from customer's normal spending pattern</li>
                          <li>Multiple transactions in quick succession</li>
                          <li>Transactions at high-risk merchants</li>
                          <li>Round amount transactions</li>
                          <li>Transactions outside normal business hours</li>
                        </ul>
                      </li>
                      <li>
                        Check for velocity patterns:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Multiple transactions in a short timeframe</li>
                          <li>Gradual increase in transaction amounts</li>
                          <li>Testing transactions (small amounts followed by larger ones)</li>
                        </ul>
                      </li>
                      <li>
                        Verify device and location information:
                        <ul className="list-disc pl-5 pt-1">
                          <li>IP address location vs. billing/shipping address</li>
                          <li>Device fingerprint matches previous legitimate transactions</li>
                          <li>Use of VPN, proxy, or anonymizing services</li>
                        </ul>
                      </li>
                      <li>
                        Cross-reference with known fraud indicators:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Match against fraud blacklists</li>
                          <li>Check for known compromised cards/accounts</li>
                          <li>Verify against recent fraud patterns identified by the team</li>
                        </ul>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="customer-contact">
                  <AccordionTrigger className="text-sm font-medium">4.4 Customer Contact (if necessary)</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        Determine if customer contact is necessary based on:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Transaction amount</li>
                          <li>Risk level</li>
                          <li>Unusual activity pattern</li>
                          <li>Company policy</li>
                        </ul>
                      </li>
                      <li>
                        If contact is necessary:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Use the primary contact method on file</li>
                          <li>Verify customer identity using established authentication protocols</li>
                          <li>Inquire about the specific transaction(s) without leading questions</li>
                          <li>Document the conversation in detail</li>
                        </ul>
                      </li>
                      <li>
                        If unable to reach the customer:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Follow the established protocol for failed contact attempts</li>
                          <li>Consider temporary hold on the account based on risk level</li>
                        </ul>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="decision-making">
                  <AccordionTrigger className="text-sm font-medium">4.5 Decision Making</AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <ol className="space-y-1 list-decimal pl-5">
                      <li>
                        Based on the investigation, make one of the following decisions:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Approve: Transaction appears legitimate</li>
                          <li>Deny: Transaction appears fraudulent</li>
                          <li>Hold: Insufficient information to make a determination</li>
                        </ul>
                      </li>
                      <li>
                        For each decision, document:
                        <ul className="list-disc pl-5 pt-1">
                          <li>Rationale for the decision</li>
                          <li>Evidence supporting the decision</li>
                          <li>Any customer communication</li>
                          <li>Analyst name and timestamp</li>
                        </ul>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Decision Flow */}
              <div className="w-full bg-slate-50 rounded-lg border p-4 mt-4">
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
