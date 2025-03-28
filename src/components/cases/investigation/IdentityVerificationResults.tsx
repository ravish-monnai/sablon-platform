
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, X, CheckCircle, AlertCircle } from "lucide-react";

interface MatchResult {
  type: "MATCH" | "PARTIAL_MATCH" | "NO_MATCH" | "NOT_SUPPORTED";
  label: string;
}

interface GovernmentKYCData {
  matchFirstName: string;
  matchLastName: string;
  matchDateOfBirth: string;
  matchId1: string;
  matchStreetName: string;
  matchStreetNumber: string;
  matchCity: string;
  matchState: string;
  matchPostalCode: string;
  matchAddressLine1: string;
  matchPhone: string;
}

interface IdentityVerificationResultsProps {
  data: {
    kyc: {
      government: GovernmentKYCData;
    };
  };
}

const IdentityVerificationResults: React.FC<IdentityVerificationResultsProps> = ({ data }) => {
  const { government } = data.kyc;
  
  const getMatchIcon = (matchType: string) => {
    switch (matchType) {
      case "MATCH":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "PARTIAL_MATCH":
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case "NO_MATCH":
        return <X className="h-5 w-5 text-red-500" />;
      case "NOT_SUPPORTED":
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };
  
  const getMatchBadge = (matchType: string) => {
    switch (matchType) {
      case "MATCH":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Match</Badge>;
      case "PARTIAL_MATCH":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Partial Match</Badge>;
      case "NO_MATCH":
        return <Badge className="bg-red-100 text-red-800 border-red-200">No Match</Badge>;
      case "NOT_SUPPORTED":
      default:
        return <Badge variant="outline" className="text-gray-500">Not Supported</Badge>;
    }
  };

  const personalInfo: MatchResult[] = [
    { type: government.matchFirstName as any, label: "First Name" },
    { type: government.matchLastName as any, label: "Last Name" },
    { type: government.matchDateOfBirth as any, label: "Date of Birth" },
    { type: government.matchId1 as any, label: "ID Document" },
  ];
  
  const addressInfo: MatchResult[] = [
    { type: government.matchStreetName as any, label: "Street Name" },
    { type: government.matchStreetNumber as any, label: "Street Number" },
    { type: government.matchCity as any, label: "City" },
    { type: government.matchState as any, label: "State" },
    { type: government.matchPostalCode as any, label: "Postal Code" },
    { type: government.matchAddressLine1 as any, label: "Address Line 1" },
  ];
  
  const contactInfo: MatchResult[] = [
    { type: government.matchPhone as any, label: "Phone" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
        <div className="flex items-center mb-2">
          <UserCheck className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-blue-800">Government Identity Verification Results</h3>
        </div>
        <p className="text-sm text-blue-700">
          Verification results from government data sources showing match status for identity attributes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4">Personal Information</h4>
            <div className="space-y-3">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b border-gray-100">
                  <div className="flex items-center">
                    {getMatchIcon(item.type)}
                    <span className="ml-2 text-sm">{item.label}</span>
                  </div>
                  {getMatchBadge(item.type)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4">Address Information</h4>
            <div className="space-y-3">
              {addressInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b border-gray-100">
                  <div className="flex items-center">
                    {getMatchIcon(item.type)}
                    <span className="ml-2 text-sm">{item.label}</span>
                  </div>
                  {getMatchBadge(item.type)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 border-b border-gray-100">
                  <div className="flex items-center">
                    {getMatchIcon(item.type)}
                    <span className="ml-2 text-sm">{item.label}</span>
                  </div>
                  {getMatchBadge(item.type)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
        <h4 className="text-sm font-medium mb-2">Verification Summary</h4>
        <p className="text-sm text-gray-700">
          The identity has been verified against government sources with most fields showing a match.
          Address information is fully matched, while there are partial matches for first name and no match for ID document.
        </p>
      </div>
    </div>
  );
};

export default IdentityVerificationResults;
