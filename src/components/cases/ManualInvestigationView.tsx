import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle, Phone, Mail, Globe, BarChart2, Shield } from "lucide-react";
import RiskDashboard from "./risk-analysis/RiskDashboard";
import { Skeleton } from "@/components/ui/skeleton";

const ManualInvestigationView = () => {
  const [query, setQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState<string>("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    runAnalysisAnimation().then(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    });
  };
  
  const runAnalysisAnimation = async () => {
    const steps = [
      { message: "Querying telecom data sources...", icon: Phone, duration: 800 },
      { message: "Analyzing email information...", icon: Mail, duration: 800 },
      { message: "Gathering digital footprint data...", icon: Globe, duration: 800 },
      { message: "Checking identity data sources...", icon: Shield, duration: 800 },
      { message: "Running risk assessment algorithms...", icon: BarChart2, duration: 800 }
    ];
    
    for (const step of steps) {
      setCurrentAnalysisStep(step.message);
      await new Promise(resolve => setTimeout(resolve, step.duration));
    }
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
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-4 p-4 border border-blue-100 bg-blue-50 rounded-md animate-pulse">
              <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                {currentAnalysisStep.includes("telecom") && <Phone className="h-6 w-6 text-blue-600" />}
                {currentAnalysisStep.includes("email") && <Mail className="h-6 w-6 text-blue-600" />}
                {currentAnalysisStep.includes("digital") && <Globe className="h-6 w-6 text-blue-600" />}
                {currentAnalysisStep.includes("identity") && <Shield className="h-6 w-6 text-blue-600" />}
                {currentAnalysisStep.includes("risk") && <BarChart2 className="h-6 w-6 text-blue-600" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-800">{currentAnalysisStep}</p>
                <div className="w-full h-2 bg-blue-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1">
                <Skeleton className="h-72 w-full rounded-md" />
              </div>
              <div className="lg:col-span-2">
                <Skeleton className="h-24 w-full rounded-md mb-4" />
                <Skeleton className="h-44 w-full rounded-md" />
              </div>
            </div>
          </div>
        )}
        
        {showResults && !isAnalyzing && (
          <RiskDashboard 
            customerData={{
              name: "Ravish Patel",
              email: "ravishp@gmail.com",
              phone: "+919512657393",
              location: "Gujarat, India"
            }}
            riskScore={260}
            riskLevel="MEDIUM RISK"
            recommendation="ADDITIONAL VERIFICATION"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ManualInvestigationView;
