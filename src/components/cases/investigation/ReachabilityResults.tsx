
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Globe, 
  Mail, 
  Check, 
  X, 
  Info, 
  MapPin, 
  Signal, 
  Wifi, 
  CircleCheck, 
  CircleX, 
  CircleAlert,
  ArrowDown,
  ArrowUp,
  Clock,
  Calendar,
  Database
} from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import FeatureTag from "@/components/ui/feature-tag";

interface ReachabilityResultsProps {
  data: {
    userInput?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    phone?: {
      inputAttribute?: string;
      alternatePhoneNumber?: string;
      confidence?: "High" | "Medium" | "Low";
      confidenceScore?: number;
      reachabilityScore?: number;
      name?: string;
      type?: string;
      active?: "YES" | "NO" | "UNKNOWN";
      ported?: boolean;
      phoneTenure?: string;
      currentCarrierCircle?: string;
      upiStatus?: string;
      simType?: "POSTPAID" | "PREPAID";
    };
    address?: {
      fullAddress?: string;
      addressType?: string;
      reachabilityScore?: number;
      confidence?: string;
      parsedAddress?: {
        doorNumber?: string;
        addressLine?: string;
        streetName?: string;
        landmark?: string;
        city?: string;
        state?: string;
        postalCode?: string;
      };
    };
  };
}

