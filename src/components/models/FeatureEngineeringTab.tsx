import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, Plus, Database, Mail, Phone, Network, MapPin, IdCard, 
  DollarSign, Briefcase, ShieldAlert, Banknote, CreditCard, ChartLine,
  Calculator, TrendingUp, UserCheck, AlertTriangle, FileText, ArrowLeftRight,
  Search, Fingerprint, Coins
} from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const DATA_SOURCES = [
  { id: "phone_basic", name: "Phone Basic", icon: <Phone className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "phone_social", name: "Phone Social", icon: <Phone className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "email_basic", name: "Email Basic", icon: <Mail className="h-5 w-5 mr-2 text-blue-500" /> },
  { id: "email_social", name: "Email Social", icon: <Mail className="h-5 w-5 mr-2 text-indigo-500" /> },
  { id: "employment", name: "Employment", icon: <Briefcase className="h-5 w-5 mr-2 text-purple-500" /> },
  { id: "income", name: "Income", icon: <DollarSign className="h-5 w-5 mr-2 text-green-500" /> },
  { id: "ip_intelligence", name: "IP Intelligence", icon: <MapPin className="h-5 w-5 mr-2 text-red-500" /> },
  { id: "identity", name: "Identity", icon: <IdCard className="h-5 w-5 mr-2 text-amber-500" /> },
  { id: "network_graph", name: "Network Graph", icon: <Network className="h-5 w-5 mr-2 text-blue-600" /> },
  { id: "global_security", name: "Global Security Data", icon: <ShieldAlert className="h-5 w-5 mr-2 text-gray-500" /> },
];

const FEATURE_TYPES = [
  { id: "numeric", name: "Numeric" },
  { id: "categorical", name: "Categorical" },
  { id: "boolean", name: "Boolean" },
  { id: "datetime", name: "Date/Time" },
  { id: "text", name: "Text" },
];

const TRANSFORMATIONS = [
  { id: "none", name: "None" },
  { id: "log", name: "Logarithmic" },
  { id: "normalize", name: "Normalize (0-1)" },
  { id: "standardize", name: "Standardize (z-score)" },
  { id: "binning", name: "Binning" },
  { id: "one_hot", name: "One-Hot Encoding" },
];

interface FeatureEngineeringTabProps {
  modelType: string;
}

