
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Clock, Check, X, ArrowUp, MessageSquare 
} from "lucide-react";

interface CaseHeaderProps {
  caseData: any;
  openActionDialog: (actionType: "approve" | "reject" | "escalate") => void;
  setIsChatOpen: (isOpen: boolean) => void;
}

const CaseHeader = ({ caseData, openActionDialog, setIsChatOpen }: CaseHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" asChild>
          <Link to="/cases">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Link>
        </Button>
        <h1 className="text-xl font-bold">{caseData.id}</h1>
        <Badge variant={caseData.status === "Pending Review" ? "outline" : 
                      caseData.status === "Approved" ? "secondary" : "destructive"}>
          {caseData.status === "Pending Review" && <Clock className="h-3 w-3 mr-1" />}
          {caseData.status === "Approved" && <Check className="h-3 w-3 mr-1" />}
          {caseData.status === "Rejected" && <X className="h-3 w-3 mr-1" />}
          {caseData.status}
        </Badge>
      </div>
      
      <div className="flex gap-2">
        {caseData.status === "Pending Review" && (
          <>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-50"
              onClick={() => openActionDialog("approve")}
            >
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => openActionDialog("reject")}
            >
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-amber-500 text-amber-600 hover:bg-amber-50"
              onClick={() => openActionDialog("escalate")}
            >
              <ArrowUp className="h-4 w-4 mr-1" /> Escalate
            </Button>
          </>
        )}
        <Button 
          size="sm" 
          variant="default" 
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90" 
          onClick={() => setIsChatOpen(true)}
        >
          <MessageSquare className="h-4 w-4 mr-1" /> Chat with AI
        </Button>
      </div>
    </div>
  );
};

export default CaseHeader;
