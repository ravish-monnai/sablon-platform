
import React from "react";
import { Phone, Mail, Globe, Shield, BarChart2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalysisAnimationProps {
  isAnalyzing: boolean;
  currentAnalysisStep: string;
}

const AnalysisAnimation: React.FC<AnalysisAnimationProps> = ({ 
  isAnalyzing, 
  currentAnalysisStep 
}) => {
  if (!isAnalyzing) return null;

  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center space-x-4 p-4 border border-blue-100 bg-blue-50 rounded-md animate-pulse">
        <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
          {currentAnalysisStep.includes("telecom") && <Phone className="h-6 w-6 text-blue-600" />}
          {currentAnalysisStep.includes("email") && <Mail className="h-6 w-6 text-blue-600" />}
          {currentAnalysisStep.includes("digital") && <Globe className="h-6 w-6 text-blue-600" />}
          {currentAnalysisStep.includes("identity") && <Shield className="h-6 w-6 text-blue-600" />}
          {currentAnalysisStep.includes("risk") && <BarChart2 className="h-6 w-6 text-blue-600" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-800">{currentAnalysisStep}</p>
          <div className="w-full h-2 bg-blue-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <Skeleton className="h-72 w-full rounded-md" />
        </div>
        <div className="lg:col-span-2">
          <Skeleton className="h-24 w-full rounded-md mb-4" />
          <Skeleton className="h-44 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default AnalysisAnimation;
