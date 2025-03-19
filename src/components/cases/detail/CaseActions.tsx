
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, ArrowUp } from "lucide-react";

interface CaseActionsProps {
  onClose: () => void;
  onAction: (type: "approve" | "reject" | "escalate") => void;
}

const CaseActions: React.FC<CaseActionsProps> = ({ onClose, onAction }) => {
  return (
    <div className="flex justify-end gap-2">
      <Button variant="ghost" onClick={onClose}>
        Close
      </Button>
      <Button 
        variant="outline" 
        className="border-green-500 text-green-600 hover:bg-green-50"
        onClick={() => onAction("approve")}
      >
        <CheckCircle className="h-4 w-4 mr-1" /> Approve
      </Button>
      <Button 
        variant="outline" 
        className="border-red-500 text-red-600 hover:bg-red-50"
        onClick={() => onAction("reject")}
      >
        <AlertTriangle className="h-4 w-4 mr-1" /> Reject
      </Button>
      <Button 
        variant="outline" 
        className="border-amber-500 text-amber-600 hover:bg-amber-50"
        onClick={() => onAction("escalate")}
      >
        <ArrowUp className="h-4 w-4 mr-1" /> Escalate
      </Button>
    </div>
  );
};

export default CaseActions;
