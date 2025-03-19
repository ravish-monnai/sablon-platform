
import React from "react";
import { CaseItem } from "@/types/caseTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, Mail, Phone, MapPin, Calendar, 
  FileText, Clock, Building, CreditCard
} from "lucide-react";

interface DetailTabContentProps {
  caseData: CaseItem;
}

const DetailTabContent: React.FC<DetailTabContentProps> = ({ caseData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <User className="h-4 w-4 mr-2 text-[#9b87f5]" />
            Customer Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start">
              <User className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Customer Name</p>
                <p className="font-medium">{caseData.customer}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{caseData.email || 'Not available'}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{caseData.phone || 'Not available'}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{caseData.location || caseData.market || 'Not available'}</p>
              </div>
            </div>

            <div className="flex items-start">
              <CreditCard className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Customer ID</p>
                <p className="font-medium">{caseData.customerId}</p>
              </div>
            </div>
          </div>
          
          {caseData.documents && caseData.documents.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="text-sm font-medium mb-2">Submitted Documents</h3>
                <div className="space-y-2">
                  {caseData.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{doc.name}</span>
                      </div>
                      <Badge 
                        variant={doc.verified ? "outline" : "secondary"} 
                        className={doc.verified ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}
                      >
                        {doc.verified ? "Verified" : "Unverified"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <FileText className="h-4 w-4 mr-2 text-[#9b87f5]" />
            Case Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start">
              <Clock className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Case Created</p>
                <p className="font-medium">{caseData.created}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Building className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Bank</p>
                <p className="font-medium">{caseData.bank || 'Not applicable'}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Journey</p>
                <p className="font-medium">{caseData.journey || caseData.type || 'Not specified'}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <User className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Agent Assigned</p>
                <p className="font-medium">{caseData.agentAssigned || 'Unassigned'}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <AlertTriangle className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Alert Type</p>
                <p className="font-medium">{caseData.alert || 'No alert'}</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium mb-2">Case Status</h3>
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Current Status</span>
                <Badge 
                  variant={
                    caseData.status === "Low Risk" ? "outline" : 
                    caseData.status === "Medium Risk" ? "secondary" : 
                    "destructive"
                  }
                >
                  {caseData.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {caseData.status === "Low Risk" && "This case has been analyzed and found to have minimal risk factors. Standard processing is recommended."}
                {caseData.status === "Medium Risk" && "This case has some potential risk indicators that warrant additional review before processing."}
                {caseData.status === "High Risk" && "This case has significant risk factors that require thorough examination before proceeding."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailTabContent;
