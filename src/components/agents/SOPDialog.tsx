
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Workflow } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SOPDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

const SOPDialog: React.FC<SOPDialogProps> = ({
  isOpen,
  onClose,
  title,
  description
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <Tabs defaultValue="sop" className="w-full mt-4">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="sop" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Standard Operating Procedure
            </TabsTrigger>
            <TabsTrigger value="workflow" className="flex items-center">
              <Workflow className="h-4 w-4 mr-2" />
              Workflow Diagram
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sop" className="space-y-4">
            <div className="text-sm space-y-4">
              <h3 className="text-lg font-medium">Fraud Review Agent SOP</h3>
              
              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">1. Case Intake</h4>
                <p>1.1. Receive flagged cases from the fraud detection system</p>
                <p>1.2. Verify case contains all required information</p>
                <p>1.3. Prioritize cases based on risk score and urgency</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">2. Initial Assessment</h4>
                <p>2.1. Review customer profile and history</p>
                <p>2.2. Analyze transaction patterns for anomalies</p>
                <p>2.3. Check against known fraud indicators</p>
                <p>2.4. Verify device and location information</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">3. Identity Verification</h4>
                <p>3.1. Verify identity document authenticity</p>
                <p>3.2. Compare selfie to ID photo using facial recognition</p>
                <p>3.3. Check for document tampering or alterations</p>
                <p>3.4. Verify information against external databases</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">4. Data Source Analysis</h4>
                <p>4.1. Query and analyze email reputation data</p>
                <p>4.2. Check phone number integrity and ownership</p>
                <p>4.3. Analyze IP address for proxy/VPN usage</p>
                <p>4.4. Review device fingerprint for suspicious indicators</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">5. Network Analysis</h4>
                <p>5.1. Identify connections to other customers</p>
                <p>5.2. Check for shared attributes with known fraud cases</p>
                <p>5.3. Analyze transaction relationships for patterns</p>
                <p>5.4. Identify suspicious network clusters</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">6. Risk Determination</h4>
                <p>6.1. Calculate final risk score based on all evidence</p>
                <p>6.2. Apply business rules for decision thresholds</p>
                <p>6.3. Consider market-specific risk factors</p>
                <p>6.4. Document the risk assessment with supporting evidence</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">7. Decision and Action</h4>
                <p>7.1. Approve: Clear case for processing</p>
                <p>7.2. Review Required: Escalate to human review with notes</p>
                <p>7.3. Reject: Decline case with detailed reasoning</p>
                <p>7.4. Record all decisions with justification</p>
              </div>

              <div className="p-4 border rounded-md bg-slate-50">
                <h4 className="font-medium mb-2">8. Continuous Learning</h4>
                <p>8.1. Capture feedback from human reviewers</p>
                <p>8.2. Update rules and thresholds based on outcomes</p>
                <p>8.3. Identify new fraud patterns for future detection</p>
                <p>8.4. Generate insights for fraud prevention improvements</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="workflow" className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4">Fraud Review Workflow</h3>

            <div className="w-full max-w-3xl bg-white p-6 rounded-lg border">
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
                
                {/* Feedback Loop */}
                <div className="mt-4 p-3 border rounded-md bg-purple-50 border-purple-200 text-purple-800 font-medium w-48 text-center">
                  Continuous Learning
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SOPDialog;
