
import { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Network, User, UserCheck, UserX, AlertTriangle, CreditCard, Building, Database, Workflow } from "lucide-react";
import UserNetworkGraph from "@/components/cases/UserNetworkGraph";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CaseNetworkTabProps {
  caseData: any;
}

const CaseNetworkTab = ({ caseData }: CaseNetworkTabProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showMultiCaseAnalysis, setShowMultiCaseAnalysis] = useState(false);
  
  // Determine the insight text based on the risk level
  const getNetworkInsight = () => {
    if (caseData.riskLevel === "Critical" || caseData.riskLevel === "High") {
      return "This user has connections to multiple high-risk entities. The network structure suggests unusual patterns that warrant further investigation.";
    } else if (caseData.riskLevel === "Medium") {
      return "This user has a mix of normal and potentially concerning connections. Some relationships may require additional verification.";
    } else {
      return "This user has primarily normal connections with low-risk entities. The network structure appears typical for this type of account.";
    }
  };

  const startMultiCaseAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowMultiCaseAnalysis(true);
    }, 1500);
  };

  // Related cases data for demonstration
  const relatedCases = [
    { id: "FR-2023-1004", customer: "Customer 4", similarity: 86, riskLevel: "High", 
      connections: ["Similar transactions", "Shared device", "Related IP address"] },
    { id: "FR-2023-1025", customer: "Customer 25", similarity: 72, riskLevel: "Medium",
      connections: ["Similar login patterns", "Related email domain"] },
    { id: "FR-2023-1087", customer: "Customer 87", similarity: 68, riskLevel: "Medium",
      connections: ["Similar profile", "Connected payment method"] }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
            <CardTitle className="text-lg">User Network Analysis</CardTitle>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={startMultiCaseAnalysis}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>Analyzing<span className="loading ml-1">...</span></>
            ) : (
              <>
                <Workflow className="h-4 w-4" /> 
                AI Link Analysis
              </>
            )}
          </Button>
        </div>
        <CardDescription>
          Connections between this user and other entities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="single-case">
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
            <div className="mb-4">
              <div className="space-y-1 mb-3">
                <h3 className="font-medium">Connection Graph</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {getNetworkInsight()}
                </p>
                
                <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="font-medium">Network Analysis</span>
                  </div>
                  <p className="text-muted-foreground">
                    Hover over entities to see risk scores and flags. Animated connections indicate high-risk relationships.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center flex-wrap gap-3 my-3 p-2 bg-gray-50 rounded-md border">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 mr-1">
                    <User className="h-4 w-4 text-blue-500" />
                  </span>
                  <span className="text-xs">Main User</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mr-1">
                    <UserCheck className="h-4 w-4 text-green-500" />
                  </span>
                  <span className="text-xs">Safe User</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 mr-1">
                    <UserX className="h-4 w-4 text-red-500" />
                  </span>
                  <span className="text-xs">Risky User</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 mr-1">
                    <CreditCard className="h-4 w-4 text-purple-500" />
                  </span>
                  <span className="text-xs">Financial Entity</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 mr-1">
                    <Building className="h-4 w-4 text-indigo-500" />
                  </span>
                  <span className="text-xs">Business</span>
                </div>
              </div>
              
              <div className="border rounded-md p-1 mt-3 bg-gray-50">
                <UserNetworkGraph caseData={caseData} />
              </div>
              
              <div className="mt-4">
                <Separator className="my-3" />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Risk Correlation</span>
                  <Badge variant={caseData.riskLevel === "High" || caseData.riskLevel === "Critical" ? "destructive" : "outline"}>
                    {caseData.riskLevel === "High" || caseData.riskLevel === "Critical" ? "Strong" : "Moderate"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  The network structure {caseData.riskLevel === "High" || caseData.riskLevel === "Critical" ? "strongly" : "moderately"} correlates with the overall case risk assessment.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="multi-case">
            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-100 rounded-md p-3 text-sm mb-4">
                <div className="flex items-center mb-2">
                  <Database className="h-4 w-4 text-amber-500 mr-2" />
                  <span className="font-medium">AI Link Analysis Results</span>
                </div>
                <p className="text-muted-foreground">
                  The AI has identified {relatedCases.length} potentially related cases based on pattern analysis. These cases share common attributes, behaviors, or connections with the current case.
                </p>
              </div>
              
              <h3 className="font-medium text-sm">Related Cases by Similarity</h3>
              
              {relatedCases.map((relatedCase) => (
                <Card key={relatedCase.id} className="mb-3">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-2">
                          <User className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium">{relatedCase.customer}</div>
                          <div className="text-xs text-muted-foreground">{relatedCase.id}</div>
                        </div>
                      </div>
                      <Badge className={`
                        ${relatedCase.riskLevel === "High" ? "bg-red-100 text-red-800" : 
                          relatedCase.riskLevel === "Medium" ? "bg-amber-100 text-amber-800" : 
                          "bg-green-100 text-green-800"}
                      `}>
                        {relatedCase.riskLevel} Risk
                      </Badge>
                    </div>
                    
                    <div className="mt-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Similarity Score</span>
                        <span className="text-xs font-medium">{relatedCase.similarity}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            relatedCase.similarity > 80 ? "bg-red-500" : 
                            relatedCase.similarity > 70 ? "bg-amber-500" : 
                            "bg-blue-500"
                          }`} 
                          style={{ width: `${relatedCase.similarity}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="text-xs font-medium mb-1">Connection Points:</div>
                      <div className="flex flex-wrap gap-1">
                        {relatedCase.connections.map((connection, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-normal">
                            {connection}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="text-xs h-8">
                        View Case
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs h-8 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                        <Network className="h-3.5 w-3.5 mr-1" />
                        Compare Networks
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="bg-gray-50 border rounded-md p-4 text-center">
                <h4 className="text-sm font-medium mb-2">AI Analysis Summary</h4>
                <p className="text-xs text-muted-foreground">
                  The cases above share significant similarities with case {caseData.id} and may be part of a coordinated pattern.
                  Consider reviewing these cases together for a more comprehensive investigation.
                </p>
                <div className="mt-3">
                  <Button size="sm" className="bg-[#9b87f5] hover:bg-[#8a70f2]">
                    <Workflow className="h-4 w-4 mr-1" />
                    Process Cases as Group
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CaseNetworkTab;
