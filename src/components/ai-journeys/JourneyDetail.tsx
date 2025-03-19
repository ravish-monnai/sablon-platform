
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, EyeIcon } from "lucide-react";
import IndianBankStatementJourney from "./IndianBankStatementJourney";

interface JourneyDetailProps {
  selectedJourney: string;
  onBackToList: () => void;
  isViewOnly?: boolean;
}

const JourneyDetail: React.FC<JourneyDetailProps> = ({ 
  selectedJourney, 
  onBackToList,
  isViewOnly = false
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="ghost" 
          className="pl-0" 
          onClick={onBackToList}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Journeys
        </Button>
        
        {isViewOnly && (
          <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
            <EyeIcon className="h-4 w-4" />
            View Only
          </Badge>
        )}
      </div>
      
      {(selectedJourney === "bank-statement-analyzer" || selectedJourney === "india-bank-statement-analyzer") && 
        <IndianBankStatementJourney isViewOnly={isViewOnly} />
      }
      {selectedJourney === "onboarding-fraud-detection" && (
        <div className="text-center p-6">
          <p>Onboarding Fraud Detection journey details</p>
        </div>
      )}
      {!["bank-statement-analyzer", "india-bank-statement-analyzer", "onboarding-fraud-detection"].includes(selectedJourney) && (
        <div className="text-center p-6">
          <p>Journey details for {selectedJourney} are not available yet</p>
        </div>
      )}
    </div>
  );
};

export default JourneyDetail;