const ReachabilityResults: React.FC<ReachabilityResultsProps> = ({ data }) => {
  // Extract data for ease of use
  const userInput = data.userInput || {};
  const phoneData = data.phone || {};
  const addressData = data.address || {};
  const parsedAddress = addressData.parsedAddress || {};
  
  // Helper functions for visual elements
  const getConfidenceBadge = (confidence?: string) => {
    switch (confidence) {
      case "High":
        return <Badge className="bg-green-100 text-green-800">High</Badge>;
      case "Medium":
        return <Badge className="bg-amber-100 text-amber-800">Medium</Badge>;
      case "Low":
        return <Badge className="bg-red-100 text-red-800">Low</Badge>;
      default:
        return <Badge variant="outline" className="text-gray-500">Unknown</Badge>;
    }
  };

  const getActiveStatusIcon = (active?: string) => {
    switch (active) {
      case "YES":
        return <CircleCheck className="h-5 w-5 text-green-500" />;
      case "NO":
        return <CircleX className="h-5 w-5 text-red-500" />;
      case "UNKNOWN":
      default:
        return <CircleAlert className="h-5 w-5 text-amber-500" />;
    }
  };

  const getScoreColor = (score?: number) => {
    if (!score) return "text-gray-500";
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  // Calculate reachability score percentages for visualization
  const phoneReachabilityPercentage = phoneData.reachabilityScore ? Math.min(100, Math.max(0, phoneData.reachabilityScore)) : 0;
  const addressReachabilityPercentage = addressData.reachabilityScore ? Math.min(100, Math.max(0, addressData.reachabilityScore)) : 0;
  
  return (
    <div className="space-y-6">
      {/* User Input Section */}
      {Object.keys(userInput).length > 0 && (
        <Card className="border border-blue-100">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-blue-600" />
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
                {userInput.phone && (
                  <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      Phone Number
                    </TableCell>
                    <TableCell>{userInput.phone}</TableCell>
                  </TableRow>
                )}
                {userInput.email && (
                  <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      Email Address
                    </TableCell>
                    <TableCell>{userInput.email}</TableCell>
                  </TableRow>
                )}
                {userInput.address && (
                  <TableRow>
                    <TableCell className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      Physical Address
                    </TableCell>
                    <TableCell>{userInput.address}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Reachability Summary */}
      <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h3 className="text-lg font-medium text-blue-800 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Reachability Analysis Summary
                <FeatureTag variant="ai" className="ml-2">AI Verified</FeatureTag>
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Contact points verified with telecom and address databases
              </p>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {phoneData.reachabilityScore && (
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className={`text-2xl font-bold ${getScoreColor(phoneData.reachabilityScore)}`}>
                    {phoneData.reachabilityScore}/100
                  </div>
                  <div className="text-xs text-gray-500">Phone Reachability</div>
                </div>
              )}
              
              {addressData.reachabilityScore && (
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className={`text-2xl font-bold ${getScoreColor(addressData.reachabilityScore)}`}>
                    {addressData.reachabilityScore}/100
                  </div>
                  <div className="text-xs text-gray-500">Address Reachability</div>
                </div>
              )}
              
              {phoneData.confidence && (
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="text-center">
                    {getConfidenceBadge(phoneData.confidence)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Confidence</div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Source Indicators */}
      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-100 shadow-sm">
          <Phone className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">Telecom Data</span>
          <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-green-100 shadow-sm">
          <MapPin className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">Address Data</span>
          <Badge className="bg-green-100 text-green-800">Checked</Badge>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-purple-100 shadow-sm">
          <Database className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Alternative Sources</span>
          <Badge className="bg-purple-100 text-purple-800">Consulted</Badge>
        </div>
      </div>
      
      {/* Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone Details Card */}
        {Object.keys(phoneData).length > 0 && (
          <Card className="border border-blue-100 shadow-sm">
            <CardContent className="pt-6">
              <h4 className="text-md font-medium mb-4 flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                Phone Details
              </h4>
              
              <div className="space-y-4">
                {/* Phone Reachability Score */}
                {phoneData.reachabilityScore && (
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Reachability Score</span>
                      <span className={`text-sm font-bold ${getScoreColor(phoneData.reachabilityScore)}`}>
                        {phoneData.reachabilityScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${phoneData.reachabilityScore >= 80 ? 'bg-green-500' : phoneData.reachabilityScore >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${phoneReachabilityPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Status */}
                  {phoneData.active && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Signal className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Phone Status</span>
                      </div>
                      <div className="flex items-center">
                        {getActiveStatusIcon(phoneData.active)}
                        <span className="ml-2 text-sm font-medium">
                          {phoneData.active === "YES" ? "Active" : phoneData.active === "NO" ? "Inactive" : "Unknown"}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Phone Type */}
                  {phoneData.type && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Phone Type</span>
                      </div>
                      <Badge variant={phoneData.type === "MOBILE" ? "success" : "default"}>
                        {phoneData.type}
                      </Badge>
                    </div>
                  )}
                  
                  {/* SIM Type */}
                  {phoneData.simType && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">SIM Type</span>
                      </div>
                      <Badge variant={phoneData.simType === "POSTPAID" ? "secondary" : "default"}>
                        {phoneData.simType}
                      </Badge>
                    </div>
                  )}
                  
                  {/* UPI Status */}
                  {phoneData.upiStatus && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">UPI Status</span>
                      </div>
                      <Badge className={phoneData.upiStatus === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {phoneData.upiStatus}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Ported Status */}
                  {phoneData.ported !== undefined && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <ArrowDown className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Ported</span>
                      </div>
                      {phoneData.ported ? 
                        <Badge className="bg-amber-100 text-amber-800">Yes</Badge> :
                        <Badge className="bg-green-100 text-green-800">No</Badge>
                      }
                    </div>
                  )}
                  
                  {/* Phone Tenure */}
                  {phoneData.phoneTenure && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Phone Tenure</span>
                      </div>
                      <span className="text-sm font-medium">{phoneData.phoneTenure}</span>
                    </div>
                  )}
                </div>

                {/* Additional Phone Details - Full Width */}
                <div className="space-y-3 mt-2">
                  {/* Name */}
                  {phoneData.name && (
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Registered Name</span>
                      </div>
                      <span className="text-sm font-medium">{phoneData.name}</span>
                    </div>
                  )}
                  
                  {/* Carrier & Circle */}
                  {phoneData.currentCarrierCircle && (
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Signal className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Carrier & Circle</span>
                      </div>
                      <span className="text-sm font-medium">{phoneData.currentCarrierCircle}</span>
                    </div>
                  )}
                  
                  {/* Alternate Phone Number */}
                  {phoneData.alternatePhoneNumber && (
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Alternate Phone</span>
                      </div>
                      <span className="text-sm font-medium">{phoneData.alternatePhoneNumber}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Address Details Card */}
        {Object.keys(addressData).length > 0 && (
          <Card className="border border-green-100 shadow-sm">
            <CardContent className="pt-6">
              <h4 className="text-md font-medium mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-green-600" />
                Address Details
              </h4>
              
              <div className="space-y-4">
                {/* Address Reachability Score */}
                {addressData.reachabilityScore && (
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Reachability Score</span>
                      <span className={`text-sm font-bold ${getScoreColor(addressData.reachabilityScore)}`}>
                        {addressData.reachabilityScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${addressData.reachabilityScore >= 80 ? 'bg-green-500' : addressData.reachabilityScore >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${addressReachabilityPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {/* Address Type & Confidence */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addressData.addressType && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Address Type</span>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {addressData.addressType}
                      </Badge>
                    </div>
                  )}
                  
                  {addressData.confidence && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Confidence</span>
                      </div>
                      {getConfidenceBadge(addressData.confidence)}
                    </div>
                  )}
                </div>
                
                {/* Full Address */}
                {addressData.fullAddress && (
                  <div className="p-4 bg-green-50 rounded-md mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-800">Full Address</span>
                    </div>
                    <p className="text-sm text-green-900 break-words">{addressData.fullAddress}</p>
                  </div>
                )}
                
                {/* Parsed Address Details */}
                {Object.keys(parsedAddress).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-purple-600" />
                      <span className="font-medium text-purple-800">Parsed Address Components</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(parsedAddress).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-center justify-between p-2 bg-purple-50 rounded-md">
                            <span className="text-xs font-medium text-purple-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </span>
                            <span className="text-sm">{value as string}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ReachabilityResults;
