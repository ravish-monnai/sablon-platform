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
  ArrowUpDown, Banknote, AreaChart, Building, Check,
  PlayCircle, X, AlertTriangle, ShieldCheck, MapPin, Globe
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  const [testResult, setTestResult] = useState<any>(null);
  const [isTestInProgress, setIsTestInProgress] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState("India");
  
  const markets = [
    { name: "India", code: "IN" },
    { name: "Mexico", code: "MX" },
    { name: "Indonesia", code: "ID" },
    { name: "Philippines", code: "PH" },
    { name: "Malaysia", code: "MY" }
  ];
  
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

  const runTestWithSample = () => {
    setIsTestInProgress(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const sampleResult = {
        market: selectedMarket,
        riskScore: {
          score: 35,
          level: "Low Risk",
          factors: [
            { name: "Stable Income", impact: "Positive" },
            { name: "Positive Cash Flow", impact: "Positive" },
            { name: "Large Irregular Transaction", impact: "Negative" }
          ]
        },
        incomeVerification: {
          status: "success",
          totalIncome: 5250.00,
          recurringIncome: [
            { source: "ACME Corp", amount: 4500.00, frequency: "Monthly" },
            { source: "Side Gig LLC", amount: 750.00, frequency: "Monthly" }
          ]
        },
        expenseCategories: {
          status: "success",
          categories: [
            { name: "Housing", total: 1800.00, percentage: 38 },
            { name: "Utilities", total: 450.00, percentage: 9 },
            { name: "Food", total: 750.00, percentage: 16 },
            { name: "Transportation", total: 350.00, percentage: 7 },
            { name: "Entertainment", total: 500.00, percentage: 11 },
            { name: "Misc", total: 900.00, percentage: 19 }
          ]
        },
        recurringPayments: {
          status: "success",
          identified: [
            { name: "Netflix", amount: 14.99, category: "Entertainment" },
            { name: "Gym Membership", amount: 49.99, category: "Health" },
            { name: "Phone Bill", amount: 95.00, category: "Utilities" },
            { name: "Car Insurance", amount: 120.00, category: "Insurance" }
          ]
        },
        cashFlowAnalysis: {
          status: "success",
          netCashFlow: 1200.00,
          savingsRate: 22.8,
          volatility: "Low"
        },
        abnormalTransactions: {
          status: "success",
          identified: [
            { date: "2023-10-15", amount: 1200.00, description: "Unusual large withdrawal", risk: "Medium" }
          ]
        }
      };
      
      setTestResult(sampleResult);
      setIsTestInProgress(false);
      toast.success(`Bank statement analysis for ${selectedMarket} completed successfully`);
    }, 2500);
  };
  
  const getRiskScoreColor = (score: number) => {
    if (score <= 35) return "bg-green-100 text-green-800";
    if (score <= 65) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };
  
  return (
    <div className="mt-6 space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Bank Statement Analyzer Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Configure how your AI agent analyzes customer bank statements
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

      <Dialog open={isTestDialogOpen} onOpenChange={setIsTestDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Bank Statement Analyzer Test</DialogTitle>
            <DialogDescription>
              Test your bank statement analyzer configuration with a sample statement
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {!testResult && !isTestInProgress && (
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <FileText className="h-16 w-16 text-muted-foreground" />
                <p className="text-center text-muted-foreground">
                  Run a test to see how your bank statement analyzer would process a real customer statement.
                  <br />
                  This will process a pre-defined sample bank statement with your current configuration.
                </p>
                
                <div className="w-full max-w-xs mt-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <Label htmlFor="market-selection">Select Market</Label>
                  </div>
                  <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                    <SelectTrigger id="market-selection" className="w-full">
                      <SelectValue placeholder="Select a market" />
                    </SelectTrigger>
                    <SelectContent>
                      {markets.map((market) => (
                        <SelectItem key={market.code} value={market.name}>
                          <div className="flex items-center">
                            <span>{market.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={runTestWithSample} className="mt-4">
                  Run Test Analysis
                </Button>
              </div>
            )}
            
            {isTestInProgress && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
                <p className="text-center">Analyzing sample bank statement for {selectedMarket}...</p>
              </div>
            )}
            
            {testResult && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-medium">Market: {testResult.market}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setTestResult(null);
                    }}
                    className="flex items-center gap-1"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Change Market
                  </Button>
                </div>
                
                {testResult.riskScore && (
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className={`p-4 ${getRiskScoreColor(testResult.riskScore.score)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <ShieldCheck className="mr-2 h-5 w-5" />
                          <h3 className="font-medium">Risk Assessment</h3>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold text-lg mr-2">{testResult.riskScore.score}</span>
                          <Badge variant="outline" className={getRiskScoreColor(testResult.riskScore.score)}>
                            {testResult.riskScore.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium">Contributing Factors</h4>
                        <div className="space-y-2">
                          {testResult.riskScore.factors.map((factor, i) => (
                            <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                              <span className="text-sm">{factor.name}</span>
                              <Badge variant={factor.impact === "Positive" ? "success" : "warning"}>
                                {factor.impact}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Banknote className="mr-2 h-5 w-5 text-green-500" />
                          <h3 className="font-medium">Income Verification</h3>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Total Income:</span>
                          <span className="font-medium">${testResult.incomeVerification.totalIncome.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          <span className="text-sm text-muted-foreground">Recurring Income:</span>
                          {testResult.incomeVerification.recurringIncome.map((income: any, i: number) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span>{income.source}</span>
                              <span>${income.amount.toFixed(2)} ({income.frequency})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-purple-500" />
                          <h3 className="font-medium">Expense Categories</h3>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
                      </div>
                      <div className="space-y-2">
                        {testResult.expenseCategories.categories.map((category: any, i: number) => (
                          <div key={i} className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-primary" style={{ 
                                backgroundColor: ['#10B981', '#8B5CF6', '#F97316', '#FB7185', '#4DA3FF', '#D946EF'][i % 6] 
                              }}></div>
                              <span>{category.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>${category.total.toFixed(2)}</span>
                              <span className="text-xs text-muted-foreground">({category.percentage}%)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <ArrowUpDown className="mr-2 h-5 w-5 text-blue-500" />
                          <h3 className="font-medium">Recurring Payments</h3>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
                      </div>
                      <div className="space-y-2">
                        {testResult.recurringPayments.identified.map((payment: any, i: number) => (
                          <div key={i} className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span>{payment.name}</span>
                              <Badge variant="outline" className="text-xs">{payment.category}</Badge>
                            </div>
                            <span>${payment.amount.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <AreaChart className="mr-2 h-5 w-5 text-amber-500" />
                          <h3 className="font-medium">Cash Flow Analysis</h3>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Net Cash Flow:</span>
                          <span className="font-medium text-green-600">+${testResult.cashFlowAnalysis.netCashFlow.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Savings Rate:</span>
                          <span className="font-medium">{testResult.cashFlowAnalysis.savingsRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Volatility:</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {testResult.cashFlowAnalysis.volatility}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {testResult.abnormalTransactions.identified.length > 0 && (
                    <Card className="col-span-1 md:col-span-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <FileText className="mr-2 h-5 w-5 text-red-500" />
                            <h3 className="font-medium">Abnormal Transactions</h3>
                          </div>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            {testResult.abnormalTransactions.identified.length} Found
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          {testResult.abnormalTransactions.identified.map((transaction: any, i: number) => (
                            <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{transaction.date}</span>
                                  <span className="text-sm">{transaction.description}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <span>${transaction.amount.toFixed(2)}</span>
                                <Badge variant={
                                  transaction.risk === "Low" ? "outline" : 
                                  transaction.risk === "Medium" ? "secondary" : "destructive"
                                }>
                                  {transaction.risk} Risk
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                <div className="pt-4">
                  <div className="border rounded-md p-4 bg-muted/30">
                    <div className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-medium">Analysis Summary</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The applicant shows healthy financial patterns with stable income sources and responsible spending habits.
                      Monthly income of $5,250.00 exceeds expenses by $1,200.00, resulting in a positive cash flow and 22.8% savings rate.
                      One abnormal transaction was identified but appears to be a one-time event rather than a pattern of concern.
                      Overall risk score: {testResult.riskScore?.score || "N/A"} ({testResult.riskScore?.level || "N/A"})
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter>
            {testResult && (
              <Button variant="outline" onClick={() => setTestResult(null)} className="mr-auto">
                <X className="h-4 w-4 mr-2" />
                Clear Results
              </Button>
            )}
            <Button variant="outline" onClick={() => setIsTestDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BankStatementAgentEditor;
