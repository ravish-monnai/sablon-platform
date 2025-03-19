
import React from "react";
import { JourneyStep } from "./types";

interface BranchNodeProps {
  branch: Omit<JourneyStep, "status" | "branches">;
  branchColor: string;
}

const BranchNode: React.FC<BranchNodeProps> = ({ branch, branchColor }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Vertical connector to branch */}
      <div className="w-0.5 h-6 bg-gray-300 mb-2"></div>
      
      {/* Branch circle */}
      <div 
        className="rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-md border-2 border-white"
        style={{ backgroundColor: branchColor }}
      >
        <div className="text-white">
          {React.cloneElement(branch.icon as React.ReactElement, { className: "h-6 w-6" })}
        </div>
      </div>
      
      {/* Branch info */}
      <div className="w-32 text-center">
        <h4 className="text-sm font-semibold">{branch.title}</h4>
        <p className="text-xs text-muted-foreground h-8 overflow-hidden">{branch.description}</p>
      </div>
    </div>
  );
};

export default BranchNode;
