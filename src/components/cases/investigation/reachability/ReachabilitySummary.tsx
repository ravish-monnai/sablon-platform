
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import FeatureTag from "@/components/ui/feature-tag";
import { getConfidenceBadge, getScoreColor } from "./utils/reachabilityHelpers";

interface ReachabilitySummaryProps {
  phoneData: {
    reachabilityScore?: number;
    confidence?: "High" | "Medium" | "Low";
  };
  addressData: {
    reachabilityScore?: number;
  };
}

const ReachabilitySummary: React.FC<ReachabilitySummaryProps> = ({ phoneData, addressData }) => {
  return (
    <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h3 className="text-lg font-medium text-blue-800 flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-600" />
              Reachability Enrichment Summary
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
  );
};

export default ReachabilitySummary;
