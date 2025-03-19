
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BankStatementJourney from "./BankStatementJourney";

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
      
      {selectedJourney === "bank-statement-analyzer" && <BankStatementJourney />}
      {selectedJourney !== "bank-statement-analyzer" && (
        <div className="text-center p-6">
          <p>Journey details for {selectedJourney} are not available yet</p>
        </div>
      )}
    </div>
  );
};

export default JourneyDetail;
