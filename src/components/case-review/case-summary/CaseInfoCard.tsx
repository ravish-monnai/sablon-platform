
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import RiskIndicatorItem from "./RiskIndicatorItem";

interface CaseInfoCardProps {
  caseData: any;
}

const CaseInfoCard = ({ caseData }: CaseInfoCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Shield className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-lg">Case Info</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Customer</p>
            <p className="font-medium">{caseData.customer}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Risk Score</p>
            <div className="flex items-center mt-1">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    caseData.riskScore >= 80 ? "bg-red-500" :
                    caseData.riskScore >= 60 ? "bg-red-400" :
                    caseData.riskScore >= 40 ? "bg-amber-400" :
                    "bg-green-500"
                  }`} 
                  style={{ width: `${caseData.riskScore}%` }}
                ></div>
              </div>
              <span className="ml-2 font-medium">{caseData.riskScore}</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant={
              caseData.status === "Pending Review" ? "outline" : 
              caseData.status === "Approved" ? "secondary" : 
              "destructive"
            } className="mt-1">
              {caseData.status}
            </Badge>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Recommendation</p>
            <p className="text-sm mt-1 p-2 bg-gray-100 rounded-md">
              {caseData.riskLevel === "Low" && "Automated approval is recommended."}
              {caseData.riskLevel === "Medium" && "Additional verification may be required."}
              {caseData.riskLevel === "High" && "Manual review is recommended."}
              {caseData.riskLevel === "Critical" && "Rejection is recommended."}
            </p>
          </div>

          {/* Key Risk Indicators section */}
          <Separator className="my-3" />
          <h3 className="font-medium mb-2">Key Risk Indicators</h3>
          <div className="space-y-2">
            {[
              {
                name: "Identity Consistency",
                status: caseData.riskScore < 60 ? "pass" : "flag",
                details: caseData.riskScore < 60 
                  ? "All identity information is consistent with our records." 
                  : "There are inconsistencies in the provided identity information."
              },
              {
                name: "Document Authenticity",
                status: caseData.documents[0].verified ? "pass" : "flag",
                details: caseData.documents[0].verified
                  ? "Document verification passed all security checks."
                  : "Document verification found potential issues with authenticity."
              },
              {
                name: "Behavioral Patterns",
                status: caseData.riskScore < 70 ? "pass" : "flag",
                details: caseData.riskScore < 70
                  ? "User behavior is consistent with historical patterns."
                  : "Unusual behavior detected in recent activities."
              }
            ].map((indicator, idx) => (
              <RiskIndicatorItem 
                key={idx}
                name={indicator.name}
                status={indicator.status as "pass" | "flag"}
                details={indicator.details}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseInfoCard;
