
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseItem } from "@/types/caseTypes";
import CaseActionDialog from "@/components/cases/CaseActionDialog";
import CaseHeader from "./detail/CaseHeader";
import AIOverviewTab from "./detail/tabs/AIOverviewTab";
import BankStatementFeatures from "@/components/bank-statement/BankStatementFeatures";
import AIFeedbackForm from "@/components/bank-statement/AIFeedbackForm";
import JourneyExecutionHistory from "@/components/bank-statement/JourneyExecutionHistory";
import TransactionsTab from "./detail/tabs/TransactionsTab";
import { ThumbsUp, ThumbsDown, AlertCircle, BrainCircuit, BarChart, History, MessageSquare, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BankStatementCaseDetailProps {
  caseData: CaseItem;
  onClose: () => void;
}

const BankStatementCaseDetail: React.FC<BankStatementCaseDetailProps> = ({ caseData, onClose }) => {
  const [actionDialogOpen, setActionDialogOpen] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject" | "escalate" | undefined>(undefined);

  const handleActionClick = (type: "approve" | "reject" | "escalate") => {
    setActionType(type);
    setActionDialogOpen(true);
  };

  // Determine if case has already been decisioned by the AI agent
  const isDecisioned = caseData.status !== "Pending Review";
  const isApproved = caseData.status === "Approved";
  const isRejected = caseData.status === "Rejected";

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CaseHeader caseData={caseData} />
        
        {/* Decision banner */}
        {isDecisioned && (
          <div className={`mt-4 p-3 rounded-md flex items-center justify-between ${
            isApproved ? 'bg-green-50 border border-green-200' : 
            isRejected ? 'bg-red-50 border border-red-200' : 
            'bg-amber-50 border border-amber-200'
          }`}>
            <div className="flex items-center">
              {isApproved && <Check className="h-5 w-5 mr-2 text-green-600" />}
              {isRejected && <X className="h-5 w-5 mr-2 text-red-600" />}
              <div>
                <p className={`font-medium ${
                  isApproved ? 'text-green-700' : 
                  isRejected ? 'text-red-700' : 
                  'text-amber-700'
                }`}>
                  {isApproved ? 'Approved by Bank Statement Analysis Agent' : 
                   isRejected ? 'Rejected by Bank Statement Analysis Agent' : 
                   'Agent Decision Pending'}
                </p>
                <p className="text-sm text-gray-600">
                  {caseData.decisionFactors?.[0]?.factor || 
                   (isApproved ? 'All verification checks passed' : 
                    isRejected ? 'Failed to meet required criteria' : 
                    'AI agent is currently processing this case')}
                </p>
              </div>
            </div>
            <Badge variant={isApproved ? "success" : isRejected ? "destructive" : "warning"}>
              {caseData.status}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ai-overview" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-4 md:grid-cols-5">
            <TabsTrigger value="ai-overview" className="flex items-center">
              <BrainCircuit className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">AI Overview</span>
              <span className="sm:hidden">AI</span>
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Statement Features</span>
              <span className="sm:hidden">Features</span>
            </TabsTrigger>
            <TabsTrigger value="transactions" className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Transactions</span>
              <span className="sm:hidden">Trans.</span>
            </TabsTrigger>
            <TabsTrigger value="execution-history" className="flex items-center">
              <History className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Execution History</span>
              <span className="sm:hidden">History</span>
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Agent Feedback</span>
              <span className="sm:hidden">Feedback</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai-overview">
            <AIOverviewTab caseData={caseData} />
          </TabsContent>
          
          <TabsContent value="features">
            <BankStatementFeatures caseData={caseData} />
          </TabsContent>
          
          <TabsContent value="transactions">
            <TransactionsTab caseData={caseData} />
          </TabsContent>
          
          <TabsContent value="execution-history">
            <JourneyExecutionHistory caseId={caseData.id} />
          </TabsContent>
          
          <TabsContent value="feedback">
            <div className="space-y-6">
              <AIFeedbackForm caseId={caseData.id} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="outline" onClick={onClose}>
          Back to List
        </Button>
        <div className="flex gap-2">
          {isDecisioned ? (
            <Button 
              variant="outline" 
              className={`flex items-center gap-1 ${
                isApproved ? 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200' :
                isRejected ? 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200' :
                'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isApproved && <Check className="h-4 w-4" />}
              {isRejected && <X className="h-4 w-4" />}
              AI Decision: {caseData.status}
            </Button>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="flex items-center gap-1 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                onClick={() => handleActionClick("approve")}
              >
                <ThumbsUp className="h-4 w-4" />
                Approve
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"
                onClick={() => handleActionClick("escalate")}
              >
                <AlertCircle className="h-4 w-4" />
                Escalate
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
                onClick={() => handleActionClick("reject")}
              >
                <ThumbsDown className="h-4 w-4" />
                Reject
              </Button>
            </>
          )}
        </div>
      </CardFooter>
      
      <CaseActionDialog 
        isOpen={actionDialogOpen} 
        onOpenChange={setActionDialogOpen}
        caseId={caseData.id}
        actionType={actionType}
      />
    </Card>
  );
};

export default BankStatementCaseDetail;
