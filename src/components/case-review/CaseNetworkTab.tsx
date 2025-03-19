
import { useState, useEffect } from "react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Network } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import NetworkGraphContainer from "./network/NetworkGraphContainer";
import RelatedCasesList from "./network/RelatedCasesList";
import LinkAnalysisButton from "./network/LinkAnalysisButton";

interface CaseNetworkTabProps {
  caseData: any;
}

// Related cases data for demonstration
const relatedCases = [
  { id: "FR-2023-1004", customer: "Customer 4", similarity: 86, riskLevel: "High", 
    connections: ["Similar transactions", "Shared device", "Related IP address"] },
  { id: "FR-2023-1025", customer: "Customer 25", similarity: 72, riskLevel: "Medium",
    connections: ["Similar login patterns", "Related email domain"] },
  { id: "FR-2023-1087", customer: "Customer 87", similarity: 68, riskLevel: "Medium",
    connections: ["Similar profile", "Connected payment method"] }
];

const CaseNetworkTab = ({ caseData }: CaseNetworkTabProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showMultiCaseAnalysis, setShowMultiCaseAnalysis] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("single-case");
  
  // Auto-trigger analysis on component mount
  useEffect(() => {
    // Optional: Auto-start analysis when the component mounts
    if (caseData.riskLevel === "High" || caseData.riskLevel === "Critical") {
      handleAnalysisStart();
    }
  }, [caseData.riskLevel]);
  
  const handleAnalysisStart = () => {
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowMultiCaseAnalysis(true);
    setActiveTab("multi-case");
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-lg">User Network Analysis</CardTitle>
          </div>
          <LinkAnalysisButton 
            isAnalyzing={isAnalyzing}
            caseRiskLevel={caseData.riskLevel}
            onAnalysisComplete={handleAnalysisComplete}
          />
        </div>
        <CardDescription>
          Connections between this user and other entities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="single-case">
          <TabsList className="mb-2">
            <TabsTrigger value="single-case">Single Case View</TabsTrigger>
            <TabsTrigger 
              value="multi-case" 
              disabled={!showMultiCaseAnalysis}
            >
              Related Cases
              {showMultiCaseAnalysis && (
                <Badge variant="outline" className="ml-2 bg-amber-100 text-amber-800">
                  {relatedCases.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="single-case">
            <NetworkGraphContainer caseData={caseData} />
          </TabsContent>
          
          <TabsContent value="multi-case">
            <RelatedCasesList 
              relatedCases={relatedCases} 
              caseId={caseData.id}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CaseNetworkTab;
