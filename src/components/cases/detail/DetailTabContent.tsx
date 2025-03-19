
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseItem } from "@/types/caseTypes";
import { FileText, User, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DetailTabContentProps {
  caseData: CaseItem;
}

const DetailTabContent: React.FC<DetailTabContentProps> = ({ caseData }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-[#9b87f5]" />
          <CardTitle className="text-base">Case Details</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Customer Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="h-4 w-4 text-gray-500 mr-2" />
                <div>
                  <p className="text-xs text-muted-foreground">Customer</p>
                  <p className="text-sm font-medium">{caseData.customer}</p>
                </div>
              </div>
              
              {caseData.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">{caseData.email}</p>
                  </div>
                </div>
              )}
              
              {caseData.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{caseData.phone}</p>
                  </div>
                </div>
              )}
              
              {caseData.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">{caseData.location}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Case Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Case Type</p>
                <p className="text-sm font-medium">{caseData.type}</p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground">Created</p>
                <p className="text-sm font-medium">{caseData.created}</p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <Badge
                  variant={
                    caseData.status === "High Risk"
                      ? "destructive"
                      : caseData.status === "Medium Risk"
                      ? "warning"
                      : "success"
                  }
                  className="mt-1"
                >
                  {caseData.status}
                </Badge>
              </div>
              
              {caseData.agentAssigned && (
                <div>
                  <p className="text-xs text-muted-foreground">Agent Assigned</p>
                  <p className="text-sm font-medium">{caseData.agentAssigned}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {caseData.documents && caseData.documents.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Documents</h3>
            <div className="border rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-4 py-2 text-left">Document Type</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {caseData.documents.map((doc, index) => (
                    <tr key={index} className={index < caseData.documents.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2">{doc.name}</td>
                      <td className="px-4 py-2">
                        <Badge variant={doc.verified ? "success" : "warning"}>
                          {doc.verified ? "Verified" : "Pending"}
                        </Badge>
                      </td>
                      <td className="px-4 py-2">{doc.date || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DetailTabContent;