const FeatureEngineeringTab: React.FC<FeatureEngineeringTabProps> = ({ modelType }) => {
  const [selectedCategory, setSelectedCategory] = useState("income-verification");
  
  const [features, setFeatures] = useState([
    { 
      id: 1, 
      name: "phone_verification_score", 
      description: "Score from phone verification system",
      source: "phone_basic",
      type: "numeric",
      importance: "high",
      transformation: "normalize"
    },
    { 
      id: 2, 
      name: "email_domain_age", 
      description: "Age of the email domain in days",
      source: "email_basic",
      type: "numeric",
      importance: "medium",
      transformation: "log"
    },
    { 
      id: 3, 
      name: "ip_country_match", 
      description: "Boolean indicating if IP country matches declared country",
      source: "ip_intelligence",
      type: "boolean",
      importance: "high",
      transformation: "none"
    },
  ]);
  
  const [isNewFeatureDialogOpen, setIsNewFeatureDialogOpen] = useState(false);
  const [newFeature, setNewFeature] = useState({
    name: "",
    description: "",
    source: "",
    type: "",
    transformation: "none",
    formula: ""
  });

  const handleAddFeature = () => {
    const featureId = features.length + 1;
    setFeatures([
      ...features, 
      { 
        id: featureId, 
        ...newFeature,
        importance: "medium" // Default importance
      }
    ]);
    
    setNewFeature({
      name: "",
      description: "",
      source: "",
      type: "",
      transformation: "none",
      formula: ""
    });
    setIsNewFeatureDialogOpen(false);
    
    toast.success("New feature added successfully", {
      description: `${newFeature.name} has been added to your feature set.`
    });
  };

  const getDataSourceIcon = (sourceId: string) => {
    const source = DATA_SOURCES.find(src => src.id === sourceId);
    return source ? source.icon : <Database className="h-5 w-5 mr-2 text-gray-500" />;
  };

  const renderFeatureItem = (feature: string, description: string, enabled: boolean = true) => (
    <div className="flex justify-between items-center py-2">
      <div className="flex-1">
        <div className="text-sm font-medium">{feature}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      <Switch checked={enabled} />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Feature Engineering</h3>
        <Dialog open={isNewFeatureDialogOpen} onOpenChange={setIsNewFeatureDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Feature
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Feature</DialogTitle>
              <DialogDescription>
                Create a new feature using available data sources. 
                Feature engineering is crucial for improving model performance.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="feature-name" className="text-sm font-medium">Feature Name</label>
                  <Input
                    id="feature-name"
                    value={newFeature.name}
                    onChange={(e) => setNewFeature({...newFeature, name: e.target.value})}
                    placeholder="e.g., account_age_days"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Data Source</label>
                  <Select 
                    value={newFeature.source}
                    onValueChange={(value) => setNewFeature({...newFeature, source: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select data source" />
                    </SelectTrigger>
                    <SelectContent>
                      {DATA_SOURCES.map((source) => (
                        <SelectItem key={source.id} value={source.id}>
                          <div className="flex items-center">
                            {source.icon}
                            <span>{source.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="feature-description" className="text-sm font-medium">Description</label>
                <Textarea
                  id="feature-description"
                  value={newFeature.description}
                  onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
                  placeholder="Describe what this feature represents and why it's useful"
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Feature Type</label>
                  <Select 
                    value={newFeature.type}
                    onValueChange={(value) => setNewFeature({...newFeature, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {FEATURE_TYPES.map((type) => (
                        <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Transformation</label>
                  <Select 
                    value={newFeature.transformation}
                    onValueChange={(value) => setNewFeature({...newFeature, transformation: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transformation" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRANSFORMATIONS.map((transform) => (
                        <SelectItem key={transform.id} value={transform.id}>{transform.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="feature-formula" className="text-sm font-medium">Formula / Logic</label>
                <Textarea
                  id="feature-formula"
                  value={newFeature.formula}
                  onChange={(e) => setNewFeature({...newFeature, formula: e.target.value})}
                  placeholder="e.g., IF(transaction_amount > avg_transaction * 3, 1, 0)"
                  className="w-full font-mono text-sm"
                />
                <p className="text-xs text-gray-500">
                  Define how this feature should be calculated from the raw data.
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsNewFeatureDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleAddFeature}>
                Add Feature
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
        <p className="text-sm text-slate-600 mb-2">
          <strong>Model Type:</strong> {modelType === 'binary' ? 'Binary Classification' : 
                          modelType === 'multiclass' ? 'Multi-class Classification' : 
                          modelType === 'regression' ? 'Regression' : modelType}
        </p>
        <p className="text-sm text-slate-600">
          Indian Bank Statement Analyzer features are configured to maximize predictive power for multiple classification tasks.
        </p>
      </div>
      
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid grid-cols-7 w-full">
          <TabsTrigger value="income-verification" className="text-xs">
            <Banknote className="h-4 w-4 mr-1" /> Income
          </TabsTrigger>
          <TabsTrigger value="cash-flow" className="text-xs">
            <ChartLine className="h-4 w-4 mr-1" /> Cash Flow
          </TabsTrigger>
          <TabsTrigger value="debt-service" className="text-xs">
            <CreditCard className="h-4 w-4 mr-1" /> Debt
          </TabsTrigger>
          <TabsTrigger value="risk-profiling" className="text-xs">
            <AlertTriangle className="h-4 w-4 mr-1" /> Risk
          </TabsTrigger>
          <TabsTrigger value="alternative-credit" className="text-xs">
            <Calculator className="h-4 w-4 mr-1" /> Alt Credit
          </TabsTrigger>
          <TabsTrigger value="fraud-detection" className="text-xs">
            <ShieldAlert className="h-4 w-4 mr-1" /> Fraud
          </TabsTrigger>
          <TabsTrigger value="automated-underwriting" className="text-xs">
            <Briefcase className="h-4 w-4 mr-1" /> Auto UW
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="income-verification" className="space-y-4 pt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="regular-income">
              <AccordionTrigger className="text-base font-medium text-left">
                Regular Income Identification
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Recurring deposit pattern detection",
                  "Identify recurring deposits that follow a regular pattern"
                )}
                <Separator />
                {renderFeatureItem(
                  "Payroll source identification",
                  "Identify transactions that are likely from payroll sources"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income frequency analysis",
                  "Analyze frequency patterns (weekly, bi-weekly, monthly)"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income consistency scoring",
                  "Score how consistent income deposits are over time"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="income-amount">
              <AccordionTrigger className="text-base font-medium text-left">
                Income Amount Validation
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Average income calculation",
                  "Calculate average income over the statement period"
                )}
                <Separator />
                {renderFeatureItem(
                  "Median income calculation",
                  "Calculate median income to reduce impact of outliers"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income trend analysis",
                  "Analyze if income is increasing, stable, or decreasing"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income volatility measurement",
                  "Measure how much income varies between periods"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="multiple-income">
              <AccordionTrigger className="text-base font-medium text-left">
                Multiple Income Stream Analysis
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Secondary income source identification",
                  "Identify additional sources of regular income"
                )}
                <Separator />
                {renderFeatureItem(
                  "Gig/freelance income detection",
                  "Detect irregular income consistent with gig work"
                )}
                <Separator />
                {renderFeatureItem(
                  "Passive income identification",
                  "Identify dividend, interest, or rental income"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income source diversification score",
                  "Score how diversified income sources are"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="income-stability">
              <AccordionTrigger className="text-base font-medium text-left">
                Income Stability Metrics
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Income longevity assessment",
                  "Assess how long current income sources have been active"
                )}
                <Separator />
                {renderFeatureItem(
                  "Gap analysis between income deposits",
                  "Analyze gaps or interruptions in income"
                )}
                <Separator />
                {renderFeatureItem(
                  "Seasonal income pattern detection",
                  "Detect seasonal variations in income"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income interruption frequency",
                  "Measure how often income streams are interrupted"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="income-flags">
              <AccordionTrigger className="text-base font-medium text-left">
                Income Verification Flags
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Large unusual deposits identification",
                  "Flag deposits that don't match normal patterns"
                )}
                <Separator />
                {renderFeatureItem(
                  "Round-sum deposit detection",
                  "Detect suspiciously round deposits"
                )}
                <Separator />
                {renderFeatureItem(
                  "Transfer vs. genuine income differentiation",
                  "Distinguish between transfers and actual income"
                )}
                <Separator />
                {renderFeatureItem(
                  "Income source credibility scoring",
                  "Score the credibility of income sources"
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="cash-flow" className="space-y-4 pt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="net-cash-flow">
              <AccordionTrigger className="text-base font-medium text-left">
                Net Cash Flow Metrics
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Monthly net cash flow calculation",
                  "Calculate net cash flow on a monthly basis"
                )}
                <Separator />
                {renderFeatureItem(
                  "Rolling average cash flow",
                  "Calculate rolling average of cash flow over time periods"
                )}
                <Separator />
                {renderFeatureItem(
                  "Cash flow trend analysis",
                  "Analyze trends in cash flow over statement period"
                )}
                <Separator />
                {renderFeatureItem(
                  "Minimum/maximum cash flow periods",
                  "Identify periods of lowest and highest cash flow"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="expense-analysis">
              <AccordionTrigger className="text-base font-medium text-left">
                Expense Analysis
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Fixed vs. variable expense ratio",
                  "Calculate ratio between fixed and variable expenses"
                )}
                <Separator />
                {renderFeatureItem(
                  "Essential vs. discretionary spending breakdown",
                  "Categorize and analyze essential vs discretionary spending"
                )}
                <Separator />
                {renderFeatureItem(
                  "Expense growth rate",
                  "Calculate the rate at which expenses are growing"
                )}
                <Separator />
                {renderFeatureItem(
                  "Expense-to-income ratio",
                  "Calculate ratio of expenses to income over periods"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="balance-management">
              <AccordionTrigger className="text-base font-medium text-left">
                Balance Management
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Average daily balance calculation",
                  "Calculate average daily balance across statement period"
                )}
                <Separator />
                {renderFeatureItem(
                  "Balance volatility measurement",
                  "Measure the volatility of account balance"
                )}
                <Separator />
                {renderFeatureItem(
                  "Minimum balance maintenance",
                  "Analyze ability to maintain minimum balance levels"
                )}
                <Separator />
                {renderFeatureItem(
                  "Balance trend analysis",
                  "Analyze trends in account balance over time"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="liquidity-indicators">
              <AccordionTrigger className="text-base font-medium text-left">
                Liquidity Indicators
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Days of cash buffer calculation",
                  "Calculate how many days expenses can be covered"
                )}
                <Separator />
                {renderFeatureItem(
                  "Quick liquidity ratio",
                  "Calculate ratio of liquid assets to short-term obligations"
                )}
                <Separator />
                {renderFeatureItem(
                  "Cash reserve adequacy",
                  "Assess adequacy of cash reserves relative to expenses"
                )}
                <Separator />
                {renderFeatureItem(
                  "Emergency fund assessment",
                  "Evaluate presence and adequacy of emergency funds"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="cash-flow-stability">
              <AccordionTrigger className="text-base font-medium text-left">
                Cash Flow Stability
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Cash flow consistency score",
                  "Score overall consistency of cash flow patterns"
                )}
                <Separator />
                {renderFeatureItem(
                  "Seasonal cash flow pattern detection",
                  "Detect and analyze seasonal patterns in cash flow"
                )}
                <Separator />
                {renderFeatureItem(
                  "Cash flow stress periods identification",
                  "Identify periods of cash flow stress or constraints"
                )}
                <Separator />
                {renderFeatureItem(
                  "Cash flow projection accuracy",
                  "Measure accuracy of projected vs actual cash flow"
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="debt-service" className="space-y-4 pt-4">
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <CreditCard className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium mb-1">Debt Service Coverage Features</h3>
                <p className="text-sm text-muted-foreground mb-4">Configure debt-related features and analysis</p>
                <Button variant="outline" className="w-full max-w-xs">Configure Debt Features</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="risk-profiling" className="space-y-4 pt-4">
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <AlertTriangle className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium mb-1">Risk Profiling Features</h3>
                <p className="text-sm text-muted-foreground mb-4">Configure risk assessment features</p>
                <Button variant="outline" className="w-full max-w-xs">Configure Risk Features</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alternative-credit" className="space-y-4 pt-4">
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <Calculator className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium mb-1">Alternative Credit Assessment</h3>
                <p className="text-sm text-muted-foreground mb-4">Configure alternative credit scoring features</p>
                <Button variant="outline" className="w-full max-w-xs">Configure Alt Credit Features</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fraud-detection" className="space-y-4 pt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="identity-verification">
              <AccordionTrigger className="text-base font-medium text-left">
                Identity Verification Signals
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Name matching on deposits",
                  "Verify deposit names match account holder"
                )}
                <Separator />
                {renderFeatureItem(
                  "Address consistency with transactions",
                  "Check address-related transactions against application"
                )}
                <Separator />
                {renderFeatureItem(
                  "Employment verification through deposits",
                  "Verify employment through deposit patterns"
                )}
                <Separator />
                {renderFeatureItem(
                  "Digital footprint consistency",
                  "Analyze consistency of digital transaction patterns"
                )}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="suspicious-transactions">
              <AccordionTrigger className="text-base font-medium text-left">
                Suspicious Transaction Patterns
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-2">
                {renderFeatureItem(
                  "Unusual transaction timing or frequency",
                  "Detect transactions with unusual timing patterns"
                )}
                <Separator />
                {renderFeatureItem(
                  "Out-of-pattern transaction amounts",
                  "Identify transaction amounts that don't fit user patterns"
                )}
                <Separator />
                {renderFeatureItem(
                  "Atypical merchant category spending",
                  "Detect spending in unusual merchant categories"
                )}
                <Separator />
                {renderFeatureItem(
                  "Velocity checks on deposits/withdrawals",
                  "Monitor speed and frequency of deposits and withdrawals"
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="automated-underwriting" className="space-y-4 pt-4">
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <Briefcase className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium mb-1">Automated Underwriting Features</h3>
                <p className="text-sm text-muted-foreground mb-4">Configure automated underwriting features</p>
                <Button variant="outline" className="w-full max-w-xs">Configure Auto UW Features</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureEngineeringTab;
