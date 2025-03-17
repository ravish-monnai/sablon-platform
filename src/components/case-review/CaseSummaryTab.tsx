
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  Shield,
  Clock,
  AlertCircle,
  BrainCircuit,
  Cpu,
  FileText,
  UserCheck,
  UserX
} from "lucide-react";

interface CaseSummaryTabProps {
  caseData: any;
}

const CaseSummaryTab = ({ caseData }: CaseSummaryTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Case Overview card */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <CardTitle className="text-lg">Case Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Journey</p>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="font-medium">{caseData.journey}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="font-medium">{caseData.date}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <AlertCircle className={`h-6 w-6 mr-3 ${
                  caseData.riskLevel === "Critical" ? "text-red-500" :
                  caseData.riskLevel === "High" ? "text-red-400" :
                  caseData.riskLevel === "Medium" ? "text-amber-400" :
                  "text-green-500"
                }`} />
                <div>
                  <p className="font-medium">Risk Level: {caseData.riskLevel}</p>
                  <p className="text-sm text-muted-foreground">Score: {caseData.riskScore}/100</p>
                </div>
              </div>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
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
            </div>

            {caseData.anomalyFlags.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium">Anomaly Flags</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {caseData.anomalyFlags.map((flag: string, idx: number) => (
                    <div key={idx} className="flex items-center text-sm bg-amber-50 text-amber-800 p-2 rounded-md">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <span>{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Reasoning section - Moved from the separate tab */}
            <div className="mt-6">
              <Separator className="my-4" />
              <div className="flex items-center mb-3">
                <BrainCircuit className="h-5 w-5 mr-2 text-[#9b87f5]" />
                <h3 className="font-medium text-[#9b87f5]">AI Analysis</h3>
              </div>
              <div className="bg-[#9b87f5]/10 rounded-md p-4 border border-[#9b87f5]/20">
                <div className="flex items-start mb-3">
                  <Cpu className="h-5 w-5 mr-2 text-[#9b87f5] mt-0.5" />
                  <div>
                    <h3 className="font-medium text-[#9b87f5]">AI Reasoning</h3>
                    <p className="text-sm mt-1">{caseData.reasoning}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {caseData.decisionFactors.map((factor: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div>
                      <p className="font-medium">{factor.factor}</p>
                      <p className="text-xs text-muted-foreground">Weight: {factor.weight * 100}%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            factor.score >= 80 ? "bg-red-500" :
                            factor.score >= 60 ? "bg-red-400" :
                            factor.score >= 40 ? "bg-amber-400" :
                            "bg-green-500"
                          }`} 
                          style={{ width: `${factor.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">{factor.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case Info card */}
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

            {/* Key Risk Indicators section - Moved from the AI tab */}
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
                <div key={idx} className="flex items-start p-2 border rounded-md">
                  {indicator.status === "pass" ? (
                    <UserCheck className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  ) : (
                    <UserX className="h-5 w-5 mr-2 text-amber-500 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">{indicator.name}</p>
                    <p className="text-sm text-muted-foreground">{indicator.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseSummaryTab;
