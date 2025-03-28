
import React, { useState, createContext, useContext } from "react";

interface HistoryItem {
  query: string;
  timestamp: Date;
  type: string;
}

interface InvestigationContextType {
  query: string;
  setQuery: (query: string) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  showResults: boolean;
  setShowResults: (showResults: boolean) => void;
  currentAnalysisStep: string;
  setCurrentAnalysisStep: (currentAnalysisStep: string) => void;
  investigationType: string;
  setInvestigationType: (investigationType: string) => void;
  queryHistory: HistoryItem[];
  handleSearch: (e: React.FormEvent) => void;
  handleStartInvestigation: (type: string) => void;
}

const InvestigationContext = createContext<InvestigationContextType | undefined>(undefined);

export const useInvestigation = () => {
  const context = useContext(InvestigationContext);
  if (!context) {
    throw new Error("useInvestigation must be used within an InvestigationProvider");
  }
  return context;
};

export const InvestigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState<string>("");
  const [investigationType, setInvestigationType] = useState<string>("risk-analysis");
  const [queryHistory, setQueryHistory] = useState<HistoryItem[]>([
    // Pre-populate with some sample history items for each investigation type
    {
      query: "Check risk score of phone +1234567890 and email user@example.com",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: "risk-analysis"
    },
    {
      query: "Verify risk level for customer James Wilson with phone +19876543210",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      type: "risk-analysis"
    },
    {
      query: "Verify identity of Alex Johnson with National ID 123456789",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      type: "identity-verification"
    },
    {
      query: "Cross-check identity information for Lisa Chen with government sources",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      type: "identity-verification"
    },
    {
      query: "Verify reachability of phone +447123456789 and email reach@example.com",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      type: "reachability"
    },
    {
      query: "Check address at 456 Oak Avenue and find alternative contact methods",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      type: "reachability"
    }
  ]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Add the current query to history
    const newHistoryItem: HistoryItem = {
      query: query,
      timestamp: new Date(),
      type: investigationType
    };
    
    setQueryHistory(prevHistory => [newHistoryItem, ...prevHistory]);
    
    import("../investigation/utils/analysisSteps").then(module => {
      module.runAnalysisAnimation(setCurrentAnalysisStep).then(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      });
    });
  };

  const handleStartInvestigation = (type: string) => {
    switch (type) {
      case "basic-customer-check":
        setQuery("Check risk score of phone number +919512657393 and email ravishp@gmail.com");
        break;
      case "advanced-customer-check":
        setQuery("Assess risk level of customer John Smith with phone +14155552671 and email johnsmith@example.com");
        break;
      case "document-verification":
        setQuery("Verify identity of Sarah Johnson with National ID 876543210 and DOB 04/15/1985");
        break;
      case "identity-cross-check":
        setQuery("Cross-check identity information for Michael Chen with government, telecom, and credit bureau sources");
        break;
      case "contact-validation":
        setQuery("Verify reachability of user with phone +447700900123 and email user@example.com");
        break;
      case "address-verification":
        setQuery("Verify address at 123 Main Street, London and find alternative contact methods");
        break;
      default:
        setQuery("");
    }
  };

  const value = {
    query,
    setQuery,
    isAnalyzing,
    setIsAnalyzing,
    showResults,
    setShowResults,
    currentAnalysisStep,
    setCurrentAnalysisStep,
    investigationType,
    setInvestigationType,
    queryHistory,
    handleSearch,
    handleStartInvestigation
  };

  return (
    <InvestigationContext.Provider value={value}>
      {children}
    </InvestigationContext.Provider>
  );
};
