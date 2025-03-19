
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { CaseItem } from "./types";

interface JourneyStepsContentProps {
  selectedCase: CaseItem;
}

const JourneyStepsContent: React.FC<JourneyStepsContentProps> = ({ selectedCase }) => {
  return (
    <div className="space-y-4">
      <div className="relative pl-6 pb-6 border-l border-gray-200">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-green-600" />
        </div>
        <h4 className="text-sm font-medium mb-1">Bank Statement Upload</h4>
        <p className="text-xs text-gray-600">
          Statement was successfully uploaded and validated. Contains 3 months of transaction data.
        </p>
        <Badge className="mt-2" variant="outline">Completed on {selectedCase.date}</Badge>
      </div>
      
      <div className="relative pl-6 pb-6 border-l border-gray-200">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-green-600" />
        </div>
        <h4 className="text-sm font-medium mb-1">Analysis & Feature Extraction</h4>
        <p className="text-xs text-gray-600">
          Extracted 42 features including income patterns, transaction frequency, and recurring payments.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-gray-50 p-2 rounded text-xs">
            <span className="text-muted-foreground">Average Balance:</span> ₹2,45,000
          </div>
          <div className="bg-gray-50 p-2 rounded text-xs">
            <span className="text-muted-foreground">Monthly Income:</span> ₹85,000
          </div>
        </div>
      </div>
      
      <div className="relative pl-6 pb-6 border-l border-gray-200">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-green-600" />
        </div>
        <h4 className="text-sm font-medium mb-1">Risk Assessment</h4>
        <p className="text-xs text-gray-600">
          {selectedCase.status === "success" 
            ? "All risk indicators within acceptable thresholds." 
            : "Several risk indicators exceeded thresholds."}
        </p>
        <Badge className={`mt-2 ${selectedCase.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {selectedCase.risk}
        </Badge>
      </div>
      
      <div className="relative pl-6">
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-3 h-3 text-green-600" />
        </div>
        <h4 className="text-sm font-medium mb-1">Case Creation</h4>
        <p className="text-xs text-gray-600">
          {selectedCase.status === "success" 
            ? "Case created and sent to underwriting with approval recommendation." 
            : "Case created with rejection recommendation due to high risk indicators."}
        </p>
        <div className="bg-gray-50 p-3 rounded-md mt-2 text-xs">
          <p className="font-medium mb-1">Final Decision:</p>
          {selectedCase.status === "success" ? (
            <p className="text-green-600 flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" /> Approved for underwriting
            </p>
          ) : (
            <p className="text-red-600 flex items-center">
              <AlertTriangle className="w-3 h-3 mr-1" /> Rejected due to high risk
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyStepsContent;
