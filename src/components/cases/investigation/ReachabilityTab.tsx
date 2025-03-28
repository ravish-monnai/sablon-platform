
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Globe, Mail } from "lucide-react";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through phone, email, and address validation,
        and enrich with alternative contact methods to ensure communication channels.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="py-6 h-auto flex justify-between items-center border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-all"
          onClick={() => onStartInvestigation("contact-validation")}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Phone & Email Validation</h3>
              <p className="text-sm text-muted-foreground">Verify reachability of contact details</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Button>
        
        <Button 
          variant="outline" 
          className="py-6 h-auto flex justify-between items-center border border-green-100 hover:bg-green-50 hover:border-green-200 transition-all"
          onClick={() => onStartInvestigation("address-verification")}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <Globe className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Address Verification</h3>
              <p className="text-sm text-muted-foreground">Verify and parse customer addresses</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default ReachabilityTab;
