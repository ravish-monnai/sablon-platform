
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export interface CaseActionDialogProps {
  isOpen: boolean; // Changed from 'open' to 'isOpen' to match what the component expects
  onOpenChange: (open: boolean) => void;
  caseData: any;
}

const CaseActionDialog: React.FC<CaseActionDialogProps> = ({ 
  isOpen, 
  onOpenChange, 
  caseData 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Case Actions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Case #{caseData?.id}</h3>
            <p className="text-sm text-muted-foreground">
              Select an action for this case
            </p>
          </div>
          <div className="flex flex-col gap-2">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseActionDialog;
