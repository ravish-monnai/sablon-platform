
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Network, User, UserCheck, UserX, AlertTriangle, CreditCard, Building } from "lucide-react";
import UserNetworkGraph from "@/components/cases/UserNetworkGraph";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface CaseNetworkTabProps {
  caseData: any;
}

const CaseNetworkTab = ({ caseData }: CaseNetworkTabProps) => {
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

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Network className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-lg">User Network Analysis</CardTitle>
        </div>
        <CardDescription>
          Connections between this user and other entities
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default CaseNetworkTab;
