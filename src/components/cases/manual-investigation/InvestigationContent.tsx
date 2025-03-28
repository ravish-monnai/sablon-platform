
import React from "react";
import SearchForm from "../investigation/SearchForm";
import AnalysisAnimation from "../investigation/AnalysisAnimation";
import InvestigationResults from "./InvestigationResults";
import { useInvestigation } from "./InvestigationProvider";

const InvestigationContent: React.FC = () => {
  const { 
    query, 
    setQuery, 
    handleSearch, 
    isAnalyzing, 
    investigationType,
    currentAnalysisStep
  } = useInvestigation();

  return (
    <div className="space-y-6">
      <SearchForm 
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        isAnalyzing={isAnalyzing}
        investigationType={investigationType}
      />
      
      <AnalysisAnimation 
        isAnalyzing={isAnalyzing} 
        currentAnalysisStep={currentAnalysisStep} 
      />
      
      <InvestigationResults />
    </div>
  );
};

export default InvestigationContent;
