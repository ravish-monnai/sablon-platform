
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Database } from "lucide-react";
import { getConfidenceBadge, getScoreColor } from "./utils/reachabilityHelpers";

interface AddressDetailsProps {
  addressData: {
    reachabilityScore?: number;
    addressType?: string;
    confidence?: string;
    fullAddress?: string;
    parsedAddress?: {
      doorNumber?: string;
      addressLine?: string;
      streetName?: string;
      landmark?: string;
      city?: string;
      state?: string;
      postalCode?: string;
      [key: string]: string | undefined;
    };
  };
}

const AddressDetailsCard: React.FC<AddressDetailsProps> = ({ addressData }) => {
  if (Object.keys(addressData).length === 0) {
    return null;
  }
  
  const parsedAddress = addressData.parsedAddress || {};
  
  // Calculate reachability score percentages for visualization
  const addressReachabilityPercentage = addressData.reachabilityScore ? Math.min(100, Math.max(0, addressData.reachabilityScore)) : 0;
  
  return (
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
                  <Database className="h-4 w-4 text-gray-500" />
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
                      <span className="text-sm">{value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressDetailsCard;
