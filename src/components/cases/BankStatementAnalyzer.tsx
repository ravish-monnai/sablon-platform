
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, DollarSign, ArrowUpRight, History } from "lucide-react";
import { useMarket } from "@/contexts/MarketContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ExecutionHistoryTab from "@/components/ai-journeys/components/ExecutionHistoryTab";
import SummaryTabContent from "./bank-statement/SummaryTabContent";
import AlertsTabContent from "./bank-statement/AlertsTabContent";
import BanksTabContent from "./bank-statement/BanksTabContent";
import LogDetailDialog from "./bank-statement/LogDetailDialog";

const BankStatementAnalyzer = () => {
  const { selectedMarket } = useMarket();
  const isCurrencyIndian = selectedMarket === 'India';
  const CurrencyIcon = isCurrencyIndian ? 
    () => <span className="font-bold mr-1">₹</span> : 
    DollarSign;
  
  const [showExecutionHistory, setShowExecutionHistory] = useState(false);
  const [selectedExecution, setSelectedExecution] = useState<string | null>(null);
  const [showLogDetails, setShowLogDetails] = useState(false);

  const handleViewLogs = (executionId: string) => {
    setSelectedExecution(executionId);
    setShowLogDetails(true);
  };

  return (
    <>
      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-500" />
            <CardTitle>Bank Statement Analyzer Agent</CardTitle>
          </div>
          <CardDescription>
            Specialized analysis for bank statements {selectedMarket !== 'Global' ? `in ${selectedMarket}` : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="banks">Banks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary">
              <SummaryTabContent />
            </TabsContent>
            
            <TabsContent value="alerts">
              <AlertsTabContent />
            </TabsContent>
            
            <TabsContent value="banks">
              <BanksTabContent />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => setShowExecutionHistory(true)}
            >
              <History className="h-4 w-4" />
              Execution History
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <CurrencyIcon className="h-4 w-4" />
              View All Cases
            </Button>
          </div>
          <Button size="sm" className="flex items-center gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Go to Journey
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showExecutionHistory} onOpenChange={setShowExecutionHistory}>
        <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Execution History</DialogTitle>
            <DialogDescription>
              Bank Statement Analyzer Agent execution logs {selectedMarket !== 'Global' ? `for ${selectedMarket}` : ''}
            </DialogDescription>
          </DialogHeader>
          <ExecutionHistoryTab onViewLogs={handleViewLogs} />
        </DialogContent>
      </Dialog>

      <LogDetailDialog 
        executionId={selectedExecution}
        open={showLogDetails}
        onOpenChange={setShowLogDetails}
      />
    </>
  );
};

export default BankStatementAnalyzer;
