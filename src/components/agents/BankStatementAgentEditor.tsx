
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PlayCircle } from "lucide-react";
import BankStatementFeatures from "@/components/bank-statement/BankStatementFeatures";
import BankStatementModels from "./bank-statement/BankStatementModels";
import BankStatementOutput from "./bank-statement/BankStatementOutput";
import BankStatementTestDialog from "./bank-statement/BankStatementTestDialog";
import { Market, useMarket } from "@/contexts/MarketContext";

interface BankStatementAgentEditorProps {
  onClose: () => void;
}

const BankStatementAgentEditor: React.FC<BankStatementAgentEditorProps> = ({ onClose }) => {
  const [enabledFeatures, setEnabledFeatures] = useState({
    incomeVerification: true,
    expenseCategories: true,
    recurringPayments: true,
    cashFlowAnalysis: true,
    abnormalTransactions: true,
    overdraftDetection: true,
    paymentSchedules: false,
    accountBalancePrediction: false
  });
  
  const [llmModel, setLLMModel] = useState("gpt-4o");
  const [confidenceThreshold, setConfidenceThreshold] = useState([80]);
  const [isTestDialogOpen, setIsTestDialogOpen] = useState(false);
  const { selectedMarket } = useMarket();
  
  const handleToggleFeature = (feature: string) => {
    setEnabledFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature as keyof typeof prev]
    }));
  };
  
  const handleSave = () => {
    console.log("Saving bank statement analyzer configuration:", {
      enabledFeatures,
      llmModel,
      confidenceThreshold,
      selectedMarket
    });
    onClose();
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Bank Statement Analyzer Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure how your AI agent analyzes bank statements {selectedMarket !== 'Global' ? `for ${selectedMarket}` : 'globally'}
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setIsTestDialogOpen(true)}
          className="flex items-center gap-2"
        >
          <PlayCircle className="h-4 w-4" />
          Test with Sample
        </Button>
      </div>
      
      <Tabs defaultValue="features">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="models">Models & Data</TabsTrigger>
          <TabsTrigger value="output">Output Format</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features" className="space-y-6">
          <BankStatementFeatures 
            enabledFeatures={enabledFeatures} 
            handleToggleFeature={handleToggleFeature} 
          />
        </TabsContent>
        
        <TabsContent value="models" className="space-y-6">
          <BankStatementModels 
            llmModel={llmModel}
            setLLMModel={setLLMModel}
            confidenceThreshold={confidenceThreshold}
            setConfidenceThreshold={setConfidenceThreshold}
          />
        </TabsContent>
        
        <TabsContent value="output" className="space-y-6">
          <BankStatementOutput />
        </TabsContent>
      </Tabs>
      
      <Separator />
      
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save Configuration</Button>
      </div>

      <BankStatementTestDialog
        isOpen={isTestDialogOpen}
        onOpenChange={setIsTestDialogOpen}
        selectedMarket={selectedMarket}
        setSelectedMarket={undefined} // No longer allow changing market in the test dialog
      />
    </div>
  );
};

export default BankStatementAgentEditor;
