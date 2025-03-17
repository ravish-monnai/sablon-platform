
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, Mail, Phone, Globe, File, 
  Check, AlertTriangle, Download 
} from "lucide-react";

interface CaseIdentityTabProps {
  caseData: any;
}

const CaseIdentityTab = ({ caseData }: CaseIdentityTabProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <User className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-lg">Identity Information</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.customer}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.email}</p>
              {caseData.emailVerified ? 
                <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                  <Check className="h-3 w-3 mr-1" /> Verified
                </Badge> : 
                <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                  <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                </Badge>
              }
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.phone}</p>
              {caseData.phoneVerified ? 
                <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                  <Check className="h-3 w-3 mr-1" /> Verified
                </Badge> : 
                <Badge variant="outline" className="ml-2 text-amber-600 border-amber-600">
                  <AlertTriangle className="h-3 w-3 mr-1" /> Unverified
                </Badge>
              }
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
              <p className="font-medium">{caseData.location}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-3">Identity Documents</h3>
          <div className="space-y-3">
            {caseData.documents.map((doc: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between border rounded-md p-3">
                <div className="flex items-center">
                  <File className="h-10 w-10 p-2 mr-3 bg-gray-100 rounded-md text-gray-600" />
                  <div>
                    <p className="font-medium">{doc.type}</p>
                    <div className="flex items-center">
                      <p className="text-sm text-muted-foreground mr-2">
                        Score: {doc.score}/100
                      </p>
                      <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            doc.score >= 80 ? "bg-green-500" :
                            doc.score >= 60 ? "bg-amber-400" :
                            "bg-red-500"
                          }`} 
                          style={{ width: `${doc.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {doc.verified ? 
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <Check className="h-3 w-3 mr-1" /> Verified
                    </Badge> : 
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                      <AlertTriangle className="h-3 w-3 mr-1" /> Issues
                    </Badge>
                  }
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseIdentityTab;
