
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export interface CaseActionDialogProps {
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
  caseData?: any;
  caseId?: string;
  actionType?: "approve" | "reject" | "escalate";
}

const CaseActionDialog: React.FC<CaseActionDialogProps> = ({ 
  isOpen, 
  onOpenChange, 
  onClose,
  caseData,
  caseId,
  actionType
}) => {
  const handleOpenChange = (open: boolean) => {
    if (onOpenChange) onOpenChange(open);
    if (!open && onClose) onClose();
  };

  const getActionTitle = () => {
    switch(actionType) {
      case "approve": return "Approve Case";
      case "reject": return "Reject Case";
      case "escalate": return "Escalate Case";
      default: return "Case Actions";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{getActionTitle()}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Case #{caseId || caseData?.id}</h3>
            <p className="text-sm text-muted-foreground">
              {actionType === "approve" && "Confirm that this case passes all checks"}
              {actionType === "reject" && "Confirm that this case should be rejected"}
              {actionType === "escalate" && "Escalate this case for further review"}
              {!actionType && "Select an action for this case"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {!actionType && (
              <>
                <Button variant="outline" className="justify-start">
                  Escalate to Investigation
                </Button>
                <Button variant="outline" className="justify-start">
                  Mark as Reviewed
                </Button>
                <Button variant="outline" className="justify-start">
                  Close Case (No Fraud)
                </Button>
                <Button variant="outline" className="justify-start text-red-500 hover:text-red-500">
                  Report as Fraud
                </Button>
              </>
            )}
            
            {actionType && (
              <div className="space-y-4">
                <textarea 
                  className="w-full h-24 p-2 border border-gray-300 rounded-md"
                  placeholder="Add notes about this decision..."
                />
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={onClose}>Cancel</Button>
                  <Button 
                    className={
                      actionType === "approve" ? "bg-green-600 hover:bg-green-700" : 
                      actionType === "reject" ? "bg-red-600 hover:bg-red-700" : 
                      "bg-amber-600 hover:bg-amber-700"
                    }
                  >
                    Confirm {actionType === "approve" ? "Approval" : actionType === "reject" ? "Rejection" : "Escalation"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseActionDialog;
