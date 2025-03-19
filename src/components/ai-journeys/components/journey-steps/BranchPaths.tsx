
import React from "react";
import { BranchNode } from "./BranchNode";
import { JourneyStep } from "./types";

interface BranchPathsProps {
  branches: Omit<JourneyStep, "status" | "branches">[];
  getBranchColor: (index: number) => string;
}

const BranchPaths: React.FC<BranchPathsProps> = ({ branches, getBranchColor }) => {
  return (
    <div className="absolute top-16 pt-6 w-full">
      <div className="relative flex justify-center">
        {/* Vertical connector */}
        <div className="absolute w-0.5 h-8 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
        
        {/* Branch connector */}
        <div className="absolute top-8 w-full h-0.5 bg-gray-300"></div>
        
        {/* Branch nodes */}
        <div className="absolute top-8 flex justify-between w-full mt-6">
          {branches.map((branch, branchIndex) => (
            <BranchNode 
              key={branch.id}
              branch={branch}
              branchColor={getBranchColor(branchIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchPaths;
