
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import UserNetworkGraph from "@/components/cases/UserNetworkGraph";
import NetworkLegend from "./NetworkLegend";
import NetworkInsight from "./NetworkInsight";

interface NetworkGraphContainerProps {
  caseData: any;
}

const NetworkGraphContainer: React.FC<NetworkGraphContainerProps> = ({ caseData }) => {
  return (
    <div className="mb-4">
      <NetworkInsight riskLevel={caseData.riskLevel} />
      <NetworkLegend />
      
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
  );
};

export default NetworkGraphContainer;
