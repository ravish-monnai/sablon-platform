
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Check, X, ArrowUp, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ActionType = "approve" | "reject" | "escalate";

interface CaseActionDialogProps {
  caseId: string;
  actionType: ActionType;
  isOpen: boolean;
  onClose: () => void;
}

const actionLabels = {
  approve: {
    title: "Approve Case",
    description: "Confirm case approval and provide any notes",
    button: "Approve",
    icon: Check,
    color: "bg-green-500 hover:bg-green-600"
  },
  reject: {
    title: "Reject Case",
    description: "Confirm case rejection and provide reasoning",
    button: "Reject",
    icon: X,
    color: "bg-red-500 hover:bg-red-600"
  },
  escalate: {
    title: "Escalate Case",
    description: "Escalate this case to a senior reviewer",
    button: "Escalate",
    icon: ArrowUp,
    color: "bg-amber-500 hover:bg-amber-600"
  }
};

const CaseActionDialog = ({ caseId, actionType, isOpen, onClose }: CaseActionDialogProps) => {
  const [notes, setNotes] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { title, description, button, icon: Icon, color } = actionLabels[actionType];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success toast
    toast({
      title: `Case ${actionType}d successfully`,
      description: `Case ${caseId} has been ${actionType}d.`,
    });
    
    setIsSubmitting(false);
    handleClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleClose = () => {
    setNotes("");
    setAttachments([]);
    onClose();
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter any relevant notes or reasoning..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="attachments">Attachments</Label>
            <div className="flex items-center gap-2">
              <Input
                id="attachments"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <Label 
                htmlFor="attachments" 
                className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <Upload className="h-4 w-4" />
                <span>Upload files</span>
              </Label>
              <span className="text-sm text-muted-foreground">
                {attachments.length} file{attachments.length !== 1 ? "s" : ""} selected
              </span>
            </div>
            
            {attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center gap-2 text-sm truncate">
                      <span className="font-medium truncate">{file.name}</span>
                      <span className="text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeAttachment(index)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter className="flex space-x-2 sm:justify-between">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            className={`${color} text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Icon className="mr-2 h-4 w-4" />
                {button}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CaseActionDialog;
