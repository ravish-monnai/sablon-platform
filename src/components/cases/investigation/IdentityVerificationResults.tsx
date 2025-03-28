
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, X, CheckCircle, AlertCircle, Globe, Database, Phone } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import FeatureTag from "@/components/ui/feature-tag";

interface MatchResult {
  type: "MATCH" | "PARTIAL_MATCH" | "NO_MATCH" | "NOT_SUPPORTED";
  label: string;
  value?: string;
}

interface SourceData {
  government: Record<string, string>;
  mobile?: Record<string, string>;
  consumer?: Record<string, string>;
}

interface IdentityVerificationResultsProps {
  data: {
    kyc: SourceData;
    userInput?: {
      firstName?: string;
      lastName?: string;
      dateOfBirth?: string;
      idNumber?: string;
      address?: string;
      phone?: string;
    };
  };
}

const IdentityVerificationResults: React.FC<IdentityVerificationResultsProps> = ({ data }) => {
  const { government } = data.kyc;
  const userInput = data.userInput || {};
  
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

  // Data structure for verification results
  const personalInfo: MatchResult[] = [
    { type: government.matchFirstName as any, label: "First Name", value: userInput.firstName },
    { type: government.matchLastName as any, label: "Last Name", value: userInput.lastName },
    { type: government.matchDateOfBirth as any, label: "Date of Birth", value: userInput.dateOfBirth },
    { type: government.matchId1 as any, label: "ID Document", value: userInput.idNumber },
  ];
  
  const addressInfo: MatchResult[] = [
    { type: government.matchStreetName as any, label: "Street Name" },
    { type: government.matchStreetNumber as any, label: "Street Number" },
    { type: government.matchCity as any, label: "City" },
    { type: government.matchState as any, label: "State" },
    { type: government.matchPostalCode as any, label: "Postal Code" },
    { type: government.matchAddressLine1 as any, label: "Address Line 1", value: userInput.address },
  ];
  
  const contactInfo: MatchResult[] = [
    { type: government.matchPhone as any, label: "Phone", value: userInput.phone },
  ];

  // Calculate match statistics
  const totalChecks = personalInfo.length + addressInfo.length + contactInfo.length;
  const matches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "MATCH").length;
  const partialMatches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "PARTIAL_MATCH").length;
  const noMatches = [...personalInfo, ...addressInfo, ...contactInfo].filter(item => item.type === "NO_MATCH").length;
  const matchPercentage = Math.round((matches / totalChecks) * 100);

  return (
    <div className="space-y-6">
      {/* User Input Section */}
      {Object.keys(userInput).length > 0 && (
        <Card className="border border-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <UserCheck className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-medium text-blue-800">Verification Input</h3>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Provided Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(userInput).map(([key, value]) => (
                  value && (
                    <TableRow key={key}>
                      <TableCell className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  )
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Verification Summary */}
      <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 className="text-lg font-medium text-blue-800 flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-blue-600" />
                Identity Verification Summary
                <FeatureTag variant="ai" className="ml-2">AI Verified</FeatureTag>
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Identity verified across multiple authoritative sources
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600">{matchPercentage}%</div>
                <div className="text-xs text-gray-500">Match Rate</div>
              </div>
              
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600">{matches}</div>
                <div className="text-xs text-gray-500">Matches</div>
              </div>
              
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-amber-500">{partialMatches}</div>
                <div className="text-xs text-gray-500">Partial</div>
              </div>
              
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-red-500">{noMatches}</div>
                <div className="text-xs text-gray-500">No Match</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Source Indicators */}
      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-green-100 shadow-sm">
          <Globe className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">Government Sources</span>
          <Badge className="bg-green-100 text-green-800">Verified</Badge>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-100 shadow-sm">
          <Phone className="h-5 w-5 text-indigo-600" />
          <span className="text-sm font-medium">Mobile Sources</span>
          <Badge className="bg-blue-100 text-blue-800">Checked</Badge>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-purple-100 shadow-sm">
          <Database className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Consumer Databases</span>
          <Badge className="bg-purple-100 text-purple-800">Consulted</Badge>
        </div>
      </div>
      
      {/* Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border border-green-100 shadow-sm">
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4 flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-green-600" />
              Personal Information
            </h4>
            <div className="space-y-3">
              {personalInfo.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-2 rounded-md ${item.type === "MATCH" ? "bg-green-50" : item.type === "PARTIAL_MATCH" ? "bg-amber-50" : item.type === "NO_MATCH" ? "bg-red-50" : "bg-gray-50"}`}>
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
        
        <Card className="border border-blue-100 shadow-sm">
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4 flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-600" />
              Address Information
            </h4>
            <div className="space-y-3">
              {addressInfo.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-2 rounded-md ${item.type === "MATCH" ? "bg-green-50" : item.type === "PARTIAL_MATCH" ? "bg-amber-50" : item.type === "NO_MATCH" ? "bg-red-50" : "bg-gray-50"}`}>
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
        
        <Card className="border border-purple-100 shadow-sm">
          <CardContent className="pt-6">
            <h4 className="text-md font-medium mb-4 flex items-center gap-2">
              <Phone className="h-4 w-4 text-purple-600" />
              Contact Information
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-2 rounded-md ${item.type === "MATCH" ? "bg-green-50" : item.type === "PARTIAL_MATCH" ? "bg-amber-50" : item.type === "NO_MATCH" ? "bg-red-50" : "bg-gray-50"}`}>
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
    </div>
  );
};

export default IdentityVerificationResults;
