
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCategoryProps {
  title: string;
  children: React.ReactNode;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="space-y-3 mb-6">
      <div 
        className="flex items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <ChevronDown 
          className={cn("ml-2 h-5 w-5 transition-transform", 
            isExpanded ? "transform rotate-180" : "")} 
        />
      </div>
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default FeatureCategory;
