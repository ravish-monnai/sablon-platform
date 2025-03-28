
import React from "react";
import { Phone, MapPin, AtSign, AlertCircle } from "lucide-react";
import InvestigationCard from "./InvestigationCard";

interface ReachabilityTabProps {
  onStartInvestigation: (type: string) => void;
}

const ReachabilityTab: React.FC<ReachabilityTabProps> = ({ onStartInvestigation }) => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground mb-6">
        Verify customer reachability through contact validation and address verification
        to ensure communication channels.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InvestigationCard 
          title="Phone Verification" 
          description="Verify phone numbers for activity, carrier information, and SIM details" 
          icon={Phone}
          onStart={() => onStartInvestigation('reachability')}
        />
        
        <InvestigationCard 
          title="Address Validation" 
          description="Verify physical addresses against postal and residential databases" 
          icon={MapPin}
          onStart={() => onStartInvestigation('reachability')}
        />
        
        <InvestigationCard 
          title="Email Verification" 
          description="Check email validity, activity status, and deliverability" 
          icon={AtSign}
          onStart={() => onStartInvestigation('reachability')}
        />
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 border border-purple-100 rounded-md">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-purple-800">Best Practices</h4>
            <p className="text-sm text-purple-700 mt-1">
              For effective reachability enrichment, provide either a phone number, email,
              or physical address. The system will verify the provided contact points and
              suggest alternative contact methods based on connected data sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachabilityTab;
