
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, AlertCircle, Phone, Mail, Globe, BarChart2, Shield, UserCheck, PhoneMissed } from "lucide-react";
import RiskDashboard from "./risk-analysis/RiskDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import CustomerCheckTab from "./investigation/CustomerCheckTab";
import IdentityVerificationTab from "./investigation/IdentityVerificationTab";
import ReachabilityTab from "./investigation/ReachabilityTab";

const ManualInvestigationView = () => {
  const [query, setQuery] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState<string>("");
  const [investigationType, setInvestigationType] = useState<string>("risk-analysis");
  
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

  const handleStartInvestigation = (type: string) => {
    // Set a predefined query based on the investigation type
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
  
  return (
    <Card className="bg-white shadow-sm border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">Manual Investigation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="risk-analysis" onValueChange={setInvestigationType}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="risk-analysis" className="flex items-center gap-1">
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Risk Analysis</span>
              <span className="sm:hidden">Risk</span>
            </TabsTrigger>
            <TabsTrigger value="identity-verification" className="flex items-center gap-1">
              <UserCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Identity Verification</span>
              <span className="sm:hidden">Identity</span>
            </TabsTrigger>
            <TabsTrigger value="reachability" className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Reachability Check</span>
              <span className="sm:hidden">Reachability</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="risk-analysis">
            <CustomerCheckTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="identity-verification">
            <IdentityVerificationTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
          
          <TabsContent value="reachability">
            <ReachabilityTab onStartInvestigation={handleStartInvestigation} />
          </TabsContent>
        </Tabs>

        <form onSubmit={handleSearch} className="space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="risk-query" className="text-sm font-medium">
              Enter your investigation query
            </label>
            <div className="relative">
              <Input
                id="risk-query"
                placeholder={
                  investigationType === "risk-analysis" 
                    ? "Check the risk score of phone number +919512657393 and email ravishp@gmail.com" 
                    : investigationType === "identity-verification"
                    ? "Verify identity of Sarah Johnson with National ID 876543210 against government sources"
                    : "Verify reachability of user at phone +447700900123 and find alternative contact methods"
                }
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
              <span>
                {investigationType === "risk-analysis" 
                  ? "Example: \"Check risk score of phone +1234567890 and email user@example.com\"" 
                  : investigationType === "identity-verification"
                  ? "Example: \"Verify identity of John Smith with government, mobile operator and credit sources\""
                  : "Example: \"Find alternate contact information for user with email user@example.com\""}
              </span>
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
