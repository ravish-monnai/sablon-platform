
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, CreditCard, ChartBar, Users, PlusCircle, 
  ArrowUpDown, Banknote, AreaChart, Building, Check
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
      confidenceThreshold
    });
    onClose();
  };
  
  return (
    <div className="mt-6 space-y-6">
      <Tabs defaultValue="features">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="models">Models & Data</TabsTrigger>
          <TabsTrigger value="output">Output Format</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Banknote className="mr-2 h-5 w-5 text-green-500" />
                    <Label htmlFor="income-verification">Income Verification</Label>
                  </div>
                  <Switch 
                    id="income-verification" 
                    checked={enabledFeatures.incomeVerification}
                    onCheckedChange={() => handleToggleFeature('incomeVerification')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Identify and verify recurring income sources from bank statements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-purple-500" />
                    <Label htmlFor="expense-categories">Expense Categorization</Label>
                  </div>
                  <Switch 
                    id="expense-categories" 
                    checked={enabledFeatures.expenseCategories}
                    onCheckedChange={() => handleToggleFeature('expenseCategories')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Categorize expenses into groups like housing, utilities, food, etc.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-5 w-5 text-blue-500" />
                    <Label htmlFor="recurring-payments">Recurring Payments</Label>
                  </div>
                  <Switch 
                    id="recurring-payments" 
                    checked={enabledFeatures.recurringPayments}
                    onCheckedChange={() => handleToggleFeature('recurringPayments')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Detect and flag subscription services and recurring bills.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <AreaChart className="mr-2 h-5 w-5 text-amber-500" />
                    <Label htmlFor="cash-flow">Cash Flow Analysis</Label>
                  </div>
                  <Switch 
                    id="cash-flow" 
                    checked={enabledFeatures.cashFlowAnalysis}
                    onCheckedChange={() => handleToggleFeature('cashFlowAnalysis')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Analyze cash flow patterns and identify fluctuations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-red-500" />
                    <Label htmlFor="abnormal-transactions">Abnormal Transactions</Label>
                  </div>
                  <Switch 
                    id="abnormal-transactions" 
                    checked={enabledFeatures.abnormalTransactions}
                    onCheckedChange={() => handleToggleFeature('abnormalTransactions')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Flag unusual or abnormal transactions that deviate from patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-indigo-500" />
                    <Label htmlFor="overdraft-detection">Overdraft Detection</Label>
                  </div>
                  <Switch 
                    id="overdraft-detection" 
                    checked={enabledFeatures.overdraftDetection}
                    onCheckedChange={() => handleToggleFeature('overdraftDetection')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Detect and analyze overdraft instances and recovery patterns.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Add custom feature</span>
          </div>
        </TabsContent>
        
        <TabsContent value="models" className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="llm-model" className="mb-2 block">LLM Model</Label>
              <Select value={llmModel} onValueChange={setLLMModel}>
                <SelectTrigger id="llm-model" className="w-full">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4o">OpenAI GPT-4o</SelectItem>
                  <SelectItem value="claude-3-opus">Anthropic Claude 3 Opus</SelectItem>
                  <SelectItem value="llama-3-70b">Meta Llama 3 (70B)</SelectItem>
                  <SelectItem value="gpt-4o-mini">OpenAI GPT-4o Mini</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-1">
                Select the large language model used for document analysis and text extraction.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                <Badge variant="outline">{confidenceThreshold}%</Badge>
              </div>
              <Slider 
                id="confidence-threshold"
                min={50} 
                max={95} 
                step={5} 
                value={confidenceThreshold} 
                onValueChange={setConfidenceThreshold} 
              />
              <p className="text-sm text-muted-foreground mt-1">
                Minimum confidence level required for transaction categorization.
              </p>
            </div>
            
            <div className="pt-4">
              <Label className="mb-2 block">Connected Data Sources</Label>
              <div className="space-y-2">
                <div className="flex items-center p-2 border rounded-md bg-gray-50">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Bank Transaction Database</span>
                </div>
                <div className="flex items-center p-2 border rounded-md bg-gray-50">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Financial Category Taxonomy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer">
                  <PlusCircle className="h-4 w-4" />
                  <span>Connect new data source</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="json-output">JSON Output</Label>
              <Switch id="json-output" checked={true} disabled />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="csv-export">CSV Export</Label>
              <Switch id="csv-export" checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="pdf-report">PDF Report</Label>
              <Switch id="pdf-report" checked={false} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dashboard-visuals">Dashboard Visuals</Label>
              <Switch id="dashboard-visuals" checked={true} />
            </div>
            
            <div className="pt-4">
              <Label className="mb-2 block">Output Integrations</Label>
              <Select defaultValue="crm">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select integration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crm">CRM System</SelectItem>
                  <SelectItem value="underwriting">Underwriting Platform</SelectItem>
                  <SelectItem value="loan-origination">Loan Origination System</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator />
      
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save Configuration</Button>
      </div>
    </div>
  );
};

export default BankStatementAgentEditor;
