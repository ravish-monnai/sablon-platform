
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck } from "lucide-react";
import FeatureTag from "@/components/ui/feature-tag";

interface VerificationSummaryProps {
  matchPercentage: number;
  matches: number;
  partialMatches: number;
  noMatches: number;
}

const VerificationSummary: React.FC<VerificationSummaryProps> = ({ 
  matchPercentage, 
  matches, 
  partialMatches, 
  noMatches 
}) => {
  return (
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
  );
};

export default VerificationSummary;
