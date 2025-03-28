
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle } from "lucide-react";
import RiskDashboard from "./risk-analysis/RiskDashboard";

const ManualInvestigationView = () => {
  const [query, setQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSearch} className="space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="risk-query" className="text-sm font-medium">
              Enter query to analyze risk
            </label>
            <div className="relative">
              <Input
                id="risk-query"
                placeholder="Check the risk score of phone number +919512657393 and email ravishp@gmail.com"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
                disabled={isAnalyzing || !query.trim()}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            <div className="flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>Example: "Check phone number +123456789 and email user@example.com for fraud risk"</span>
            </div>
          </div>
        </form>
        
        {isAnalyzing && (
          <div className="flex items-center justify-center py-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-[#9b87f5]"></div>
              <p className="text-sm text-muted-foreground">Analyzing risk factors...</p>
            </div>
          </div>
        )}
        
        {showResults && !isAnalyzing && (
          <RiskDashboard 
            customerData={{
              name: "Ravish Patel",
              email: "ravishp@gmail.com",
              phone: "+919512657393",
              location: "Gujarat"
            }}
            riskScore={260}
            riskLevel="LOW RISK"
            recommendation="APPROVE"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
