
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Banknote, ChartLine, CreditCard, AlertTriangle, 
  Calculator, ShieldAlert, Briefcase, FileText,
  CheckCircle2, XCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bankStatementFeatures, FeatureCategory, FeatureSubcategory, FeatureDetail } from "@/components/agents/bank-statement/featureData";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BankStatementFeaturesProps {
  enabledFeatures?: Record<string, boolean>;
  handleToggleFeature?: (feature: string) => void;
}

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Income Verification":
      return <Banknote className="h-5 w-5 text-amber-500" />;
    case "Cash Flow Assessment":
      return <ChartLine className="h-5 w-5 text-blue-500" />;
    case "Debt Service Coverage":
      return <CreditCard className="h-5 w-5 text-purple-500" />;
    case "Risk Profiling":
      return <AlertTriangle className="h-5 w-5 text-orange-500" />;
    case "Alternative Credit Assessment":
      return <Calculator className="h-5 w-5 text-green-500" />;
    case "Fraud Detection":
      return <ShieldAlert className="h-5 w-5 text-red-500" />;
    case "Automated Underwriting":
      return <Briefcase className="h-5 w-5 text-indigo-500" />;
    case "Regulatory Compliance":
      return <FileText className="h-5 w-5 text-gray-500" />;
    default:
      return <FileText className="h-5 w-5 text-gray-500" />;
  }
};

const getBgColorForCategory = (categoryName: string) => {
  switch (categoryName) {
    case "Income Verification":
      return "bg-amber-50 border-amber-200";
    case "Cash Flow Assessment":
      return "bg-blue-50 border-blue-200";
    case "Debt Service Coverage":
      return "bg-purple-50 border-purple-200";
    case "Risk Profiling":
      return "bg-orange-50 border-orange-200";
    case "Alternative Credit Assessment":
      return "bg-green-50 border-green-200";
    case "Fraud Detection":
      return "bg-red-50 border-red-200";
    case "Automated Underwriting":
      return "bg-indigo-50 border-indigo-200";
    case "Regulatory Compliance":
      return "bg-gray-50 border-gray-200";
    default:
      return "bg-gray-50 border-gray-200";
  }
};

const getTextColorForCategory = (categoryName: string) => {
  switch (categoryName) {
    case "Income Verification":
      return "text-amber-800";
    case "Cash Flow Assessment":
      return "text-blue-800";
    case "Debt Service Coverage":
      return "text-purple-800";
    case "Risk Profiling":
      return "text-orange-800";
    case "Alternative Credit Assessment":
      return "text-green-800";
    case "Fraud Detection":
      return "text-red-800";
    case "Automated Underwriting":
      return "text-indigo-800";
    case "Regulatory Compliance":
      return "text-gray-800";
    default:
      return "text-gray-800";
  }
};

