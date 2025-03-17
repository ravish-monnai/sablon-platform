
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, Smartphone, HardDrive, Clock, 
  Check, AlertTriangle 
} from "lucide-react";

interface CaseActivityTabProps {
  caseData: any;
}

const CaseActivityTab = ({ caseData }: CaseActivityTabProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Activity className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-lg">Device & Activity</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Device ID</p>
            <div className="flex items-center">
              <Smartphone className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.deviceId}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">IP Address</p>
            <div className="flex items-center">
              <HardDrive className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.ipAddress}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="font-medium">Recent Activity</h3>
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="flex items-start p-3 rounded-md bg-gray-50">
              <div className="mr-3 mt-0.5 bg-white p-1.5 rounded-full">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium">
                    {["Login attempt", "Updated profile", "Initiated transaction", "Uploaded document", "Password change"][idx]}
                  </p>
                  <Badge variant={idx === 0 && caseData.riskScore > 70 ? "destructive" : "outline"} className="text-xs">
                    {idx === 0 && caseData.riskScore > 70 ? (
                      <><AlertTriangle className="h-3 w-3 mr-1" /> Suspicious</>
                    ) : (
                      <><Check className="h-3 w-3 mr-1" /> Normal</>
                    )}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(2023, 
                    Math.floor(Math.random() * 12), 
                    Math.floor(Math.random() * 28) + 1, 
                    Math.floor(Math.random() * 24),
                    Math.floor(Math.random() * 60)
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseActivityTab;
