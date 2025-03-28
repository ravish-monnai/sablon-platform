
import React from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VerificationResultItemProps {
  type: "MATCH" | "PARTIAL_MATCH" | "NO_MATCH" | "NOT_SUPPORTED";
  label: string;
}

const VerificationResultItem: React.FC<VerificationResultItemProps> = ({ type, label }) => {
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

  return (
    <div 
      className={`flex items-center justify-between p-2 rounded-md ${
        type === "MATCH" 
          ? "bg-green-50" 
          : type === "PARTIAL_MATCH" 
            ? "bg-amber-50" 
            : type === "NO_MATCH" 
              ? "bg-red-50" 
              : "bg-gray-50"
      }`}
    >
      <div className="flex items-center">
        {getMatchIcon(type)}
        <span className="ml-2 text-sm">{label}</span>
      </div>
      {getMatchBadge(type)}
    </div>
  );
};

export default VerificationResultItem;
