
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Globe, Phone } from "lucide-react";
import VerificationResultItem from "./VerificationResultItem";

interface MatchResult {
  type: "MATCH" | "PARTIAL_MATCH" | "NO_MATCH" | "NOT_SUPPORTED";
  label: string;
  value?: string;
}

interface ResultsDetailsProps {
  personalInfo: MatchResult[];
  addressInfo: MatchResult[];
  contactInfo: MatchResult[];
}

const ResultsDetails: React.FC<ResultsDetailsProps> = ({ 
  personalInfo, 
  addressInfo, 
  contactInfo 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border border-green-100 shadow-sm">
        <CardContent className="pt-6">
          <h4 className="text-md font-medium mb-4 flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-green-600" />
            Personal Information
          </h4>
          <div className="space-y-3">
            {personalInfo.map((item, index) => (
              <VerificationResultItem 
                key={index} 
                type={item.type} 
                label={item.label} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border border-blue-100 shadow-sm">
        <CardContent className="pt-6">
          <h4 className="text-md font-medium mb-4 flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-600" />
            Address Information
          </h4>
          <div className="space-y-3">
            {addressInfo.map((item, index) => (
              <VerificationResultItem 
                key={index} 
                type={item.type} 
                label={item.label} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border border-purple-100 shadow-sm">
        <CardContent className="pt-6">
          <h4 className="text-md font-medium mb-4 flex items-center gap-2">
            <Phone className="h-4 w-4 text-purple-600" />
            Contact Information
          </h4>
          <div className="space-y-3">
            {contactInfo.map((item, index) => (
              <VerificationResultItem 
                key={index} 
                type={item.type} 
                label={item.label} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsDetails;
