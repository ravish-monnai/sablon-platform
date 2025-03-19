
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import IndianBankStatementJourney from "./IndianBankStatementJourney";

interface JourneyDetailProps {
  selectedJourney: string;
  onBackToList: () => void;
}

const JourneyDetail: React.FC<JourneyDetailProps> = ({ selectedJourney, onBackToList }) => {
  return (
    <div>
      <Button 
        variant="ghost" 
        className="mb-4 pl-0" 
        onClick={onBackToList}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Journeys
      </Button>
      
      {(selectedJourney === "bank-statement-analyzer" || selectedJourney === "india-bank-statement-analyzer") && 
        <IndianBankStatementJourney />
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