const BankStatementFeatures: React.FC<BankStatementFeaturesProps> = ({ 
  enabledFeatures = {}, 
  handleToggleFeature 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [featureStates, setFeatureStates] = useState<Record<string, boolean>>({});

  const toggleFeature = (categoryName: string, subcategoryName: string, featureName: string) => {
    const featureKey = `${categoryName}|${subcategoryName}|${featureName}`;
    setFeatureStates(prev => ({
      ...prev,
      [featureKey]: !prev[featureKey]
    }));
  };

  // Calculate feature counts
  const totalFeatures = bankStatementFeatures.reduce((total, category) => {
    return total + category.subcategories.reduce((subtotal, subcategory) => {
      return subtotal + subcategory.features.length;
    }, 0);
  }, 0);

  const enabledFeatureCount = bankStatementFeatures.reduce((total, category) => {
    return total + category.subcategories.reduce((subtotal, subcategory) => {
      return subtotal + subcategory.features.filter(feature => feature.enabled).length;
    }, 0);
  }, 0);

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <FileText className="mr-2 h-5 w-5 text-amber-500" />
            Indian Bank Statement Analyzer Features
          </CardTitle>
          <CardDescription>
            Configure which features to enable for the bank statement analyzer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-6">
              <TabsTrigger value="summary">Feature Summary</TabsTrigger>
              <TabsTrigger value="configuration">Detailed Configuration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="summary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <h3 className="text-sm font-medium flex items-center text-amber-800 mb-2">
                    <Banknote className="mr-2 h-4 w-4" /> Income Verification
                  </h3>
                  <ul className="text-xs space-y-1 text-amber-700">
                    <li>• Regular Income Identification</li>
                    <li>• Income Amount Validation</li>
                    <li>• Multiple Income Stream Analysis</li>
                    <li>• Income Stability Metrics</li>
                    <li>• Income Verification Flags</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                  <h3 className="text-sm font-medium flex items-center text-blue-800 mb-2">
                    <ChartLine className="mr-2 h-4 w-4" /> Cash Flow Assessment
                  </h3>
                  <ul className="text-xs space-y-1 text-blue-700">
                    <li>• Net Cash Flow Metrics</li>
                    <li>• Expense Analysis</li>
                    <li>• Balance Management</li>
                    <li>• Liquidity Indicators</li>
                    <li>• Cash Flow Stability</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
                  <h3 className="text-sm font-medium flex items-center text-purple-800 mb-2">
                    <CreditCard className="mr-2 h-4 w-4" /> Debt Service Coverage
                  </h3>
                  <ul className="text-xs space-y-1 text-purple-700">
                    <li>• Existing Debt Payment Analysis</li>
                    <li>• Debt Capacity Assessment</li>
                    <li>• Payment Behavior Patterns</li>
                    <li>• Debt Structure Analysis</li>
                    <li>• Debt Stress Indicators</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-md border border-red-200">
                  <h3 className="text-sm font-medium flex items-center text-red-800 mb-2">
                    <ShieldAlert className="mr-2 h-4 w-4" /> Fraud Detection
                  </h3>
                  <ul className="text-xs space-y-1 text-red-700">
                    <li>• Identity Verification Signals</li>
                    <li>• Suspicious Transaction Patterns</li>
                    <li>• Business Verification Elements</li>
                    <li>• Synthetic Identity Flags</li>
                    <li>• Application Consistency Checks</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
                  <h3 className="text-sm font-medium flex items-center text-orange-800 mb-2">
                    <AlertTriangle className="mr-2 h-4 w-4" /> Risk Profiling
                  </h3>
                  <ul className="text-xs space-y-1 text-orange-700">
                    <li>• Financial Distress Signals</li>
                    <li>• High-Risk Transaction Patterns</li>
                    <li>• Financial Management Discipline</li>
                    <li>• Behavioral Risk Indicators</li>
                    <li>• Account Usage Patterns</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md border border-green-200">
                  <h3 className="text-sm font-medium flex items-center text-green-800 mb-2">
                    <Calculator className="mr-2 h-4 w-4" /> Alternative Credit Assessment
                  </h3>
                  <ul className="text-xs space-y-1 text-green-700">
                    <li>• Payment Consistency Metrics</li>
                    <li>• Financial Responsibility Indicators</li>
                    <li>• Cash-Based Credit Alternatives</li>
                    <li>• Thin-File Supplementary Data</li>
                    <li>• Proprietary Credit Algorithms</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center">
                  <Badge className="mr-2">{enabledFeatureCount}</Badge> of <Badge className="mx-2">{totalFeatures}</Badge> features enabled
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="configuration">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-sm font-medium">Configure Individual Features</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <CheckCircle2 className="mr-1 h-3 w-3" /> Enable All
                  </Button>
                  <Button variant="outline" size="sm">
                    <XCircle className="mr-1 h-3 w-3" /> Disable All
                  </Button>
                </div>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="multiple" className="w-full">
                  {bankStatementFeatures.map((category, catIndex) => (
                    <AccordionItem key={catIndex} value={category.name}>
                      <AccordionTrigger className={`hover:bg-gray-50 px-3 py-2 rounded-lg ${getBgColorForCategory(category.name)}`}>
                        <div className="flex items-center">
                          {getCategoryIcon(category.name)}
                          <span className={`ml-2 ${getTextColorForCategory(category.name)} font-medium`}>{category.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <div key={subIndex} className="mb-4">
                            <div className="flex items-center py-2 px-2 font-medium text-sm">
                              <span>{subcategory.name}</span>
                            </div>
                            <div className="space-y-2">
                              {subcategory.features.map((feature, featureIndex) => (
                                <div 
                                  key={featureIndex} 
                                  className={`flex items-center justify-between p-2 rounded-md border ${feature.enabled ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'}`}
                                >
                                  <div className="flex-1">
                                    <p className="text-sm font-medium">{feature.feature}</p>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                  </div>
                                  <Switch 
                                    checked={feature.enabled} 
                                    onCheckedChange={() => toggleFeature(category.name, subcategory.name, feature.feature)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankStatementFeatures;
