
import React from "react";
import { User, Calendar, Building } from "lucide-react";
import { CaseItem } from "@/types/cases";

interface DetailTabContentProps {
  caseData: CaseItem;
}

const DetailTabContent: React.FC<DetailTabContentProps> = ({ caseData }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Customer Information</h3>
          <div className="grid grid-cols-2 gap-2 p-3 border rounded-md">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Name:</span>
            </div>
            <div className="text-sm">{caseData.customer}</div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Created:</span>
            </div>
            <div className="text-sm">{caseData.created}</div>
            
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Bank:</span>
            </div>
            <div className="text-sm">{caseData.bank || "N/A"}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Market Information</h3>
          <div className="p-3 border rounded-md">
            <p className="text-sm">{caseData.market || "Global"}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Risk Assessment</h3>
          <div className="p-3 border rounded-md">
            <div className="mb-2">
              <span className="text-sm font-medium">Risk Score:</span>
              <span className="text-sm ml-2">{caseData.riskScore || "N/A"}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  (caseData.riskScore || 0) > 70 
                    ? "bg-red-600" 
                    : (caseData.riskScore || 0) > 40 
                      ? "bg-amber-500" 
                      : "bg-green-500"
                }`}
                style={{ width: `${caseData.riskScore || 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Alert Information</h3>
          <div className="p-3 border rounded-md">
            <p className="text-sm">{caseData.alert}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Assigned Agent</h3>
          <div className="p-3 border rounded-md">
            <p className="text-sm">{caseData.agentAssigned}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTabContent;
