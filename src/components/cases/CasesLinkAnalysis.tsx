
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Database, 
  Search, 
  AlertTriangle,
  Workflow 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LinkAnalysisProps {
  cases?: any[];
}

const CasesLinkAnalysis = ({ cases = [] }: LinkAnalysisProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any[] | null>(null);
  const { toast } = useToast();

  const runLinkAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const results = [
        {
          id: "pattern-1",
          name: "Similar IP Address Patterns",
          cases: ["FR-2023-1001", "FR-2023-1042", "FR-2023-1087"],
          confidence: 92,
          description: "Multiple cases sharing identical or closely related IP addresses from unusual locations",
          riskLevel: "High",
          relatedEntities: ["198.51.100.x subnet", "Eastern Europe connections"]
        },
        {
          id: "pattern-2",
          name: "Device Fingerprint Cluster",
          cases: ["FR-2023-1025", "FR-2023-1038", "FR-2023-1056"],
          confidence: 87,
          description: "Cases with matching device fingerprints despite different account identities",
          riskLevel: "Medium",
          relatedEntities: ["Identical browser configurations", "Similar session patterns"]
        },
        {
          id: "pattern-3",
          name: "Transaction Velocity",
          cases: ["FR-2023-1004", "FR-2023-1018", "FR-2023-1033", "FR-2023-1076"],
          confidence: 78,
          description: "Unusual transaction velocity patterns across multiple apparently unrelated accounts",
          riskLevel: "Critical",
          relatedEntities: ["Same beneficiary chain", "Identical transaction timing"]
        }
      ];
      
      setAnalysisResults(results);
      setIsAnalyzing(false);
      
      toast({
        title: "Link Analysis Complete",
        description: `Discovered ${results.length} significant patterns across your case portfolio`,
      });
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">
              <div className="flex items-center">
                <Network className="mr-2 h-5 w-5 text-[#9b87f5]" />
                Cross-Case Link Analysis
              </div>
            </CardTitle>
            <CardDescription>
              Identify hidden connections between cases using advanced pattern recognition
            </CardDescription>
          </div>
          
          <Button 
            onClick={runLinkAnalysis} 
            disabled={isAnalyzing}
            className="bg-[#9b87f5] hover:bg-[#8a70f2]"
          >
            {isAnalyzing ? (
              <>Analyzing<span className="loading ml-1">...</span></>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Run Cross-Case Analysis
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        {!analysisResults ? (
          <div className="text-center py-8 border border-dashed rounded-md">
            <Database className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <p className="text-muted-foreground">
              Run a cross-case analysis to discover hidden connections between different fraud cases
            </p>
            
            <div className="mt-4 max-w-lg mx-auto bg-amber-50 border border-amber-100 rounded-md p-3 text-sm">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                <span className="font-medium">Analysis Capabilities</span>
              </div>
              <ul className="text-left text-muted-foreground ml-6 list-disc">
                <li>IP address correlation across cases</li>
                <li>Common devices or fingerprints</li>
                <li>Similar transaction patterns</li>
                <li>Related entity network discovery</li>
                <li>Temporal pattern analysis</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Analysis Results</h3>
              <Badge className="bg-[#9b87f5]">{analysisResults.length} patterns found</Badge>
            </div>
            
            {analysisResults.map((result) => (
              <Card key={result.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
                      <h3 className="font-medium">{result.name}</h3>
                    </div>
                    <Badge className={`
                      ${result.riskLevel === "Critical" ? "bg-red-100 text-red-800" : 
                        result.riskLevel === "High" ? "bg-rose-100 text-rose-800" : 
                        result.riskLevel === "Medium" ? "bg-amber-100 text-amber-800" : 
                        "bg-blue-100 text-blue-800"}
                    `}>
                      {result.riskLevel} Risk
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {result.description}
                  </p>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Confidence Score</span>
                    <span className="text-xs font-medium">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                    <div 
                      className={`h-1.5 rounded-full ${
                        result.confidence > 90 ? "bg-red-500" : 
                        result.confidence > 80 ? "bg-amber-500" : 
                        "bg-blue-500"
                      }`} 
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="text-xs font-medium mb-1">Related Cases:</div>
                    <div className="flex flex-wrap gap-1">
                      {result.cases.map((caseId: string) => (
                        <Badge key={caseId} variant="outline" className="text-xs">
                          {caseId}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="text-xs font-medium mb-1">Related Entities:</div>
                    <div className="flex flex-wrap gap-1">
                      {result.relatedEntities.map((entity: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {entity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="text-xs h-8 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                      <Workflow className="mr-1 h-3.5 w-3.5" />
                      Investigate Pattern
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md text-sm text-center">
              <p>AI link analysis identified potentially connected cases that may be part of larger fraud patterns.</p>
              <div className="mt-2">
                <Button size="sm" variant="outline" className="bg-white">
                  <Database className="mr-1 h-4 w-4" />
                  Export Analysis Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CasesLinkAnalysis;
