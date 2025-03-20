
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CasesHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Cases</h1>
      <Button>
        <Plus className="mr-2 h-4 w-4" /> Create New Case
      </Button>
    </div>
  );
};

export default CasesHeader;
