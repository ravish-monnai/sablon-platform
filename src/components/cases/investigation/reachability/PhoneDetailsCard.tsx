
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Signal, Wifi, Info, ArrowDown, Clock, Database } from "lucide-react";
import { getActiveStatusIcon, getScoreColor } from "./utils/reachabilityHelpers";

interface PhoneDetailsProps {
  phoneData: {
    reachabilityScore?: number;
    active?: "YES" | "NO" | "UNKNOWN";
    type?: string;
    simType?: "POSTPAID" | "PREPAID";
    upiStatus?: string;
    ported?: boolean;
    phoneTenure?: string;
    name?: string;
    currentCarrierCircle?: string;
    alternatePhoneNumber?: string;
  };
}

const PhoneDetailsCard: React.FC<PhoneDetailsProps> = ({ phoneData }) => {
  if (Object.keys(phoneData).length === 0) {
    return null;
  }
  
  // Calculate reachability score percentages for visualization
  const phoneReachabilityPercentage = phoneData.reachabilityScore ? Math.min(100, Math.max(0, phoneData.reachabilityScore)) : 0;
  
  return (
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
  );
};

export default PhoneDetailsCard;
