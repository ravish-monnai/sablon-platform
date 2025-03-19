
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Workflow } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LinkAnalysisButtonProps {
  isAnalyzing: boolean;
  caseRiskLevel: string;
  onAnalysisComplete: () => void;
}

const LinkAnalysisButton: React.FC<LinkAnalysisButtonProps> = ({ 
  isAnalyzing, 
  caseRiskLevel,
  onAnalysisComplete 
}) => {
  const { toast } = useToast();

  const startMultiCaseAnalysis = () => {
    setTimeout(() => {
      onAnalysisComplete();
      
      // Determine the message based on risk level
      let decisionGuidance = "";
      if (caseRiskLevel === "High" || caseRiskLevel === "Critical") {
        decisionGuidance = "Network analysis reveals high-risk connections. Recommend enhanced due diligence and possible escalation.";
      } else if (caseRiskLevel === "Medium") {
        decisionGuidance = "Some concerning patterns in network relationships. Consider additional verification before approval.";
      } else {
        decisionGuidance = "Network analysis shows normal relationship patterns. No additional verification needed.";
      }
      
      toast({
        title: "Link Analysis Complete",
        description: `Found 3 potentially related cases with similar patterns. ${decisionGuidance}`,
        variant: "default"
      });
    }, 1500);
  };

  return (
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
  );
};

export default LinkAnalysisButton;
