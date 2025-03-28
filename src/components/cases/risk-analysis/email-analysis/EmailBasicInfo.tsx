
import React from "react";
import { Shield, Globe, Building, Calendar, ShieldCheck } from "lucide-react";

interface EmailBasicInfoProps {
  emailBasic: {
    deliverable: boolean;
    domainDetails: {
      domainName: string;
      registered: boolean;
      companyName: string;
      freeProvider: boolean;
      disposable: boolean;
      suspiciousTld: boolean;
      acceptAll: boolean;
      creationDate: string;
    };
    tenure: {
      years: number;
      days: number;
    };
  };
}

const EmailBasicInfo: React.FC<EmailBasicInfoProps> = ({ emailBasic }) => {
  return (
    <div className="bg-gray-50 rounded-md p-3 border">
      <h3 className="text-sm font-medium mb-2 flex items-center">
        <Shield className="h-4 w-4 mr-1 text-[#9b87f5]" /> 
        Email Verification
      </h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center">
          <Globe className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-muted-foreground mr-1">Domain:</span>
          <span className="font-medium">{emailBasic.domainDetails.domainName}</span>
        </div>
        <div className="flex items-center">
          <Building className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-muted-foreground mr-1">Provider:</span>
          <span className="font-medium">{emailBasic.domainDetails.companyName}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-muted-foreground mr-1">History:</span>
          <span className="font-medium">{emailBasic.tenure.years.toFixed(1)} years</span>
        </div>
        <div className="flex items-center">
          <ShieldCheck className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-muted-foreground mr-1">Type:</span>
          <span className="font-medium">
            {emailBasic.domainDetails.freeProvider ? "Free" : "Premium"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailBasicInfo;
